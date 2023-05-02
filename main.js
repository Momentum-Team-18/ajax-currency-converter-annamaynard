let mainContainer = document.querySelector("#mainContainer");

console.log(mainContainer);

console.log("you are doing great");

let converterUrl = "https://openexchangerates.org/api/currencies.json";
let latestRates =
  "https://openexchangerates.org/api/latest.json?app_id=e6d9070e817a4dd0a0fd6767966c6fb3";

console.log(converterUrl)
console.log(latestRates);

fetch(latestRates, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((latestRates) => {
    return latestRates.json();
  })

  .then((data) => {
  
    console.log(latestRates)
    console.log(data)

    let avalibleCurrencies = Object.keys(data.rates);
    
    let converterBox=document.createElement('div')
    converterBox.classList.add("converterBox")
    mainContainer.appendChild(converterBox)

    let selectFrom = document.createElement('select')
        // selectFrom.id = "fromSelect"
        selectFrom.classList.add("selectFrom")
        converterBox.appendChild(selectFrom)
        mainContainer.appendChild(selectFrom)
        console.log(selectFrom)

    let optionFrom = document.createElement('option')
        optionFrom.value = "USD";
        optionFrom.tedxt = "USD"; 
        selectFrom.appendChild(optionFrom);
        converterBox.appendChild(optionFrom)
        mainContainer.appendChild(selectFrom)
        console.log(optionFrom)
    
    let spacebtn = document.createElement ('h2')
        spacebtn.innerText = "to"
        converterBox.appendChild(spacebtn)
        mainContainer.appendChild(spacebtn);

    let selectTo = document.createElement('select')
    selectTo.id = "idSelect"
    converterBox.appendChild(idSelect);
    mainContainer.appendChild(selectTo);

    for (let i=0; i <= avalibleCurrencies.length; i++) {

        let option = document.createElement('option')
        option.value = avalibleCurrencies[i]
        option.text = avalibleCurrencies[i]
        selectTo.appendChild(option)
    }

})

 
