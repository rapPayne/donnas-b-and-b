import express from "express";

export function createAskRoute(chain) {
  const router = express.Router();

  router.post("/ask", async (req, res) => {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "No question provided" });
    }

    try {
      const answer = await chain.invoke({ question });
      res.json({ answer });
    } catch (err) {
      console.error("Chain error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return router;
}
