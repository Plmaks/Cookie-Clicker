// Variable Inits
let cookies, smitog, add, cost1, upg1_amount, slaves, cost2, Key, Pressed, cursor, farms, Working2, farm_prod, upg2_amount, upg3_amount, cost3
// Global Var Declars
slaves = 0
farms = 0
Working = false
Working2 = false
upg1_amount = 1
upg2_amount = 1
upg3_amount = 1
cost1 = 7 + (upg1_amount * 3)
cost2 = 17 + (upg2_amount * 3)
cost3 = 46 + (upg3_amount * 4)
farm_prod = 3

//Keybinds
document.addEventListener("keydown", Getkey)

function Getkey(Pressed) {
    Key = Pressed.key
    
    switch (Key) {
        case "1":
            upgrades(upg1)
            break;
        case "2":
            upgrades(upg2)
            break;
        case "3":
            upgrades(upg3)
            break;
        default:
            console.log(Key)
            break;
    }

    return Key
}
//

// Save system
function Save() {
    localStorage.clear()

    localStorage.setItem("cookies_dat", cookies)
    localStorage.setItem("add_dat", add)
    localStorage.setItem("cost1_dat", cost1)
    localStorage.setItem("cost2_dat", cost2)
    localStorage.setItem("cost3_dat", cost3)
    localStorage.setItem("upg1_amount_dat", upg1_amount)
    localStorage.setItem("upg2_amount_dat", upg2_amount)
    localStorage.setItem("upg3_amount_dat", upg3_amount)
    localStorage.setItem("slaves_dat", slaves)
    localStorage.setItem("farms_dat", farms)
    localStorage.setItem("farm_prod_dat", farm_prod)
    localStorage.setItem("working_dat", Working)
    localStorage.setItem("Working2_dat", Working2)

    console.log("Saved?")
}

function Load() {
    document.getElementById("amount").innerHTML = localStorage.getItem("cookies_dat")
    document.getElementById("upg1_amount").innerHTML = localStorage.getItem("upg1_amount_dat")
    document.getElementById("upg1_cost").innerHTML = localStorage.getItem("cost1_dat")
    document.getElementById("upg2_amount").innerHTML = localStorage.getItem("upg2_amount_dat")
    document.getElementById("upg2_cost").innerHTML = localStorage.getItem("cost2_dat")
    document.getElementById("upg3_cost").innerHTML = localStorage.getItem("cost3_dat")
    document.getElementById("upg3_amount").innerHTML = localStorage.getItem("upg3_amount_dat")

    cookies = parseInt(localStorage.getItem("cookies_dat"))
    add = parseInt(localStorage.getItem("add_dat"))
    cost1 = parseInt(localStorage.getItem("cost1_dat"))
    cost2 = parseInt(localStorage.getItem("cost2_dat"))
    upg1_amount = parseInt(localStorage.getItem("upg1_amount_dat"))
    upg2_amount = parseInt(localStorage.getItem("upg2_amount_dat"))
    upg3_amount = parseInt(localStorage.getItem("upg3_amount_dat"))
    cost3 = parseInt(localStorage.getItem("cost3_dat"))
    slaves = parseInt(localStorage.getItem("slaves_dat"))
    Working = parseInt(localStorage.getItem("working_dat"))
    Working2 = parseInt(localStorage.getItem("Working2_dat"))
    farms = parseInt(localStorage.getItem("farms_dat"))
    farm_prod = parseInt(localStorage.getItem("farm_prod_dat"))

    if (slaves > 0) {
        Worker()
    }
    if (farms > 0) {
        Farm()
    }

    //Flavor text
    if (cookies > 1000 && cookies < 5000) {
        document.getElementById("smily").innerHTML = ":)"
    } else if (cookies > 5000 && cookies < 10000) {
        document.getElementById("smily").innerHTML = "Thanks for enjoying my game!"
    } else if (cookies > 10000) {
        document.getElementById("smily").innerHTML = ""
    } else {
        document.getElementById("smily").innerHTML = ""
    }

    console.log("Loaded?")
}
//

function earn() {
    cookies = parseInt(document.getElementById("amount").innerHTML)
    smitog = document.getElementById("smily")
    
    if (typeof add === "undefined") {
        add = 1
    } else {}

    //Flavor text
    if (cookies > 1000 && cookies < 5000) {
        smitog.innerHTML = ":)"
    } else if (cookies > 5000 && cookies < 10000) {
        smitog.innerHTML = "Thanks for enjoying my game!"
    } else if (cookies > 10000) {
        smitog.innerHTML = ""
    } else {
        smitog.innerHTML = ""
    }
    
    // Updating cookie count
    cookies = cookies + add   
    document.getElementById("amount").innerHTML = cookies

    return cookies, smitog, add, amount
}

// Space reserved for graphics I will do when I finish all the upgrades

// Space

// Idle worker functions
function Worker() {
    //Global flag, so buying the workers doesn't inflate the amount of times that mouse workers are called
    Working = true
    
    if (1 == 1) {
        cookies = parseInt(document.getElementById("amount").innerHTML)
        cookies = cookies + slaves
        document.getElementById("amount").innerHTML = cookies
        setTimeout(Worker, 1000)
    }

    return cookies, slaves
}

function Farm() {
    //Global flag, so buying the farms doesn't inflate the amount of times that mouse workers are called
    Working2 = true
    
    if (1 == 1) {
        cookies = parseInt(document.getElementById("amount").innerHTML)
        cookies = cookies + (farms * farm_prod)
        document.getElementById("amount").innerHTML = cookies
        setTimeout(Farm, 1000)
    }

    return cookies, slaves
}
// Idle upgrade functions end

function upgrades(type) {
    switch(type) {
       //Mouse upgrade 
       case upg1:
        upg1_amount = parseInt(document.getElementById("upg1_amount").innerHTML) + 1
        if (cookies >= cost1) {
            add++
            cookies = cookies - cost1
            // Var updates
            cost1 = cost1 + (upg1_amount * 3)
            document.getElementById("upg1_amount").innerHTML = upg1_amount
            document.getElementById("upg1_cost").innerHTML = cost1
            document.getElementById("amount").innerHTML = cookies
        } else {
            alert("No money?")
        }
        return add, cost1, cookies, upg1_amount
       //Worker mouse upgrade
       case upg2:
        upg2_amount = parseInt(document.getElementById("upg2_amount").innerHTML) + 1
        if (cookies >= cost2 && Working == false) {
            slaves++
            cookies = cookies - cost2
            document.getElementById("amount").innerHTML = cookies
            // Var updates
            cost2 = cost2 + (upg2_amount * 3)
            document.getElementById("upg2_amount").innerHTML = upg2_amount
            document.getElementById("upg2_cost").innerHTML = cost2
            document.getElementById("amount").innerHTML = cookies
            // Workerspawn()
            Worker()
        } else if (cookies >= cost2 && Working == true) {
            slaves++
            cookies = cookies - cost2
            document.getElementById("amount").innerHTML = cookies
            // Var updates
            cost2 = cost2 + (upg2_amount * 3)
            document.getElementById("upg2_amount").innerHTML = upg2_amount
            document.getElementById("upg2_cost").innerHTML = cost2
            document.getElementById("amount").innerHTML = cookies
            // Workerspawn()
        } else {
            alert("Just admit you are broke, boy")
        }
        
        return slaves, upg2_amount, cost2, cookies
       case upg3:
        upg3_amount = parseInt(document.getElementById("upg3_amount").innerHTML) + 1
        if (cookies >= cost3 && Working2 == false) {
            farms++
            cookies = cookies - cost3
            document.getElementById("amount").innerHTML = cookies
            // Var updates
            cost3 = cost3 + (upg3_amount * 4)
            document.getElementById("upg3_amount").innerHTML = upg3_amount
            document.getElementById("upg3_cost").innerHTML = cost3
            document.getElementById("amount").innerHTML = cookies
            // Farmspawn()
            Farm()
        } else if (cookies >= cost3 && Working2 == true) {
            farms++
            cookies = cookies - cost3
            document.getElementById("amount").innerHTML = cookies
            // Var updates
            cost3 = cost3 + (upg3_amount * 4)
            document.getElementById("upg3_amount").innerHTML = upg3_amount
            document.getElementById("upg3_cost").innerHTML = cost3
            document.getElementById("amount").innerHTML = cookies
            // Farmspawn()
        } else {
            alert("Not enough money m8")
        }
       default:
        break;
    }
}

function sidebar() {
    //Sidebars
    let upg = document.getElementById("Upgrades")
    
    if (upg.style.display == "flex") {
        upg.style.display = "none"
    } else {
        upg.style.display = "flex"
    }
}

function bottombar() {
    //Bottombar
    let options = document.getElementById("options")
    let bottom_arrow = document.getElementById("bottom_arrow")

    if (options.style.display == "flex") {
        options.style.display = "none"
        bottom_arrow.style.marginTop = "213px"
    } else {
        options.style.display = "flex"
        bottom_arrow.style.marginTop = "192px"
    }
}

function onload() {
    //Check if user is on a mobile device, if user is on mobile, set overflow to be scrollable

    let body = document.getElementById("body")

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        body.style.overflow = "scroll"
    } else {
        body.style.overflow = "hidden"
    }
}