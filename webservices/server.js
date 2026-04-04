const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'es-company-secret-key-2024',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// Database
const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'));

// Initialize database
db.serialize(() => {
    // Visitors table
    db.run(`CREATE TABLE IF NOT EXISTS visitors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ip TEXT,
        page TEXT,
        user_agent TEXT,
        visited_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    
    // Leads table
    db.run(`CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        phone TEXT,
        message TEXT,
        status TEXT DEFAULT 'new',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    
    // Newsletter subscribers
    db.run(`CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    
    // Settings table
    db.run(`CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT
    )`);
    
    // Portfolio projects
    db.run(`CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        image TEXT,
        link TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    
    // Admin user
    db.run(`CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
    )`);
    
    // Check if admin exists
    db.get("SELECT * FROM admins WHERE email = ?", ['Emmanuelselicour.2002@gmail.com'], async (err, row) => {
        if (!row) {
            const hashedPassword = await bcrypt.hash('04004***', 10);
            db.run("INSERT INTO admins (email, password) VALUES (?, ?)", 
                ['Emmanuelselicour.2002@gmail.com', hashedPassword]);
        }
    });
    
    // Set default countdown (10 days from now)
    db.get("SELECT * FROM settings WHERE key = 'countdown_end'", (err, row) => {
        if (!row) {
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 10);
            db.run("INSERT INTO settings (key, value) VALUES (?, ?)", 
                ['countdown_end', endDate.toISOString()]);
        }
    });
});

// Track visitors middleware
app.use((req, res, next) => {
    if (req.path !== '/admin' && req.path !== '/admin-dashboard' && !req.path.includes('/api/')) {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        db.run("INSERT INTO visitors (ip, page, user_agent) VALUES (?, ?, ?)", 
            [ip, req.path, req.headers['user-agent']]);
    }
    next();
});

// Rate limiting for forms
const formLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: 'Trop de requêtes, veuillez réessayer plus tard' }
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'portfolio.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/admin', (req, res) => {
    if (req.session.isAdmin) {
        res.redirect('/admin-dashboard');
    } else {
        res.sendFile(path.join(__dirname, 'views', 'admin-login.html'));
    }
});

app.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;
    db.get("SELECT * FROM admins WHERE email = ?", [email], async (err, admin) => {
        if (admin && await bcrypt.compare(password, admin.password)) {
            req.session.isAdmin = true;
            req.session.adminEmail = email;
            res.json({ success: true });
        } else {
            res.json({ success: false, error: 'Email ou mot de passe incorrect' });
        }
    });
});

app.get('/admin-dashboard', (req, res) => {
    if (!req.session.isAdmin) {
        return res.redirect('/admin');
    }
    res.sendFile(path.join(__dirname, 'views', 'admin-dashboard.html'));
});

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/admin');
});

// API Routes
app.get('/api/stats', (req, res) => {
    if (!req.session.isAdmin) return res.status(401).json({ error: 'Unauthorized' });
    
    db.get("SELECT COUNT(*) as total FROM visitors", (err, visitors) => {
        db.get("SELECT COUNT(*) as total FROM leads WHERE status = 'new'", (err, newLeads) => {
            db.get("SELECT COUNT(*) as total FROM subscribers", (err, subscribers) => {
                db.all("SELECT DATE(visited_at) as date, COUNT(*) as count FROM visitors GROUP BY DATE(visited_at) ORDER BY date DESC LIMIT 7", (err, chartData) => {
                    res.json({
                        totalVisitors: visitors?.total || 0,
                        newLeads: newLeads?.total || 0,
                        subscribers: subscribers?.total || 0,
                        chartData: chartData || []
                    });
                });
            });
        });
    });
});

app.get('/api/leads', (req, res) => {
    if (!req.session.isAdmin) return res.status(401).json({ error: 'Unauthorized' });
    db.all("SELECT * FROM leads ORDER BY created_at DESC", (err, rows) => {
        res.json(rows || []);
    });
});

app.post('/api/lead/update', (req, res) => {
    if (!req.session.isAdmin) return res.status(401).json({ error: 'Unauthorized' });
    const { id, status } = req.body;
    db.run("UPDATE leads SET status = ? WHERE id = ?", [status, id]);
    res.json({ success: true });
});

app.get('/api/subscribers', (req, res) => {
    if (!req.session.isAdmin) return res.status(401).json({ error: 'Unauthorized' });
    db.all("SELECT * FROM subscribers ORDER BY subscribed_at DESC", (err, rows) => {
        res.json(rows || []);
    });
});

app.get('/api/countdown', (req, res) => {
    db.get("SELECT value FROM settings WHERE key = 'countdown_end'", (err, row) => {
        res.json({ endDate: row?.value || new Date().toISOString() });
    });
});

app.post('/api/countdown/reset', (req, res) => {
    if (!req.session.isAdmin) return res.status(401).json({ error: 'Unauthorized' });
    const { days } = req.body;
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + (days || 10));
    db.run("UPDATE settings SET value = ? WHERE key = 'countdown_end'", [endDate.toISOString()]);
    res.json({ success: true });
});

app.post('/api/contact', formLimiter, (req, res) => {
    const { name, email, phone, message } = req.body;
    db.run("INSERT INTO leads (name, email, phone, message, status) VALUES (?, ?, ?, ?, 'new')", 
        [name, email, phone, message], function(err) {
            if (err) {
                res.json({ success: false, error: err.message });
            } else {
                res.json({ success: true });
            }
        });
});

app.post('/api/newsletter', formLimiter, (req, res) => {
    const { email } = req.body;
    db.run("INSERT OR IGNORE INTO subscribers (email) VALUES (?)", [email], function(err) {
        res.json({ success: !err });
    });
});

app.post('/api/checklist', formLimiter, (req, res) => {
    const { email } = req.body;
    db.run("INSERT OR IGNORE INTO subscribers (email) VALUES (?)", [email], function(err) {
        res.json({ success: !err, pdfUrl: '/uploads/checklist.pdf' });
    });
});

app.get('/api/projects', (req, res) => {
    db.all("SELECT * FROM projects ORDER BY created_at DESC", (err, rows) => {
        res.json(rows || []);
    });
});

app.post('/api/projects', (req, res) => {
    if (!req.session.isAdmin) return res.status(401).json({ error: 'Unauthorized' });
    const { title, description, image, link } = req.body;
    db.run("INSERT INTO projects (title, description, image, link) VALUES (?, ?, ?, ?)", 
        [title, description, image, link]);
    res.json({ success: true });
});

app.delete('/api/projects/:id', (req, res) => {
    if (!req.session.isAdmin) return res.status(401).json({ error: 'Unauthorized' });
    db.run("DELETE FROM projects WHERE id = ?", [req.params.id]);
    res.json({ success: true });
});

app.get('/api/prices', (req, res) => {
    db.get("SELECT value FROM settings WHERE key = 'prices'", (err, row) => {
        const defaultPrices = { starter: 99.99, pro: 149.99, premium: 199.99, basic: 15, proMonthly: 35, business: 75 };
        res.json(row ? JSON.parse(row.value) : defaultPrices);
    });
});

app.post('/api/prices', (req, res) => {
    if (!req.session.isAdmin) return res.status(401).json({ error: 'Unauthorized' });
    db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('prices', ?)", 
        [JSON.stringify(req.body)]);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
