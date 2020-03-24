#!/bin/sh
# docker-compose up -d db db-migrate api
cd services/web
yarn
yarn run dev
