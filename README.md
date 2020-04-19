# Chaotic Trading Card Game API

A repository of Chaotic Trading Card Game assets and out-of-the-box api solution for aggregating card data.

## Getting Started

To set up the API, begin by cloning the repository and installing dependencies.

```sh
$ git clone https://github.com/unitehenry/chaotic-api

$ cd chaotic-api

$ npm install
```

## Importing Data

This API uses MongoDB to store card data. Create an environment variable ```DATABASE_URL``` and add the url to the mongoDB server. Then run the import script.

```sh
$ echo "DATABASE_URL=mongodb://localhost/chaotic" > .env

$ npm run import
```

## Starting the Server

After the card data has been imported, you can begin serving data with the API server.

```sh
$ npm run serve
```
