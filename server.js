const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON in request bodies
app.use(express.urlencoded({ extended: true })); // For parsing form data in URL-encoded format
app.use(helmet()); // Add security headers

// Ensure 'uploads' directory exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// SQLite setup
const dbPath = path.join(__dirname, "Cars.db");
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
        process.exit(1); // Exit the process if the database connection fails
    } else {
        console.log("Connected to SQLite database at:", dbPath);

        // Ensure the table exists
        db.run(
            `CREATE TABLE IF NOT EXISTS cars (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                title TEXT,
                price TEXT,
                mileage TEXT,
                location TEXT,
                ownerName TEXT,
                email TEXT,
                contactNo TEXT
            )`,
            (err) => {
                if (err) {
                    console.error("Error creating table:", err.message);
                } else {
                    console.log("Table 'cars' is ready.");
                }
            }
        );
        db.run(
            `CREATE TABLE IF NOT EXISTS enquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                contact TEXT NOT NULL,
                vehicle TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`,
            (err) => {
                if (err) {
                    console.error("Error creating 'enquiries' table:", err.message);
                } else {
                    console.log("Table 'enquiries' is ready.");
                }
            }
        );
    }
});

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const isValidExt = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const isValidMime = allowedTypes.test(file.mimetype);
    if (isValidExt && isValidMime) {
        cb(null, true);
    } else {
        cb(new Error("Only image files (jpeg, jpg, png, gif) are allowed"));
    }
};
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Cars API!");
});

// Add car route
app.post("/add-car", upload.single("image"), (req, res) => {
    const { title, price, mileage, location, ownerName, email, contactNo } = req.body;

    // Check if all fields are provided
    if (!req.file || !title || !price || !mileage || !location || !ownerName || !email || !contactNo) {
        return res.status(400).send({ error: "All fields are required, including an image" });
    }

    const image = `/uploads/${req.file.filename}`;
    const sql = `INSERT INTO cars (image, title, price, mileage, location, ownerName, email, contactNo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.run(sql, [image, title, price, mileage, location, ownerName, email, contactNo], function (err) {
        if (err) {
            console.error("Database Error:", err.message);
            return res.status(500).send({ error: "Failed to add car" });
        }
        res.send({ success: true, imageUrl: image, id: this.lastID });
    });
});
// Add enquiry route
app.post("/add-enquiry", (req, res) => {
    const { name, contact, vehicle } = req.body;

    // Check if all fields are provided
    if (!name || !contact || !vehicle) {
        return res.status(400).send({ error: "All fields (name, contact, vehicle) are required" });
    }

    const sql = `INSERT INTO enquiries (name, contact, vehicle) VALUES (?, ?, ?)`;
    db.run(sql, [name, contact, vehicle], function (err) {
        if (err) {
            console.error("Database Error:", err.message);
            return res.status(500).send({ error: "Failed to add enquiry" });
        }
        res.send({ success: true, id: this.lastID });
    });
});


// Fetch all cars route
app.get("/cars", (req, res) => {
    const sql = `SELECT * FROM cars`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error("Database Error:", err.message);
            return res.status(500).send({ error: "Failed to retrieve cars" });
        }
        res.send(rows);
    });
});
// Fetch all enquiries route
app.get("/enquiries", (req, res) => {
    const sql = `SELECT * FROM enquiries`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error("Database Error:", err.message);
            return res.status(500).send({ error: "Failed to retrieve enquiries" });
        }
        res.send(rows);
    });
});



// Serve uploaded images
app.use("/uploads", express.static(uploadsDir, { dotfiles: "ignore" }));

// Catch-all route for undefined paths
app.use((req, res) => {
    res.status(404).send("Endpoint not found");
});

// Graceful shutdown
process.on("SIGINT", () => {
    console.log("Shutting down server...");
    db.close((err) => {
        if (err) {
            console.error("Error closing database:", err.message);
        } else {
            console.log("Database connection closed.");
        }
        process.exit(0);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
