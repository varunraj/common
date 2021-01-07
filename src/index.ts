
// We will write the common module in TS and publish as js
// to avoid TS version dependecies in the projects that will use 
// this common module.


interface Color {
    red: number,
    blue: number,
    green : number
}

const color: Color = {
    red: 10,
    blue: 10,
    green: 10
}

console.log(color);

export default color;
