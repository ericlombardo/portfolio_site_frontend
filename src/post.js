class Post {
  static all = [] // class variable to remember all posts created
  
  constructor({ id, title, author, published, content, likes, like_pic, title_pic }) {
    this.id = id                // assign attributes to this instance
    this.title = title
    this.author = author
    this.published = published
    this.content = content
    this.likes = likes  
    this.like_pic = like_pic
    this.title_pic = title_pic
    

    // create element for post
    this.element = document.createElement('div')
    // assign identifiers
    this.element.dataset.id = this.id
    this.element.id = `post-${this.id}`

    Post.all.push(this)  // push `this` instance into all array
  }

  createPostHTML(){ // uses `this` instance to fill in HTML
    this.element.innerHTML += `
      <img class="like-btn" src=${this.title_pic} alt="like button" width="350px">
      <h3>${this.title}</h3>
      <h4>${this.author}</h4>
      <p>Published: ${this.published}</p>
      <p>Likes: ${this.likes}</p>
      <img class="like-btn" src=${this.like_pic} alt="like button" width="20px">
    `
    return this.element
  }

  addPostToDom(){  // adds `this` instance to secondDiv
    secondDiv.appendChild(this.createPostHTML()) 
  }
  
}
