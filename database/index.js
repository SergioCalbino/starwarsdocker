const { Character, Film, Planet } = require('./src/database/schemas');
const server = require('./src/server');

const dotenv = require('dotenv')

dotenv.config()

// Character.list().then((res) => console.log(res))

// Character.get(1).then((res) => console.log(res))

// Character.insert({
//     _id: '300',
//     name: 'Sergio',
//     birth_year: '36'

// }).then((res) => console.log(res))

// Film.insert({
//     _id: '201',
//     title: 'El imperio no te ataca'
// }).then(res => console.log(res))

// Planet.create({
//     _id: '355',
//   name: 'Malastare',
//   rotation_period: '26',
// }).then(res => console.log(res))


        server.listen(8004, () => {
    console.log("Database on port 8004");
})