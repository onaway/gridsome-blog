<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{backgroundImage: `url(http://localhost:1337${$page.post.cover.url})`}">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ $page.post.title }}</h1>
              <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
              <span class="meta">
                Posted by {{ $page.post.create_by.username }}
                {{ $page.post.create_at | date('MMM DD, YYYY') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="mdToHtml($page.post.content)"></div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: strapiPost (id: $id) {
    id
    title
    content
    cover {
      url
    }
    create_by {
      username
    }
    created_at
    tags {
      id
      title
    }
  }
}
</page-query> 

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  // 通过返回函数的方式获取动态的标题
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },
  name: 'Post',
  methods: {
    mdToHtml(content) {
      return md.render(content)
    }
  }
}
</script>

<style lang='less' scoped>
</style>