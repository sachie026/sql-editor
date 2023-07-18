## Deployment

App is deployed on Vercel and here is the link to access it [https://sql-editor-nu.vercel.app/](https://sql-editor-nu.vercel.app/).

## Overview

This is a dummy SQL editor app. It's used to write your sql queries and get the appropriate result/output for that sql query.

## Features

- You can write and run as many sql queries as possible.
- You can change the layout, whichever suits you the best.
- You can view the total execution time for the query.
- You can download the query result as a csv file.

There are other features that can be added once the app is interactive. I have mentioned a few of them in the comments.
We can add a valid way to handle all the exceptions and show the appropiate messages to the user.

## Tech stack and libraries

- This app is built using ReactJS(CRA) a javascript library.
- Used react-csv package to generate and download the csv file from the given data.

## App load time

- There are lot of ways to measure the app load time(different website, profiler etc). To make it easier I have used the speedlab to check the website load time.
- Here is the report [link](https://www.browserstack.com/speedlab/new-report/d390a69851ed42520039c01a54929e88ece0a912)

## Performance optimization

- As of now, the app is very small and have done little bit of optimization. But as the app grows, we can use Context API to share the data instead of passing it down.
- At a few places, I have used useMemo and useCallback to optimize the performance a bit(to handle re-rendering issue).
- Also, right now we do not have the images in our app so no image optimization was needed.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
