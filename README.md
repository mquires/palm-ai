# Project Documentation

## Overview

This project is a web application that utilizes React and TypeScript to provide image processing functionalities. It leverages the power of the TanStack Query library for data fetching and state management, along with Chart.js for visualizing data through line charts. Additionally, the application supports localization, allowing users to interact with the interface in their preferred language.

## Features

- **Image Processing**: Users can upload images for processing, with error handling for various scenarios.
- **Data Visualization**: The application includes a line chart component that displays predictions based on processed data.
- **Theme Toggle**: Users can switch between light and dark themes for better accessibility and user experience.
- **Localization**: The application is designed to support multiple languages, enhancing accessibility for a diverse user base.

## Installation

To get started with the project, clone the repository and install the dependencies:

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/mquires/palm-ai.git
cd palm-ai
```

2. **Install dependencies**

```bash
yarn install
```

3. **Environment Setup**

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_API_PROTOCOL=your_api_protocol
VITE_X_ACTOR=your_actor
```

4. **Start Development Server**

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
