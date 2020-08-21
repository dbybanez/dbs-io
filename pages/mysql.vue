<template>
  <div class="container">
    <h1>MySQL EmployeeList table</h1>
    <div class="create-post">
      <label for="create-post">Add a document: </label><br><br>
      <div class="form-inline">
        <input class="form-control mr-3" type="text" id="create-post" v-model="text" placeholder="Create a post">
        <button class="btn btn-primary" v-on:click="createPost">Post!</button>
      </div>
    </div>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th width="3%">ID</th>
            <th width="10%">Last Name</th>
            <th width="10%">First Name</th>
            <th width="10%">Birth Date</th>
            <th width="10%">Photo</th>
            <th width="20%">Notes</th>
          </tr>
        </thead>
        <!-- <tbody>
          <tr v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post._id"
            v-on:dblclick="deletePost(post._id)">
            <td>{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</td>
            <td>{{ post.text }}</td>
          </tr>
        </tbody> -->
        <tbody>
          <tr
            v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post.EmployeeID"
            v-on:dblclick="deletePost(post.EmployeeID)">
            <td>{{ post.EmployeeID }}</td>
            <td>{{ post.LastName }}</td>
            <td>{{ post.FirstName }}</td>
            <td>{{ post.BirthDate }}</td>
            <td>{{ post.Photo }}</td>
            <td>{{ post.Notes }}</td>
          </tr>
        </tbody>
      </table>
      <!-- <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)">
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
        <p class="text">{{ post.text }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import PostService from '../plugins/services/PostService'

export default {
  name: 'PostComponent',
  data () {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created () {
    try {
      this.posts = await PostService.getPosts()
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    async createPost () {
      await PostService.insertPost(this.text)
      this.posts = await PostService.getPosts()
    },
    async deletePost (id) {
      await PostService.deletePost(id)
      this.posts = await PostService.getPosts()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.container {
    max-width: 800px;
    margin: 0 auto;
  }

  p.error {
    border: 1px solid #ff5b5f;
    background-color: #ffc5c1;
    padding: 10px;
    margin-bottom: 15px;
  }

  div.post {
    position: relative;
    border: 1px solid #5bd658;
    background-color: #bcffb8;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
  }

  div.created-at {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 15px 5px 15px;
    background-color: darkgreen;
  }

  p.text {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
  }
  /* table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #000000;
    word-break: break-all;
  } */

  table > thead td,
  table > tbody td {
    padding: 0.5rem 1rem;
  }
  table > tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>
