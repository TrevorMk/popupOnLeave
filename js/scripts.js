

/* const x = document.cookie;
alert(x); */
  






window.onload = function () { 
    setTimeout(function() {
      document.getElementById("popupTrigger").addEventListener("mouseout", mouseLeave , );
    }, 3000); 
  }
  
  function mouseLeave() {
    const cookieValue = document.cookie;

    if (cookieValue === "popup=true") { 
      ; 
    } else {
      document.getElementById("popupWindow").style.display = "block";
      
  }
}

function closeModal() {
  document.getElementById("popupWindow").style.display = "none";
  document.cookie = "popup=true; max-age=" + 24*60*60;
}