#!/bin/sh
export $(egrep -v '^#' .env | xargs)

web=$(
  cat ".env.example" |
    sed "s~{{PORT}}~$PORT~g" |
    sed "s~{{NUXT_PUBLIC_GTM_ID}}~$NUXT_PUBLIC_GTM_ID~g"
)

rm -f \
  .env

echo "$web" >>.env
