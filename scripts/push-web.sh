#!/bin/sh
docker build -t yeslee.me .
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 516329534218.dkr.ecr.us-east-1.amazonaws.com
docker tag yeslee.me:latest 516329534218.dkr.ecr.us-east-1.amazonaws.com/yeslee.me:latest
docker push 516329534218.dkr.ecr.us-east-1.amazonaws.com/yeslee.me:latest
