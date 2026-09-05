import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function sendContactNotification({
  name,
  email,
  message
}) {

  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: process.env.NOTIFICATION_EMAIL,

    subject: `New Portfolio Message from ${name}`,

    text: `
New portfolio contact request

Name:
${name}

Email:
${email}

Message:
${message}
    `,

    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Portfolio Contact</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message}
        </p>
      </div>
    `
  });
}