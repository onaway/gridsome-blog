// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// gridsome 配置文件

module.exports = {
  siteName: 'blog', // 页面名称，即页面 tab 标签上的 title
  siteDescription: 'blog',  // meta description
  pathPrefix: '',   // 部署目录 若在 app 目录部署，则为 ’/app‘
  plugins: [],
  port: 3080,
//   configureWebpack: {}, // 自定义 webpack 配置
  templates: {
    Post: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
