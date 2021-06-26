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
      <h4>Author: ${this.author}</h4>
      <p>Published: ${this.published}</p>
      <p>${this.likes} Likes</p>
    `
    return this.element
  }

  addPostsToDom() {  // adds `this` instance to secondDiv
    secondDiv.appendChild(this.createPostsHTML())
  }

  showSinglePost() {
    const post = Post.all.find(p => p.id === parseInt(this.dataset['id']))
    clearPage()
    generateTitle(`${post.title}`)
    post.createPostHTML()
    document.querySelector('.blog-post').addEventListener('click', post.handleLike)
    // get all comments for this post id
    commentService.getPostComments(this.dataset['id'])
    // fetch all comments Comment.all
    // filter comments out for each post 
    // append post comments to appropriate div
  }

  createPostHTML() { // creates HTML using post instance and not object from server
    secondDiv.innerHTML += `
    <div class="blog-post" data-postId="${this.id}">
      <img class="title-pic" src=${this.title_pic} alt="title picture" width="350px">
      <h4>Author: ${this.author}</h4>
      <p>Published: ${this.published}</p>
      <img class="like-btn" src=${this.like_pic} alt="like button" width="20px">
      <p>${this.likes}</p>
      <p>${this.content}</p>
      <div class="comment_container">
      </div>
    </div>
    `
  }

  handleLike() {
    if (event.target.className === 'like-btn') {
      postService.updatePost(parseInt(this.dataset.postid), parseInt(event.target.nextElementSibling.innerText))

    }
  }

  static addCommentToPost(comment) {
    // add each comment to the dom
    // get comment container
    let commentContainer = document.querySelector("#second-div > div > div")
    // append comment to container
    commentContainer.innerHTML += comment
  }
}

