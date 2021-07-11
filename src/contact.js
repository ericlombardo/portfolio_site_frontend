function createContactPage() {
  document.getElementById('contact').innerHTML = `
  <div class="bg-contact-background bg-no-repeat bg-cover bg-fixed w-screen h-screen">
    <div class="bg-black bg-opacity-30 w-screen h-screen flex items-center justify-center">
      <div class="bg-white bg-opacity-80 border-t-4 border-orange font-body text-xl md:text-2xl w-screen md:w-1/2 text-center px-2">
        <h1 class="font-title text-2xl md:text-5xl p-2">Let's Get In Touch</h1>
        <p class=" p-2">I'd love to hear from you whether you are a potential employer, wanting to chat about programming, or just want to reach out.</p>
        <h1 class="font-title text-xl md:text-2xl text-center pt-2 underline">Email:</h1>
        <p class="pb-4">eric.m.lombardo@gmail.com</p>
        <h1 class="font-title text-xl md:text-2xl text-center underline">Other Ways To Connect</h1>
          <div class="flex justify-center gap-4 p-4">
            <a target="_blank" href="https://github.com/ericlombardo">  
              <img src="src/img/icons/github.png" alt="github icon" class="w-10">
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/eric-lombardo-0664928b/">
              <img src="src/img/icons/linkedin-app.png" alt="likedin icon" class="w-10"></img>
            </a>
          </div>
      </div>
    </div>
  </div>
  `
}