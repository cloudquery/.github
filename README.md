# CloudQuery .github Repo

This repository contains Continuous Integration (CI) workflows, repositories settings and template files for repositories in the [`cloudquery`](https://github.com/cloudquery) and [`cloudquery-policies`](https://github.com/cloudquery-policies) GitHub organizations.
Since we have many repositories, and that number is expected to grow as we add more providers, we rely on automation to reduce the maintenance burden and to keep repositories in sync.

## Sync file automation

See code [here](./.github/workflows/sync_files.yml) and configuration [here](./.github/sync.yml).

We sync the following files

- GitHub Actions workflows under [`workflows`](./workflows) directory
- Pull request templates, linting configurations, release configurations, code owners files, renovate configuration, etc. under [`misc`](./misc) directory.

### Sync files templating

We use a [customized version](https://github.com/cloudquery/repo-file-sync-action/tree/feat/templating_v2) of a [GitHub Action](https://github.com/BetaHuhn/repo-file-sync-action) to sync files between repositories. The customized version adds templating support when syncing files.

To create a template file prefix a file's content with `{{=<% %>=}}` and then create template values files with the following naming convention:
`<filename-with-extension>.<target-repo-name>.values.yml`. The template values file should be a key value configuration of template values to replace.
For example, given the following template file:
```yaml
# template.yml
{{=<% %>=}}
name: example provider workflow <%> name %>
```
and values file
```yaml
# template.yml.cq-provider-aws.values.yml
name: "aws"
```

When syncing files to the `cq-provider-aws` repositories, the synced file will have the content of:
```yml
# template.yml
name: example provider workflow aws
```

>If a repository doesn't have a matching template values file, the file will not be synced.

## Repositories settings automation

See code [here](./.github/workflows/sync_repo_settings.yml) and configuration [here](./repo-settings).

We use a [tool](https://github.com/googleapis/repo-automation-bots/tree/629d4bffe5ca7dc01e894b1cc682b7c74400be3c/packages/sync-repo-settings) created by Google to sync settings between repositories.
Example settings are enabling only squash merges, enforcing code reviews, etc.

See [here](./repo-settings/providers/config.yaml) for the default settings we use for providers.

## Dependencies updates

We use [renovate](https://github.com/renovatebot/renovate) for dependency updates via a [GitHub Action](./.github/workflows/renovate.yml).
All repositories (except this one) use a [common file](./misc/common/renovate.json5) that extends [various configurations](./.github).

As renovate runs in the context of this repository, it uses a [self hosted renovate configuration](./.github/self-hosted-renovate.json5) file to generate the dependencies updates.

## Auto-merging PRs

We use a GitHub application called [Kodiak](https://kodiakhq.com/) to allow auto-merging of PRs.
The application will automatically merge any PRs that has the `automerge` label and all required conditions are met (e.g. review approved, status checks passed).
The configuration for the application is synced to all repositories from [this file](./.github/.kodiak.toml).

We provide a [manually triggered GitHub Action workflow](./.github/workflows/add_automerge_labels.yml) to add the `automerge` label to PRs based on their title.
You can trigger the workflow from [here](https://github.com/cloudquery/.github/actions/workflows/add_automerge_labels.yml):
![image](https://user-images.githubusercontent.com/26760571/172339434-133a0c0f-c474-4852-8f3c-69b13303df3c.png)
