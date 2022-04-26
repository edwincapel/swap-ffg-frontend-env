# swap-ffg-frontend-env
Node project to help me change ffg frontend env before running yarn dev

## Installation steps
1. Open index.js and change the paths to match your project location

2. Use environments you have or contact me for environments I have

env files are created on this root folder as such

.env_id_client
.env_sg_client

## Install dependencies
```sh
npm install
```

## Run script
```sh
npm start <location>
```

### Example
```
npm start sg
```

## Future plans for improvement
1. Use Shell script instead of node app
2. Change env's in files specifically so that I don't have to rerun yarn dev on client and server. (maybe redundant plan rn because new front end project spins up really fast) 
