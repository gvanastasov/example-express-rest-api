# **Example Express Web API**

This repository contains an example RESTful API built with Express.js, Swagger, and an in-memory SQLite database. It serves as a boilerplate for creating scalable and maintainable web APIs.

## **Features**

- Express.js: A fast and minimalist web application framework for Node.js, providing robust routing and middleware capabilities.
- Swagger: An open-source toolset for designing, building, documenting, and consuming RESTful web services. It provides a user-friendly interface to interact with the API and explore available endpoints.
- In-memory SQLite database: A lightweight, serverless database engine that stores data in memory. It allows you to quickly prototype and develop applications without the need for a separate database server.

## **Getting started**

To get started with the API, follow these steps:

1. Ensure you have sqlite3 up and running. Find your way around in [https://sqlite.org/](https://sqlite.org/index.html).
2. Download this repo.
3. Install dependencies and run.
```sh
npm install
```
4. Start the API by executing the following command:
```sh
# run via node
node ./bin/www

# or run via npm
npm run start
```
This will launch the API, and you can access it at http://localhost:3000.

## **Docker**

If you prefer not to install the dependencies locally and want to try out the API using Docker, follow these steps:

1. Build the Docker image by running the following command:
```sh
docker build -t example_web_api
```
2. Run the Docker container using the following command:
```sh
docker run -p 3000:3000 -d example_web_api
```
This will set up the API inside a Docker container, allowing you to access it on http://localhost:3000.

You can also use docker compose:
```sh
docker compose up --build
```

## **API Documentation**
The API is documented using Swagger. Once the API is running, you can access the Swagger UI to explore and interact with the available endpoints. Open your web browser and navigate to http://localhost:3000/api-docs.

## **License**
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
