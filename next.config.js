const { spawn } = require("child_process");
const { readFile } = require("fs");

const getRemoteURL = () =>
  new Promise((res, rej) => {
    const git_process = spawn("git", ["remote", "-v"]);
    git_process.stdout.setEncoding("utf-8");

    let stdout_data = "";

    git_process.stdout.on("data", data => { stdout_data += data });
    git_process.on("close", () => {
      // format: <remote-name> <remote-url> <(fetch)|(push)>
      const words = stdout_data.split(/\s/g);
      const pushIndex = words.indexOf("(push)");

      if (pushIndex == (-1))
        rej(new Error("Remote for pushing doesn't exist."));
      else
        res(words[pushIndex - 1]);
    });
    git_process.on("error", rej);
  });

const getPackageName = () =>
  readFile("package.json", { encoding: "utf-8" })
    .then(file =>
      JSON.parse(file ?? '{}')?.["name"] ?? ""
    );


/** @returns {import('next').NextConfig} */
module.exports = async () => {
  const is_dev = process.env.NODE_ENV == "development";

  const remote_url = await getRemoteURL();
  const repository_match = remote_url.match(/https?\:\/\/github.com\/.*?\/(.*?)\.git/i);

  const prefix = repository_match?.[1] ?? getPackageName();

  console.log(`Developer mode: ${is_dev ? "on" : "off"}`);
  console.log(`Using assetPrefix "${prefix}".`);

  return {
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix: is_dev ? undefined : "/" + prefix + "/",
    experimental: {
      images: {
        unoptimized: true
      }
    }
  }
};