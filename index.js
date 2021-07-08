const baseUrl = 'http://localhost:3000' // sets base url at global scope
const postService = new PostService(baseUrl) // creates new postService to run requests
const commentService = new CommentService(baseUrl)
const blogTitle = document.getElementById('blog-title') // collect 1nd div
const blogPosts = document.getElementById('blog-posts')


function loadPage() {
  createLandingPage()
  blogTitle.innerHTML = generateTitle('Tech Blog', "bg-night-computer")
  postService.getPosts()  // get all posts
}

// clear all divs on index.html
function clearPage() {
  document.getElementById('landing-page').innerHTML = ''
  document.getElementById('blog-container').innerHTML = ''
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

loadPage()

