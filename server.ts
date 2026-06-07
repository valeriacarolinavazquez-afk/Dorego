import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON middleware to support parsing JSON bodies
  app.use(express.json());

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
        text: "¡Que El Alero siga cobijando las risas de todos los niños por 100 años más! 🎈",
        date: "2026-06-07T22:34:50Z"
      },
      {
        id: 2,
        author: "Héctor del Barrio",
        text: "Felices 10 años al lugar donde aprendimos a tejer la trama comunitaria y a reír sin miedos. ✨",
        date: "2026-06-06T18:20:00Z"
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
