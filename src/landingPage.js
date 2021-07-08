function createLandingPage() {
  const landingDiv = document.getElementById('landing-page')
  landingDiv.innerHTML = `
    <div class="relative w-screen h-screen bg-black flex justify-center items-center ">
      <div class="grid grid-rows-2">
        <div class="font-title text-white text-5xl">Eric Lombardo</div>
        <div class="font-title text-white text-3xl">Software Developer</div>
      </div>
      <div class="md:animate-rot10 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
      <div class="md:animate-rot20 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
      <div class="md:animate-rot30 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
      <div class="md:animate-rot40 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
      <div class="md:animate-rot50 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
      <div class="md:animate-rot60 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
      <div class="md:animate-rot70 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
      <div class="md:animate-rot80 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
      <div class="md:animate-rot90 w-96 h-96 border-4 shadow-lg border-green absolute"></div>
    </div>
  `

}