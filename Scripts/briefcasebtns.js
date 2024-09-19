const 
    linkedin = document.getElementById("linkedin"),
    whatsapp = document.getElementById("whatsapp"),
    gmail = document.getElementById("gmail"),

    fontColorLink = document.getElementById("spanLinked"),
    fontColorWhats = document.getElementById("spanWhats"),
    fontColorGmail = document.getElementById("spanGmail"),

    imgWhats = document.getElementById("imgWhats"),
    imgGmail = document.getElementById("imgGmail"),
    imgLinked = document.getElementById("imgLinked");

linkedin.addEventListener("mouseover", () => {
        linkedin.style.transform = "scale(1.15)";
        linkedin.style.backgroundColor = "#1a6b23db";
        linkedin.style.cursor = "pointer"
        fontColorLink.style.color = "#D9D9D9";
        imgLinked.style.filter = "invert(100%)"
    });
    
linkedin.addEventListener("mouseout", () => {
        linkedin.style.transform = "scale(1)";
        linkedin.style.backgroundColor = "#D9D9D9";
        fontColorLink.style.color = "#000";
        imgLinked.style.filter = "invert(0%)"
    });
    
whatsapp.addEventListener("mouseover", () => {
        whatsapp.style.transform = "scale(1.15)";
        whatsapp.style.backgroundColor = "#1a6b23db";
        whatsapp.style.cursor = "pointer"
        fontColorWhats.style.color = "#D9D9D9";
        imgWhats.style.filter = "invert(100%)"
    });
    
whatsapp.addEventListener("mouseout", () => {
        whatsapp.style.transform = "scale(1)";
        whatsapp.style.backgroundColor = "#D9D9D9";
        fontColorWhats.style.color = "#000";
        imgWhats.style.filter = "invert(0%)"

    });

gmail.addEventListener("mouseover", () => {
        gmail.style.transform = "scale(1.15)";
        gmail.style.backgroundColor = "#1a6b23db";
        gmail.style.cursor = "pointer"
        fontColorGmail.style.color = "#D9D9D9";
        imgGmail.style.filter = "invert(100%)"
    });
    
gmail.addEventListener("mouseout", () => {
        gmail.style.transform = "scale(1)";
        gmail.style.backgroundColor = "#D9D9D9";
        fontColorGmail.style.color = "#000";
        imgGmail.style.filter = "invert(0%)"

    });

linkedin.addEventListener('click',function(){
    window.location.href = 'https://www.linkedin.com/in/victor-m-ardila/';

})
whatsapp.addEventListener('click',function(){
    window.location.href = 'https://wa.link/g6owbr';

})
gmail.addEventListener('click',function(){
    window.location.href = 'mailto:victor.ardila0205@gmail.com';

})
