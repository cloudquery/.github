module.exports = {
  autodiscover: true,
  onboarding: false,
  repositoryCache: "enabled",
  hostRules: [
    {
      matchHost: "maven.pkg.github.com",
      token: process.env.RENOVATE_GITHUB_TOKEN,
    },
  ],
};
