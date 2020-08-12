const { Preset } = require('use-preset')
const spawn = require('cross-spawn')

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
    .if(() => spawn.sync('yarn', ['--version']).status === 0)
    .title('Delete package-lock.json')
    .files('package-lock.json')
    .chain()

  .copyTemplates()

  .installDependencies()
    .if(({ flags }) => Boolean(flags.interaction))
    .for('node')
    .title('Install node dependencies')
    .chain()

  .updateDependencies()
    .if(({ flags }) => Boolean(flags.interaction))
    .withoutAsking()
    .for('node')
    .title('Update node dependencies')
    .chain()
