# Clinics Search API
## Search available clinics

Exposes an api to search available clinics based on multiple filters (name, state, availability).

## Environment variables

| Variable                           | Description                                                                                       | Default                                                                                                                                                         |      Type           |
| :--------------------------------- | :------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| PORT                               | The port used for the express                                                                     |   3000                                                                                                                                                          |       Number        |
| ENDPOINTS_LIST                     | Endpoints to get the clinics data                                                                 | ['https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json', 'https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json']   |       Array         |


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

`curl --location --request GET 'localhost:3000/clinics/search'`

# Search clinics by name

`curl --location --request GET 'localhost:3000/clinics/search?name={$name}'`

# Search Clinics by availability

`curl --location --request GET 'localhost:3000/clinics/search?availableFrom=09:00&availableTill=23:40'`

```

Assumptions
---
- User is expected to both Authenticated and Authorized, that's why allowed access to api 
- `availableFrom` and `availableTill` filters don't work on exact given inputs, works in way available clinics time should greater than or equal to `availableFrom` and vice-versa for available till
- Both name and state filters works on name and ClientName, stateName and stateCode respectively 

## Tech Stack

Leveraged technology for this app
- [node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework
- [Babel](https://babeljs.io/) - next-gen JS compiler

And of course Clinic Search itself is an open source with a [public repository][https://github.com/happy315/v1-clinic-search.git]
 on GitHub.

## Docker

It is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 4000, so change this within the
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
your host. In this example, this simply map port 3000 of the host to
port 4000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -it -p 3000:4000 -d <your username>/clinics-search:latest
```
Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:3000/clinics/search
```

Few useful Docker commands
---
```sh
docker images      -- list images
docker ps          -- list processes
docker logs <container id>       -- fetch logs for container
docker exec -it <container id> /bin/bash   -- enter into conatiner
```

Published docker Image
---
If you don't want to build image locally, you can try already built image.
```
docker pull guri/clinics-search
```
[Docker Hub link](https://hub.docker.com/r/guri/clinics-search)

Local Development
---
> - copy .env.example to .env
> - By default port is 3000, if you want to change add it to env file  PORT=3000
> - Add ENDPOINTS_LIST=[URL1, URL2]  endpoints for clinics data
> - npm run dev

Tada: you are good to go

## License
MIT





