// Game by Vasyajopa228 and whoname00
// Desing by whoname00

const person = {
    name: 'player',
    age: 4,
    language: ['ru', 'en'],
    greet: function() {
        console.log('pop')
    }
} // Id person: ZmlsZTovLy9ob21lL3dob25hbWUwMC9QeXRob25Qcm9qZWN0L0NhckdhbWUuemlw

const car = document.getElementById("car") // ElementId: car (player, you, other)

document.addEventListener("keydown", function(event) {
    right();
});

function right () {
    if (car.classList != "right") {
        car.classList.add("right")
    }
    setTimeout( function() {
        car.classList.remove("right")
    }, 300)
}

document.addEventListener("keydown", function(event) {
    left();
});
function left () {
    if (car.classList != "left") {
        car.classList.add("left")
    }
    setTimeout( function() {
        car.classList.remove("left")
    }, 300)
}

console.log(person)