# AffordableHousingDataHub

1. npm install.
2. create a folder called 'config' with the files in the folder called 'sample_config. these files will contain plain text values that will allow the application to connect to services like mysql.
3. change the path in initConfig.js to the path of the config folder you created.
4. run run_dev.sh to run the backend in development. this will run the node server and watch for any backend changes.
5. run npm run build-dev. this will bundle js files from public/js into public/dist and watch for any changes in public/js.

run this
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'
if you got this
Client does not support authentication protocol requested by server; consider upgrading MySQL client
MySQL can use either an internet socket (addr:port) or a UNIX socket (on a filesystem) for connections.

add in portion about contributions