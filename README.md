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
GET /dev/msg
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