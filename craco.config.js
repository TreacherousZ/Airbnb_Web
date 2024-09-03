const path = require('path')
const CracoLessPlugin = require('craco-less');


const resolve = pathname => path.resolve(__dirname, pathname)
module.exports = {
  webpack: {
    //别名
    // 要传绝对路径
    alias: {
      '@': resolve('src'),
      'components':resolve('src/components'),
      'utils': resolve('src/utils')
    }
  },
  //less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}

