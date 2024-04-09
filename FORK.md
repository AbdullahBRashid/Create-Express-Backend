# Guide to Fork this repository.

You can fork [this repository](https://github.com/AbdullahBRashid/Create-Express-Backend) to use your own templates.

This repository has been setup with GitHub actions. You can remove them and work with [npm cli](https://docs.npmjs.com/cli/v10) if you like or continue with GitHub Actions as detailed below.

## Steps
1. [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) the repository to your own GitHub account.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the fork to your local device.
3. Create an NPM Account at [npmjs.com](https://npmjs.com).
4. [Checkout to branch](https://git-scm.com/docs/git-branch) of your username.
```bash
$ git checkout <username> # <username> is your branch name, replace it with your npmjs username
```
5. Edit the `.github/workflows/npm-publish.yml` file:
```yml
...
on:
    ...
    push:
        branches:
            - <NAME-OF-YOUR-BRANCH> # Replace with the name of your branch/username
    ...
...
```
6. **Important!** Read [Rules for package.json](#rules-for-packagejson).
7. Go to your npm account, and create an [Access Token](https://docs.npmjs.com/about-access-tokens) for your package.
8. Paste the token into your [GitHub Repository Action Secrets](https://docs.github.com/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ~NOT ENVIRONMENT SECRETS~ as `NPM_TOKEN`.
9. Add your template folder to the `templates` directory.
10. Update your README to direct to your package and the templates.

___Push When Ready.___


### Rules for package.json
 - Replace the `name` with the package name that you want (It must start with `create-`).
 - [Edit](https://docs.npmjs.com/about-semantic-versioning) the`version` number. (**Always do before pushing to GitHub**) ([semver](https://server.org) for reference).
 - Change the rest of the package.json values as needed.