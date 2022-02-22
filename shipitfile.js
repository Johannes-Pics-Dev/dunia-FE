module.exports = (shipit) => {
  // Load shipit-deploy tasks
  require("shipit-deploy")(shipit);
  const fs = require("fs");
  const yaml = require("js-yaml");
  let deployConfig = yaml.load(
    fs.readFileSync("./src/config/deploy.yaml", "utf8")
  );
  let deployUser = deployConfig.deploy_username;
  let deployRoot = `/${deployConfig.deploy_root_path}/${deployUser}`;
  let appName = deployConfig.app_name;
  let serverIp = deployConfig.server_ip;
  let remotePath = `${deployRoot}/${deployConfig.deploy_folder}/${appName}`;
  let repoUrl = deployConfig.repository_url;
  let ignoredFiles = [];
  fs.readdir("./", (err, files) => {
    files.forEach((file) => {
      if (file != "build") ignoredFiles.push(file);
    });
  });

  shipit.initConfig({
    default: {
      branch: "dev",
      deployTo: remotePath,
      repositoryUrl: repoUrl,
      ignores: ignoredFiles,
    },
    production: {
      servers: `${deployUser}@${serverIp}`,
    },
  });
};
