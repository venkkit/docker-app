#!/bin/bash
cd /home/ubuntu/docker-app
docker stop node-app || true
docker rm node-app || true
docker build -t my-node-app .
docker run -d -p 3000:3000 --name node-app my-node-app
