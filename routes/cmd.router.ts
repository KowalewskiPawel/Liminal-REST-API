import { Router } from "express";
import { executeCommand } from "../controllers";

export const cliRouter = Router();

cliRouter.post("/exec", executeCommand);