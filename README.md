# Building REST services with firestore in native mode and Hapi
The example assumes you have the [google cloud cli interface](https://cloud.google.com/sdk/docs/quickstarts) installed and configured.

Firebase emulator is used enable local development. You'll need [Docker](https://www.docker.com/products/docker-desktop) to start the emulator


## Install
```
npm ci
```

Build your docker image
```
docker build . -t firestore:1.11.4
```

## Run
Run the firestore emulator docker image

```
docker run -ti --rm -p 8080:8080 -d --name firestore firestore:1.11.4
```

Start the hapi server:
```
export FIRESTORE_LOCAL=true; npm start
```

You'll see a output that looks like this:
```
> node index.js

Server running on http://localhost:9080
Documentation at: http://localhost:9080/documentation
```

## Explore

Use the swagger docs endpoint (http://localhost:9080/documentation) to explore the example

### POST /examples
POST json payload
```
{
  "hello": "world"
}
```
Inserts the document into the database with `uuid` id

### GET /examples
Returns an array of all the examples inserted thus far

## Deploy to Google Cloud
Please make sure your google project is configured to use Firestore in native mode.

```
gcloud app deploy
```

## Considerations
Please read this comparison of [Firestore in native mode vs datastore mode](https://cloud.google.com/firestore/docs/firestore-or-datastore)