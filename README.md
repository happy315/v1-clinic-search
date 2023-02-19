# Clinics Search API
## Search available clinics

Exposes an api to search available clinics based on multiple filters (name, state, availability).

## Environment variables

| Variable                           | Description                                                                                       | Default                                                                                                                                                         |      Type           |
| :--------------------------------- | :------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| PORT                               | The port used for the express                                                                     |   7000                                                                                                                                                          |       Number        |
| ENDPOINTS_LIST                     | Endpoints to get the clinics data, add multiple endpoints with comma seperated values             | 'https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json,https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json'   |       String        |


## Installation

It requires [Node.js](https://nodejs.org/) v14+ to run.

## Commands
```sh
`npm install` to install all dependencies and devDependencies 
`npm run build` to create build from the source files
`npm run start` to start the development server
`npm run test` to run Unit test cases
`npm run test:coverage` to run Unit test cases with coverage
`npm run prod` to start the production server
```

### Example

```
# Search all clinics

`curl --location --request GET 'localhost:7000/clinics/search'`

# Search clinics by name

`curl --location --request GET 'localhost:7000/clinics/search?name={$name}'`

# Search Clinics by availability

`curl --location --request GET 'localhost:7000/clinics/search?availableFrom=10:00&availableTill=22:40'`

```

## Tech Stack

Leveraged technology for this app
- [node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework
- [Babel](https://babeljs.io/) - next-gen JS compiler

And of course Clinic Search itself is an open source with a [public repository][https://github.com/happy315/v1-clinic-search.git]
 on GitHub.

## Docker

It is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 3000, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
Go to root directory
docker build . -t <your username>/clinics-search
```

This will create the clinics-search image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, this simply map port 7000 of the host to
port 3000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -it -p 7000:3000 -d <your username>/clinics-search:latest
```
Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:3000/clinics/search
```

Local Development
---
> - install all the dependencies/dev-dependencies via npm install command
> - copy .env.example to .env file
> - By default port is 7000, if you want to change add it to env file  PORT=5000
> - Add comma seperated ENDPOINTS_LIST='a,b'  endpoints for clinics data
> - npm run dev

## License
MIT





