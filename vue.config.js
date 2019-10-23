module.exports = {
    devServer: {
        port: 8082,
        host: "localhost",
        https: false,
        // 自动启动浏览器
        open: false,
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
                ws: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        }

    },
    outputDir: '../api-container/src/main/resources/static',
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

    pwa: {
        iconPath: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },

};
