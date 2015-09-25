# taskManager
todo list for multiple users with Angular.js

This project stared as a simple todo app with Angular, like my backbone calendarApp.  The user is a manager of employees and regularly has a different set of tasks to complete, but has a hard time tracking who is doing those tasks and when or if they are completed.  With this app, the user can first create their list of tasks to complete, clock in employees as they arrive for work, and assign those employees tasks from the main list.  When the employee reports completion of a task, the task is moved off of the employee list and into the completion list with the employee's name and time of completion.  Server side code is very basic and was only added at the end.  Angular side has one controller and has a filter on the date object.  Several conditional statements were added into the $scope methods for testing purposes.

Directory structure:
In the person_iteration directory, person.html and person.ctrl are static files for a basic todo list for a single person.  This was the beginning of this project, and only exists as a frame of reference.

To start the server, type `node server.js` and you'll see the contents of the public directory at `localhost:3000`.

Currently, the data isn't persistent.  

Future iteration: I'm probably going to rebuild this with an Express generator, refactor index.html into Jade, add in gulp to concat the javascript files, add in a log-in feature, and connect the server with a mongo database, and probably but unlikely make it look prettier with sass if I can come up with a theme.