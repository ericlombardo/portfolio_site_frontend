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
    this.liked = false
    

    // create element for post
    this.element = document.createElement('div')
    // assign identifiers
    this.element.dataset.id = this.id
    this.element.id = `post-${this.id}`
    // add event listener
    this.element.addEventListener('mouseenter', () => {
      // zoom in effect on hover over div
    })
    this.element.addEventListener('click', this.showSinglePost)

    Post.all.push(this)  // push `this` instance into all array
  }

  createPostsHTML() { // uses `this` instance to fill in HTML
    this.element.innerHTML += `
      <img class="like-btn" src=${this.title_pic} alt="like button" width="350px">
      <h3>${this.title}</h3>
      <h4>${this.author}</h4>
      <p>Published: ${this.published}</p>
      <p>${this.likes} Likes</p>
    `
    return this.element
  }

  addPostsToDom() {  // adds `this` instance to secondDiv
    secondDiv.appendChild(this.createPostsHTML()) 
  }

  showSinglePost() { //
    const post = Post.all.find(p => p.id === parseInt(this.dataset['id']))
    clearPage()
    generateTitle(`${post.title}`) 
    Post.createPostHTML(post) 

    // title_pic, title, author, published date, likes, button, content
  }

  static createPostHTML(post) { // creates HTML using post instance and not object from server
    secondDiv.innerHTML += `
      <img class="like-btn" src=${post.title_pic} alt="like button" width="350px">
      <h4>Author: ${post.author}</h4>
      <p>Published: ${post.published}</p>
      <img class="like-btn" src=${post.like_pic} alt="like button" width="20px">
      <p>${post.likes}</p>
      <p>${post.content}</p>
    `
  }
}

