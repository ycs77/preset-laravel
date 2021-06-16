import { color, Preset } from 'apply'

Preset.setName('Laravel Initialize')

Preset.extract('default').withTitle('Extracting templates...')

Preset.edit('.editorconfig')
  .withTitle(`Updating ${color.magenta('.editorconfig')}...`)
  .update(content => {
    return content
      .replace(
        '[*.{yml,yaml}]',
        '[*.{css,sass,scss,js,jsx,json,ts,tsx,vue,yml,yaml}]'
      )
  })
  .addAfter('indent_size = 2', [
    '',
    '[{composer,package}.json]',
    'indent_size = 4',
  ])
