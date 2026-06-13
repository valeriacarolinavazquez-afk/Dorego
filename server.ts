import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON middleware to support parsing JSON bodies
  app.use(express.json());

  // Enable CORS to support external clients (like Vercel: dorego.vercel.app)
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  // Wishes file path
  const WISHES_FILE = path.join(process.cwd(), "wishes.json");

  // Helper to read wishes from file
  function getWishes() {
    try {
      if (fs.existsSync(WISHES_FILE)) {
        const data = fs.readFileSync(WISHES_FILE, "utf-8");
        return JSON.parse(data);
      }
    } catch (error) {
      console.error("Error reading wishes file:", error);
    }
    // Default initial wishes if the file does not exist yet
    return [
      {
        id: 1,
        author: "Vale",
        text: "¡Que todos los pajaritos de nuestro patio, perritos andantes y gatitos como Cabral encuentren siempre amor, un platito de comida y un caminito seguro de regreso a casa! 🐾",
        date: "2026-06-12T22:34:50Z"
      },
      {
        id: 2,
        author: "Héctor del Barrio",
        text: "Cuidar a nuestros animales también es tejer la trama comunitaria de Guadalupe Oeste. ¡Espero que encontremos pronto a Cabral y que todas las mascotas del barrio estén siempre sanas y abrigadas! ❤️",
        date: "2026-06-11T18:20:00Z"
      }
    ];
  }

  // Helper to save wishes to file
  function saveWishes(wishes: any) {
    try {
      fs.writeFileSync(WISHES_FILE, JSON.stringify(wishes, null, 2), "utf-8");
    } catch (error) {
      console.error("Error saving wishes file:", error);
    }
  }

  // GET /api/wishes - fetch all stored wishes
  app.get("/api/wishes", (req, res) => {
    res.json(getWishes());
  });

  // POST /api/wishes - create a new wish and persist it
  app.post("/api/wishes", (req, res) => {
    const { author, text } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "El texto del deseo es requerido." });
    }

    const wishes = getWishes();
    const newWish = {
      id: Date.now(),
      author: author && author.trim() ? author.trim() : "Vecino/a anónimo",
      text: text.trim(),
      date: new Date().toISOString()
    };

    wishes.unshift(newWish); // Put the newest wish at the top!
    saveWishes(wishes);
    res.json(wishes);
  });

  // --- NOTIFICATION & COMMUNITY ALERTS ENDPOINTS ---
  const SUBSCRIBERS_FILE = path.join(process.cwd(), "subscriptions.json");
  const ALERTS_FILE = path.join(process.cwd(), "alerts.json");

  // Load subscriptions helper
  function getSubscribers() {
    try {
      if (fs.existsSync(SUBSCRIBERS_FILE)) {
        const data = fs.readFileSync(SUBSCRIBERS_FILE, "utf-8");
        return JSON.parse(data);
      }
    } catch (e) {
      console.error("Error reading subscribers file:", e);
    }
    // Default initial mock subscription to make the count non-zero initially for aesthetics
    return [
      { id: "sub-129381-x", date: "2026-06-12T10:00:00Z" },
      { id: "sub-984712-l", date: "2026-06-12T12:30:00Z" }
    ];
  }

  // Save subscriptions helper
  function saveSubscribers(subs: any) {
    try {
      fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2), "utf-8");
    } catch (e) {
      console.error("Error saving subscribers file:", e);
    }
  }

  // Load alerts helper
  function getAlerts() {
    try {
      if (fs.existsSync(ALERTS_FILE)) {
        const data = fs.readFileSync(ALERTS_FILE, "utf-8");
        return JSON.parse(data);
      }
    } catch (e) {
      console.error("Error reading alerts file:", e);
    }
    // Initialize with nice default messages so it feels full and alive
    return [
      {
        id: 1,
        author: "Prensa Infantil El Alero",
        text: "¡Sistema de Alertas Comunitarias de El Alero iniciado! 🚨 Aquí reportaremos avistamientos de Cabral y emergencias de mascotas en Guadalupe Oeste.",
        date: "2026-06-12T15:00:00Z"
      },
      {
        id: 2,
        author: "Vecino Luis",
        text: "¡Alerta! Vi un gatito negro parecido a Cabral jugando cerca del campito trasero hoy temprano. Estaba asustadizo, vayan despacio si lo buscan.",
        date: "2026-06-12T16:30:00Z"
      }
    ];
  }

  // Save alerts helper
  function saveAlerts(alerts: any) {
    try {
      fs.writeFileSync(ALERTS_FILE, JSON.stringify(alerts, null, 2), "utf-8");
    } catch (e) {
      console.error("Error saving alerts file:", e);
    }
  }

  // GET subscriber count
  app.get("/api/notifications/subscriptions", (req, res) => {
    const subs = getSubscribers();
    res.json({ count: subs.length });
  });

  // POST subscribe
  app.post("/api/notifications/subscribe", (req, res) => {
    const { subscriptionId } = req.body;
    if (!subscriptionId) {
      return res.status(400).json({ error: "Falta subscriptionId en la petición" });
    }
    const subs = getSubscribers();
    const alreadyExists = subs.some((s: any) => s.id === subscriptionId);
    if (!alreadyExists) {
      subs.push({
        id: subscriptionId,
        date: new Date().toISOString()
      });
      saveSubscribers(subs);
    }
    res.json({ success: true, count: subs.length });
  });

  // GET alerts
  app.get("/api/notifications/alerts", (req, res) => {
    res.json(getAlerts());
  });

  // POST broadcast alert
  app.post("/api/notifications/alerts", (req, res) => {
    const { author, text } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "El cuerpo de la alerta no puede estar vacío" });
    }

    const alerts = getAlerts();
    const newAlert = {
      id: Date.now(),
      author: author && author.trim() ? author.trim() : "Vecino/a Anónimo",
      text: text.trim(),
      date: new Date().toISOString()
    };

    alerts.unshift(newAlert); // Put newest emergency notification on top !
    saveAlerts(alerts);
    res.json(alerts);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve static files from dist
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // SPA Fallback: serve index.html for all unknown routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
