import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.listen(8000, () => {
  console.log(`🚀 Server running on port ${8000}`);
});

// export default app;
