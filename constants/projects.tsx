const mdProject1 = {
  title: 'Electricity Predictor',
  description:
    'A machine learning project engineered to forecast electricity prices and production in Slovenia, enhancing energy management and strategic planning.',
  details: `Electricity Predictor is a machine learning project designed to forecast electricity prices and production in Slovenia. It leverages advanced Recurrent Neural Networks (RNNs), specifically Gated Recurrent Units (GRUs) and Bidirectional GRUs, for accurate predictions. The project also provides insights into the production of various energy sources, including hydro, fossil, nuclear, and cross-border trading.

## Features
- **Electricity Price Prediction**: Forecasts the next 24 hours of electricity prices for the following day.
- **Energy Production Prediction**: Predicts daily production levels for hydro, fossil, nuclear, and cross-border trading.
- **Data Validation**: Includes data validation using GX and Evidently.
- **Model Evaluation**: Daily evaluation using KS tests and custom reports.
- **Model Compression**: Utilizes quantization for model compression.
- **Training Enhancements**: Implements learning rate reduction and early stopping.
- **Data and Experiment Tracking**: Uses DVC for data versioning and MLflow for experiment tracking.
- **Model Deployment**: Models are converted to ONNX format and served using ONNX Runtime.
- **Server**: Written in FastAPI, exposing models and latest data via API endpoints.
- **Client**: Built with Next.js, offering an interactive UI/UX and an extended admin dashboard. Uses React Query for efficient API calls and caching.
- **CI/CD**: Fully automated CI/CD pipelines for server and client deployment, data fetching.

## Project Structure
\`\`\`
├── README.md <- File containing project description and setup instructions
├── data
    ├── processed <- Processed data, prepared for training models
    └── raw <- Raw fetched data
├── models <- Trained and serialized models, model predictions, or summaries of models
├── notebooks <- Jupyter notebooks
├── reports <- Generated analysis files
    └── figures <- Generated graphs and images used in the analysis
    └── sites <- Generated sites in the data validation
├── pyproject.toml <- File defining dependencies, library versions, etc.
├── src <- Source code of the project
  ├── __init__.py <- Initializes the "src" directory as a Python module
  ├── data <- Scripts for data downloading, processing, etc.
      └── validation <- Scripts for data validation
  ├── models <- Scripts for training predictive models and using models for prediction
  ├── serve <- Scripts for serving models as web services
  ├── client <- Source code for the user interface
  |── tests <- Tests for the project
  ├── config.py <- Project configuration file
  └── visualization <- Scripts for visualization
\`\`\`

### Modeling
- **Models**: Uses GRU and Bidirectional GRU architectures.
- **ONNX Format**: Models are converted to ONNX format for efficient deployment.
- **Quantization**: Applied to reduce model size and improve inference speed.
- **Learning Rate Reduction and Early Stopping**: Implemented to enhance training efficiency.

### Data Management
- **Data Version Control (DVC)**: Manages datasets and tracks changes.
- **MLflow**: Tracks experiments, models, and daily evaluations.

### Server
- **FastAPI**: Serves the models and provides API endpoints for the latest data.
- **Cron Jobs**: Automates daily tasks such as model registry updates and predictions.

### Client
- **Next.js**: Provides a modern, interactive UI/UX.
- **React Query**: Handles API calls and caching.
`,
};

const mdProject2 = {
  title: 'CompanyHub',
  description: `An agile workflow management application that streamlines project management and collaboration for small teams, boosting productivity and efficiency.`,
  details: `
This project aims to develop a web application tailored for IT companies and beyond, providing an intuitive and efficient solution for task management and execution within the organization. The application offers a range of features that enhance project coordination and facilitate efficient task handling.

## Features
- **Graphical Project Management**: The application allows for easy graphical management of projects, enabling teams to visualize and organize tasks efficiently.


- **Agile Task Board**: Tasks can be managed on an agile task board, providing a flexible and collaborative environment for teams to track and prioritize their work.


- **GitHub Integration**: The application features seamless integration with GitHub. When a user creates a branch for a specific task, the corresponding ticket is automatically moved to the "Doing" column on the agile task board. As work progresses and the branch is eventually merged back into the main codebase, the ticket is automatically moved to the "Done" column, indicating completion. This integration ensures that task status on the task board accurately reflects the progress of code development and streamlines the workflow for teams working on software projects.


- **Internal Knowledge Base**: The application incorporates an internal knowledge base. It enables users to publish and search for internal problems and knowledge, fostering knowledge sharing and efficient problem resolution.


- **AI-Powered Problem KnowledgeBaseSearch**: Leveraging artificial intelligence (ChatGPT), the application offers intelligent problem search capabilities tailored to the company's knowledge base. This feature enables employees to swiftly find solutions to recurring issues and exchange insights and opinions.


- **Calendar Integration**: The application includes a calendar function to plan and manage project timelines, events, meetings, and deadlines.

## Technologies

This project leverages the following technologies:

- **Next.js**: A powerful React framework for building modern web applications.
- **Typescript**: A typed superset of JavaScript that enhances code readability and maintainability.
- **tRPC**: A lightweight and fast TypeScript RPC (Remote Procedure Call) framework for building APIs.
- **Prisma**: A modern database toolkit that simplifies database access and management.
- **PlanetScale MySql**: A cloud-native, scalable, and highly available MySQL-compatible database solution.
- **TailwindCSS**: A utility-first CSS framework that enables rapid UI development with pre-built and customizable components.
- **Clerk Auth**: A user authentication and authorization platform that simplifies secure user management.

These technologies have been carefully chosen to ensure efficient development, maintainable codebase, robust APIs, scalable databases, and a responsive and visually appealing user interface.
`,
};

const mdProject3 = {
  title: 'Watt4Cast',
  description:
    'A smart forecasting tool for home solar power plants, providing real-time data visualization and control to optimize energy production and consumption.',
  details: `
**Always in touch with your energy**

Smart forecasting of the energy production of your home solar power plant. View and control data at your fingertips.

**Our vision**

With our services, users can plan their consumption and adjust their needs according to the forecasted production. An insight into the statistics makes it possible to understand the consumption of electricity and its impact on the environment.

**Why choose us?**

Application intended for owners of green power plants and organizations that want a better insight into electricity production statistics. With the help of advanced technologies, we can predict the production of various solar power plants. Our services enable a precise and flexible review of data, both retrospectively and in advance.

**We offer...**

- Solar energy forecast
- Adding a home power plant
- Production overview with graphs
- A predictive model
- Organizations
`,
};

const mdProject4 = {
  title: 'Workspace Reservation System',
  description:
    'A user-friendly web application for reserving workspaces dynamically or in advance, ensuring flexible and efficient workspace management for whole team.',
  details: `
The Workspace Reservation System is a web application designed for Endava, providing employees with the ability to dynamically choose and reserve their workspaces in advance. This system is built to enhance convenience, save time, and optimize the workflow within the company. With an intuitive user interface and robust backend support, it ensures a seamless reservation experience.

## Key Features

- **Dynamic Workspace Selection**: Easily choose available workspaces from a visual map of the office.
- **Advance Reservations**: Reserve workspaces days in advance to plan your schedule effectively.
- **User-Friendly Interface**: Simple and intuitive design for a hassle-free user experience.
- **Optimization of Workflow**: Helps in better management of workspace utilization and planning.

## Frontend Technologies

The frontend of the application is built using modern web technologies and libraries to ensure a responsive and high-performance user experience.

- **Redux**: State management library to manage application state efficiently.
- **Redux-Saga**: Middleware library to handle side effects in Redux.
- **Redux Toolkit**: Set of tools to simplify Redux development.
- **React-Router**: Library for handling navigation and routing within the application.
- **TailwindCSS**: Utility-first CSS framework for styling the application.
- **TypeScript**: Typed superset of JavaScript to enhance code quality and maintainability.
- **React-Hook-Form**: Library for handling form validation and state management.
- **UUID**: Library for generating unique identifiers.
- **Axios**: Promise-based HTTP client for making API requests.
- **i18next**: Internationalization framework to support multiple languages.

## Backend Technologies

The backend is powered by scalable and robust technologies to ensure efficient data handling and processing.

- **NestJS**: Framework for building efficient, reliable, and scalable server-side applications.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **TypeScript**: Provides static type definitions to enhance code quality and maintainability.

Enhance your workspace management with our dynamic and efficient reservation system. Save time, optimize your workflow, and ensure a seamless experience for all employees at Endava.
`,
};

export const projectsMarkdown = [
  mdProject1,
  mdProject2,
  mdProject3,
  mdProject4,
];
