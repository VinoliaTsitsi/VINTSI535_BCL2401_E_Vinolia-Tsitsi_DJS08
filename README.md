# DJS08 Project Brief: React Router 

https://www.loom.com/share/6362d8b7149b4ff7bcfaccfc73981386?sid=43cecd6c-af7c-49db-adac-1594075d36aa

##About the Application
This is a React application that provides a platform for users to browse and interact with vans. The application has two main sections: one for guests and one for hosts.

##Features
Guest Section
Browse available vans
View van details
Access pages for about and login
Host Section (Authenticated)
Dashboard for managing vans
Income tracking
Reviews management
Van management with details, pricing, and photos
Directory Structure
The application is structured into the following directories:

pages: Contains components for each page (e.g., Home, About, Vans, etc.)
components: Contains reusable UI components (e.g., Layout, HostLayout, AuthRequired, etc.)
server: Not currently used ( commenting out the import statement)
Routes
The application uses React Router to handle client-side routing. The routes are defined in the App.js file and include:

/: Home page
/about: About page
/vans: Vans listing page
/vans/:id: Van detail page
/login: Login page
/host: Host dashboard ( authenticated )
/host/income: Income tracking page ( authenticated )
/host/reviews: Reviews management page ( authenticated )
/host/vans: Van management page ( authenticated )
/host/vans/:id: Host van detail page with info, pricing, and photos ( authenticated )
*: 404 Not Found page (catch-all)

##Setup and Running
Run npm install to install dependencies
Run npm start to start the development server
Open http://localhost:3000 in your browser to access the application
Note
This README is a basic outline of the application's structure and features. You may want to add more details, such as dependencies, testing information, or contributing guidelines, as the project evolves.
