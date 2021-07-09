const baseUrl = 'http://localhost:3000' // sets base url at global scope
const postService = new PostService(baseUrl) // creates new postService to run requests
const commentService = new CommentService(baseUrl)
const blogTitle = document.getElementById('blog-title') // collect 1nd div
const blogPosts = document.getElementById('blog-posts')
const blogPost = document.getElementById('blog-post')
let navHref = ''
// logic for navbar
function navBar(href) { 
  navHref = href
  if (blogPost.innerText === '') {  // checks if on main page
    document.getElementById(navHref).scrollIntoView() // if so goes to href
  } else { // if not
    clearPage()
    loadPage()
    setTimeout(() => {document.getElementById(navHref).scrollIntoView()}, 100)
    
  }
}
// initial load sequence
function loadPage() { 
  createLandingPage() // creates hmtl for landing page
  blogTitle.innerHTML = generateTitle('Tech Blog', "bg-night-computer") // generates blog title
  postService.getPosts()  // gets all posts and adds them to DOM
}
// clear divs innerHTML for showing single post
function clearPage() {
  document.getElementById('landing-page').innerHTML = ''
  document.getElementById('blog-title').innerHTML = ''
  document.getElementById('blog-posts').innerHTML = ''
  document.getElementById('blog-container').classList = '' // remove w-full and h-full from div
  document.getElementById('blog-post').innerHTML = ''
}
// generate title in titleDiv
function generateTitle(t, backgroundClass) {
  const title = `
  <div class="w-screen title ${backgroundClass} bg-cover bg-center bg-no-repeat py-20">
    <h1 class="text-white text-7xl text-center font-title">${t}</h1>
  </div>
  `
  return title
}

loadPage() // runs initial loading of page

