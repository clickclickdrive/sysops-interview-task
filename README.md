## Ping service

### Start locally

```bash
cd ./ping
yarn install
yarn start
```

### Ping API

`loclahost:4000/ping` - Should return `{"data": "Pong!"}` (uses "Pong" service to get result).

## Pong service

```bash
cd ./pong
yarn install
yarn start
```

### Pomg API

`loclahost:5000` - Returns `{"data": "Pong!"}`.


## More info

Read requirements: https://github.com/clickclickdrive/sysops-interview-task/blob/master/requirements.MD
