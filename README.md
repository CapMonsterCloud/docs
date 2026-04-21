# CapMonster Cloud Docs

Source for the public developer documentation at [docs.capmonster.cloud](https://docs.capmonster.cloud/).

Most developers should use the published docs site. This repository is useful when you want to contribute to the docs or run the site locally.

## Links

- Published docs: [docs.capmonster.cloud](https://docs.capmonster.cloud/)
- Dashboard: [dash.capmonster.cloud](https://dash.capmonster.cloud/)
- Main site: [capmonster.cloud](https://capmonster.cloud/)

$ Want to test before depositing? Contact support and we’ll add trial credits to your account.

## Local development

Install dependencies:

```bash
yarn
```

or

```bash
npm install
```

Start the local docs site:

```bash
yarn start
```

By default this starts the English version. To start the Russian version:

```bash
yarn start -- --locale ru
```

## Build

```bash
yarn build
```

This generates the static site into the `build` directory.
