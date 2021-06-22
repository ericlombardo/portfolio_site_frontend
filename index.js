const baseUrl = 'http://localhost:3000' // sets base url at global scope
const postService = new PostService(baseUrl) // creates new postService to run requests
const firstDiv = document.getElementById('first-div') // collect 1nd div
const secondDiv = document.getElementById('second-div') // collect 2nd div
const thirdDiv = document.getElementById('third-div') // collect 3rd div

// set title for main page
generateTitle('Tech Blog')
// get all posts
postService.getPosts()

function clearPage() {
  firstDiv.innerHTML = ''
  secondDiv.innerHTML = ''
  thirdDiv.innerHTML = ''
}

function generateTitle(t) {
  const title = `
    <div class="title">
      <h1>${t}</h1>
    </div>
  `
  firstDiv.innerHTML += title
}