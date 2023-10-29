  /*Read More Button*/
  function readMore1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText.innerHTML = "Read more >>"; 
      moreText.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText.innerHTML = "<< Read less"; 
      moreText.style.display = "inline";
    }
  }
  function readMore2() {
    var dots2 = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText.innerHTML = "Read more >>"; 
      moreText.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText.innerHTML = "<< Read less"; 
      moreText.style.display = "inline";
    }
  }
  function readMore3() {
    var dots3 = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText.innerHTML = "Read more >>"; 
      moreText.style.display = "none";
    } else {
      dots3.style.display = "none";
      btnText.innerHTML = "<< Read less"; 
      moreText.style.display = "inline";
    }
  }
  /*Read More Button*/

  /*More Button*/
  function readMore4() {
    var dots4 = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
    if (dots4.style.display === "none") {
      dots4.style.display = "inline";
      btnText.innerHTML = "more >>"; 
      moreText.style.display = "none";
    } else {
      dots4.style.display = "none";
      btnText.innerHTML = "<< less"; 
      moreText.style.display = "inline";
    }
  }
  /*More Button*/

  /*--------------------------------------------*/




  
  /*--------------------------------------------*/

    /*ScrollToTop*/   
    
// When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
  scrollFunction();
  };
  
  function scrollFunction() {
  if (
  document.body.scrollTop > 20 ||
  document.documentElement.scrollTop > 20
  ) {
  mybutton.style.display = "block";
  } else {
  mybutton.style.display = "none";
  }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }    
  /*ScrollToTop*/
