# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

### 3. 目录结构

文档：https://gridsome.org/docs/directory-structure/

### 4. 查询数据

文档：https://gridsome.org/docs/querying-data/

- Use `<page-query>` in Pages & Templates.
- Use `<static-query>` in Components

### 5. 结合 strapi 开发

https://strapi.io

strapi 中的数据获取：本项目使用插件 @gridsome/source-strapi 预取 strapi 更新的数据

每次 strapi 更新数据后，本项目需要重新 run 一次，重启服务

### 6. 分页

文档：https://gridsome.org/docs/pagination/
