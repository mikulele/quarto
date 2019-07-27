function changeIMG(one, two, three, four, gone, gtwo, gthree, gfour){
    one = document.getElementById(one);
    two =  document.getElementById(two);
    three = document.getElementById(three);
    four = document.getElementById(four);

    gone = document.getElementById(gone);
    gtwo = document.getElementById(gtwo);
    gthree = document.getElementById(gthree);
    gfour = document.getElementById(gfour);

    one.style.background = "#004F8D";
    two.style.background = "#92ACBE";
    three.style.background = "#92ACBE";
    four.style.background = "#92ACBE";

    gone.style.display = "block";
    gtwo.style.display = "none";
    gthree.style.display = "none";
    gfour.style.display = "none";
}

function magnify(imgID, zoom){
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);

    glass = document.createElement(DIV)
}