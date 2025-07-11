# Vital_Prompt_Forge 🚀

Vital_Prompt_Forge is an intelligent personal library for storing, managing, and searching your most valuable AI prompts. It's built with a modern, secure architecture to ensure your data and API keys are always safe.

---

## Project Summary & Achievements

The primary goal of this project was to create a simple, free, and secure system for prompt management. The core achievement is its **decoupled and secure architecture**.

- **Problem Solved**: Instead of putting the secret Notion API key directly into the frontend React application (where it could be easily exposed to the public), we built a dedicated backend server.

- **How it Works**: The React frontend only handles the user interface. When it needs data, it makes a request to our own backend server. The backend server then securely communicates with the Notion API using the hidden API key, retrieves the data, and sends it back to the frontend.

- **Key Achievement**: 🔒 **Security First**. The Express.js server acts as a secure vault. The Notion API key **is never exposed** to the client-side browser, which is a professional standard for web application development. This makes the application robust and safe.

---

## Architecture

The application uses a modern, decoupled architecture. This separates concerns, improves security, and allows each part of the system to be developed and scaled independently.

```
+----------------+      +---------------------+      +----------------+
|                |      |                     |      |                |
|  React        <------>   Express.js Server   <------>   Notion API   |
|  (Frontend)    |      |   (Backend API)     |      |   (Database)   |
|                |      |                     |      |                |
+----------------+      +---------------------+      +----------------+
  (Runs in User's           (Your secure server,      (Data stored here)
   Browser)                  holds the API key)
```

---

## Technology Stack & Integrations

### 🛠️ Core Technologies

- **Frontend**: React (with Vite), Tailwind CSS, lucide-react
- **Backend**: Node.js, Express.js
- **Database**: Notion

### 🔌 Integrations & Server Logic

- **`@notionhq/client`**: The official Notion JavaScript SDK used on the backend to communicate with the Notion API.
- **`cors`**: A security middleware for Express that allows the React frontend (running on a different port) to make requests to the backend server.
- **`dotenv`**: A module that loads secret keys and configuration from a `.env` file into the server's environment, keeping them out of the source code.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js installed on your machine.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd Vital_Prompt_Forge
    ```

2.  **Install Frontend Dependencies:**

    ```bash
    npm install
    ```

3.  **Install Backend Dependencies:**

    ```bash
    cd server
    npm install
    ```

### Configuration

1.  Navigate into the `server` directory.
2.  Create a file named `.env`.
3.  Add the following content to the `.env` file, replacing the placeholder values with your actual Notion credentials:

    ```env
    # Secret key for your Notion integration
    NOTION_API_KEY="YOUR_SECRET_NOTION_API_KEY"

    # The ID of the Notion database you want to connect to
    NOTION_DATABASE_ID="YOUR_NOTION_DATABASE_ID"

    # The port for the backend server to run on
    PORT=3001
    ```

### Running the Application

You will need to run two separate terminals to start both the frontend and backend servers.

1.  **Start the Backend Server:**

      * In a terminal, navigate to the `/server` directory.
      * Run the command:
        ```bash
        node index.js
        ```
      * Your API server will be running at `http://localhost:3001`.

2.  **Start the Frontend Application:**

      * In a second terminal, navigate to the project's root directory.
      * Run the command:
        ```bash
        npm run dev
        ```
      * Your React application will open in your browser, likely at `http://localhost:5173`.
