class Post {
  static all = [] // class variable to remember all posts created
  constructor(id, title, author, published, content, likes) {
    this.id = id                // assign attributes to this instance
    this.title = title
    this.author = author
    this.published = published
    this.content = content
    this.likes = likes  

    // create element for post
    // assign identifiers
    Post.all.push(this)  // push `this` instance into all array
  }
}