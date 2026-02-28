import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Docker + TypeScript running");
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
