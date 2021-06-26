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
          Post.addCommentToPost(c.createCommentHTML())

        }
      })
  }

  submitComment(postId, commentContent) {
    const config = {  // set configuration for comment post
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: commentContent
      })
    }
    fetch(commentService.endpoint + `/posts/${postId}/comments`, config)
      .then(resp => resp.json())
      .then(comment => {
        const newComment = new Comment(comment) // create new comment using instance from server
        Post.addCommentToPost(newComment.createCommentHTML())  // add comment to dom
      })
  }
}