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
