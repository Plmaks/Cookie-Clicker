// Variable Inits
let cookies, smitog, add, cost1, upg1_amount, slaves, cost2, Key, Pressed
// Global Var Declars
slaves = 0
Working = false
upg1_amount = 1
upg2_amount = 2
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

// Save System, will do later, hopefully
function Save() {

}

function Load() {

}

function earn() {
    cookies = parseInt(document.getElementById("amount").innerHTML)
    smitog = document.getElementById("smily")
    
    //If add isn't defined, set it as 1
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

function Workerspawn() {
    
}

function Worker() {
    //Global flag, so buying the upgrade doesn't inflate the amount of times that mouse workers are called
    Working = true
    
    //While is too fast
    if (1 == 1) {
        cookies = parseInt(document.getElementById("amount").innerHTML)
        cookies = cookies + slaves
        document.getElementById("amount").innerHTML = cookies
        setTimeout(Worker, 1000)
    }

    return cookies, slaves, whips
}

function upgrades(type) {
    switch(type) {
       //Mouse upgrade 
       case upg1:
        upg1_amount = parseInt(document.getElementById("upg1_amount").innerHTML) + 1
        if (cookies >= cost1) {
            add++
            cookies = cookies - cost1
            // Updating values
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
            // Re-setting part 2: The Eletric Boogalo
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
            // Setting up
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