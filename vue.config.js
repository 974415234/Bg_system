module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: '#', //代理地址
                changeOrigin: true, // 允许跨域
                ws: true,
                secure: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
        overlay: {
            waenings: false,
            errors: false
        }
    },
    lintOnSave: false
}