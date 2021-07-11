function createPortfolioPage() {
  document.getElementById('portfolio').innerHTML = `
    <div class="w-screen min-h-screen bg-abstract-background bg-no-repeat bg-cover bg-fixed md:grid grid-cols-2 gap-2 py-20 text-white font-body text-xl">
      <div class="flex items-center justify-center">
        <iframe class="rounded shadow-xl" width="560" height="315" src="https://www.youtube.com/embed/wcGPN8-L5_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <div class="w-10/12 mx-auto bg-black bg-opacity-80 border-2 border-white rounded p-3 text-center">
        <h1 class="font-title text-3xl text-center underline py-2">Simply Give</h1>
        <p>A CLI application that allows users to find charities that support a cause they believe in.
        Cuts time down from searching the web and going to each site. Quickly gives them a summary of what each charity
        is about and then allows user to navigate to that page if they are interested in donating.</p>
        <h2 class="font-title text-xl pt-4 font-medium" >Skills:</h2>
        <ul>
          <div class="md:grid grid-cols-2 text-center">
            <li>Ruby</li>
            <li>OO Programming</li>
            <li>Associations</li>
            <li>Inheritance</li>
            <li>Metaprogramming</li>
            <li>APIs</li>
          </div>  
        </ul>
      </div>
      
      <div class="w-10/12 mx-auto bg-black bg-opacity-80 border-2 border-white rounded p-3 text-center">
        <h1 class="font-title text-3xl text-center underline py-2">Been There Done That</h1>
        <p>An application that allows user to track and plan their adventures. Once logged in they are taken to a homebase that keeps track of the trips they have taken, activities they have done, and states they have traveled to. They are also able to search by state, activity, or both to see what other adventurers have done and get ideas for their next trip.</p>
        <h2 class="font-title text-xl pt-4 font-medium" >Skills:</h2>
        <ul>
          <div class="grid grid-cols-2 text-center">
            <li>MVC</li>
            <li>SQL</li>
            <li>Ruby</li>
            <li>Active Record</li>
            <li>Sinatra</li>
            <li>OR-Mapping</li>
            <li>Rack</li>
            <li>Sessions</li>
          </div>  
        </ul>
      </div>
      
      <div class="flex items-center justify-center">
        <iframe class="rounded shadow-xl" width="560" height="315" src="https://www.youtube.com/embed/Oe_ZnWt6SVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <div class="flex items-center justify-center">
        <iframe class="rounded shadow-xl" width="560" height="315" src="https://www.youtube.com/embed/YwVB3NcyAJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <div class="w-10/12 mx-auto bg-black bg-opacity-80 border-2 border-white rounded p-3 text-center">
        <h1 class="font-title text-3xl text-center underline py-2">Bug Tracker</h1>
        <p>An application used to track software bugs throughout the development process. Allows customer to report a bug and see updates on them. Allows project managers to track progress of developers as they update the application with issues, next steps, and notes. Allows administrator to add people to projects as well as reassign roles. Application is still in development but was used for tracking bugs in my own programs.</p>
        <h2 class="font-title text-xl pt-4 font-medium" >Skills:</h2>
        <ul>
          <div class="grid grid-cols-2 text-center">
            <li>MVC</li>
            <li>Rails</li>
            <li>CRUD</li>
            <li>ActionView</li>
            <li>RESTful Routing</li>
            <li>Partials</li>
            <li>OAuth</li>
            <li>Has_secure_password</li>
            <li>Controller Validations</li>
            <li>Nested Routes</li>

          </div>  
        </ul>
      </div>
      
      <div class="w-10/12 mx-auto bg-black bg-opacity-80 border-2 border-white rounded p-3 text-center">
        <h1 class="font-title text-3xl text-center underline py-2">Portfolio Site</h1>
        <p>This website was built to showcase what I have done so far as a programmer, as well as showcase my ablility as a frontend developer. Rails was used for the backend as an API, but the entire frontend was build with JavaScript, HTML, and CSS. This site utalizes DOM manipulation, event listeners, object oriented programming with JavaScript classes, advanced functions and more.</p>
        <h2 class="font-title text-xl pt-4 font-medium" >Skills:</h2>
        <ul>
          <div class="grid grid-cols-2 text-center">
            <li>JavaScript</li>
            <li>JSON</li>
            <li>HTML</li>
            <li>Fetch Requests</li>
            <li>Rails as API</li>
            <li>CSS</li>
            <li>Fullstack Web Development</li>
            <li>OO Programming</li>
            <li>RESTful Routing</li>
            <li>Nested Routes</li>

          </div>  
        </ul>
      </div>
      
      <div class="flex items-center justify-center">
        <iframe class="rounded shadow-xl" width="560" height="315" src="https://www.youtube.com/embed/RjbYvPPicjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
}