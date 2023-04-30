import express from "express";
import { accountRouter, signatureRouter } from "./routes";
const app = express();

app.use("/api/signature", signatureRouter);
app.use("/api/account", accountRouter);

const PORT = process.env.PORT || 4643;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
