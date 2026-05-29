const body = document.querySelector("#body")
let mark = document.querySelector("#click_sound")
let music1 = document.querySelector("#music1")
let music2 = document.querySelector("#music2")
let music3 = document.querySelector("#music3")
let music4 = document.querySelector("#music4")
let music5 = document.querySelector("#music5")
let music6 = document.querySelector("#music6")
let next = document.querySelector("#next")
let prev = document.querySelector("#prev")
let mute = document.querySelector(".mute")
let saveToPDF = document.querySelector(".change_PDF")
let i1 = 0
let i2 = 0
let i3 = 0
let i4 = 0
let i5 = 0
let i6 = 0
let i7 = 0
let i8 = 0
let i9 = 0
let i10 = 0
let i11 = 0
let i12 = 0
let i13 = 0
let i14 = 0
let i15 = 0
let i16 = 0
let M = 0
let j = 0
let k = 0






music1.play()
mute.addEventListener("click", () => {
    if (M === 0) {
        music1.pause()
        music2.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        music6.pause()
        mute.style.backgroundColor = "#ffffff"
        mute.style.color = "#202020"
        M++
    } else if (M === 1) {
        M = 0
        mute.style.backgroundColor = "#ffffff00"
        mute.style.color = "#ffffff"
    }

})

next.addEventListener("click", () => {
    if (j === 0) {
        music1.pause()
        music2.play()
        music6.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        j++
    } else if (j === 1) {
        music1.pause()
        music3.play()
        music6.pause()
        music2.pause()
        music4.pause()
        music5.pause()
        j++
    } else if (j === 2) {
        music1.pause()
        music4.play()
        music6.pause()
        music3.pause()
        music2.pause()
        music5.pause()
        j++
    } else if (j === 3) {
        music1.pause()
        music5.play()
        music6.pause()
        music3.pause()
        music4.pause()
        music2.pause()
        j++
    } else if (j === 4) {
        music1.pause()
        music6.play()
        music2.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        j++
    } else if (j === 5) {
        music2.pause()
        music1.play()
        music6.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        j = 0
    }
})

prev.addEventListener("click", () => {
    if (k === 0) {
        music2.pause()
        music1.play()
        music6.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        k++
    } else if (k === 1) {
        music3.pause()
        music2.play()
        music1.pause()
        music6.pause()
        music4.pause()
        music5.pause()
        k++
    } else if (k === 2) {
        music4.pause()
        music3.play()
        music1.pause()
        music2.pause()
        music6.pause()
        music5.pause()
        k++
    } else if (k === 3) {
        music6.pause()
        music4.play()
        music1.pause()
        music2.pause()
        music3.pause()
        music5.pause()
        k++
    } else if (k === 4) {
        music6.pause()
        music5.play()
        music1.pause()
        music2.pause()
        music3.pause()
        music4.pause()

        k++
    } else if (k === 5) {
        music6.play()
        music1.pause()
        music2.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        k = 0
    }
})



const CFlst = ["Haaland", "Mbappe", "Ronaldo", "Alvarez", "Cavani", "Felix", "Grizman", "Havertz", "Giroud", "Ibmobille", "Jessus", "Kane", "Lewandowski", "Morata", "Nunes", "Suarez", "Taremi", "Isack", "Benzema", "Jackson", "Osimhen", "Gakpo", "Lukaku", "Icardi", "Aubameyang", "Martinez", "Hojland", "Torres", "Kean", "Abraham", "Jota", "Firmino", "Gyokeresh", "Solanke", "Watkins", "Schik", "Mitrovich", "Turam"]
const RWlst = ["Kubo", "Asensio", "Sancho", "Yamal", "Rodrygo", "Salah", "Messi", "Foden", "Dybala", "Dembele", "Chiesa", "Malcom", "Saka", "Genabry", "Olise"]

const LWlst = ["Coman", "Doku", "Fati", "Grilish", "LDias", "Leao", "Martinelli", "Neymar", "Nico", "Pulisic", "Raphiniha", "Rashford", "Saviniho", "Sane", "Son", "Vini", "Kvartskhelia", "Mane"]

const CMlst = ["Barella", "BFernandes", "Brahim", "Calhanoglu", "Camavinga", "Casado", "Casemiro", "Dejong", "Depaul", "EFernandez", "Gavi", "Guler", "Gundogan", "Kimmich", "Koke", "Mkhitarian", "Modric", "Musiala", "Neves", "Odegaard", "Olmo", "Palmer", "Pedri", "Pellegrini", "Rice", "Rodri", "Silva", "Tchouameni", "Valverde", "Vidal", "zaire", "Zielinski", "Minamino", "Mactominey", "Jorginio", "Kovachich", "Taliska", "Erikson", "Kesseye", "Vitiniha", "Soboslize", "Maddison", "Goretga", "Wirtz", "Xhaka", "Kante", "RobenNeves", "Sovic"]

const RBlst = ["White", "Hakimi", "Arnold", "Walker", "Konde", "Carvajal", "Dumfries"]

const LBlst = ["Cancelo", "Balde", "Alba", "THernandez", "FMendy", "Davies", "Robertson", "Gvardiol"]

const CBlst = ["Akanji", "Araujo", "Deligt", "Gabriel", "Ake", "Stones", "Upamecano", "Vandijk", "IMartinez", "Saliba", "Rudiger", "Otamendy", "Militao", "Marquinhos", "Konate", "RDias", "Bastoni", "Gomez", "Kim"]

const GKlst = ["Alisson", "Costa", "Donaroma", "Ederson", "Emiliano", "Terestegen", "Oblack", "Courtois", "Szczesny", "Raya", "Maignan", "Neuer", "Summer"]

let SUB_PLAYER = []

const LogoT = ["Liverpool", "Barca", "RealM", "Inter", "VillaR", "Paris", "AcMilano", "Joventoos", "ATM", "Tatenham", "ManU", "ManC", "Alnasr", "Ajax", "Alhelal", "ATB", "Aston"]


let players = localStorage.getItem("player_num")
let player1 = ""
let player2 = ""
let player3 = ""
let player4 = ""
let playerLst = [1,2,3,4]

if (players == 2) {
    console.log(Math.floor(Math.random() * players ))
    let random_P = Math.floor(Math.random() * players )
    let random_P2 = Math.floor(Math.random() * (players-1) )

    player1 = localStorage.getItem(`player${playerLst[random_P]}`)
    playerLst.splice(random_P,1)
    player2 = localStorage.getItem(`player${playerLst[random_P2]}`)
} else if (players == 3) {
    let random_P = Math.floor(Math.random() * players )
    let random_P2 = Math.floor(Math.random() * (players-1) )
    let random_P3 = Math.floor(Math.random() * (players-2) )
    player1 = localStorage.getItem(`player${playerLst[random_P]}`)
    playerLst.splice(random_P,1)
    player2 = localStorage.getItem(`player${playerLst[random_P2]}`)
    playerLst.splice(random_P2,1)
    player3 = localStorage.getItem(`player${playerLst[random_P3]}`)
} else if (players == 4) {
    let random_P = Math.floor(Math.random() * players )
    let random_P2 = Math.floor(Math.random() * (players-1) )
    let random_P3 = Math.floor(Math.random() * (players-2) )
    let random_P4 = Math.floor(Math.random() * (players-3) )
    player1 = localStorage.getItem(`player${playerLst[random_P]}`)
    playerLst.splice(random_P,1)
    player2 = localStorage.getItem(`player${playerLst[random_P2]}`)
    playerLst.splice(random_P2,1)
    player3 = localStorage.getItem(`player${playerLst[random_P3]}`)
    playerLst.splice(random_P3,1)
    player4 = localStorage.getItem(`player${playerLst[random_P4]}`)
}


for (let i = 0; i < players; i++) {
    const bg_random = document.createElement("div")
    bg_random.setAttribute("class", "bg")
    const random_Counter = document.createElement("div")
    random_Counter.setAttribute("class", "random_Counter")
    const random1 = document.createElement("div")
    random1.setAttribute("class", "random_box")
    random1.setAttribute("id", "random1")
    const random2 = document.createElement("div")
    random2.setAttribute("class", "random_box")
    random2.setAttribute("id", "random2")
    const random3 = document.createElement("div")
    random3.setAttribute("class", "random_box")
    random3.setAttribute("id", "random3")
    random_Counter.append(random1, random2, random3)
    bg_random.append(random_Counter)
    body.append(bg_random)

    const bg_random1 = document.createElement("div")
    bg_random1.setAttribute("class", "bg")
    const random_Counter1 = document.createElement("div")
    random_Counter1.setAttribute("class", "random_Counter")
    const random11 = document.createElement("div")
    random11.setAttribute("class", "random_box")
    random11.setAttribute("id", "random1")
    const random21 = document.createElement("div")
    random21.setAttribute("class", "random_box")
    random21.setAttribute("id", "random2")
    const random31 = document.createElement("div")
    random31.setAttribute("class", "random_box")
    random31.setAttribute("id", "random3")
    random_Counter1.append(random11, random21, random31)
    bg_random1.append(random_Counter1)
    body.append(bg_random1)

    const bg_random2 = document.createElement("div")
    bg_random2.setAttribute("class", "bg")
    const random_Counter2 = document.createElement("div")
    random_Counter2.setAttribute("class", "random_Counter")
    const random12 = document.createElement("div")
    random12.setAttribute("class", "random_box")
    random12.setAttribute("id", "random1")
    const random22 = document.createElement("div")
    random22.setAttribute("class", "random_box")
    random22.setAttribute("id", "random2")
    const random32 = document.createElement("div")
    random32.setAttribute("class", "random_box")
    random32.setAttribute("id", "random3")
    random_Counter2.append(random12, random22, random32)
    bg_random2.append(random_Counter2)
    body.append(bg_random2)

    const bg_random3 = document.createElement("div")
    bg_random3.setAttribute("class", "bg")
    const random_Counter3 = document.createElement("div")
    random_Counter3.setAttribute("class", "random_Counter")
    const random13 = document.createElement("div")
    random13.setAttribute("class", "random_box")
    random13.setAttribute("id", "random1")
    const random23 = document.createElement("div")
    random23.setAttribute("class", "random_box")
    random23.setAttribute("id", "random2")
    const random33 = document.createElement("div")
    random33.setAttribute("class", "random_box")
    random33.setAttribute("id", "random3")
    random_Counter3.append(random13, random23, random33)
    bg_random3.append(random_Counter3)
    body.append(bg_random3)

    const bg_random4 = document.createElement("div")
    bg_random4.setAttribute("class", "bg")
    const random_Counter4 = document.createElement("div")
    random_Counter4.setAttribute("class", "random_Counter")
    const random14 = document.createElement("div")
    random14.setAttribute("class", "random_box")
    random14.setAttribute("id", "random1")
    const random24 = document.createElement("div")
    random24.setAttribute("class", "random_box")
    random24.setAttribute("id", "random2")
    const random34 = document.createElement("div")
    random34.setAttribute("class", "random_box")
    random34.setAttribute("id", "random3")
    random_Counter4.append(random14, random24, random34)
    bg_random4.append(random_Counter4)
    body.append(bg_random4)

    const bg_random5 = document.createElement("div")
    bg_random5.setAttribute("class", "bg")
    const random_Counter5 = document.createElement("div")
    random_Counter5.setAttribute("class", "random_Counter")
    const random15 = document.createElement("div")
    random15.setAttribute("class", "random_box")
    random15.setAttribute("id", "random1")
    const random25 = document.createElement("div")
    random25.setAttribute("class", "random_box")
    random25.setAttribute("id", "random2")
    const random35 = document.createElement("div")
    random35.setAttribute("class", "random_box")
    random35.setAttribute("id", "random3")
    random_Counter5.append(random15, random25, random35)
    bg_random5.append(random_Counter5)
    body.append(bg_random5)

    const bg_random6 = document.createElement("div")
    bg_random6.setAttribute("class", "bg")
    const random_Counter6 = document.createElement("div")
    random_Counter6.setAttribute("class", "random_Counter")
    const random16 = document.createElement("div")
    random16.setAttribute("class", "random_box")
    random16.setAttribute("id", "random1")
    const random26 = document.createElement("div")
    random26.setAttribute("class", "random_box")
    random26.setAttribute("id", "random2")
    const random36 = document.createElement("div")
    random36.setAttribute("class", "random_box")
    random36.setAttribute("id", "random3")
    random_Counter6.append(random16, random26, random36)
    bg_random6.append(random_Counter6)
    body.append(bg_random6)

    const bg_random7 = document.createElement("div")
    bg_random7.setAttribute("class", "bg")
    const random_Counter7 = document.createElement("div")
    random_Counter7.setAttribute("class", "random_Counter")
    const random17 = document.createElement("div")
    random17.setAttribute("class", "random_box")
    random17.setAttribute("id", "random1")
    const random27 = document.createElement("div")
    random27.setAttribute("class", "random_box")
    random27.setAttribute("id", "random2")
    const random37 = document.createElement("div")
    random37.setAttribute("class", "random_box")
    random37.setAttribute("id", "random3")
    random_Counter7.append(random17, random27, random37)
    bg_random7.append(random_Counter7)
    body.append(bg_random7)

    const bg_random8 = document.createElement("div")
    bg_random8.setAttribute("class", "bg")
    const random_Counter8 = document.createElement("div")
    random_Counter8.setAttribute("class", "random_Counter")
    const random18 = document.createElement("div")
    random18.setAttribute("class", "random_box")
    random18.setAttribute("id", "random1")
    const random28 = document.createElement("div")
    random28.setAttribute("class", "random_box")
    random28.setAttribute("id", "random2")
    const random38 = document.createElement("div")
    random38.setAttribute("class", "random_box")
    random38.setAttribute("id", "random3")
    random_Counter8.append(random18, random28, random38)
    bg_random8.append(random_Counter8)
    body.append(bg_random8)

    const bg_random9 = document.createElement("div")
    bg_random9.setAttribute("class", "bg")
    const random_Counter9 = document.createElement("div")
    random_Counter9.setAttribute("class", "random_Counter")
    const random19 = document.createElement("div")
    random19.setAttribute("class", "random_box")
    random19.setAttribute("id", "random1")
    const random29 = document.createElement("div")
    random29.setAttribute("class", "random_box")
    random29.setAttribute("id", "random2")
    const random39 = document.createElement("div")
    random39.setAttribute("class", "random_box")
    random39.setAttribute("id", "random3")
    random_Counter9.append(random19, random29, random39)
    bg_random9.append(random_Counter9)
    body.append(bg_random9)

    const bg_random0 = document.createElement("div")
    bg_random0.setAttribute("class", "bg")
    const random_Counter0 = document.createElement("div")
    random_Counter0.setAttribute("class", "random_Counter")
    const random10 = document.createElement("div")
    random10.setAttribute("class", "random_box")
    random10.setAttribute("id", "random1")
    const random20 = document.createElement("div")
    random20.setAttribute("class", "random_box")
    random20.setAttribute("id", "random2")
    const random30 = document.createElement("div")
    random30.setAttribute("class", "random_box")
    random30.setAttribute("id", "random3")
    random_Counter0.append(random10, random20, random30)
    bg_random0.append(random_Counter0)
    body.append(bg_random0)

    const bg_random11 = document.createElement("div")
    bg_random11.setAttribute("class", "bg")
    const random_Counter11 = document.createElement("div")
    random_Counter11.setAttribute("class", "random_Counter")
    const random111 = document.createElement("div")
    random111.setAttribute("class", "random_box")
    random111.setAttribute("id", "random1")
    const random211 = document.createElement("div")
    random211.setAttribute("class", "random_box")
    random211.setAttribute("id", "random2")
    const random311 = document.createElement("div")
    random311.setAttribute("class", "random_box")
    random311.setAttribute("id", "random3")
    random_Counter11.append(random111, random211, random311)
    bg_random11.append(random_Counter11)
    body.append(bg_random11)

    const bg_random12 = document.createElement("div")
    bg_random12.setAttribute("class", "bg")
    const random_Counter12 = document.createElement("div")
    random_Counter12.setAttribute("class", "random_Counter")
    const random112 = document.createElement("div")
    random112.setAttribute("class", "random_box")
    random112.setAttribute("id", "random1")
    const random212 = document.createElement("div")
    random212.setAttribute("class", "random_box")
    random212.setAttribute("id", "random2")
    const random312 = document.createElement("div")
    random312.setAttribute("class", "random_box")
    random312.setAttribute("id", "random3")
    random_Counter12.append(random112, random212, random312)
    bg_random12.append(random_Counter12)
    body.append(bg_random12)

    const bg_random13 = document.createElement("div")
    bg_random13.setAttribute("class", "bg")
    const random_Counter13 = document.createElement("div")
    random_Counter13.setAttribute("class", "random_Counter")
    const random113 = document.createElement("div")
    random113.setAttribute("class", "random_box")
    random113.setAttribute("id", "random1")
    const random213 = document.createElement("div")
    random213.setAttribute("class", "random_box")
    random213.setAttribute("id", "random2")
    const random313 = document.createElement("div")
    random313.setAttribute("class", "random_box")
    random313.setAttribute("id", "random3")
    random_Counter13.append(random113, random213, random313)
    bg_random13.append(random_Counter13)
    body.append(bg_random13)

    const bg_random14 = document.createElement("div")
    bg_random14.setAttribute("class", "bg")
    const random_Counter14 = document.createElement("div")
    random_Counter14.setAttribute("class", "random_Counter")
    const random114 = document.createElement("div")
    random114.setAttribute("class", "random_box")
    random114.setAttribute("id", "random1")
    const random214 = document.createElement("div")
    random214.setAttribute("class", "random_box")
    random214.setAttribute("id", "random2")
    const random314 = document.createElement("div")
    random314.setAttribute("class", "random_box")
    random314.setAttribute("id", "random3")
    random_Counter14.append(random114, random214, random314)
    bg_random14.append(random_Counter14)
    body.append(bg_random14)

    const bg_random15 = document.createElement("div")
    bg_random15.setAttribute("class", "bg")
    const random_Counter15 = document.createElement("div")
    random_Counter15.setAttribute("class", "random_Counter")
    const random115 = document.createElement("div")
    random115.setAttribute("class", "random_box")
    random115.setAttribute("id", "random1")
    const random215 = document.createElement("div")
    random215.setAttribute("class", "random_box")
    random215.setAttribute("id", "random2")
    const random315 = document.createElement("div")
    random315.setAttribute("class", "random_box")
    random315.setAttribute("id", "random3")
    random_Counter15.append(random115, random215, random315)
    bg_random15.append(random_Counter15)
    body.append(bg_random15)



    const teamsheat = document.createElement("div")
    teamsheat.setAttribute("class", "teamsheat")
    const Sub = document.createElement("div")
    Sub.setAttribute("class", "Sub")
    Sub.style.zIndex = "0"
    const forward = document.createElement("div")
    forward.setAttribute("class", "forward")
    forward.style.zIndex = "0"
    const middel = document.createElement("div")
    middel.setAttribute("class", "middel")
    middel.style.zIndex = "0"
    const deffense = document.createElement("div")
    deffense.setAttribute("class", "deffense")
    deffense.style.zIndex = "0"
    const golekeeper = document.createElement("div")
    golekeeper.setAttribute("class", "golekeeper")
    golekeeper.style.zIndex = "0"

    const Logo = document.createElement("div")
    Logo.setAttribute("class", "Logo")


    const HEAD = document.createElement("div")
    HEAD.style.border = "4px solid #ffffff"
    HEAD.style.borderRadius = "15px"
    HEAD.style.paddingInline = "60px"
    HEAD.style.marginBottom = "50px"
    HEAD.setAttribute("class", "head")
    const n = Math.floor(Math.random() * LogoT.length)
    HEAD.style.backgroundImage = `url(../images/${LogoT[n]}.jpg)`
    LogoT.splice(n, 1)
    const h1H = document.createElement("h1")
    if (i==0){
        h1H.textContent = player1
    }else if (i==1){
        h1H.textContent = player2
    }else if (i==2){
        h1H.textContent = player3
    }else if (i==3){
        h1H.textContent = player4
    }
    const LW = document.createElement("div")
    LW.setAttribute("class", "LW")
    const LWsp = document.createElement("span")
    LWsp.textContent = "LW"
    const LWh1 = document.createElement("h1")
    LWh1.textContent = "+"
    const CF = document.createElement("div")
    CF.setAttribute("class", "CF")
    const CFsp = document.createElement("span")
    CFsp.textContent = "CF"
    const CFh1 = document.createElement("h1")
    CFh1.textContent = "+"
    const RW = document.createElement("div")
    RW.setAttribute("class", "RW")
    const RWsp = document.createElement("span")
    RWsp.textContent = "RW"
    const RWh1 = document.createElement("h1")
    RWh1.textContent = "+"
    const CM1 = document.createElement("div")
    CM1.setAttribute("class", "CM1")
    const CM1sp = document.createElement("span")
    CM1sp.textContent = "CM"
    const CM1h1 = document.createElement("h1")
    CM1h1.textContent = "+"
    const CMA = document.createElement("div")
    CMA.setAttribute("class", "CMA")
    const CMAsp = document.createElement("span")
    CMAsp.textContent = "CMA"
    const CMAh1 = document.createElement("h1")
    CMAh1.textContent = "+"
    const CM2 = document.createElement("div")
    CM2.setAttribute("class", "CM2")
    const CM2sp = document.createElement("span")
    CM2sp.textContent = "CM"
    const CM2h1 = document.createElement("h1")
    CM2h1.textContent = "+"
    const LB = document.createElement("div")
    LB.setAttribute("class", "LB")
    const LBsp = document.createElement("span")
    LBsp.textContent = "LB"
    const LBh1 = document.createElement("h1")
    LBh1.textContent = "+"
    const CB1 = document.createElement("div")
    CB1.setAttribute("class", "CB1")
    const CB1sp = document.createElement("span")
    CB1sp.textContent = "CB"
    const CB1h1 = document.createElement("h1")
    CB1h1.textContent = "+"
    const CB2 = document.createElement("div")
    CB2.setAttribute("class", "CB2")
    const CB2sp = document.createElement("span")
    CB2sp.textContent = "CB"
    const CB2h1 = document.createElement("h1")
    CB2h1.textContent = "+"
    const RB = document.createElement("div")
    RB.setAttribute("class", "RB")
    const RBsp = document.createElement("span")
    RBsp.textContent = "RB"
    const RBh1 = document.createElement("h1")
    RBh1.textContent = "+"
    const GK = document.createElement("div")
    GK.setAttribute("class", "GK")
    const GKsp = document.createElement("span")
    GKsp.textContent = "GK"
    const GKh1 = document.createElement("h1")
    GKh1.textContent = "+"
    const hr = document.createElement("hr")
    hr.style.width = "90%"
    hr.style.marginBottom = "70px"
    const sub2 = document.createElement("div")
    GK.setAttribute("class", "s2")
    const sub2h1 = document.createElement("h1")
    sub2h1.textContent = "+"
    const sub3 = document.createElement("div")
    const sub3h1 = document.createElement("h1")
    sub3h1.textContent = "+"
    GK.setAttribute("class", "s3")
    const sub4 = document.createElement("div")
    const sub4h1 = document.createElement("h1")
    sub4h1.textContent = "+"
    GK.setAttribute("class", "s4")
    const sub5 = document.createElement("div")
    const sub5h1 = document.createElement("h1")
    sub5h1.textContent = "+"
    GK.setAttribute("class", "s5")
    const sub1 = document.createElement("div")
    const sub1h1 = document.createElement("h1")
    sub1h1.textContent = "+"
    GK.setAttribute("class", "s1")
    const subH = document.createElement("div")
    const subHh1 = document.createElement("h1")
    subHh1.textContent = "Substitute"
    const SUB_BOX = document.createElement("div")
    SUB_BOX.setAttribute("class", "SUB_BOX")


    subH.append(subHh1)
    sub1.append(sub1h1)
    sub2.append(sub2h1)
    sub3.append(sub3h1)
    sub4.append(sub4h1)
    sub5.append(sub5h1)
    Sub.append(sub1, sub2, sub3, sub4, sub5)
    SUB_BOX.append(subH, Sub)
    HEAD.append(h1H)
    LW.append(LWsp, LWh1)
    CF.append(CFsp, CFh1)
    RW.append(RWsp, RWh1)
    CM1.append(CM1sp, CM1h1)
    CMA.append(CMAsp, CMAh1)
    CM2.append(CM2sp, CM2h1)
    LB.append(LBsp, LBh1)
    CB1.append(CB1sp, CB1h1)
    CB2.append(CB2sp, CB2h1)
    RB.append(RBsp, RBh1)
    GK.append(GKsp, GKh1)
    forward.append(LW, CF, RW)
    middel.append(CM1, CMA, CM2)
    deffense.append(LB, CB1, CB2, RB)
    golekeeper.append(GK)
    teamsheat.append(HEAD, forward, middel, deffense, golekeeper, SUB_BOX)
    body.append(teamsheat, hr)

    CF.addEventListener("click", () => {
        if (i1 < players) {
            i1++;
            setTimeout(() => {
                random1.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random2.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random3.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * CFlst.length)
                if (j == 1) {
                    random1.style.backgroundImage = `url(../images/${CFlst[random_num]}.jpg)`
                    click_1 = CFlst[random_num]
                    click_1p = random_num
                    CFlst.splice(random_num, 1)
                } else if (j == 2) {
                    random2.style.backgroundImage = `url(../images/${CFlst[random_num]}.jpg)`
                    click_2 = CFlst[random_num]
                    click_2p = random_num
                    CFlst.splice(random_num, 1)
                } else if (j == 3) {
                    random3.style.backgroundImage = `url(../images/${CFlst[random_num]}.jpg)`
                    click_3 = CFlst[random_num]
                    click_3p = random_num
                    CFlst.splice(random_num, 1)
                }
            }
            random1.addEventListener("click", () => {
                CF.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random.style.display = "none"
                random1.style.display = "none"
                random2.style.display = "none"
                random3.style.display = "none"
                CFh1.textContent = ""
                CFlst.push(click_2, click_3)
            })
            random2.addEventListener("click", () => {
                CF.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random.style.display = "none"
                random1.style.display = "none"
                random2.style.display = "none"
                random3.style.display = "none"
                CFh1.textContent = ""
                CFlst.push(click_1, click_3)

            })
            random3.addEventListener("click", () => {
                CF.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random.style.display = "none"
                random1.style.display = "none"
                random2.style.display = "none"
                random3.style.display = "none"
                CFh1.textContent = ""
                CFlst.push(click_2, click_1)
            })
        }
    })

    RW.addEventListener("click", () => {
        if (i2 < players) {
            i2++;
            setTimeout(() => {
                random11.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random21.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random31.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random1.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * RWlst.length)
                if (j == 1) {
                    random11.style.backgroundImage = `url(../images/${RWlst[random_num]}.jpg)`
                    click_1 = RWlst[random_num]
                    click_1p = random_num
                    RWlst.splice(random_num, 1)
                } else if (j == 2) {
                    random21.style.backgroundImage = `url(../images/${RWlst[random_num]}.jpg)`
                    click_2 = RWlst[random_num]
                    click_2p = random_num
                    RWlst.splice(random_num, 1)
                } else if (j == 3) {
                    random31.style.backgroundImage = `url(../images/${RWlst[random_num]}.jpg)`
                    click_3 = RWlst[random_num]
                    click_3p = random_num
                    RWlst.splice(random_num, 1)
                }
            }
            random11.addEventListener("click", () => {
                RW.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random1.style.display = "none"
                console.log(click_1)
                random11.style.display = "none"
                random21.style.display = "none"
                random31.style.display = "none"
                RWh1.textContent = ""
                RWlst.push(click_2, click_3)
            })
            random21.addEventListener("click", () => {
                RW.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random1.style.display = "none"
                random11.style.display = "none"
                random21.style.display = "none"
                random31.style.display = "none"
                RWh1.textContent = ""
                RWlst.push(click_1, click_3)


            })
            random31.addEventListener("click", () => {
                RW.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random1.style.display = "none"
                random11.style.display = "none"
                random21.style.display = "none"
                random31.style.display = "none"
                RWh1.textContent = ""
                RWlst.push(click_2, click_1)

            })
        }
    })

    LW.addEventListener("click", () => {
        if (i3 < players) {
            i3++;
            setTimeout(() => {
                random12.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random22.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random32.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random2.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * LWlst.length)
                if (j == 1) {
                    random12.style.backgroundImage = `url(../images/${LWlst[random_num]}.jpg)`
                    click_1 = LWlst[random_num]
                    click_1p = random_num
                    LWlst.splice(random_num, 1)
                } else if (j == 2) {
                    random22.style.backgroundImage = `url(../images/${LWlst[random_num]}.jpg)`
                    click_2 = LWlst[random_num]
                    click_2p = random_num
                    LWlst.splice(random_num, 1)
                } else if (j == 3) {
                    random32.style.backgroundImage = `url(../images/${LWlst[random_num]}.jpg)`
                    click_3 = LWlst[random_num]
                    click_3p = random_num
                    LWlst.splice(random_num, 1)
                }
            }
            random12.addEventListener("click", () => {
                LW.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random2.style.display = "none"
                random12.style.display = "none"
                random22.style.display = "none"
                random32.style.display = "none"
                LWh1.textContent = ""
                LWlst.push(click_2, click_3)
            })
            random22.addEventListener("click", () => {
                LW.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random2.style.display = "none"
                random12.style.display = "none"
                random22.style.display = "none"
                random32.style.display = "none"
                LWh1.textContent = ""
                LWlst.push(click_1, click_3)

            })
            random32.addEventListener("click", () => {
                LW.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random2.style.display = "none"
                random12.style.display = "none"
                random22.style.display = "none"
                random32.style.display = "none"
                LWh1.textContent = ""
                LWlst.push(click_2, click_1)

            })
        }
    })

    CM1.addEventListener("click", () => {
        if (i4 < players) {
            i4++;
            setTimeout(() => {
                random13.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random23.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random33.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random3.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * CMlst.length)
                if (j == 1) {
                    random13.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_1 = CMlst[random_num]
                    click_1p = random_num
                    CMlst.splice(random_num, 1)
                } else if (j == 2) {
                    random23.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_2 = CMlst[random_num]
                    click_2p = random_num
                    CMlst.splice(random_num, 1)
                } else if (j == 3) {
                    random33.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_3 = CMlst[random_num]
                    click_3p = random_num
                    CMlst.splice(random_num, 1)
                }
            }
            random13.addEventListener("click", () => {
                CM1.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random3.style.display = "none"
                console.log(click_1)
                random13.style.display = "none"
                random23.style.display = "none"
                random33.style.display = "none"
                CM1h1.textContent = ""
                CMlst.push(click_2, click_3)
            })
            random23.addEventListener("click", () => {
                CM1.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random3.style.display = "none"
                random13.style.display = "none"
                random23.style.display = "none"
                random33.style.display = "none"
                CM1h1.textContent = ""
                CMlst.push(click_1, click_3)

            })
            random33.addEventListener("click", () => {
                CM1.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random3.style.display = "none"
                random13.style.display = "none"
                random23.style.display = "none"
                random33.style.display = "none"
                CM1h1.textContent = ""
                CMlst.push(click_2, click_1)

            })
        }
    })

    CMA.addEventListener("click", () => {
        if (i5 < players) {
            i5++;
            setTimeout(() => {
                random14.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random24.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random34.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random4.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * CMlst.length)
                if (j == 1) {
                    random14.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_1 = CMlst[random_num]
                    click_1p = random_num
                    CMlst.splice(random_num, 1)
                } else if (j == 2) {
                    random24.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_2 = CMlst[random_num]
                    click_2p = random_num
                    CMlst.splice(random_num, 1)
                } else if (j == 3) {
                    random34.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_3 = CMlst[random_num]
                    click_3p = random_num
                    CMlst.splice(random_num, 1)
                }
            }
            random14.addEventListener("click", () => {
                CMA.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random4.style.display = "none"
                console.log(click_1)
                random14.style.display = "none"
                random24.style.display = "none"
                random34.style.display = "none"
                CMAh1.textContent = ""
                CMlst.push(click_2, click_3)
            })
            random24.addEventListener("click", () => {
                CMA.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random4.style.display = "none"
                random14.style.display = "none"
                random24.style.display = "none"
                random34.style.display = "none"
                CMAh1.textContent = ""
                CMlst.push(click_1, click_3)

            })
            random34.addEventListener("click", () => {
                CMA.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random4.style.display = "none"
                random14.style.display = "none"
                random24.style.display = "none"
                random34.style.display = "none"
                CMAh1.textContent = ""
                CMlst.push(click_2, click_1)

            })
        }
    })

    CM2.addEventListener("click", () => {
        if (i6 < players) {
            i6++;
            setTimeout(() => {
                random15.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random25.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random35.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random5.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * CMlst.length)
                if (j == 1) {
                    random15.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_1 = CMlst[random_num]
                    click_1p = random_num
                    CMlst.splice(random_num, 1)
                } else if (j == 2) {
                    random25.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_2 = CMlst[random_num]
                    click_2p = random_num
                    CMlst.splice(random_num, 1)
                } else if (j == 3) {
                    random35.style.backgroundImage = `url(../images/${CMlst[random_num]}.jpg)`
                    click_3 = CMlst[random_num]
                    click_3p = random_num
                    CMlst.splice(random_num, 1)
                }
            }
            random15.addEventListener("click", () => {
                CM2.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random5.style.display = "none"
                random15.style.display = "none"
                random25.style.display = "none"
                random35.style.display = "none"
                CM2h1.textContent = ""
                CMlst.push(click_2, click_3)
            })
            random25.addEventListener("click", () => {
                CM2.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random5.style.display = "none"
                random15.style.display = "none"
                random25.style.display = "none"
                random35.style.display = "none"
                CM2h1.textContent = ""

                CMlst.push(click_1, click_3)

            })
            random35.addEventListener("click", () => {
                CM2.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random5.style.display = "none"
                random15.style.display = "none"
                random25.style.display = "none"
                random35.style.display = "none"
                CM2h1.textContent = ""
                CMlst.push(click_2, click_1)

            })
        }
    })

    RB.addEventListener("click", () => {
        if (i7 < players) {
            i7++;
            setTimeout(() => {
                random16.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random26.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random36.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random6.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * RBlst.length)
                if (j == 1) {
                    random16.style.backgroundImage = `url(../images/${RBlst[random_num]}.jpg)`
                    click_1 = RBlst[random_num]
                    click_1p = random_num

                    RBlst.splice(random_num, 1)
                } else if (j == 2) {
                    random26.style.backgroundImage = `url(../images/${RBlst[random_num]}.jpg)`
                    click_2 = RBlst[random_num]

                    click_2p = random_num
                    RBlst.splice(random_num, 1)
                } else if (j == 3) {
                    random36.style.backgroundImage = `url(../images/${RBlst[random_num]}.jpg)`
                    click_3 = RBlst[random_num]

                    click_3p = random_num
                    RBlst.splice(random_num, 1)
                }
            }
            random16.addEventListener("click", () => {
                RB.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random6.style.display = "none"
                random16.style.display = "none"
                random26.style.display = "none"
                random36.style.display = "none"
                RBh1.textContent = ""
                RBlst.push(click_2, click_3)
            })
            random26.addEventListener("click", () => {
                RB.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random6.style.display = "none"
                random16.style.display = "none"
                random26.style.display = "none"
                random36.style.display = "none"
                RBh1.textContent = ""
                RBlst.push(click_1, click_3)

            })
            random36.addEventListener("click", () => {
                RB.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random6.style.display = "none"
                random16.style.display = "none"
                random26.style.display = "none"
                random36.style.display = "none"
                RBh1.textContent = ""
                RBlst.push(click_2, click_1)
            })
        }
    })

    LB.addEventListener("click", () => {
        if (i8 < players) {
            i8++;
            setTimeout(() => {
                random17.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random27.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random37.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random7.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * LBlst.length)
                if (j == 1) {
                    random17.style.backgroundImage = `url(../images/${LBlst[random_num]}.jpg)`
                    click_1 = LBlst[random_num]
                    click_1p = random_num

                    LBlst.splice(random_num, 1)
                } else if (j == 2) {
                    random27.style.backgroundImage = `url(../images/${LBlst[random_num]}.jpg)`
                    click_2 = LBlst[random_num]

                    click_2p = random_num
                    LBlst.splice(random_num, 1)
                } else if (j == 3) {
                    random37.style.backgroundImage = `url(../images/${LBlst[random_num]}.jpg)`
                    click_3 = LBlst[random_num]

                    click_3p = random_num
                    LBlst.splice(random_num, 1)
                }
            }
            random17.addEventListener("click", () => {
                LB.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random7.style.display = "none"
                random17.style.display = "none"
                random27.style.display = "none"
                random37.style.display = "none"
                LBh1.textContent = ""
                LBlst.push(click_2, click_3)
            })
            random27.addEventListener("click", () => {
                LB.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random7.style.display = "none"
                random17.style.display = "none"
                random27.style.display = "none"
                random37.style.display = "none"
                LBh1.textContent = ""
                LBlst.push(click_1, click_3)

            })
            random37.addEventListener("click", () => {
                LB.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random7.style.display = "none"
                random17.style.display = "none"
                random27.style.display = "none"
                random37.style.display = "none"
                LBh1.textContent = ""
                LBlst.push(click_2, click_1)
            })
        }
    })

    CB1.addEventListener("click", () => {
        if (i9 < players) {
            i9++;
            setTimeout(() => {
                random18.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random28.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random38.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random8.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * CBlst.length)
                if (j == 1) {
                    random18.style.backgroundImage = `url(../images/${CBlst[random_num]}.jpg)`
                    click_1 = CBlst[random_num]
                    click_1p = random_num

                    CBlst.splice(random_num, 1)
                } else if (j == 2) {
                    random28.style.backgroundImage = `url(../images/${CBlst[random_num]}.jpg)`
                    click_2 = CBlst[random_num]

                    click_2p = random_num
                    CBlst.splice(random_num, 1)
                } else if (j == 3) {
                    random38.style.backgroundImage = `url(../images/${CBlst[random_num]}.jpg)`
                    click_3 = CBlst[random_num]

                    click_3p = random_num
                    CBlst.splice(random_num, 1)
                }
            }
            random18.addEventListener("click", () => {
                CB1.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random8.style.display = "none"
                random18.style.display = "none"
                random28.style.display = "none"
                random38.style.display = "none"
                CB1h1.textContent = ""
                CBlst.push(click_2, click_3)
            })
            random28.addEventListener("click", () => {
                CB1.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random8.style.display = "none"
                random18.style.display = "none"
                random28.style.display = "none"
                random38.style.display = "none"
                CB1h1.textContent = ""
                CBlst.push(click_1, click_3)

            })
            random38.addEventListener("click", () => {
                CB1.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random8.style.display = "none"
                random18.style.display = "none"
                random28.style.display = "none"
                random38.style.display = "none"
                CB1h1.textContent = ""
                CBlst.push(click_2, click_1)
            })
        }
    })

    CB2.addEventListener("click", () => {
        if (i10 < players) {
            i10++;
            setTimeout(() => {
                random19.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random29.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random39.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random9.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * CBlst.length)
                if (j == 1) {
                    random19.style.backgroundImage = `url(../images/${CBlst[random_num]}.jpg)`
                    click_1 = CBlst[random_num]
                    click_1p = random_num

                    CBlst.splice(random_num, 1)
                } else if (j == 2) {
                    random29.style.backgroundImage = `url(../images/${CBlst[random_num]}.jpg)`
                    click_2 = CBlst[random_num]

                    click_2p = random_num
                    CBlst.splice(random_num, 1)
                } else if (j == 3) {
                    random39.style.backgroundImage = `url(../images/${CBlst[random_num]}.jpg)`
                    click_3 = CBlst[random_num]

                    click_3p = random_num
                    CBlst.splice(random_num, 1)
                }
            }
            random19.addEventListener("click", () => {
                CB2.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random9.style.display = "none"
                random19.style.display = "none"
                random29.style.display = "none"
                random39.style.display = "none"
                CB2h1.textContent = ""
                CBlst.push(click_2, click_3)
            })
            random29.addEventListener("click", () => {
                CB2.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random9.style.display = "none"
                random19.style.display = "none"
                random29.style.display = "none"
                random39.style.display = "none"
                CB2h1.textContent = ""
                CBlst.push(click_1, click_3)

            })
            random39.addEventListener("click", () => {
                CB2.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random9.style.display = "none"
                random19.style.display = "none"
                random29.style.display = "none"
                random39.style.display = "none"
                CB2h1.textContent = ""
                CBlst.push(click_2, click_1)
            })
        }
    })

    GK.addEventListener("click", () => {
        if (i11 < players) {
            i11++;
            setTimeout(() => {
                random10.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 1000);
            setTimeout(() => {
                random20.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 2000);
            setTimeout(() => {
                random30.style.display = "flex"
                mark.currentTime = 0.2
                mark.play()
            }, 3000);
            bg_random0.style.display = "flex"
            let click_1 = null
            let click_2 = null
            let click_3 = null
            let click_1p = null
            let click_2p = null
            let click_3p = null
            for (let j = 0; j <= 3; j++) {
                let random_num = Math.floor(Math.random() * GKlst.length)
                if (j == 1) {
                    random10.style.backgroundImage = `url(../images/${GKlst[random_num]}.jpg)`
                    click_1 = GKlst[random_num]
                    click_1p = random_num

                    GKlst.splice(random_num, 1)
                } else if (j == 2) {
                    random20.style.backgroundImage = `url(../images/${GKlst[random_num]}.jpg)`
                    click_2 = GKlst[random_num]

                    click_2p = random_num
                    GKlst.splice(random_num, 1)
                } else if (j == 3) {
                    random30.style.backgroundImage = `url(../images/${GKlst[random_num]}.jpg)`
                    click_3 = GKlst[random_num]

                    click_3p = random_num
                    GKlst.splice(random_num, 1)
                }
            }
            random10.addEventListener("click", () => {
                GK.style.backgroundImage = `url(../images/${click_1}.jpg)`
                bg_random0.style.display = "none"
                random10.style.display = "none"
                random20.style.display = "none"
                random30.style.display = "none"
                GKh1.textContent = ""
                GKlst.push(click_2, click_3)
            })
            random20.addEventListener("click", () => {
                GK.style.backgroundImage = `url(../images/${click_2}.jpg)`
                bg_random0.style.display = "none"
                random10.style.display = "none"
                random20.style.display = "none"
                random30.style.display = "none"
                GKh1.textContent = ""
                GKlst.push(click_1, click_3)

            })
            random30.addEventListener("click", () => {
                GK.style.backgroundImage = `url(../images/${click_3}.jpg)`
                bg_random0.style.display = "none"
                random10.style.display = "none"
                random20.style.display = "none"
                random30.style.display = "none"
                GKh1.textContent = ""
                GKlst.push(click_2, click_1)
            })
        }
    })

    sub1.addEventListener("click", () => {
        if (i1 == players && i2 == players && i3 == players && i4 == players && i5 == players && i6 == players && i7 == players && i8 == players && i9 == players && i10 == players && i11 == players) {
            SUB_PLAYER = [...CFlst, ...CBlst, ...GKlst, ...LWlst, ...CMlst, ...RBlst, ...RWlst, ...LBlst]
            if (i12 < players) {
                i12++;
                setTimeout(() => {
                    random111.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 1000);
                setTimeout(() => {
                    random211.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 2000);
                setTimeout(() => {
                    random311.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 3000);
                bg_random11.style.display = "flex"
                let click_1 = null
                let click_2 = null
                let click_3 = null
                let click_1p = null
                let click_2p = null
                let click_3p = null
                for (let j = 0; j <= 3; j++) {
                    let random_num = Math.floor(Math.random() * SUB_PLAYER.length)
                    if (j == 1) {
                        random111.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_1 = SUB_PLAYER[random_num]
                        click_1p = random_num

                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 2) {
                        random211.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_2 = SUB_PLAYER[random_num]

                        click_2p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 3) {
                        random311.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_3 = SUB_PLAYER[random_num]

                        click_3p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    }
                }
                random111.addEventListener("click", () => {
                    sub1.style.backgroundImage = `url(../images/${click_1}.jpg)`
                    bg_random11.style.display = "none"
                    random111.style.display = "none"
                    random211.style.display = "none"
                    random311.style.display = "none"
                    sub1h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_3)
                })
                random211.addEventListener("click", () => {
                    sub1.style.backgroundImage = `url(../images/${click_2}.jpg)`
                    bg_random11.style.display = "none"
                    random111.style.display = "none"
                    random211.style.display = "none"
                    random311.style.display = "none"
                    sub1h1.textContent = ""
                    SUB_PLAYER.push(click_1, click_3)

                })
                random311.addEventListener("click", () => {
                    sub1.style.backgroundImage = `url(../images/${click_3}.jpg)`
                    bg_random11.style.display = "none"
                    random111.style.display = "none"
                    random211.style.display = "none"
                    random311.style.display = "none"
                    sub1h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_1)
                })
            }
        }

    })

    sub2.addEventListener("click", () => {
        if (i1 == players && i2 == players && i3 == players && i4 == players && i5 == players && i6 == players && i7 == players && i8 == players && i9 == players && i10 == players && i11 == players) {
            if (i13 < players) {
                i13++;
                setTimeout(() => {
                    random112.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 1000);
                setTimeout(() => {
                    random212.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 2000);
                setTimeout(() => {
                    random312.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 3000);
                bg_random12.style.display = "flex"
                let click_1 = null
                let click_2 = null
                let click_3 = null
                let click_1p = null
                let click_2p = null
                let click_3p = null
                for (let j = 0; j <= 3; j++) {
                    let random_num = Math.floor(Math.random() * SUB_PLAYER.length)
                    if (j == 1) {
                        random112.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_1 = SUB_PLAYER[random_num]
                        click_1p = random_num

                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 2) {
                        random212.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_2 = SUB_PLAYER[random_num]

                        click_2p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 3) {
                        random312.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_3 = SUB_PLAYER[random_num]

                        click_3p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    }
                }
                random112.addEventListener("click", () => {
                    sub2.style.backgroundImage = `url(../images/${click_1}.jpg)`
                    bg_random12.style.display = "none"
                    random112.style.display = "none"
                    random212.style.display = "none"
                    random312.style.display = "none"
                    sub2h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_3)
                })
                random212.addEventListener("click", () => {
                    sub2.style.backgroundImage = `url(../images/${click_2}.jpg)`
                    bg_random12.style.display = "none"
                    random112.style.display = "none"
                    random212.style.display = "none"
                    random312.style.display = "none"
                    sub2h1.textContent = ""
                    SUB_PLAYER.push(click_1, click_3)

                })
                random312.addEventListener("click", () => {
                    sub2.style.backgroundImage = `url(../images/${click_3}.jpg)`
                    bg_random12.style.display = "none"
                    random112.style.display = "none"
                    random212.style.display = "none"
                    random312.style.display = "none"
                    sub2h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_1)
                })
            }
        }

    })

    sub3.addEventListener("click", () => {
        if (i1 == players && i2 == players && i3 == players && i4 == players && i5 == players && i6 == players && i7 == players && i8 == players && i9 == players && i10 == players && i11 == players) {
            if (i14 < players) {
                i14++;
                setTimeout(() => {
                    random113.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 1000);
                setTimeout(() => {
                    random213.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 2000);
                setTimeout(() => {
                    random313.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 3000);
                bg_random13.style.display = "flex"
                let click_1 = null
                let click_2 = null
                let click_3 = null
                let click_1p = null
                let click_2p = null
                let click_3p = null
                for (let j = 0; j <= 3; j++) {
                    let random_num = Math.floor(Math.random() * SUB_PLAYER.length)
                    if (j == 1) {
                        random113.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_1 = SUB_PLAYER[random_num]
                        click_1p = random_num

                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 2) {
                        random213.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_2 = SUB_PLAYER[random_num]

                        click_2p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 3) {
                        random313.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_3 = SUB_PLAYER[random_num]

                        click_3p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    }
                }
                random113.addEventListener("click", () => {
                    sub3.style.backgroundImage = `url(../images/${click_1}.jpg)`
                    bg_random13.style.display = "none"
                    random113.style.display = "none"
                    random213.style.display = "none"
                    random313.style.display = "none"
                    sub3h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_3)
                })
                random213.addEventListener("click", () => {
                    sub3.style.backgroundImage = `url(../images/${click_2}.jpg)`
                    bg_random13.style.display = "none"
                    random113.style.display = "none"
                    random213.style.display = "none"
                    random313.style.display = "none"
                    sub3h1.textContent = ""
                    SUB_PLAYER.push(click_1, click_3)

                })
                random313.addEventListener("click", () => {
                    sub3.style.backgroundImage = `url(../images/${click_3}.jpg)`
                    bg_random13.style.display = "none"
                    random113.style.display = "none"
                    random213.style.display = "none"
                    random313.style.display = "none"
                    sub3h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_1)
                })
            }
        }

    })

    sub4.addEventListener("click", () => {
        if (i1 == players && i2 == players && i3 == players && i4 == players && i5 == players && i6 == players && i7 == players && i8 == players && i9 == players && i10 == players && i11 == players) {
            if (i15 < players) {
                i15++;
                setTimeout(() => {
                    random114.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 1000);
                setTimeout(() => {
                    random214.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 2000);
                setTimeout(() => {
                    random314.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 3000);
                bg_random14.style.display = "flex"
                let click_1 = null
                let click_2 = null
                let click_3 = null
                let click_1p = null
                let click_2p = null
                let click_3p = null
                for (let j = 0; j <= 3; j++) {
                    let random_num = Math.floor(Math.random() * SUB_PLAYER.length)
                    if (j == 1) {
                        random114.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_1 = SUB_PLAYER[random_num]
                        click_1p = random_num

                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 2) {
                        random214.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_2 = SUB_PLAYER[random_num]

                        click_2p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 3) {
                        random314.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_3 = SUB_PLAYER[random_num]

                        click_3p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    }
                }
                random114.addEventListener("click", () => {
                    sub4.style.backgroundImage = `url(../images/${click_1}.jpg)`
                    bg_random14.style.display = "none"
                    random114.style.display = "none"
                    random214.style.display = "none"
                    random314.style.display = "none"
                    sub4h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_3)
                })
                random214.addEventListener("click", () => {
                    sub4.style.backgroundImage = `url(../images/${click_2}.jpg)`
                    bg_random14.style.display = "none"
                    random114.style.display = "none"
                    random214.style.display = "none"
                    random314.style.display = "none"
                    sub4h1.textContent = ""
                    SUB_PLAYER.push(click_1, click_3)

                })
                random314.addEventListener("click", () => {
                    sub4.style.backgroundImage = `url(../images/${click_3}.jpg)`
                    bg_random14.style.display = "none"
                    random114.style.display = "none"
                    random214.style.display = "none"
                    random314.style.display = "none"
                    sub4h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_1)
                })
            }
        }

    })

    sub5.addEventListener("click", () => {
        if (i1 == players && i2 == players && i3 == players && i4 == players && i5 == players && i6 == players && i7 == players && i8 == players && i9 == players && i10 == players && i11 == players) {
            if (i16 < players) {
                i16++;
                setTimeout(() => {
                    random115.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 1000);
                setTimeout(() => {
                    random215.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 2000);
                setTimeout(() => {
                    random315.style.display = "flex"
                    mark.currentTime = 0.2
                    mark.play()
                }, 3000);
                bg_random15.style.display = "flex"
                let click_1 = null
                let click_2 = null
                let click_3 = null
                let click_1p = null
                let click_2p = null
                let click_3p = null
                for (let j = 0; j <= 3; j++) {
                    let random_num = Math.floor(Math.random() * SUB_PLAYER.length)
                    if (j == 1) {
                        random115.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_1 = SUB_PLAYER[random_num]
                        click_1p = random_num

                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 2) {
                        random215.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_2 = SUB_PLAYER[random_num]

                        click_2p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    } else if (j == 3) {
                        random315.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num]}.jpg)`
                        click_3 = SUB_PLAYER[random_num]

                        click_3p = random_num
                        SUB_PLAYER.splice(random_num, 1)
                    }
                }
                random115.addEventListener("click", () => {
                    sub5.style.backgroundImage = `url(../images/${click_1}.jpg)`
                    bg_random15.style.display = "none"
                    random115.style.display = "none"
                    random215.style.display = "none"
                    random315.style.display = "none"
                    sub5h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_3)
                })
                random215.addEventListener("click", () => {
                    sub5.style.backgroundImage = `url(../images/${click_2}.jpg)`
                    bg_random15.style.display = "none"
                    random115.style.display = "none"
                    random215.style.display = "none"
                    random315.style.display = "none"
                    sub5h1.textContent = ""
                    SUB_PLAYER.push(click_1, click_3)

                })
                random315.addEventListener("click", () => {
                    sub5.style.backgroundImage = `url(../images/${click_3}.jpg)`
                    bg_random15.style.display = "none"
                    random115.style.display = "none"
                    random215.style.display = "none"
                    random315.style.display = "none"
                    sub5h1.textContent = ""
                    SUB_PLAYER.push(click_2, click_1)
                })
            }
        }

    })

}


// saveToPDF.addEventListener("click", async () => {
//     const element = document.getElementById("content");
//     await html2canvas(body, {
//         useCORS: true,
//         allowTaint: true,
//         scale: 2
//       });
//     const canvas = await html2canvas(body, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");
//     const { jsPDF } = window.jspdf;

//     const pdf = new jsPDF("p", "mm", "a4");
//     const width = pdf.internal.pageSize.getWidth();
//     const height = (canvas.height * width) / canvas.width;
//     pdf.addImage(imgData, "PNG", 0, 0, width, height);
//     pdf.save("page.pdf");
// });