# Quote Fetcher App

## Overview

This is a simple Quote Fetcher app built with React, utilizing React's state and useEffect hook to fetch and display random quotes from an external API.

## Features

- Fetches a random quote from the [Quotes API](http://inspo-quotes-api.herokuapp.com/quotes/random) on initial load.
- Displays the fetched quote along with the author.
- Provides a button to fetch a new random quote from the API.
- Handles loading states while fetching the quote.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML
- CSS

## API Used

- [Quotes API]("http://inspo-quotes-api.herokuapp.com/quotes/random") - An API that provides random quotes.

## How It Works

- The app uses the `useEffect` hook to fetch a random quote from the API when the component mounts.
- The fetched quote and author are stored in React's state.
