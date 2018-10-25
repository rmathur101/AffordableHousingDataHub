# AffordableHousingDataHub
The AffordableHousingDataHub is a web application created as part of a Code for America Community Fellowship in Austin TX. It allows users to access and update an affordable housing database. An instance of this application was deployed for Austin TX so that government agencies and non profits could access and update a single comprehensive source of affordable housing. 

### Technologies
AffordableHousingDataHub uses node.js on the backend and react.js on the front end. The database configured by default is mysql. 

### Installation
1. npm install.
2. create a folder called 'config' with the files in the folder called 'sample_config'. by default git will ignore this directory under the app folder.
3. create a file called 'config_path.txt' within the app folder. by default git will ignore this file. put the absolute path to the config folder you created. for example, /Users/britney/Desktop/affordable_housing_data_hub/app/config/
4. make sure that you have mysql installed on whatever machine is running the app
5. create database called 'AffordableHousingDataHub'
6. under app/scripts/sql you'll find create table statements. create all the tables.
7. in your config directory, add the following values for each of the files
  - db_user.txt: user with read / write access to database AffordableHousingDataHub
  - db_pass.txt: password of user
  - session_secret: some secret created by you, will be used by express-session to encrypt / decrypt session information
  - db_socket_path.txt: the location of the mysql socket file that will allow the app to connect to mysql, for example: /tmp/mysql.sock
    - NOTE: MySQL can use either an internet socket (addr:port) or a UNIX socket (on a filesystem) for connections.
  - NOTE: if you get this message: "Client does not support authentication protocol requested by server; consider upgrading MySQL client" - use this sql statment to identify the user with the password: ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'
  
4. run run_dev.sh to run the backend in development. this will run the node server and watch for any backend changes.
5. run npm run build-dev. this will bunlde js files from public/js into public/dist and watch for any changes in public/js.
