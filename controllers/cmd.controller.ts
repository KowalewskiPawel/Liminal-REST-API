import { Request, Response } from "express";
import { executeCmd } from "../utils/exec";

export const executeCommand = (req: Request, res: Response) => {
  try {
    const { command } = req.body;

    executeCmd(command);

    return res.status(200).json("OK");
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};
