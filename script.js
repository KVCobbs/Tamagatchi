//just trying to write an object out with this one 

let tamagatchi = {
    name: "example",
    age: 10, 
    hunger: 50,
    updateAge: function() {
        return ++tamagatchi.age
    }
}

function updateAge () {
    return ++tamagatchi.age
}

console.log(tamagatchi)
updateAge()