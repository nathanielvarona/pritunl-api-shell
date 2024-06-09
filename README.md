# pritunl-api-shell
Pritunl API Shell - a Curl wrapper for secure and simplified command-line requests

## Usage
```bash
./pritunl-api-shell <method> <path> [payload]
```

## Examples
### GET request:
```bash
./pritunl-api-shell GET /entity-uri
```

### POST request with payload:
```bash
./pritunl-api-shell POST /entity-uri '{"name":"New Entity"}'
```

### PUT request with payload:
```bash
./pritunl-api-shell PUT /entity-uri '{"name":"Update Entity"}'
```

### DELETE request:
```bash
./pritunl-api-shell DELETE /entity-uri
```

### Note:
* Replace `<method>` with the desired HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc.)
* Replace `<path>` with the Pritunl API endpoint path
* Replace `[payload]` with the optional request payload in JSON format

## Installation:
* Make the script executable: `chmod +x pritunl-api-shell`
* Place the script in your preferred location, such as `~/bin` or `/usr/local/bin`

## Configuration:
* Set the `PRITUNL_API_TOKEN`, `PRITUNL_API_SECRET`, and `PRITUNL_BASE_URL` environment variables to authenticate with the Pritunl API

## Alternatives:

* For [Postman](https://www.postman.com/) Users
  + For a seamless API authentication experience, check out the [Pritunl API Authentication (for Postman Pre-Request Script)](https://gist.github.com/nathanielvarona/01f2115444020d328c03da8984e216a5#file-pritunl-api-auth-postman-pre-request-js) script. This Postman pre-request script generates the necessary authentication headers for Pritunl API requests. Simply import the script into your Postman collection and enjoy effortless authentication!
