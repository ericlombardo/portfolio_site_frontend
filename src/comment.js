class Comment {
  constructor({ content, post_id}) {
    this.post_id = post_id
    this.content = content
  }

  createCommentHTML() { //create html that will show on post
    const comment = `
        <div class="p-4">${this.content}</div>
    `
    return comment
  }
}