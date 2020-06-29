#!/bin/sh
export $(egrep -v '^#' .env | xargs)

web=$(
  cat ".env.template" |
    sed "s~{{PORT}}~$PORT~g" |
    sed "s~{{MAPBOX_ACCESS_TOKEN}}~$MAPBOX_ACCESS_TOKEN~g"
)

rm -f \
  .env

echo "$web" >>.env
