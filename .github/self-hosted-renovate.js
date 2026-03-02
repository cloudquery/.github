module.exports = {
  autodiscover: true,
  onboarding: false,
  hostRules: [
    {
      matchHost: "maven.pkg.github.com",
      token: process.env.RENOVATE_GITHUB_TOKEN,
    },
  ],
};
