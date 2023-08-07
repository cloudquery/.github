module.exports = {
  autodiscover: true,
  onboarding: false,
  allowPostUpgradeCommandTemplating: true,
  allowedPostUpgradeCommands: ["^sed", "^docker", "^go"],
  hostRules: [
    {
      matchHost: "maven.pkg.github.com",
      username: process.env.RENOVATE_GITHUB_ACTOR,
      password: process.env.RENOVATE_GITHUB_TOKEN,
    },
  ],
};
