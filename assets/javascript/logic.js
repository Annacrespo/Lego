// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// less = {
//     env: "development"
//   };
// //responsive top navbar hamburger menu

//   function myFunction() {
//     var x = document.getElementById("lego-global-header-wrap");
//     if (x.className === "lego-global-header-wrap") {
//         x.className += " responsive";
//     } else {
//         x.className = "lego-global-header-wrap";
//     }
// }

// var slideIndex = 1;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("carousel-item");
//     for (i = 1; i < x.length; i++) {
//       x[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 2} 
//     x[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 2000); // Change image every 2 seconds
// }