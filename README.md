# CapMonster Cloud Docs

Source repository for the public developer documentation at [docs.capmonster.cloud](https://docs.capmonster.cloud/).

If you want to use the API, start with the published docs site. Use this repository when you want to contribute to the docs or run the site locally.

## Links

- Published docs: [docs.capmonster.cloud](https://docs.capmonster.cloud/)
- Dashboard: [dash.capmonster.cloud](https://dash.capmonster.cloud/)
- Main site: [capmonster.cloud](https://capmonster.cloud/)

Need to test before depositing? Contact support and we’ll add trial credits to your account.

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
