const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/styles/styles.scss";`
      },
    }
  },
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      // Or, for multiple preload files:
      // preload:{ preload: 'src/preload.js', otherPreload: 'src/preload2.js'}
    }
  }
})
