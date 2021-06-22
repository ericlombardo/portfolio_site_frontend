// make all service calls regarding a post object
class PostService {
  constructor(endpoint) {
    this.endpoint = endpoint
  }
  getPosts() { // get request for all posts 
    fetch(this.endpoint + '/posts')
      .then(resp => resp.json())
      .then(posts => {
        for (const post of posts) {  // for each post
          const p = new Post(post)  // create new instance
          p.addPostsToDom()  // add that instance to the dom
        }
      })
  }

  updatePost(id) {
    // const config =  set up config with method type?? and body with updated
    fetch(this.endpoint + `/posts/${id}`, config)
      .then(resp => resp.json())
      .then(post => { debugger })
  }
}