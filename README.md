# Clinics Search
## Search available clinics

Exposes an api to search available clinics based on certain criterias (name,state,availability).


## Installation

It requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run build
npm run start
```

For production environments...

```sh
npm run prod
```

Sample API request
---
**All Clinics fetch**
```
curl --location --request GET 'localhost:9000/clinics/search'
```

**Clinics Search by Name**
```
curl --location --request GET 'localhost:9000/clinics/search?name={$name}''
```

**Clinics Search by State**
```
curl --location --request GET 'localhost:9000/clinics/search?state=CA'
```

**Clinics Search by Availability**
```
curl --location --request GET 'localhost:9000/clinics/search?availableFrom=09:00&availableTill=23:40'
```

Assumptions
---
- User is expected to both Authenticated and Authorized, that's why allowed access to api 
- `availableFrom` and `availableTill` filters don't work on exact given inputs, works in way available clinics time should greater than or equal to `availableFrom` and vice-versa for available till
- Both name and state filters works on name and ClientName, stateName and stateCode respectively 

## Tech

Leveraged technology for this app
- [node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework
- [Babel](https://babeljs.io/) - next-gen JS compiler

And of course Clinic Search itself is an open source with a [public repository][https://gitlab.com/SoniaBehal/clinic-search.git]
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
your host. In this example, this simply map port 9000 of the host to
port 4000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -it -p 9000:4000 -d <your username>/clinics-search:latest
```
Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:9000/clinics/search
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
docker pull soniabehal/clinics-search
```
[Docker Hub link](https://hub.docker.com/r/soniabehal/clinics-search)

Local Development
---
> - copy .env.example to .env
> - By default port is 4000, if you want to change add it to env file  PORT=7000
> - Add comma seperated ENDPOINTS_LIST='a,b'  endpoints for clinics data
> - npm run dev

Tada: you are good to go

## License
MIT

