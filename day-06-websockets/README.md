# WebSockets

A two-way communications web protocol and browser API spec.

### Why?

largely, the web was built around a request/response paradigm where the _client_ would make the request, and the _server_ would only send responses when explicitly asked for.

This doesn't necessarily work anymore since we often expect 2-way communication, e.g. chatrooms.

We've dealt with this issue for awhile now with HTTP "push" or long-polling. However, these all carry the overhead of HTTP, which isn't well-suited to low-latency applications.

### How does WebSockets solve this problem?

The WebSocket spec defines an API establishing a "socket" connection between a web browser and server.

This means that there is a _persistent_ connection between the client and server, and since it is 2-way, either party can start sending data at anytime.

It has a URL schema just like http, except it's `ws`. E.g. `ws://somewebsite"`)
