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
      <img class="title_pic" src=${this.title_pic} alt="like button" width="350px">
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
    let post = postService.getSinglePost(this)
    clearPage()
    debugger
    generateTitle(`${post.title}`)
    Post.createPostHTML.call(post)
    document.querySelector('.blog-post .like-btn').addEventListener('click', () => {

    })
  }

  static createPostHTML() { // creates HTML using post instance and not object from server
    secondDiv.innerHTML += `
    <div class="blog-post">
      <img class="title_pic" src=${this.title_pic} alt="like button" width="350px">
      <h4>Author: ${this.author}</h4>
      <p>Published: ${this.published}</p>
      <img class="like-btn" src=${this.like_pic} alt="like button" width="20px">
      <p>${this.likes}</p>
      <p>${this.content}</p>
    </div>
    `
  }
}

