module.exports = {
  devServer: {
    open: true, //自动打开浏览器
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/toutiao/", //后端的接口地址
        changeOrigin: true, //开启跨域
        pathRewrite: {
          "^/api": "", //这里即为重写后的地址，baseURL里的地址要换成这个
        },
      },
    },
  },
};
