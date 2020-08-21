import axios from 'axios'

const url = 'api/test/tables/'

class PostService {
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
  // static deletePost (id) {
  //   return axios.delete(`${url}${id}`)
  // }
}

export default PostService

// export default (context, inject) => {
//   inject(PostService)
// }
