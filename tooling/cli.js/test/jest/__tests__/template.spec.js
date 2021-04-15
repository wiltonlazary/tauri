const fixtureSetup = require('../fixtures/app-test-setup')
const { resolve } = require('path')
const { writeFileSync, readFileSync } = require('fs')

describe('[CLI] cli.js template', () => {
  it('init a project and builds it', async () => {
    const cwd = process.cwd()
    const fixturePath = resolve(__dirname, '../fixtures/empty')
    const tauriFixturePath = resolve(fixturePath, 'src-tauri')

    fixtureSetup.initJest('empty')

    process.chdir(fixturePath)

    const { init, build } = require('dist/api/cli')
    const { promise } = await init({
      directory: process.cwd(),
      force: true,
      tauriPath: resolve(__dirname, '../../../../..'),
      ci: true
    })
    await promise

    process.chdir(tauriFixturePath)

    const manifestPath = resolve(tauriFixturePath, 'Cargo.toml')
    const manifestFile = readFileSync(manifestPath).toString()
    writeFileSync(manifestPath, `workspace = { }\n\n${manifestFile}`)

    const { promise: buildPromise } = await build({
      config: {
        tauri: {
          bundle: {
            targets: ['deb', 'app', 'msi', 'appimage'] // we can't bundle dmg on CI so we remove it here
          }
        }
      }
    })
    await buildPromise
    process.chdir(cwd)
  })
})
