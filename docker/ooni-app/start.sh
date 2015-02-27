#!/bin/sh
docker run -d -p 104.193.9.122:3000:3000 --link mongodb:db ooni-app
