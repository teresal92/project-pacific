# project-pacific
## Overview
Redesign and rebrand of retail storefront built using React.js and MUI for front-end components and Express.js for the main server.
Deployed through AWS.

## Table of Contents
* [Overview Module](#overview-module)
* [Related Items & Outfit Creation Module](#related-items--outfit-creation-module)
* [Questions & Answers](#questions--answers-module)

# Overview Module
* Image gallery
  * Default View: Image Carousel with thumbnail overlay to view additional images
  * Expanded View: Zoom feature to allow for zoom and pan to view product details
* Add To Cart Form
  * Add selected style, size, and quantity and add to cart
  * SKU (size and quantity) logic to prevent customer from adding to cart if size and quantity is not selected. Prompts customer to select a size.
* Dynamically rendered product information
# Questions & Answers Module
* Onload Questions
* Search Bar
* Ability to report a question and its helpfulness
* Accordian styling for readability
# Related Items & Outfit Creation Module

## Installation
1. Open up a new terminal and run the following command to install dependencies:
`npm install`
2. Create a copy of config/config.example.js and rename it config.js
3. Replace empty string with Github Personal Access Token

## Usage
1. In separate terminals, run the following commands to start server and build webpack bundle
`npm run start`
`npm run react-dev`
2. In your browser, go to:
`http://localhost:3000`

## Team Members
[Estevan Gonzalez](https://github.com/GonzalezEstevan)
[Tristen Urban](https://github.com/TristenUrban)
[Teresa Lew](https://github.com/teresal92)