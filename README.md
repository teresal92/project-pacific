# Project Pacific
## Overview
Single-page e-commerce web application using React.js for front-end and Node/Express.js for the main server.
Deployed through AWS.

* Optimized web performance using
  * React.lazy
  * gzip
* Testing:
  * Jest/React Testing Library

## Features
* [Product Overview Module](#product-overview-module)
* [Related Items and Outfit Creation Module](#related-items-and-outfit-creation-module)
* [Questions & Answers Module](#questions--answers-module)

## Product Overview Module
![ScreenShot](client/dist/images/project-pacific-overview.gif)
* Dynamic Image Gallery with Multiple Views
  * Default View: Scroll additional images on the main Image Carousel or Thumbnail Carousel
  * Expanded View: Click on image to zoom in to see additional product details
* Add To Cart Form
  * Add selected style, size, and quantity and add to cart
  * SKU logic to prevent customer from adding to cart if size and quantity is not selected. Prompts customer to select a size.
* Dynamically rendered product information
  * Browse average ratings, price, product description and category

## Questions & Answers Module
* Onload Questions
* Search Bar
* Ability to report a question and its helpfulness
* Accordian styling for readability

## Related Items and Outfit Creation Module

## Installation
1. Git Fork and Clone this repo
2. Open up a new terminal and run the following command to install dependencies:
```
npm install
```
2. Create a copy of config/config.example.js and rename it config.js
3. Replace empty string with Github Personal Access Token

## Setup
1. In separate terminals, run the following commands to start server and build webpack bundle
```
npm run start
```
```
npm run react-dev
```
2. In your browser, go to:
```
http://localhost:3000
```

## Technologies Used
- Setup and Configuration: git, npm, Babel, Webpack \
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

- Front End Development: Javascript, React.js, Axios, Material UI, HTML, CSS \
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- Back End Development: Node.js, Express.js, MongoDB \
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

- Deployment: AWS EC2, Ubuntu \
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)

- Testing: Jest, React Testing Library \
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## Team Members
* [Estevan Gonzalez](https://github.com/GonzalezEstevan)
* [Tristen Urban](https://github.com/TristenUrban)
* [Teresa Lew](https://github.com/teresal92)


