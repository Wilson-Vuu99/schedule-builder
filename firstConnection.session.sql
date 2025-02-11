-- Users Table: Stores user login information
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,  -- Store hashed passwords, not plaintext
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Schedules Table: Represents high-level schedules (e.g., weekly or monthly)
CREATE TABLE Schedules (
    schedule_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Timetable Table: Details specific time slots (e.g., 9-5 activities) within a schedule
CREATE TABLE Timetable (
    timetable_id SERIAL PRIMARY KEY,
    schedule_id INT REFERENCES Schedules(schedule_id) ON DELETE CASCADE,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    activity VARCHAR(255) NOT NULL
);
