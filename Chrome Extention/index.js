let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStoage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
console.log(leadsFromLocalStoage)

if (leadsFromLocalStoage) {
    myLeads = leadsFromLocalStoage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        console.log(leads[i])
        // listItems += "<li><a target ='_blank' href = '" + myLeads[i] + "'>"  + myLeads[i] + "</a></li>"
        listItems += `
       <li>
                <a target ='_blank' href = '${leads[i]}'>
                ${leads[i]}
                </a>
       </li>  `
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tab) {
        myLeads.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })


})
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    console.log("Button clicked from event listener")
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})