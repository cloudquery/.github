# CloudQuery `.github` repository

This repository contains templates and [renovate](https://github.com/renovatebot/renovate) configurations that are used across all CloudQuery repositories.

## Templates

- [Issue template](./ISSUE_TEMPLATE)
- [Code of conduct](./CODE_OF_CONDUCT.md)
- [Security policy](./SECURITY.md)

## Renovate configurations

We use [renovate](https://github.com/renovatebot/renovate) for dependency updates via a [GitHub Action](./.github/workflows/renovate.yml).
As renovate runs in the context of this repository, it uses a [self hosted renovate configuration](./.github/self-hosted-renovate.json5) file to generate dependencies updates.
We have [a few base configurations](./.github) that repositories extend from.
