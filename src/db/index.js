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