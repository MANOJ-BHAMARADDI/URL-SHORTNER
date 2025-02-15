# URL Shortener

A simple URL shortener application built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs
- Track visit history
- View analytics for shortened URLs

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/MANOJ-BHAMARADDI/uRL-SHORTNER.git
    cd uRL-SHORTNER
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add your MongoDB URI and port:
    ```env
    MONGODB_URI=mongodb://localhost:27017/short-url
    PORT=8001
    ```

4. Start the server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:8001`.
2. Use the form to shorten a URL.
3. View analytics for a shortened URL by navigating to `http://localhost:8001/analytics/:shortId`.

## Project Structure
