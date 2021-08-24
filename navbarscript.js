var prevScrollpos = window.pageYOffset;

window.onscroll = function()
{
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos || currentScrollPos < 10)
    {
        document.getElementById("navbar").style.top = "0";
    }
    else
    {
        document.getElementById("navbar").style.top = "-1000px";
    }

    prevScrollpos = currentScrollPos;
}