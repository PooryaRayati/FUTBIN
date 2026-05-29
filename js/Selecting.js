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

    const inpBox1 = document.createElement("div")
    inpBox1.setAttribute("class", "inp")
    const inp1 = document.createElement("input")
    inp1.setAttribute("id", "inp1")
    inpBox1.style.display = "none"
    inpBox1.append(inp1)
    body.append(inpBox1)

    const inpBox2 = document.createElement("div")
    inpBox2.setAttribute("class", "inp")
    const inp2 = document.createElement("input")
    inp2.setAttribute("id", "inp1")
    inpBox2.style.display = "none"
    inpBox2.append(inp2)
    body.append(inpBox2)

    const inpBox3 = document.createElement("div")
    inpBox3.setAttribute("class", "inp")
    const inp3 = document.createElement("input")
    inp3.setAttribute("id", "inp1")
    inpBox3.style.display = "none"
    inpBox3.append(inp3)
    body.append(inpBox3)

    const inpBox4 = document.createElement("div")
    inpBox4.setAttribute("class", "inp")
    const inp4 = document.createElement("input")
    inp4.setAttribute("id", "inp1")
    inpBox4.style.display = "none"
    inpBox4.append(inp4)
    body.append(inpBox4)

    const inpBox5 = document.createElement("div")
    inpBox5.setAttribute("class", "inp")
    const inp5 = document.createElement("input")
    inp5.setAttribute("id", "inp1")
    inpBox5.style.display = "none"
    inpBox5.append(inp5)
    body.append(inpBox5)

    const inpBox6 = document.createElement("div")
    inpBox6.setAttribute("class", "inp")
    const inp6 = document.createElement("input")
    inp6.setAttribute("id", "inp1")
    inpBox6.style.display = "none"
    inpBox6.append(inp6)
    body.append(inpBox6)

    const inpBox7 = document.createElement("div")
    inpBox7.setAttribute("class", "inp")
    const inp7 = document.createElement("input")
    inp7.setAttribute("id", "inp1")
    inpBox7.style.display = "none"
    inpBox7.append(inp7)
    body.append(inpBox7)

    const inpBox8 = document.createElement("div")
    inpBox8.setAttribute("class", "inp")
    const inp8 = document.createElement("input")
    inp8.setAttribute("id", "inp1")
    inpBox8.style.display = "none"
    inpBox8.append(inp8)
    body.append(inpBox8)

    const inpBox9 = document.createElement("div")
    inpBox9.setAttribute("class", "inp")
    const inp9 = document.createElement("input")
    inp9.setAttribute("id", "inp1")
    inpBox9.style.display = "none"
    inpBox9.append(inp9)
    body.append(inpBox9)

    const inpBox10 = document.createElement("div")
    inpBox10.setAttribute("class", "inp")
    const inp10 = document.createElement("input")
    inp10.setAttribute("id", "inp1")
    inpBox10.style.display = "none"
    inpBox10.append(inp10)
    body.append(inpBox10)

    const inpBox11 = document.createElement("div")
    inpBox11.setAttribute("class", "inp")
    const inp11 = document.createElement("input")
    inp11.setAttribute("id", "inp1")
    inpBox11.style.display = "none"
    inpBox11.append(inp11)
    body.append(inpBox11)



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
        inpBox1.style.display = "flex"
        inp1.value = ""
        inp1.focus()
        inp1.addEventListener("input", (event) => {
            const value = event.target.value.trim()

            const filtered = CFlst.filter(product => product.toLowerCase().includes(value.toLowerCase()));
            CF.style.backgroundImage = `url(../images/${filtered[0]}.jpg)`
            CFh1.textContent = ""
            CF.addEventListener("click", () => {
                inpBox1.style.display = "none"

            })
            
        })
    })

    RW.addEventListener("click", () => {
        inpBox2.style.display = "flex"
        inp2.value = ""
        inp2.focus()
        inp2.addEventListener("input", (event) => {
            const value = event.target.value.trim()
            const filtered = RWlst.filter(product => product.toLowerCase().includes(value.toLowerCase()));
            RW.style.backgroundImage = `url(../images/${filtered[0]}.jpg)`
            RWh1.textContent = ""
            RW.addEventListener("click", () => {
                inpBox2.style.display = "none"
            })
            
        })
    })

    LW.addEventListener("click", () => {
        inpBox3.style.display = "flex"
        inp3.value = ""
        inp3.focus()
        inp3.addEventListener("input", (event) => {
            const value = event.target.value.trim()
            const filtered = LWlst.filter(product => product.toLowerCase().includes(value.toLowerCase()));
            LW.style.backgroundImage = `url(../images/${filtered[0]}.jpg)`
            LWh1.textContent = ""
            LW.addEventListener("click", () => {
                inpBox3.style.display = "none"
            })
            
        })
    })

    
}
