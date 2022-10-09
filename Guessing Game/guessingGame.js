const difficulty = document.getElementById("difficulty")
var actNum

difficulty.addEventListener('click', (e) => {
    if (e.target.id === "vEasy") {
        actNum = Math.floor(Math.random() * 11);
    }

    else if (e.target.id === "easy") {
        actNum = Math.floor(math.random() * 11);
    }

    else if (e.target.id === "medium") {
        actNum = Math.floor(math.random() * 101);
    }

    else if (e.target.id === "difficult") {
        actNum = Math.floor(math.random() * 501);
    }

    else if (e.target.id === "vDifficult") {
        actNum = Math.floor(math.random() * 1001);
    }
})






