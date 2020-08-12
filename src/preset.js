const { Preset } = require('use-preset')
const spawn = require('cross-spawn')
const hasYarn = spawn.sync('yarn', ['--version']).status === 0

// prettier-ignore
module.exports = Preset.make('Laravel Yarn')
  .option('interaction', true)

  .editJson('package.json')
    .title('Add vue-template-compiler')
    .merge({
      devDependencies: {
        'vue-template-compiler': '^2.6.11'
      }
    })
    .chain()

  .delete()
    .if(() => hasYarn)
    .title('Delete package-lock.json')
    .files('package-lock.json')
    .chain()

  .copyTemplates()

  .installDependencies()
    .if(({ flags }) => Boolean(flags.interaction))
    .for('node')
    .title('Install node dependencies')
    .chain()

  .run(hasYarn ? 'yarn' : 'npm', [hasYarn ? 'upgrade' : 'update'])
