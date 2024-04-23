module.exports = {
  apps: [
    {
      name: "yeslee-me",
      port: "8089",
      instances: "max",
      exec_mode: "cluster",
      script: "./.output/server/index.mjs",
    },
  ],
};
