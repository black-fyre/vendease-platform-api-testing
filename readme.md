
---

# ResReq API Tests

This repository contains API tests for the ResReq application using Mocha, Chai, and Supertest.

## Prerequisites

- Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/blackfyre/vendease-platform-api-testing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vendease-platform-api-testing
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

To run the API tests, execute the following command:

```bash
npm test
```

This will trigger Mocha to execute the tests, and Chai assertions will be used for validation.

## Test Description

The test suite (`ResReq API Tests`) is designed to create users in the ResReq application and validate the API responses. 
Each test case in the suite creates a user, measures the response time, checks the status code, 
validates the response schema against the JSON schema, and ensures that the headers contain the required `Content-Type` information.

## Additional Information

- The users are specified in the `fixtures/users.json` file.
- Status code `201` is expected for a successful user creation.
- The response schema is validated against the defined JSON schema.


---