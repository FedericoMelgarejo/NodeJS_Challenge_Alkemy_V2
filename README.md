# DisneyAPI
### Technical challenge developed in nodejs with express and mysql to apply for alkemy's acceleration
[pdf]:./Challenge_Backend_Node.pdf
#### [Challenge][pdf]

To start the project, after cloning the repository:

- It is necessary to have installed *NodeJS*
- Execute "*npm install*" to install the necessary dependencies.
- Fill in the fields with your DB data in the .env file
- Once your database is configured, run the following commands:
- "*sequelize db:migrate*" this will generate the necessary tables and columns in your DB.
- "*sequelize db:seed:all*" that will populate the DB with example data.
- Optionally you can generate an api key in https://docs.sendgrid.com/for-developers for automatic email sending, whose respective variable can be defined in the .env file
- Finally, run *"npm start"* to start the project
- Endpoints documentation here: https://documenter.getpostman.com/view/16608092/UVeDt7zY
