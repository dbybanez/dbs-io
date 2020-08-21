import axios from 'axios'

// const url = 'api/posts/'
const url = 'api/test/tables/'
// const url = 'http://localhost:5000/api/test/tables/'

class PostService {
  // Get Posts
  // static getPosts() { // THIS CAUSES AN ERROR BECAUSE OF ES LINT. NOT A GOOD PRACTICE TO HAVE AN ASYNC PROMISE EXECUTOR FUNCTION
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const res = await axios.get(url)
  //       const data = res.data
  //       resolve(
  //         data.map(post => ({
  //           ...post,
  //           createdAt: new Date(post.createdAt)
  //         }))
  //       )
  //     } catch(err) {
  //       reject(err)
  //     }
  //   })
  // }
  static getPosts () {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        const data = res.data
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        )
      }).catch((err) => {
        reject(err)
      })
    })
  }

  // Create Posts
  static insertPost (text) {
    return axios.post(url, {
      text
    })
  }

  // Delete Posts
  static deletePost (id) {
    return axios.delete(`${url}${id}`)
  }

  // Get Collection Name
  // static getCollectionName() {
  //   return new Promise ((resolve, reject) => {
  //     axios.get(url).then((res) => {
  //       const data = res.data
  //       resolve(
  //         data.map(post => ({
  //           ...post,
  //           createdAt: new Date(post.createdAt)
  //         }))
  //       )
  //     }).catch((err) => {
  //       reject(err)
  //     })
  //   })
  // }
}

export default PostService
// module.export.PostService = PostService
