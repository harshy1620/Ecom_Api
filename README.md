# Ecommerce Platform Admin API

This project is an API designed to facilitate the management of product inventory for an ecommerce platform admin. The API allows admins to perform CRUD operations (Create, Read, Update, Delete) on the product inventory. It is built using Node.js and MongoDB as the tech stack.

## Tech Stack

- Node.js: A JavaScript runtime environment that enables executing JavaScript code outside the web browser.
- MongoDB: A popular NoSQL database used for efficient storage and retrieval of data.

## API Endpoints

The API provides the following endpoints for managing product inventory:

- `POST /products`: Create a new product in the inventory. This endpoint expects the product details in the request body.

- `GET /products`: Retrieve all products from the inventory. This endpoint returns a list of all products.

- `PUT /products/:id`: Update a specific product in the inventory based on its ID. This endpoint expects the updated product details in the request body.

- `DELETE /products/:id`: Delete a specific product from the inventory based on its ID. This endpoint requires the ID of the product as a parameter.

## Testing with Postman

To test the API endpoints, you can use a tool like Postman. Follow the steps below to test the API:

1. Ensure that the project is running locally or hosted on a server.

2. Open Postman and create a new request.

3. Set the request method to match the desired API endpoint (e.g., POST, GET, PUT, DELETE).

4. Enter the API endpoint URL (e.g., `http://localhost:4000/products` for creating a new product).

5. Add any required parameters or request body data according to the API endpoint documentation.

6. Click the "Send" button to make the API request.

7. Inspect the response received from the API to verify the operation's success and the returned data.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

2. Ensure you have Node.js and MongoDB installed on your system.

3. Open a terminal and navigate to the project directory.

4. Install the dependencies by running the command `npm install`.

5. Start the application by running the command `npm start`.

6. The API should now be running locally on `http://localhost:4000`.

7. You can use Postman or any other HTTP client to test the API endpoints as described above.

Feel free to explore and modify the project code to suit your specific requirements.

Happy coding!
