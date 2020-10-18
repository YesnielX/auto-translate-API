# Auto Translate Bot API 🌐

_Auto Translate API for Web_

# Routes List

Request
`GET /`

```sh
curl -i -H 'Accept: application/json' https://api-auto-translate.herokuapp.com/
```

Response

```r
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 33
Date: Sat, 17 Oct 2020 02:40:31 GMT
Connection: keep-alive

{ "routes": "/", "guilds": "/guilds" }
```

Request
`GET /guilds`

```sh
curl -i -H 'Accept: application/json' https://api-auto-translate.herokuapp.com/guilds
```

Response

```r
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 29
Date: Sat, 17 Oct 2020 02:45:00 GMT
Connection: keep-alive

{ "guilds": GUILDS, "users": USERS }
```