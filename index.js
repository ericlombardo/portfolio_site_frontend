const baseUrl = 'http://localhost:3000' // sets base url at global scope
const postService = new PostService(baseUrl) // creates new postService to run requests

// get all posts
postService.getPosts()
