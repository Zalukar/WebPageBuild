const 
    linkedin = document.getElementById("stackOverflow"),
    gitHub = document.getElementById("gitHub"),
    fontColorStack = document.getElementById("spanStack"),
    fontColorGit = document.getElementById("spanGit"),
    imgGit = document.getElementById("imgGit"),
    imgLinked = document.getElementById("imgLinked");

linkedin.addEventListener("mouseover", () => {
        linkedin.style.transform = "scale(1.15)";
        linkedin.style.backgroundColor = "#1a6b23db";
        fontColorGit.style.color = "#D9D9D9";
    });
    
linkedin.addEventListener("mouseout", () => {
        linkedin.style.transform = "scale(1)";
        linkedin.style.backgroundColor = "#D9D9D9";
        fontColorGit.style.color = "#000";
    });
    
gitHub.addEventListener("mouseover", () => {
        gitHub.style.transform = "scale(1.15)";
        gitHub.style.backgroundColor = "#1a6b23db";
        fontColorStack.style.color = "#D9D9D9";
        imgGit.style.filter = "invert(100%)"
    });
    
gitHub.addEventListener("mouseout", () => {
        gitHub.style.transform = "scale(1)";
        gitHub.style.backgroundColor = "#D9D9D9";
        fontColorStack.style.color = "#000";
        imgGit.style.filter = "invert(0%)"

    });