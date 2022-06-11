module.exports = {
  apps : [{
    name   : "Welikan strapi",
    script : "yarn start",
    env_production: {
      HOST:"0.0.0.0",
      PORT:1341,
      APP_KEYS:"VtJmJ/asmp11LACRtwYAGg==,wtNAi4J+JnUUPEudas+jiA==,y8YhqV0Z8TjzlVkc6xPeEw==,7HixGcHKpG1Vk/i97tVn/g==",
      API_TOKEN_SALT:"IzQfHmVUqqBk1JqzvEwbog==",
      ADMIN_JWT_SECRET:" 9QjY3n+cWnVEcSGSzo5SPw==",
      JWT_SECRET:"juwtn0n2V2NeaGjfZpCANw==",
    }
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['51.250.50.70'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/welikan-strapi.git',
      path : '/var/www/strapi',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
