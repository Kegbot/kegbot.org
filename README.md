# kegbot.org site

This is the static content site generator behing `kegbot.org`. It's powered by
[GatsbyJS](https://www.gatsbyjs.org/).

## 🚀 Developer Setup

Perform the following one-time setup:
```
$ npm install -g gatsby
$ yarn
```

Run the dev server:
```
$ gatsby develop
```

## Deploying the site

Merges to `master` from a PR will be automatically push to the static
pages repo, at https://github.com/Kegbot/kegbot.github.io

A project admin can deploy to the `gh-pages` branch manually, using this command:
```
$ yarn deploy
```
