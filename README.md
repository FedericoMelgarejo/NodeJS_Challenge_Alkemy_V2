# DisneyAPI
### technical challenge developed in nodejs with express and mysql to apply for alkemy's acceleration
[pdf]:./Challenge_Backend_Node.pdf
#### [Challenge][pdf]

To start the project, after cloning the repository:

- It is necessary to have installed *NodeJS*
- Execute the "*npm install*" command to install the necessary dependencies.
- Fill in the fields with the DB data in the .env file
- Once the database is configured, run the following commands:
- "*sequelize db:migrate*" this will generate the necessary tables in the db
- "*sequelize db:seed:all*" that will populate the db with test data
- Optionally you can generate an api key in sendgrid for automatic email sending, whose respective variable can be configured in the .env file
- Finally, run *"npm start"* to start the proyect
- Endpoints documentation here: https://documenter.getpostman.com/view/16608092/UVeDt7zY
