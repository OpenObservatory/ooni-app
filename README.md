# OONI MEAN
OONI, but much meaner!

# Getting started
Requires:

  * node.js

Run this 
```
npm install -g bower
npm install -g grunt-cli
```
Then cd into the ooni-mean directory and run:
```
npm install
grunt
```
The dev server should now be listening on port 3000.

Have fun!

# Running in docker

You can run this inside of docker by running from the home of this repo:

```
docker build -t ooni/mean .
docker run -d --name="ooni-mean-1" -p 3000:3000 ooni/mean
```
