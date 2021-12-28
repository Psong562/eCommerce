   
#E-Commerce-Backend
Build the back end for an e-commerce site.

#####Table Of Content
- [General Info](#Generalinfo)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [Questions](#Questions)

#####General Info
We’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database. This application won’t be deployed so i’ll show a walkthrough video that demonstrates its functionality.
Image showcasing the application running in Insomnia. 

#####Technologies
Project is created with

Javascript
Node.js
Sequelize
MySQL2
Express
Dotenv

#####Installation
To get started clone this repository using

gitclone of the repository @ https://github.com/Psong562/eCommerce

#####Install dependencies

npm init --y
npm install express sequelize mysql2
Open up MySQL shell and input

source db/schema.sql
and

use ecommerce_db
Then quit MySQL shell and input the following in your terminal

npm run seed
to start running application simply input

node server.js
Open up Postman to GET, POST, PUT and DELETE from different routes.

Usage
The application is used to GET data for each route(categories, products, or tags) as well as create, update, and delete data in those routes.


###Video link
<a href = "https://watch.screencastify.com/v/eCPYHoBMHSCDM2mYLM9i">Video Link

#####Questions
Questions about this repository? Please contact me at psong562@gmail.com. View more of my work in GitHub at psong562

