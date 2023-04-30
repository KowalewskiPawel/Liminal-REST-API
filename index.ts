import express from "express";
import { accountRouter, cliRouter, signatureRouter } from "./routes";
const app = express();

app.use("/api/signature", signatureRouter);
app.use("/api/account", accountRouter);
app.use("/api/cmd", cliRouter);

const PORT = process.env.PORT || 4643;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
