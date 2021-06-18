console.log('Hello World!') //This is in place to ensure the script is connected properly.



function toggleMenu() {
    let target = document.getElementById("menu_items");
  
    if (target.style.display === "block") {
      target.style.display = "none";
    } else {
      target.style.display = "block";
    }
  }
