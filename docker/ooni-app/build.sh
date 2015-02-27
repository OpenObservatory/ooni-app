#!/bin/sh
cd ../../
cp docker/ooni-app/Dockerfile .
docker build -t ooni-app .
rm Dockerfile
