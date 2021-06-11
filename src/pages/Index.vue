<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview" v-for="post in $page.posts.edges" :key="post.node.id">
            <a href="post.html">
              <h2 class="post-title">{{ post.node.title }}</h2>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#!">{{ post.node.create_by.username }}</a>
              {{ post.node.created_at | date('MMM DD, YYYY') }}
            </p>

            <!-- Divider-->
            <hr class="my-4" />
          </div>
          
          <!-- Pager-->
          <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts
              →</a></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allStrapiPost {
    edges {
      node {
        id
        title
        created_at
        create_by {
          username
        }
        tags {
          id
          title
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  // metaInfo 自定义头部信息
  metaInfo: {
    title: 'Hello, world!'
  },
  name: 'Home'
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
