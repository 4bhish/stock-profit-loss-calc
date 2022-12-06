const ipInput = document.querySelector("#initial-price");
const sqInput = document.querySelector("#stock-quantity");
const cpInput = document.querySelector("#current-price");
const btnTellme = document.querySelector("#tellme");
const  outputText = document.querySelector("#output");

function calculateStocks(initialPrice,stockQuantity,currentPrice)
{
   if(ipInput.value && sqInput.value && cpInput ) {if(initialPrice > currentPrice )
    {
        var loss = (initialPrice - currentPrice)*stockQuantity;
        var lossPercentage = (loss/initialPrice)*100;
        
        showMessage(`uh Oh ! you have lost ${loss} and loss percentage is ${lossPercentage}%`)
    }
    else if(currentPrice > initialPrice )
    {
        var profit = (currentPrice - initialPrice )*stockQuantity;
        var profitPercentage = (profit/initialPrice)*100;
        showMessage(`yayyy! you have profitted  ${profit} and profit percentage is ${profitPercentage}%`)
    } 
    else
    {
        showMessage("You earned nothing you gained Nothing")
    }} else
    {
        showMessage("It looks like you have missed to put values together")
    }
}

function tellMe()
{
    var initialPrice = Number(ipInput.value);
    var stockQuantity= Number(sqInput.value);
    var currentPrice = Number(cpInput.value);
    calculateStocks(initialPrice,stockQuantity,currentPrice)
}

function showMessage(message)
{
    outputText.innerText = message;
}

btnTellme.addEventListener("click", tellMe)