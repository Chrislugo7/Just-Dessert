function remove(element) {
    element.remove()
}
function message() {
    alert("You are searching for tiramisu");
}

function like(id) {
    document.getElementById(id).innerHTML++;
}
document.querySelector('#heart').addEventListener("click", function (){like
("count")})


document.querySelector('#he').addEventListener("click", function (){like
    ("co")})

    document.querySelector('#h').addEventListener("click", function (){like
        ("c")})