# Changelog

## \[1.0.0-beta-rc.1]

- Fix adding `tauri` script to package.json
  - [6c00e88](https://www.github.com/tauri-apps/tauri/commit/6c00e88e0ffa10eb7eecc312d66c5dde7dc03d0b) fix(cta): fix adding `tauri` script to package.json ([#1501](https://www.github.com/tauri-apps/tauri/pull/1501)) on 2021-04-15

## \[1.0.0-beta-rc.2]

- CTA also needs the template directory published as it doesn't get bundled into the `dist` directory.
  - [7b6108e](https://www.github.com/tauri-apps/tauri/commit/7b6108e37be652a1efa4018fc1908aa0a2cdacd6) fix: cta templates dir missing ([#1496](https://www.github.com/tauri-apps/tauri/pull/1496)) on 2021-04-14

## \[1.0.0-beta-rc.1]

- CTA was missing the `files` property in the package.json which mean that the `dist` directory was not published and used.
  - [414f9a7](https://www.github.com/tauri-apps/tauri/commit/414f9a78c9b636933fd741d1b6fe7f097f496fc9) fix: cta dist publish ([#1493](https://www.github.com/tauri-apps/tauri/pull/1493)) on 2021-04-14

## \[1.0.0-beta-rc.0]

- Add vanilla javascript option to `create-tauri-app` through templating.
  - [c580338](https://www.github.com/tauri-apps/tauri/commit/c580338f07b71551f7fd2712e13ad0acef100095) feat(cli): add create-tauri-app ([#1106](https://www.github.com/tauri-apps/tauri/pull/1106)) on 2021-03-07
- Use a test based on an npm env var to determine which package manager to use.
  - [6e0598c](https://www.github.com/tauri-apps/tauri/commit/6e0598c807ce02a3964788c06ec1025abc1fb250) feat: derive package manager from env var on 2021-04-12
- Add initial `vite` support starting with `vue` and `vue-ts`
  - [80b7bd7](https://www.github.com/tauri-apps/tauri/commit/80b7bd7de86f59e0cafaa0efdc6e82a0db7d7ba2) feat(CTA): add initial vite support with `vue` and `vue-ts` ([#1467](https://www.github.com/tauri-apps/tauri/pull/1467)) on 2021-04-13
- Revert `tauri create` deletion and shift remaining pieces that weren't deleted to `create-tauri-app`.
  - [4ec20a4](https://www.github.com/tauri-apps/tauri/commit/4ec20a4a28823614186365c5a90512d77170cff2) feat: shift tauri create \[not wired up] ([#1330](https://www.github.com/tauri-apps/tauri/pull/1330)) on 2021-03-07
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
