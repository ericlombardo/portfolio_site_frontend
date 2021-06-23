// make all service calls regarding a post object
class PostService {
  constructor(endpoint) {
    this.endpoint = endpoint
  }
  getPosts() { // get request for all posts 
    fetch(this.endpoint + '/posts')
      .then(resp => resp.json())
      .then(posts => {
        for (const post of posts) {  // for each post
          const p = new Post(post)  // create new instance
          p.addPostsToDom()  // add that instance to the dom
        }
      })
  }

  updatePost(id, likes) {
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'likes': ++likes,
        'like_pic': 'src/img/icons/heart-thin.png'
      })
    }
    fetch(this.endpoint + `/posts/${id}`, config)
      .then(resp => resp.json())
      .then(p => {
        let likes = document.querySelector('.blog-post').lastElementChild.previousElementSibling
        likes.innerHTML = (parseInt(likes.innerText) + 1)
      })
  }
}