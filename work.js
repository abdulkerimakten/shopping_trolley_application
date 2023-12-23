import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://trolley-app-40e26-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

// DOMs
const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")



// SEND DATA
addButton.addEventListener("click", function(){
    let inputValue = inputField.value
    push(shoppingListInDB, inputValue)

    clearInput()
})



// FETCH DATA
onValue(shoppingListInDB, function(snapshot){

    if(snapshot.exists()){
        let shoppingListItems_fromDB = Object.entries(snapshot.val())

        clearShoppingListEl()

        for(let i = 0; i<shoppingListItems_fromDB.length; i++){

            let currentItem = shoppingListItems_fromDB[i]

            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            add_shoppingListEl(currentItem)
        }
    }
    else{
        shoppingListEl.innerHTML = 'No items here... yet'
    }

    
})



// FUNCTIONS
function clearInput(){
    inputField.value = ""
}

function clearShoppingListEl(){
    shoppingListEl.innerHTML = ""
}

function add_shoppingListEl(item){
    
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("click", function(){
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}
