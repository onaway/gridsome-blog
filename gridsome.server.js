// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// gridsome 服务端的配置文件，通过 commonJs 导入模块
// const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    
    /* 
    通过接口方式预取数据
    const collection = addCollection('Post')
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.body
      })
    } 
    */
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    // createPage({
    //     path: '/my-page',
    //     component: './src/templates/MyPage.vue'
    // })
  })
}
