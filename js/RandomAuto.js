
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

const LogoT = ["Liverpool", "Barca", "RealM", "Inter", "VillaR", "Paris", "AcMilano", "Joventoos", "ATM", "Tatenham", "ManU", "ManC", "Alnasr","Ajax","Alhelal","ATB","Aston"]


let players = localStorage.getItem("player_num")


for (let i = 0; i < players; i++) {
    



    const teamsheat = document.createElement("div")
    teamsheat.setAttribute("class", "teamsheat")
    const Sub = document.createElement("div")
    Sub.setAttribute("class", "Sub")
    const forward = document.createElement("div")
    forward.setAttribute("class", "forward")
    const middel = document.createElement("div")
    middel.setAttribute("class", "middel")
    const deffense = document.createElement("div")
    deffense.setAttribute("class", "deffense")
    const golekeeper = document.createElement("div")
    golekeeper.setAttribute("class", "golekeeper")

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
    h1H.textContent = `TEAM ${i + 1}`
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

    setTimeout(() => {
        let random_num2 = Math.floor(Math.random() * CFlst.length)
        CF.style.backgroundImage = `url(../images/${CFlst[random_num2]}.jpg)`
        mark.play()
        mark.currentTime = 0.2
        CFlst.splice(random_num2, 1)
    }, 1000);
    CFh1.textContent = ""


    setTimeout(() => {
        let random_num3 = Math.floor(Math.random() * RWlst.length)
        RW.style.backgroundImage = `url(../images/${RWlst[random_num3]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        RWlst.splice(random_num3, 1)
    }, 2000);
    RWh1.textContent = ""

    setTimeout(() => {
        let random_num4 = Math.floor(Math.random() * LWlst.length)
        LW.style.backgroundImage = `url(../images/${LWlst[random_num4]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        LWlst.splice(random_num4, 1)
    }, 3000);
    LWh1.textContent = ""


    setTimeout(() => {
        let random_num5 = Math.floor(Math.random() * CMlst.length)
        CM1.style.backgroundImage = `url(../images/${CMlst[random_num5]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        CMlst.splice(random_num5, 1)
    }, 4000);
    CM1h1.textContent = ""


    setTimeout(() => {
        let random_num6 = Math.floor(Math.random() * CMlst.length)
        CMA.style.backgroundImage = `url(../images/${CMlst[random_num6]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        CMlst.splice(random_num6, 1)
    }, 5000);
    CMAh1.textContent = ""


    setTimeout(() => {
        let random_num7 = Math.floor(Math.random() * CMlst.length)
        CM2.style.backgroundImage = `url(../images/${CMlst[random_num7]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        CMlst.splice(random_num7, 1)
    }, 6000);
    CM2h1.textContent = ""

    setTimeout(() => {
        let random_num8 = Math.floor(Math.random() * RBlst.length)
        RB.style.backgroundImage = `url(../images/${RBlst[random_num8]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        RBlst.splice(random_num8, 1)
    }, 7000);
    RBh1.textContent = ""



    
    setTimeout(() => {
        let random_num9 = Math.floor(Math.random() * CBlst.length)
        CB1.style.backgroundImage = `url(../images/${CBlst[random_num9]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        CBlst.splice(random_num9, 1)
    }, 9000);
    CB1h1.textContent = ""
    

    
    setTimeout(() => {
        let random_num10 = Math.floor(Math.random() * CBlst.length)
        CB2.style.backgroundImage = `url(../images/${CBlst[random_num10]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        CBlst.splice(random_num10, 1)
    }, 8000);
    CB2h1.textContent = ""




    setTimeout(() => {
        let random_num11 = Math.floor(Math.random() * LBlst.length)
        LB.style.backgroundImage = `url(../images/${LBlst[random_num11]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        LBlst.splice(random_num11, 1)
    }, 10000);
    LBh1.textContent = ""


    setTimeout(() => {
        let random_num12 = Math.floor(Math.random() * GKlst.length)
        GK.style.backgroundImage = `url(../images/${GKlst[random_num12]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        GKlst.splice(random_num12, 1)
    }, 11000);
    GKh1.textContent = ""

    setTimeout(() => {
        SUB_PLAYER = [...CFlst, ...CBlst, ...GKlst, ...LWlst, ...CMlst, ...RBlst, ...RWlst, ...LBlst]
        let random_num13 = Math.floor(Math.random() * SUB_PLAYER.length)
        sub1.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num13]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        SUB_PLAYER.splice(random_num13, 1)
    }, 12000);
    sub1h1.textContent = ""

    setTimeout(() => {
        SUB_PLAYER = [...CFlst, ...CBlst, ...GKlst, ...LWlst, ...CMlst, ...RBlst, ...RWlst, ...LBlst]
        let random_num13 = Math.floor(Math.random() * SUB_PLAYER.length)
        sub2.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num13]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        SUB_PLAYER.splice(random_num13, 1)
    }, 13000);
    sub2h1.textContent = ""

    setTimeout(() => {
        SUB_PLAYER = [...CFlst, ...CBlst, ...GKlst, ...LWlst, ...CMlst, ...RBlst, ...RWlst, ...LBlst]
        let random_num13 = Math.floor(Math.random() * SUB_PLAYER.length)
        sub3.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num13]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        SUB_PLAYER.splice(random_num13, 1)
    }, 14000);
    sub3h1.textContent = ""

    setTimeout(() => {
        SUB_PLAYER = [...CFlst, ...CBlst, ...GKlst, ...LWlst, ...CMlst, ...RBlst, ...RWlst, ...LBlst]
        let random_num13 = Math.floor(Math.random() * SUB_PLAYER.length)
        sub4.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num13]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        SUB_PLAYER.splice(random_num13, 1)
    }, 15000);
    sub4h1.textContent = ""

    setTimeout(() => {
        SUB_PLAYER = [...CFlst, ...CBlst, ...GKlst, ...LWlst, ...CMlst, ...RBlst, ...RWlst, ...LBlst]
        let random_num13 = Math.floor(Math.random() * SUB_PLAYER.length)
        sub5.style.backgroundImage = `url(../images/${SUB_PLAYER[random_num13]}.jpg)`
        mark.currentTime = 0.2
        mark.play()
        SUB_PLAYER.splice(random_num13, 1)
    }, 16000);
    sub5h1.textContent = ""

}