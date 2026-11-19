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

## Merge automation

Reusable workflows that replace Kodiak. Call them from a `pull_request_target` workflow, pinned to a commit SHA.

| Workflow | What it does |
| --- | --- |
| [`merge-label-bridge.yml`](./.github/workflows/merge-label-bridge.yml) | Enables native auto-merge (or the merge queue, when the branch requires it) for pull requests labelled `automerge`. Disables it and removes the pull request from the queue when `wip` or `no automerge` is added, the `automerge` label is removed, or the pull request becomes a draft. |
| [`priority-merge.yml`](./.github/workflows/priority-merge.yml) | Moves a pull request labelled `priority merge` to the front of the merge queue. |

Requirements in each repository:

- **Settings → General → Allow auto-merge** is on.
- The `CQ_APP_ID` and `CQ_APP_PRIVATE_KEY` secrets are available.
- The `envzero-approver` GitHub App is installed. It approves `cloudquery-ci` pull requests from a webhook, not from a workflow.
- `.kodiak.toml` is deleted, so Kodiak stops acting on the repository.
