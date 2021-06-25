// make all service calls regarding a comment object
class CommentService {
  constructor(endpoint) {
    this.endpoint = endpoint
  }

  getPostComments(id) {
    fetch(this.endpoint + `/posts/${id}/comments`)
      .then(resp => resp.json())
      .then(comments => {
        for (const comment of comments) {
          let c = new Comment(comment)
          console.log(c)
        }
      })
  }
}