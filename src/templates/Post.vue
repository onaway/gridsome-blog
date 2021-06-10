<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <p>{{ $page.post.content }}</p>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post (id: $id) {
    id
    title
    content
  }
}
</page-query> 

<script>
export default {
  // 通过返回函数的方式获取动态的标题
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  name: 'Post',
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
</style>