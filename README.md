
# Sahaya WhatsApp Bot

A Node.js backend server that powers a WhatsApp bot using the Twilio API. It automatically replies to incoming messages with a friendly greeting.

## Features

-   🤖 Automated replies to WhatsApp messages via Twilio
-   🗃️ MongoDB integration for potential data storage
-   🔧 Built with Express.js and modern ES6 imports
-   🌐 CORS-enabled for cross-origin requests

## Prerequisites

Before running this project, make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)
-   [MongoDB](https://www.mongodb.com/) (local or Atlas URI)
-   [ngrok](https://ngrok.com/download) (for local development)
-   A [Twilio](https://www.twilio.com/) account with WhatsApp Sandbox access

## Installation

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd sahaya-whatsapp-bot
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file in the root directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string_here
    ```
    - For local MongoDB: `mongodb://localhost:27017/your-database-name`
    - For MongoDB Atlas: Use the connection string from your Atlas dashboard

## Usage

### 1. Start the Development Server
```bash
npm start