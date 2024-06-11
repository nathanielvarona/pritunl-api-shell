// Pritunl API Authentication (for Postman Pre-Request Script)
// Generates authentication headers for API requests

// Import required libraries
// crypto-js: for encryption and hashing
// uuid: for generating unique identifiers
const crypto = require('crypto-js');
const uuid = require('uuid');

// Generate timestamp (seconds since epoch)
// Used to prevent replay attacks
const timestamp = String(Math.floor(Date.now() / 1000));

// Generate a random nonce (unique identifier)
// Used to prevent replay attacks
const nonce = uuid.v4().replace(/-/g, '');

// Construct the authentication string
// Combines API token, timestamp, nonce, method, and URL path
const authString = `${pm.variables.get('PRITUNL_API_TOKEN')}&${timestamp}&${nonce}&${pm.request.method}&/${pm.request.url.path.join('/')}`;

// Parse the API secret key
// Retrieves the secret key from the environment variables
// and parses it as a UTF-8 string for use in the signature calculation
const secretKey = crypto.enc.Utf8.parse(pm.variables.get('PRITUNL_API_SECRET'));

// Calculate the HMAC SHA256 signature
// Uses the API secret key to sign the authentication string
const signature = crypto.HmacSHA256(crypto.enc.Utf8.parse(authString), secretKey).toString(crypto.enc.Base64);

// Prepend the base URL to the request URL
// Combines the base URL with the request URL to form the complete URL
// This ensures that the request is made to the correct endpoint
pm.request.url = pm.variables.get('PRITUNL_BASE_URL') + pm.request.url;

// Add authentication headers
pm.request.headers.add({key: 'Auth-Token', value: pm.variables.get('PRITUNL_API_TOKEN') }); // API token
pm.request.headers.add({key: 'Auth-Timestamp', value: timestamp }); // Timestamp
pm.request.headers.add({key: 'Auth-Nonce', value: nonce }); // Nonce
pm.request.headers.add({key: 'Auth-Signature', value: signature }); // Signature
pm.request.headers.add({key: 'Content-Type', value: 'application/json' }); // Content type
