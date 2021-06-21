class Post {
  static all = [] // class variable to remember all posts created
  
  constructor({ id, title, author, published, content, likes }) {
    this.id = id                // assign attributes to this instance
    this.title = title
    this.author = author
    this.published = published
    this.content = content
    this.likes = likes  

    // create element for post
    this.element = document.createElement('div')
    // assign identifiers
    this.element.dataset.id = this.id
    this.element.id = `post-${this.id}`

    Post.all.push(this)  // push `this` instance into all array
  }

  createPostHTML(){
    this.element.innerHTML += `
      <h3>${this.title}</h3>
      <h4>${this.author}</h4>
      <p>Published: ${this.published}</p>
      <p>Likes: ${this.likes}</p>
    `
    return this.element
  }
  addPostToDom(){
    secondDiv.appendChild(this.createPostHTML()) 
  }
}