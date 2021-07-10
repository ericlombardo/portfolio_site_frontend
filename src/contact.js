function createContactPage() {
  document.getElementById('contact').innerHTML = `
  <div class="bg-contact-background bg-no-repeat bg-cover bg-fixed w-screen h-screen">
    <div class="bg-black bg-opacity-30 w-screen h-screen flex items-center justify-center">
      <div class="bg-white border-t-4 border-orange font-body text-2xl w-1/2 text-center">
        <h1 class="font-title text-5xl p-2">Let's Get In Touch</h1>
        <p class=" p-2">I'd love to hear from you whether you are a potential employer, wanting to chat about programming, or just want to reach out.</p>
        <h1 class="font-title text-2xl text-center p-2">Email:</h1>
        <p class=" p-2">eric.m.lombardo@gmail.com</p>
        <h1 class="font-title text-2xl text-center underline">Other Ways To Connect</h1>
      </div>
    </div>
  </div>
  `
}