- Open new project
- Index.js file - zeit/icro GitHub
- Terminal: npm install —save micro
- Npm init
- In the package.json: “scripts”: { “start”: “micro -l tcp://localhost:4000”}
- Npm install babel-polyfill, babel-preset-env, babel-register, micro-cors, microrouter, nedb, nedb-promise

- Make a file in src: .babelrc 
- Type in .babelrc: {“presets”: [“env”]}

## src/package.json
```
{
  "name": "application-test-backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "micro -l tcp://localhost:4000"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "babel-polyfill": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-register": "^6.26.0",
    "micro": "^9.3.2",
    "micro-cors": "^0.1.0",
    "microrouter": "^3.1.3",
    "nedb": "^1.8.0",
    "nedb-promise": "^2.0.1"
  }
}
```

## src/.babelrc
```
{
  "presets": ["env"]
}
```

## src/index.js
```
require('babel-polyfill')
require('babel-register')

module.exports = require('./src/db')

```

## src/db/index.js ***CRUD***
```
import  {send, json} from 'micro'
import {router, get, post, put, del} from 'microrouter'
const cors = require('micro-cors')()
import {createPerson, getAllPersons, deletePerson, updatePerson} from './people'

export default cors(router(
    post('/', async (req, res) => {
        console.log(`Im called`)

        const person = await json(req)
        const result = await createPerson(person)
        return send(res, 201, result)
    }),
    get('/', async (req, res) => {
        console.log('get');
        var result = await getAllPersons();
        return send(res, 200, result)
    })
))
```

## src/db/people.js
```
import Datastore from 'nedb-promise'

const db = new Datastore({ filename: `${__dirname}/people.db`, autoload: true})

export function createPerson(person){
    db.insert(person);
}

export function updatePerson(person){

}

export function deletePerson(person){

}

export async function getAllPersons(person){
    var result = await db.find({name: /.*/});
    return result;
}

export function getSinglePerson(person){

}

```
