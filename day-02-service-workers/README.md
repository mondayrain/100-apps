# Service Workers


## What they are

- A script that the browser runs in the background
- Can be programatically accessed and changed by browser API
- Network proxy, can control now network requests from page are handled
- Basically to allow websites do things that usually native mobile apps can only do, like push notifications or background syncs

## Notes about Service Workers

- JavaScript worker; can't access DOM directly
- Uses the postMessage interface (postMessage(message, transfer))

## Support

- On prod, service workers can only be registered on pages served over HTTPS since they can do a lot of crazy shit

## Use Cases

Biggest one: HANDLE LOSS OF CONNECTIVITY

See https://serviceworke.rs/

## Continuation
https://davidwalsh.name/cache

https://www.smashingmagazine.com/2016/02/making-a-service-worker/
