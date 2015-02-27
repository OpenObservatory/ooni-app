#!/bin/sh
docker run -d -p 104.193.9.122:3000:3000 -v /root/ooni-app/public/:/home/mean/public -v /root/ooni-app/app/:/home/mean/app --link mongodb:db ooni-app
