

Setup For Angular
open Cmd and go till unizyr Folder
execute below commands:
npm install
ng serve --open


Setup for NodeJs
open CMD and go till backend Folder
execute below commands:
npm install
npm start

To Change the host of Backend:
Go to /Backend/bin/www
on line number 14 change 3000 to any host you want

NOTE: IF YOU ARE CHANGING THE HOST OF THE BACKEND,ANGULAR APP WILL NOT RESPOND AS WE HAVE SETTED REST API PORT AS 3000

Database Setup
MySQL database file is there in backend Folder:
"backend\unizyr.sql"
import this file in phpmyadmin database either you use xampp and wampp you will have to import this database.


USER DISPLAY:
localhost:4200/users

REGISTER USER:
localhost:42000/adduser