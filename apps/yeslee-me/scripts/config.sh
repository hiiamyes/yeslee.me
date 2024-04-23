#!/bin/sh
export $(egrep -v '^#' .env | xargs)

web=$(
  cat ".env.example" |
    sed "s~{{PORT}}~$PORT~g"
)

rm -f \
  .env

echo "$web" >>.env
