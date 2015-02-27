#!/bin/sh
cd ../../
cp docker/ooni-app-builder/Dockerfile .
docker build -t ooni-app-rebuilder .
rm Dockerfile
