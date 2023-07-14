# howhow API
This is the backend for the email submission form of the howhow web application. It is built with yarn, Node.js, and Express.

## Project Description
The howhow API serves as the backend for the email submission form in the howhow web application. It allows the frontend to send emails using the NodeMailer library.

## Project Setup
To set up the project, please follow these instructions:

1. Clone the repository from GitHub: https://github.com/profparedes/howhow-api.
2. Create a copy of the `env.example` file and rename it to `.env`.
3. In the `.env` file, insert the values for the following variables:
```
SMTP_HOST: The SMTP host provided by your MailTrap account.
SMTP_PORT: The SMTP port provided by your MailTrap account.
SMTP_USER: The SMTP username provided by your MailTrap account.
SMTP_PASS: The SMTP password provided by your MailTrap account.
```
4. Sign up for an account on the MailTrap website: https://mailtrap.io.

Once you have an account, you'll receive the necessary SMTP credentials.
Copy the SMTP host, port, username, and password from your MailTrap account and paste them into the corresponding variables in the `.env` file.

By configuring MailTrap, you can test the email submission functionality of the howhow API without sending emails to real recipients.

5. Clone the repository from GitHub: https://github.com/profparedes/howhow-web-app.git

Follow the instructions in the howhow-web-app repository's README to set up the frontend project.

### Prerequisites
Before running the howhow API, ensure that you have the following installed:

Node.js
Yarn

### Installation
To install the necessary dependencies, follow these steps:
1. Open a terminal and navigate to the project's root directory.
2. Run the following command to install the dependencies:
```
yarn install
```

### Running the API
To start the howhow API, run the following command:
```
yarn start
```
The API will be available at http://localhost:5000.

## Testing the Email Submission
To test the email submission functionality, ensure that you have created a MailTrap account and obtained the required SMTP credentials.

1. Start the howhow API by following the instructions above.
2. Run the howhow web application by following the instructions in the howhow-web-app repository.
3. Fill out the form in the web application.
4. Submit the form, and the API will send an email to your MailTrap account.

Please note that the howhow API is configured to work with MailTrap for testing purposes. You may need to adjust the email settings if you intend to use a different email service in production.

Feel free to reach out to the project maintainer for any further assistance.

#### Happy emailing!