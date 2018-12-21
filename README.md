# AffordableHousingDataHub
The AffordableHousingDataHub is a web application created as part of a Code for America Community Fellowship in Austin TX. It allows users to access and update an affordable housing database. An instance of this application was deployed for Austin TX so that government agencies and non profits could access and update a single comprehensive source of affordable housing.

### Technologies
AffordableHousingDataHub uses node.js on the backend and react.js on the front end. The database configured by default is mysql.

### Installation
1. npm install.
2. create a folder called 'config' with the files in the folder called 'sample_config'. by default git will ignore this directory under the app folder.
3. create a file called 'config_path.txt' within the app folder. by default git will ignore this file. put the absolute path to the config folder you created. for example, /Users/britney/Desktop/affordable_housing_data_hub/app/config/
4. make sure that you have mysql installed on whatever machine is running the app. the version used for this project was version: 8.0.12 MySQL Community Server. if you have to define a scheme or a database name, call it 'AffordableHousingDataHub'
5. under app/sql you'll find development_db.sql. import this into your sql instance, and it will create / replace with a database called AffordableHousingDataHub. This will contain property data as of 12/18/18. It will also include one user account that you can use for testing. Email is 'test@gmail.com'. Password is 'password'.
6. in your config directory, add the following values for each of the files
  - db_user.txt: user with read / write access to database AffordableHousingDataHub
  - db_pass.txt: password of user
  - session_secret: some secret created by you, will be used by express-session to encrypt / decrypt session information
  - db_socket_path.txt: the location of the mysql socket file that will allow the app to connect to mysql, for example: /tmp/mysql.sock
    - NOTE: MySQL can use either an internet socket (addr:port) or a UNIX socket (on a filesystem) for connections.
    - NOTE: if you get this message: "Client does not support authentication protocol requested by server; consider upgrading  MySQL client" - use this sql statment to identify the user with the password: ALTER USER 'root' IDENTIFIED WITH         mysql_native_password BY 'password'

7. add a logfile called app.log under the logs. error logging will be written here. 
8. run `npm run dev` to run the backend in development. this will run the node server and watch for any backend changes.
	- NOTE: on production we currently use the node package `pm2` which is a process manager. we run app.js with the NODE_ENV=PRODUCTION. it is advised to install `pm2` globally for production.
9. run `npm run build-dev`. this will bunlde js files from public/js into public/dist and watch for any changes in public/js.
10. note that node version 9.2.1 was used to run this app in production. npm version 5.6.0 was used.
