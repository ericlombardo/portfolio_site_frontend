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
    this.element.classList = "shadow-xl"
    // add event listener
    this.element.addEventListener('click', this.showSinglePost)

    Post.all.push(this)  // push `this` instance into all array
  }

  createPostsHTML() { // uses `this` instance to fill in HTML
    this.element.innerHTML += `    
      <img class="title_pic rounded" src=${this.title_pic} alt="like button">
      <h3 class="font-title text-2xl text-center py-2">${this.title}</h3>
      <h4 class="text-lg text-center">${this.author}   ||   ${this.published}</h4>
      <p class="text-base text-right p-3">${this.likes} Likes</p>
    `
    return this.element
  }

  addPostsToDom() {  // adds `this` instance to secondDiv
    blogPosts.appendChild(this.createPostsHTML())
  }

  showSinglePost() {
    const post = Post.all.find(p => p.id === parseInt(this.dataset['id']))
    clearPage()
    blogTitle.innerHTML = generateTitle(`${post.title}`, 'bg-night-computer')
    post.addPostToDom(post.createPostHTML())
    document.querySelector('.blog-post').addEventListener('click', post.handlePostClick)
    commentService.getPostComments(this.dataset['id'])
  }

  createPostHTML() { // creates HTML using post instance and not object from server
    return `
    <div data-postId="${this.id}">
      <img class="title-pic shadow-md max-w-max w-8/12 mx-auto" src=${this.title_pic} alt="title picture">
      <div class="grid grid-cols-3 gap-4 py-4">
        <div class="text-center text-lg font-title"><p>Published: ${this.published}</p></div>
        <div class="text-center text-lg font-title"><h4>Author: ${this.author}</h4></div>
        <div class="text-center text-lg font-title">
          <img class="like-btn inline" src=${this.like_pic} alt="like button" width="20px">
          <p class="inline" id="like-count">${this.likes}</p>
        </div>
      </div>
      <p class"text-center font-medium text-2xl">${this.content}</p>

      <div class="post-nav py-6">
        <button class="font-title border border-teal bg-teal-light py-0.5 px-32 rounded shadow-lg cursor-pointer" type="submit" id="comment-submit" id="back-btn">Back to Main</button>
      </div>  

      <div class="py-7" id="comment-submit-section">
        <h2 class="font-title text-lg">Add Your Thoughts:</h2>
        <div class="form-container">
          <form id="comment-form">
            <textarea class="border border-teal w-3/5 h-24 rounded shadow-lg" type="text" id="comment-content"></textarea><br>
            <button class="font-title border border-teal bg-teal-light py-1 px-3 rounded shadow-lg cursor-pointer" type="submit" id="comment-submit">Post Comment</button>
          </form>
        </div>
      </div>
      
      <h2 class="font-title text-lg py-2">Comments:</h2>

      <div class="comment-container flex flex-col-reverse divide-y-2 divide-y-reverse divide-orange w-9/12 p-4 border-2 border-orange rounded shadow-lg" id="post-comment-section">
      </div>
      
      
    </div>
    `
  }

  addPostToDom(postHTML) {
    const post = document.createElement('div')
    post.classList = "blog-post w-screen px-6 py-7 lg:px-28 mx-auto"
    post.innerHTML = postHTML
    document.body.firstElementChild.append(post)
  }

  handlePostClick() {
    if (event.target.className.split(' ')[0] === 'like-btn') {
      postService.updatePost(parseInt(this.firstElementChild.dataset.postid), parseInt(event.target.nextElementSibling.innerText))
    }
    if (event.target.innerText === "Post Comment") {
      event.preventDefault()
      const commentContent = document.getElementById('comment-content')
      const postId = document.querySelector('[data-postId]').dataset['postid']
      commentService.submitComment(postId, commentContent.value)
      commentContent.value = ''
    } if (event.target.innerText === "Back to Main") {
      location.reload()
    }
  }

  static addCommentToPost(comment) {
    let commentContainer = document.getElementById('post-comment-section')
    // append comment to container
    commentContainer.innerHTML += comment

  }
}

