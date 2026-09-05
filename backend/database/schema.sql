CREATE DATABASE IF NOT EXISTS kaustav_portfolio;

USE kaustav_portfolio;

-- Contact form messages
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(255) NOT NULL,

    message TEXT NOT NULL,

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
);


-- Portfolio projects
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    description TEXT NOT NULL,

    technologies JSON,

    github_url VARCHAR(500),

    demo_url VARCHAR(500),

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
);


-- Example project metadata
INSERT INTO projects
(
    title,
    description,
    technologies,
    github_url,
    demo_url
)
VALUES
(
    'AI Traffic Violation & ANPR System',

    'Computer vision system for traffic violation detection and automatic number plate recognition.',

    '["Python", "OpenCV", "Computer Vision", "ANPR", "OCR"]',

    '#',

    '#'
),

(
    'Airport Management System',

    'Python and MySQL based airport management application.',

    '["Python", "MySQL", "SQL", "Database Management"]',

    '#',

    '#'
),

(
    'Heat Map Safe',

    'Heat-map-based safety analysis and visualization project.',

    '["Safety Analysis", "Data Visualization"]',

    '#',

    '#'
);