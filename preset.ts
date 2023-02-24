export default definePreset({
  name: 'ycs77/preset-laravel',
  options: {
    npm: false,
    yarn: true,
    pnpm: false,
    timezone: 'Asia/Taipei',
  },
  handler: async context => {
    await initializeLaravel(context.options)
    await installDependencies(context.options)
  },
})

async function initializeLaravel(options: {
  timezone: string
}) {
  await extractTemplates({
    title: 'extract templates',
    from: 'default',
  })

  await editFiles({
    title: 'update .editorconfig',
    files: '.editorconfig',
    operations: [
      {
        type: 'update-content',
        update: content => content.replace(
          '[*.{yml,yaml}]',
            '[*.{css,js,cjs,mjs,jsx,json,ts,tsx,vue,yml,yaml,md}]'
        ),
      },
      {
        type: 'add-line',
        position: 'after',
        match: /indent_size = 2/,
        lines: [
          '',
          '[{composer,package}.json]',
          'indent_size = 4',
        ],
      },
    ],
  })

  await editFiles({
    title: 'update timezone config',
    files: 'config/app.php',
    operations: [
      {
        type: 'update-content',
        update: content => content.replace(
          `'timezone' => 'UTC'`,
          `'timezone' => '${options.timezone}'`
        ),
      },
    ],
  })

  // const language = 'zh_TW'
  // await editFiles({
  //   title: 'update language config',
  //   files: 'config/app.php',
  //   operations: [
  //     {
  //       type: 'update-content',
  //       update: content => content.replace(
  //         `'locale' => 'en'`,
  //         `'locale' => '${language}'`
  //       ),
  //     },
  //     {
  //       type: 'update-content',
  //       update: content => content.replace(
  //         `'faker_locale' => 'en_US'`,
  //         `'faker_locale' => '${language}'`
  //       ),
  //     },
  //   ],
  // })
}

async function installDependencies(options: {
  npm: boolean
  yarn: boolean
  pnpm: boolean
}) {
  const nodePackageManager = guessNodePackageManager(options)
  await group({
    title: `run ${nodePackageManager} install`,
    handler: async () => {
      await executeCommand({ command: nodePackageManager })
    },
  })
}

function guessNodePackageManager(options: {
  npm: boolean
  yarn: boolean
  pnpm: boolean
}) {
  if (options.pnpm) {
    return 'pnpm'
  } else if (options.yarn) {
    return 'yarn'
  }
  return 'npm'
}
