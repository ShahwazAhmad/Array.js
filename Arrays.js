/*let ar = [2,3,4,5,2]
let ar1 = [6,"harry",77,"potter"]

//console.log(ar.length)
//ar.push(6)
//ar.push(7,8)
//ar.pop()
//ar.unshift(77)

//console.log(ar.indexOf(3));
console.log(ar)
console.log(ar1)
let ar2 = ar.slice(1,4)

console.log(ar2)*/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const indian_heroes = ["saktiman","balvir","bhim"]

//let merge = marvel_heros.concat(dc_heros,indian_heroes);
//console.log(merge);

const all_new_heros = [...marvel_heros, ...dc_heros,...indian_heroes]

console.log(all_new_heros);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));