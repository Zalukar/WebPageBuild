const 
    curriculum = document.getElementById("stackOverflow"),
    gitHub = document.getElementById("gitHub"),
    fontColorStack = document.getElementById("spanStack"),
    fontColorGit = document.getElementById("spanGit"),
    imgGit = document.getElementById("imgGit"),
    imgLinked = document.getElementById("imgLinked");

curriculum.addEventListener("mouseover", () => {
        curriculum.style.transform = "scale(1.15)";
        curriculum.style.backgroundColor = "#1a6b23db";
        curriculum.style.cursor = 'pointer'
        fontColorGit.style.color = "#D9D9D9";
    });
    
curriculum.addEventListener("mouseout", () => {
        curriculum.style.transform = "scale(1)";
        curriculum.style.backgroundColor = "#D9D9D9";
        fontColorGit.style.color = "#000";
    });
    
gitHub.addEventListener("mouseover", () => {
        gitHub.style.transform = "scale(1.15)";
        gitHub.style.backgroundColor = "#1a6b23db";
        gitHub.style.cursor = 'pointer'
        fontColorStack.style.color = "#D9D9D9";
        imgGit.style.filter = "invert(100%)"
    });
    
gitHub.addEventListener("mouseout", () => {
        gitHub.style.transform = "scale(1)";
        gitHub.style.backgroundColor = "#D9D9D9";
        fontColorStack.style.color = "#000";
        imgGit.style.filter = "invert(0%)"

    });

curriculum.addEventListener('click',function(){
    window.location.href = 'files/HojaDeVidaESP.pdf';
    
})

gitHub.addEventListener('click',function(){
    window.location.href = 'https://github.com/Zalukar';
    
})