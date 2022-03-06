#!/bin/sh
docker-compose build cms
docker image prune -f
