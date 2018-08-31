//import from json
import * as express from "express";

const app = express();

interface President {
    id: number,
    firstName: string,
    lastName: string
}

const presidents: President[] = [
    { id: 1, firstName: "George", lastName: "Washington"},
    { id: 2, firstName: "John", lastName: "Adams"},
    { id: 3, firstName: "Thomas", lastName: "Jefferson"},
    { id: 4, firstName: "James", lastName: "Madison"},
    { id: 5, firstName: "James", lastName: "Monroe"},
];
//gets President array
function getPresidents(): President[] {
    return presidents;
}

app.get('/', (request, response) => {
    response.send('The URL for Presidents is http://localhost:3000/api/presidents');
});

app.get('/api/presidents', (request, response) => {
    response.json(getPresidents());
});

function getPresidentById(presidentId: number): President {
    return presidents.find(c => c.id == presidentId);
}

app.get('/api/president/:id', (request, response) => {
    response.json(getPresidentById(request.params.id));
});

const server = app.listen(3000, "localhost", () => {
    console.log("Listening on port 3000");
});