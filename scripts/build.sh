#!/bin/sh
docker build -t yeslee-me .
docker image prune -f
