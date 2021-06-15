import { color, Preset } from 'apply'

Preset.setName('Laravel Initialize')

Preset.group((preset) => {
  preset.extract('default')
}).withTitle('Extracting templates...')

Preset.edit('.editorconfig')
  .withTitle(`Updating ${color.magenta('.editorconfig')}...`)
  .update(content => {
    return content
      .replace(
        '[*.{yml,yaml}]',
        '[*.{css,sass,scss,js,jsx,ts,tsx,vue,yml,yaml}]'
      )
  })
