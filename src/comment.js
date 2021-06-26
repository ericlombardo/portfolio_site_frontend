class Comment {
  constructor({ content, post_id, likes, like_pic, title_pic }) {
    this.post_id = post_id
    this.content = content
    this.likes = likes
    this.like_pic = like_pic
    this.title_pic = title_pic
  }

  createCommentHTML() { //create html that will show on post
    const comment = `
      <div class='comment'>
        <p>${this.content}</p>
      </div>
    `
    return comment
  }
}