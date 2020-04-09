// The purpose of this file is covered in CH 05, Video 06
module.exports = {
  apps: [
    {
      name: "meetup",
      script: "bin/www",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      user: "jo",
      host: "64.227.66.221",
      ref: "origin/master",
      repo: "https://github.com/rawblue-sudo/khan-site.git",

      // Make sure this directory exists on your server or change this entry to match your directory structure
      path: "/home/jo/deploy",

      "post-deploy":
        "cp ../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
