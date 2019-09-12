#!/bin/sh
docker-compose up -d db db-migrate api
cd web
yarn
yarn start
