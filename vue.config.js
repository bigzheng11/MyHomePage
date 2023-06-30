const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        //port: 3005,
        proxy: {
            '/api': {
                target: 'http://124.70.41.92:8081/',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': ''//重写路径
                }
            }
        }
    }
})
