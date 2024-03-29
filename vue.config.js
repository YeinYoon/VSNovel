module.exports = {
  lintOnSave: false,

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'VSNovel',
        appId: 'VSNovel.com',
        win: {
          target: [
            'nsis'
          ],
          icon: 'public/platform.png',
          requestedExecutionLevel: 'requireAdministrator'
        },
        nsis: {
          installerIcon: 'public/favicon.ico',
          uninstallerIcon: 'public/favicon.ico',
          oneClick: false,
          allowToChangeInstallationDirectory: true
        }
      }
    },
    cordovaPath: 'src-cordova'
  },

  devServer: { 
    proxy: { 
      '/api': { 
        target: 'http://localhost:2020/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },

  outputDir: './backend/public',
  publicPath: ''
}
