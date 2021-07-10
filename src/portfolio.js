function createPortfolioPage() {
  document.getElementById('portfolio').innerHTML = `
    <div class="w-screen min-h-screen bg-orange grid grid-cols-2 grid gap-2 py-20 text-white font-body text-xl">
      <div class="w-10/12 mx-auto bg-black border-2 border-white rounded">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/wcGPN8-L5_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <div class="w-10/12 mx-auto bg-black border-2 border-white rounded p-3">
        <h1 class="font-title text-3xl text-center underline py-2">Simply Give</h1>
        <p>CLI application that allows the user to find charities giving to causes that they believe in. </p>
        <h2 class="font-title text-xl pt-2 font-medium" >Skills:</h2>
        <ul>
          <li>Ruby</li>
          <li>Working with API's</li>
          <li>Pry</li>
        </ul>
      </div>
      
      <div class="w-10/12 mx-auto bg-black border-2 border-white rounded p-3">
        <h1 class="font-title text-3xl text-center underline py-2">Been There Done That</h1>
        <p>Application that allows user to sign in and track their adventures.
        They can search by state or activity to see what other people are doing.
        The application tracks all of their stats like adventure count, state count, and favorite activities and states.</p>
        <h2 class="font-title text-xl pt-2 font-medium" >Skills:</h2>
        <ul>
          <li>Ruby</li>
          <li>Sinatra</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>BCrypt</li>
          <li>Error handling</li>
        </ul>
      </div>
      
      <div class="w-10/12 mx-auto bg-black border-2 border-white rounded">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Oe_ZnWt6SVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <div class="w-10/12 mx-auto bg-black border-2 border-white rounded">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YwVB3NcyAJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <div class="w-10/12 mx-auto bg-black border-2 border-white rounded p-3">
        <h1 class="font-title text-3xl text-center underline py-2">Bug Tracker</h1>
        <p>Application used to track software bugs throughout the development process.
        Allows customer to report a bug, see updates on it. Allows project managers to track
        progress of developers as they update the application with what they are working on.
        Administrator can add people to projects as well as reassign roles.</p>
        <h2 class="font-title text-xl pt-2 font-medium" >Skills:</h2>
        <ul>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>OAuth</li>
          <li>BCrypt</li>
        </ul>
      </div>
      
      <div class="w-10/12 mx-auto bg-black border-2 border-white rounded p-3">
        <h1 class="font-title text-3xl text-center underline py-2">Portfolio Site</h1>
        <p>This website was built to showcase the knowledge base that I have of Javascript, HTML, CSS for
        frontend development as well as rails for the backend development. It is a way for me to show what I have
        learned not only display examples but actually building an example</p>
        <h2 class="font-title text-xl pt-2 font-medium" >Skills:</h2>
        <ul>
          <li>Rails</li>
          <li>Rails</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
      
      <div class="w-10/12 mx-auto bg-black border-2 border-white rounded">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RjbYvPPicjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
}