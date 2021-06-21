// make all service calls regarding a post object
class PostService {
  constructor(endpoint) {
  this.endpoint = endpoint
  }
  getPosts() { // get request for all posts 
    fetch(this.endpoint + '/posts')
    .then(resp => resp.json())
    .then(createPostInstances(posts))
  }
}