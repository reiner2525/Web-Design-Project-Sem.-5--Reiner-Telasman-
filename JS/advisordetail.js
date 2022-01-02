var underweightcard = document.getElementById('underweightid');
var normalcard = document.getElementById('normalid');

underweightcard.style.display ="none"
normalcard.style.display="none"
function underweight()
{


    if(underweightcard.style.display == "none")
    {
        underweightcard.style.display = "block";
        normalcard.style.display ="none"
    }
    else
    {
        underweightcard.style.display ="none"
    }

 
}

function Normal()
{


    if(normalcard.style.display == "none")
    {
        normalcard.style.display = "block";
        underweightcard.style.display = "none"
    }
    else
    {
        normalcard.style.display ="none"
    }

 
}