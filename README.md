# Rest Countries Project

This project is a web application that integrates with the REST Countries API to display country information. Users can explore all countries, search for specific countries, filter by region, view detailed information about a country, and toggle between light and dark mode.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Resources](#resources)

## Features

- View all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode (optional)

## Demo

[Live Demo](https://rest-countries-react-abhishek.netlify.app/)

## Technologies Used

- React
- React Router
- React Context

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/abhipatel9607/rest_countries_react.git
   ```

2. Change the repository:

   ```bash
   cd rest_countries_react
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

### Homepage

- **View All Countries:**

  - When you visit the homepage, you will see a list of all countries fetched from the REST Countries API.
  - Each country card displays basic information like the flag, name, and region.

- **Search for a Country:**

  - Use the search input field to search for a specific country.
  - As you type, the displayed countries will be filtered based on the search query.

- **Filter by Region:**
  - Use the region filter dropdown to filter countries by continent/region.
  - Selecting a region will update the displayed countries accordingly.

### Country Details Page

- **View Detailed Information:**

  - Clicking on a country card on the homepage will navigate you to a detailed page for that country.
  - This page displays more information about the selected country, including its native name, population, capital, languages, currencies, etc.

- **Border Countries:**
  - On the country details page, you can see a list of bordering countries.
  - Clicking on a border country will take you to the details page for that country.

### Theme Toggle

- **Toggle Color Scheme:**
  - there is a toggle button to switch between light and dark mode.
  - Clicking the toggle button will change the color scheme of the application.

## Resources

- [REST Countries API Endpoint](https://restcountries.com/v3.1/all) <br>
- [How to Consume REST APIs in React](https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/)
