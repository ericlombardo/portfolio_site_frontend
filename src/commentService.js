// make all service calls regarding a comment object
class CommentService {
  constructor(endpoint) {
    this.endpoint = endpoint
  }

  getComments() {
    fetch(this.endpoint + `/comments`)
      .then(resp => resp.json())
      .then(comments => {
        for (const comment of comments) {
          new Comment(comment)
        }
      })
  }
}