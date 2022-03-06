# My Headless CMS

- [ghost](https://ghost.org/docs/)

## Getting started

```
docker-compose up -d
open http://localhost:3022
open http://localhost:3022/ghost
```

## Content API

https://ghost.org/docs/content-api/

```
curl "http://localhost:3022/ghost/api/v3/content/posts/?key=ce48689576d89b2b9a4ddaf0cf"
```