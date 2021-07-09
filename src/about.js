function createAboutPage() {
  const aboutPage = document.getElementById('about')
  aboutPage.innerHTML = `
  <div class="bg-keyboard-background bg-no-repeat bg-cover text-lg w-screen h-screen bg-fixed p-5 md:p-20 sm:flex items-center justify-center gap-4">
    <img class="rounded-full mx-auto w-4/12 h-auto border-2 border-orange" src="src/img/about_photo.jpg" alt="picture of eric lombardo">
    
    <div class="bg-white bg-opacity-90 m-10 mx-auto border-2 border-orange rounded-xl font-body text-black shadow-xl">
    <p class="m-4 text-center">
      My name is Eric Lombardo and I am a software developer from Columbus Ohio. My path to programming was 
      anything but conventional, but I think that has given me a unique perspective in this career field. I graduated college with
      a degree in Music Technology and a minor in Digital Design. From there I did video production and photography for over 4 years
      both independently and for an employer. I was then promoted to Technical Director and put in charge of the Audio/Visual equiptment
      for the whole facility, as well organizing volunteers for different services and events. Each of these experiences has helped shape
      me into a well rounded developer who has a knowledge of audio, video, photography, design, and how to work with people.
    </p>

    </div>
  </div>
  `
}