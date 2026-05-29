const p2 = document.querySelector("#p2")
const p3 = document.querySelector("#p3")
const p4 = document.querySelector("#p4")
const R_m = document.querySelector("#R_m")
const S_m = document.querySelector("#S_m")
const RA_m = document.querySelector("#RA_m")
// const N = document.querySelector("#N")
// const L = document.querySelector("#L")
const submit = document.querySelector("#submit")
const loading = document.querySelector(".loading")
let music = document.querySelector("#adiuo")
const name1 = document.querySelector("#name1")
const name2 = document.querySelector("#name2")
const name3 = document.querySelector("#name3")
const name4 = document.querySelector("#name4")
const name1inp = document.querySelector("#name1inp")
const name2inp = document.querySelector("#name2inp")
const name3inp = document.querySelector("#name3inp")
const name4inp = document.querySelector("#name4inp")
const nameBoxes = document.querySelector("#nemecont")



let game_mode = null
let player_num = null
let L_N = null

p2.addEventListener("click", () => {
    p2.style.backgroundColor = "#ff0000"
    p2.style.color = "#ffffff"
    p3.style.backgroundColor = "rgb(0, 0, 26)"
    p3.style.color = "#ff0000"
    p4.style.backgroundColor = "rgb(0, 0, 26)"
    p4.style.color = "#ff0000"
    player_num = 2
    nameBoxes.style.display = "flex"
    name1.style.display = "flex"
    name2.style.display = "flex"
    name3.style.display = "none"
    name4.style.display = "none"

})

p3.addEventListener("click", () => {
    p3.style.backgroundColor = "#ff0000"
    p3.style.color = "#ffffff"
    p2.style.backgroundColor = "rgb(0, 0, 26)"
    p2.style.color = "#ff0000"
    p4.style.backgroundColor = "rgb(0, 0, 26)"
    p4.style.color = "#ff0000"
    player_num = 3
    nameBoxes.style.display = "flex"
    name1.style.display = "flex"
    name2.style.display = "flex"
    name3.style.display = "flex"
    name4.style.display = "none"
})

p4.addEventListener("click", () => {
    p4.style.backgroundColor = "#ff0000"
    p4.style.color = "#ffffff"
    p2.style.backgroundColor = "rgb(0, 0, 26)"
    p2.style.color = "#ff0000"
    p3.style.backgroundColor = "rgb(0, 0, 26)"
    p3.style.color = "#ff0000"
    player_num = 4
    nameBoxes.style.display = "flex"
    name1.style.display = "flex"
    name2.style.display = "flex"
    name3.style.display = "flex"
    name4.style.display = "flex"
})

R_m.addEventListener("click", () => {
    R_m.style.backgroundColor = "#ff0000"
    R_m.style.color = "#ffffff"
    S_m.style.backgroundColor = "rgb(0, 0, 26)"
    S_m.style.color = "#ff0000"
    RA_m.style.backgroundColor = "rgb(0, 0, 26)"
    RA_m.style.color = "#ff0000"
    game_mode = "Random"
})

S_m.addEventListener("click", () => {
    S_m.style.backgroundColor = "#ff0000"
    S_m.style.color = "#ffffff"
    RA_m.style.backgroundColor = "rgb(0, 0, 26)"
    RA_m.style.color = "#ff0000"
    R_m.style.backgroundColor = "rgb(0, 0, 26)"
    R_m.style.color = "#ff0000"
    game_mode = "Selecting"
})

RA_m.addEventListener("click", () => {
    RA_m.style.backgroundColor = "#ff0000"
    RA_m.style.color = "#ffffff"
    S_m.style.backgroundColor = "rgb(0, 0, 26)"
    S_m.style.color = "#ff0000"
    R_m.style.backgroundColor = "rgb(0, 0, 26)"
    R_m.style.color = "#ff0000"
    game_mode = "RandomAuto"
})



submit.addEventListener("click", () => {
    if (player_num === 2 && name1inp.value.length !== 0 && name2inp.value.length !== 0) {
        music.play()
        localStorage.setItem("player1", name1inp.value)
        localStorage.setItem("player2", name2inp.value)
        if (player_num !== null && game_mode === "Random") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Random.html" }, 10000)
        } else if (player_num !== null && game_mode === "RandomAuto") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Random-Auto.html" }, 10000)
        } else if (player_num !== null && game_mode === "Selecting") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Selecting.html" }, 10000)
        }
    } else if (player_num === 3 && name1inp.value.length !== 0 && name2inp.value.length !== 0 && name3inp.value.length !== 0) {
        music.play()
        localStorage.setItem("player1", name1inp.value)
        localStorage.setItem("player2", name2inp.value)
        localStorage.setItem("player3", name3inp.value)
        if (player_num !== null && game_mode === "Random") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Random.html" }, 10000)
        } else if (player_num !== null && game_mode === "RandomAuto") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Random-Auto.html" }, 10000)
        } else if (player_num !== null && game_mode === "Selecting") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Selecting.html" }, 10000)
        }
    } else if (player_num === 4 && name1inp.value.length !== 0 && name2inp.value.length !== 0 && name3inp.value.length !== 0 && name4inp.value.length !== 0) {
        music.play()
        localStorage.setItem("player1", name1inp.value)
        localStorage.setItem("player2", name2inp.value)
        localStorage.setItem("player3", name3inp.value)
        localStorage.setItem("player4", name4inp.value)
        if (player_num !== null && game_mode === "Random") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Random.html" }, 10000)
        } else if (player_num !== null && game_mode === "RandomAuto") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Random-Auto.html" }, 10000)
        } else if (player_num !== null && game_mode === "Selecting") {
            loading.style.display = "flex"
            localStorage.setItem("player_num", player_num)
            localStorage.setItem("game_mode", game_mode)
            setTimeout(() => { window.location = "./pages/Selecting.html" }, 10000)
        }
    }

})


