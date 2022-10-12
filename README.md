<a name="readme-top"></a>
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/akg07/Node-Authentication">
    <img src="assets/screenshots/api_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Ecommerce API</h3>

  <p align="center">
    An Ecommerce API to manupulate database by using CRUD operaitons
    <br />
    <a href="https://github.com/akg07/Ecommerce-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/akg07/Ecommerce-api#readme">View Demo</a>
    ·
    <a href="https://github.com/akg07/Ecommerce-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/akg07/Ecommerce-api/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
    <a href="#Sample-images-from-postman">Sample Images from postman</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li a="#configure">Configure</li>
    <li a="#run-on-postman">Run on postman</li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Login page Screen Shot][product-screenshot]](https://github.com/akg07/Node-Authentication/blob/master/assets/Project_imgs/Login_img.png) -->


In this project We applied all CRUD operations on product document in collection ecommerce-api.

CRUD operations are
* Create a new Product
* Read All the Products
* Update a product
* Delete a product

Project has been designed as per MVC architecure, routers and controller are sperated.
Router and Controller has API folder which has all API related modules.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sample Images from POSTMAN
Here are some sample images of the CRUD Ops. Have a quick look

#### Create a new Product
![SignUp Page Screen Shot][create-screenshot]

#### Read All the products
![home Page Screen Shot][read-screenshot]

#### Update a product
![profile Page Screen Shot][update-screenshot]

#### Delete a product
![Re-verify Page Screen Shot][delete-screenshot]

### Built With

This project is build with various libraries and frameworks. Some of them is listed below

* [Node Js](https://nodejs.org/en/)
* [Express Js](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Postman](https://www.postman.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

For start the project you need to have some prerequisites.

### Prerequisites
npm is mandatory for install and runing the project

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Clone the project from Git and install all the required libraries for the project

1. Clone the repo
   ```sh
   git clone https://github.com/akg07/Ecommerce-api
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Configure

Here you have to make some configuraiton to run this project on your system
1. Install Postman in your system (We use Postman for API Authenticity)

2. Install nodemon using npm (Ignore if already Installed)
    ```
    npm install nodemon
    ```
3. Now all configurations has been completed, run below command in terminal to run the application
    ```
    npm start
    ```

## Run on postman

#### Create a new product
1. Select request type as <b>Post</b>
2. In Url insert this
    ```
    http://localhost:8000/api/products/create
    ```
3. Select body and raw
4. Select text as json
5. Insert details of the products(without id)
    ```
    {
        "name" : "<Any name you want>",
        "quantity" : <quantity of the product>
    }
    ```
6. Click on send button
7. You will get a response from server as 200 success and product details with ID
8. Example: 
    ```
    Request

    URL -> http://localhost:8000/api/products/create
    json text -> 
    {
        "name" : "Apple Mac",
        "quantity" : 15
    }

    Response

    "product": {
        "id": 1,
        "name": "Apple Mac",
        "quantity": 15,
        "_id": "6346fe17b500f694bc837abd"
    }
    ```

#### Read all the products
1. Select request type as <b>Get</b>
2. In Url insert this
    ```
    http://localhost:8000/api/products
    ```
3. You will get a response from server as 200 success and an array of products.

#### Update a product
1. Select request type as <b>Post</b>
2. In Url insert this
    ```
    http://localhost:8000/api/products/<product_id>/update_quantity/?number=<any_nummber>
    ```
3. Replace <product_id> in above url with the product id of the produt you want to update.
4. Replace <any_number> in above url with the number you want to increment or decrement.
    a. Want to increment keep <any_number> as positive
    b. Want to decrement keep <any_number> as negative
5. Server Will send a response as 200 success with product updated details and a message
6. Example: 
    ```
    Request
    URL -> http://localhost:8000/api/products/1/update_quantity/?number=5
    
    Response
    {
        "product": {
            "_id": "6346fe17b500f694bc837abd",
            "id": 1,
            "name": "Apple Mac",
            "quantity": 20,
            "__v": 0
        },
        "message": "Updated successfully"
    }

    ```

#### Delete a product
1. Select request type as <b>Delete</b>
2. In Url insert this
    ```
    http://localhost:8000/api/products/<product_id>
    ```
3. Replace any number with <product_id> in above url
4. You will get a response from server as 200 success
    ```
    {
        "message": "Product Delete"
    }
    ```
5. Example
    ```
    Request
    URL -> http://localhost:8000/api/products/1

    Response
    {
        "message": "product Deleted"
    }
    ```

<!-- CONTACT -->
## Contact
In Case of any issue related to project setup or anything please contact me on ayush3032@gmail.com 

Aayush Kumar Gupta - [@Aayushkg_07](https://twitter.com/Aayushkg_07) - ayush3032@gmail.com

Project Link: [Ecommerce Api](https://github.com/akg07/Ecommerce-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* [Open Source License](https://choosealicense.com)
* [Coding Ninjas](https://www.codingninjas.com/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/othneildrew

[product-screenshot]: assets/Project_imgs/Login_img.png

[signup-screenshot]: assets/Project_imgs/Signup_img.png

[home-screenshot]: assets/Project_imgs/home_img.png

[profile-screenshot]: assets/Project_imgs/profile_img.png

[update-password-screenshot]: assets/Project_imgs/update_password_img.png

[Re-verify-screenshot]: assets/Project_imgs/reverify_user_img.png
