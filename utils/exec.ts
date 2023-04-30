import { exec } from "child_process";

export const executeCmd = (cmd: string) => {
  exec(cmd, (err, stdout, stderr) => {
    console.log(stdout);
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
  });
};
