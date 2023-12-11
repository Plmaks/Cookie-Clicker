// Variable Inits
let cookies, smitog, add, cost1, upg1_amount, slaves, cost2, Key, Pressed, cursor
// Global Var Declars
slaves = 0
Working = false
upg1_amount = 1
upg2_amount = 1
cost1 = 7 + (upg1_amount * 3)
cost2 = 17 + (upg2_amount * 3)

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
    localStorage.setItem("upg1_amount_dat", upg1_amount)
    localStorage.setItem("upg2_amount_dat", upg2_amount)
    localStorage.setItem("slaves_dat", slaves)
    localStorage.setItem("working_dat", Working)

    console.log("Saved?")
}

function Load() {
    document.getElementById("amount").innerHTML = localStorage.getItem("cookies_dat")
    document.getElementById("upg1_amount").innerHTML = localStorage.getItem("upg1_amount_dat")
    document.getElementById("upg1_cost").innerHTML = localStorage.getItem("cost1_dat")
    document.getElementById("upg2_amount").innerHTML = localStorage.getItem("upg2_amount_dat")
    document.getElementById("upg2_cost").innerHTML = localStorage.getItem("cost2_dat")

    cookies = localStorage.getItem("cookies_dat")
    add = localStorage.getItem("add_dat")
    cost1 = localStorage.getItem("cost1_dat")
    cost2 = localStorage.getItem("cost2_dat")
    upg1_amount = localStorage.getItem("upg1_amount_dat")
    upg2_amount = localStorage.getItem("upg2_amount_dat")
    slaves = localStorage.getItem("slaves_dat")
    Working = localStorage.getItem("working_dat")

    if (slaves > 0) {
        Worker
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

// Idk why the image doesn't appear, src appears to be correct, fix later
function Workerspawn() {
    cursor = document.createElement("IMG")
    cursor.className = "cursor"
    cursor.src = "Images/cursor.png"
    // Setting up position
    pos_offset_x = 20
    pos_offset_y = 20
    cursor.style.top = "500px" //- pos_offset_y
    cursor.style.left = "500px" //- pos_offset_x
    pos_offset_x += 10
    pos_offset_y += 10
}

function Worker() {
    //Global flag, so buying the upgrade doesn't inflate the amount of times that mouse workers are called
    Working = true
    
    if (1 == 1) {
        cookies = parseInt(document.getElementById("amount").innerHTML)
        cookies = cookies + slaves
        document.getElementById("amount").innerHTML = cookies
        setTimeout(Worker, 1000)
    }

    return cookies, slaves
}

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
            Workerspawn()
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
            Workerspawn()
        } else {
            alert("Just admit you are broke, boy")
        }
        
        return slaves, upg2_amount, cost2, cookies
       default:
        break;
    }
}