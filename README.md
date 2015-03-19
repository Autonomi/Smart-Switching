# Smart Outlet
==============

Requirements:
1. Redis
2. MongoDB
3. Node JS
4. NPM

Node Modules:
5. Express JS
6. redis (node-redis)
7. nodemongo


## Get the Messages

Returns the outstanding messages for the Device, at the server. The messages are sorted as "oldest first". A limit on number of messages returned may be specified.

The server deletes the returned messages from its hold, unless a special acknowledgment header is specified. If it is specified, then server waits for an "acknowledgment" URL request. See Ack.

#### Request
```
GET /_/<32 bit device ID>/
headers: {
    dev: <32 bit device ID>,
    lim: <8 bit unsigned integer>,
    ack: <true/false>
}
```

#### Sample Response
```
200 OK
headers: {
    connection: close,
    sum: <32 bit payload checksum>,
    ack: <true/false>
}
payload: {
    client_id_1: {
        message
    },
    :
    :
    client_id_n: {
        message
    }
}
```

## Put/Push a message

Devices can also send a message to specific client, or all the clients. This is done through either a PUT request, or a POST request. The difference between the two is that the PUT request acts like a logger, that is, doesn't wait for any response, and the server only responds with a 202 response - no payload.
The POST method differs in the sense that the connection is kept open (long polling) until the client receives the message.
Recommended usage for the PUT request is the cases where only data is "logged", and is not a trigger.
Recommended usage for the POST request is the case where the data must reach the client device before further operation may take place.

#### Request
````
PUT /dev/msg
headers: {
    dev: <32 bit device ID>,
    sum: <32 bit payload checksum>
    twr: <64 bit client ID, send 0 to broadcast message to all the clients>
}
````
````
POST /dev/msg
headers: {
    dev: <32 bit device ID>,
    sum: <32 bit payload checksum>
    twr: <64 bit client ID, send 0 to broadcast message to all the clients>
}
````

#### Response
##### PUT
````
202 Accepted
````
##### POST
````
200 OK
headers: {
    sum: <32 bit payload checksum>
}
payload: {
    msg_id: <128 bit message id>
}
````



## PROPOSED. UNDER DEVELOPMENT.



GET /dev/msg
headers: {
    dev: <32 bit device ID>,
    sum: <32 bit calculated checksum>
}
payload: <the payload, transferred to the client as-is.>
headers.sum must correspond the payload checksum, calculated through SipHash.

PUT /dev/msg
headers: {
    dev: <32 bit device ID>,
    sum: <32 bit calculated checksum>,
    twr: <64 bit client ID>
}
payload

POST /dev/msg
headers: {
    dev: <32 bit device ID>,
    sum: <32 bit payload checksum>,
    twr:
}