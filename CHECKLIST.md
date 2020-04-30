# Technical and Complexity Requirements

- [x] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend.  
**Project is split into a backend folder and frontend folder. The backend is handled by Ruby on Rails. The frontend is handled in Javascript/HTML/CSS.**
- [x] All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.
  **Every action is handled as a single-page application, with no page refreshes**
- [ ] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.
- [x] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.  
  **Users have many comments**
- [x] The backend and frontend must collaborate to demonstrate Client-Server Communication.
- [x] Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). **I perform GET, POST and DELETE**
- [x] Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions. **```fetchUsers(), fetchHandles() and fetchTweets()``` all use GET, ```postUser() and postHandle()``` use POST and ```deleteHandle()``` uses DELETE.
