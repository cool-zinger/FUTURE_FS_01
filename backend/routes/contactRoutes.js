import express from "express";
import pool from "../config/db.js";
import transporter from "../config/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    // Save message to MySQL
    const [result] = await pool.execute(
      `
      INSERT INTO contact_messages (name, email, message)
      VALUES (?, ?, ?)
      `,
      [cleanName, cleanEmail, cleanMessage]
    );

    // Send Gmail notification
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_TO,

      replyTo: cleanEmail,

      subject: `New Portfolio Message from ${cleanName}`,

      text: `
You received a new message from your portfolio website.

Name: ${cleanName}

Email: ${cleanEmail}

Message:
${cleanMessage}

Database Message ID: ${result.insertId}
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message saved and email sent successfully.",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to process contact message.",
    });
  }
});

export default router;