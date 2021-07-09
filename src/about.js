function createAboutPage() {
  const aboutPage = document.getElementById('about')
  aboutPage.innerHTML = `
  <div class="bg-keyboard-background bg-no-repeat bg-cover w-screen h-screen bg-fixed flex items-center justify-center">
    <img class="rounded-full w-1/5" src="src/img/about_photo.jpg" alt="picture of eric lombardo">
    <div class="relative w-40 h-90 bg-orange rounded-xl p-4 font-body text-4xl text-black">
    <p> Hello there friends</p>

    </div>
  </div>
  `
}