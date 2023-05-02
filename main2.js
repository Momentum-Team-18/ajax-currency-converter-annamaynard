const convert = document.getElementById("convert");
const result = document.getElementById("result");
const from = document.getElementById("from");
const to = document.getElementById("amount");



convert.addEventListener("click",function(){
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = amount.value;
})

    fetch(`"https://openexchangerates.org/api/latest.json?app_id=e6d9070e817a4dd0a0fd6767966c6fb3"`)
        .then (response => {
            return response.json();
        })
        .then (data => {
            let rate = data.rates[toCurrency];
            let total = rate * amt;
            result.innerHTML = `${amt} ${fromCurrency} = ${total}
            ${toCurrency}`;

        })

