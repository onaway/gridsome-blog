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
            <g-link :to='`post/${post.node.id}`'>
              <h2 class="post-title">{{ post.node.title }}</h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <span class="author">{{ post.node.create_by.username }}</span>
              {{ post.node.created_at | date('MMM DD, YYYY') }}
            </p>
            <p>
              <span v-for="tag in post.node.tags" :key="tag.id">
                <g-link :to="`tag/${tag.id}`">{{ tag.title }}</g-link>
                &nbsp;&nbsp;
              </span>
            </p>

            <!-- Divider-->
            <hr class="my-4" />
          </div>

          <!-- Pager-->
          <Pager class="pages" :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import { Pager } from "gridsome";

export default {
  // metaInfo 自定义头部信息
  metaInfo: {
    title: "Hello, world!",
  },
  name: "Home",
  components: {
    Pager,
  },
};
</script>

<style>
.author {
  color: #000;
}
.pages {
  height: 40px;
}
.pages a {
  padding: 3px 10px;
  border: 1px solid #999;
  border-left: 0;
}
.pages a:first-child {
  border-left: 1px solid #999;
}
</style>
