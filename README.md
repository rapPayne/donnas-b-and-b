# Donna's Home away from Home - MERN App

A beautiful, responsive web application for Donna's Home away from Home bed and breakfast, built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **Responsive Design**: Beautiful orange-themed design that works perfectly on desktop and mobile devices
- **Interactive Help System**: Natural language processing for guest inquiries
- **Multiple Pages**: Home, About, Contact, and Help sections
- **Real-time Communication**: Chat-like interface for the help system
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 📄 Instructions for Using GitHub Secrets in Node.js

To ensure that all developers can securely manage sensitive information in our Node.js project, follow these steps to set up and use GitHub Secrets.

### 🔑 Storing Secrets in GitHub

1. **Navigate to the Repository**:
   - Go to the GitHub repository for this project.

2. **Access Repository Settings**:
   - Click on the **Settings** tab located at the top of the repository page.

3. **Go to Secrets and Variables**:
   - In the left sidebar, select **Secrets and variables**, then click on **Actions**.

4. **Add a New Secret**:
   - Click on the **New repository secret** button.
   - Enter a name for your secret (e.g., `MY_SECRET_KEY`).
   - Input the value you want to store.
   - Click **Add secret** to save it.

### 🛠️ Using Secrets in Your Node.js Script

1. **Create or Update Your GitHub Actions Workflow**:
   - Ensure you have a workflow file in the `.github/workflows` directory (e.g., `ci.yml`).
   - If you don’t have one, create a new YAML file.

2. **Define the Workflow**:
   - Use the following example to set up your workflow to access the secret:

   ```yaml
   name: CI

   on:
     push:
       branches:
         - main

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v2

         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '14'

         - name: Install dependencies
           run: npm install

         - name: Run script
           env:
             MY_SECRET_KEY: ${{ secrets.MY_SECRET_KEY }}
           run: node your-script.js
    ```  

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd donnas-bnb-mern
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

This will start both the React client (on port 5173) and the Express server (on port 5000) concurrently.

### Available Scripts

- `npm run dev` - Starts both client and server in development mode
- `npm run client` - Starts only the React client
- `npm run server` - Starts only the Express server
- `npm run build` - Builds the React app for production
- `npm run preview` - Preview the production build

## Project Structure

```
├── src/                    # React client source code
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components (Home, About, Contact, Help)
│   ├── App.tsx            # Main App component
│   └── main.tsx           # React entry point
├── server/                # Express server
│   └── index.js          # Server entry point and API routes
├── public/               # Static assets
└── package.json          # Project dependencies and scripts
```

## API Endpoints

- `POST /api/help` - Process natural language questions and return helpful responses
- `GET /api/health` - Health check endpoint

## Features Overview

### Home Page
- Hero section with call-to-action buttons
- Features showcase
- Guest testimonials
- Location information

### About Page
- Story of the bed and breakfast
- Core values and beliefs
- Meet the host section

### Contact Page
- Contact information
- Reservation form
- Business hours
- Planning information

### Help Page
- Interactive chat interface
- Natural language question processing
- Suggested common questions
- Real-time responses

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions about this project, please contact the development team or visit Donna's Home away from Home.

---

Built with ❤️ for Donna's Home away from Home