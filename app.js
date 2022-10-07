const ipInput = document.querySelector("#initial-price");
const sqInput = document.querySelector("#stock-quantity");
const cpInput = document.querySelector("#current-price");
const btnTellme = document.querySelector("#tellme");
const  outputText = document.querySelector("#output");

function calculateStocks(initialPrice,stockQuantity,currentPrice)
{
    if(initialPrice > currentPrice )
    {
        var loss = (initialPrice - currentPrice)*stockQuantity;
        var lossPercentage = (loss/initialPrice)*100;
        console.log("Hello");
    }
    else if(currentPrice > initialPrice )
    {
        var profit = (currentPrice - initialPrice )*stockQuantity;
        var profitPercentage = (profit/initialPrice)*100;
        console.log("bye");
    } 
    else
    {
        console.log("You earned nothing you gained Nothing")
    }
}

function tellMe()
{
    var initialPrice = Number(ipInput.value);
    var stockQuantity= Number(sqInput.value);
    var currentPrice = Number(cpInput.value);
    calculateStocks(initialPrice,stockQuantity,currentPrice)
}

btnTellme.addEventListener("click", tellMe)