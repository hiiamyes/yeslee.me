#!/bin/sh
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 516329534218.dkr.ecr.us-east-1.amazonaws.com
docker pull 516329534218.dkr.ecr.us-east-1.amazonaws.com/yeslee.me:latest
docker tag 516329534218.dkr.ecr.us-east-1.amazonaws.com/yeslee.me:latest yeslee.me:latest
docker image prune -f
