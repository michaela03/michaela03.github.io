function validateMenu(){
    var form = document.getElementById("menuForm")
    let menuSoup = form.querySelector(".menuSoup");
    let soupInputs = $(".menuSoup input")
    let soupIsChecked = false;
    for(let i=0;i<soupInputs.length;i++){
        if (soupInputs[i].checked){
            soupIsChecked = true;
            break;
        }
    }
    if (soupIsChecked == false){
        alert("You must choose a soup!");
        menuSoup.scrollIntoView();
        return false;

    }

    let menuMain = form.querySelector(".menuMain");
    let mainIsChecked = false
    let mainInputs = $(".menuMain input");
    for(let i=0; i<mainInputs.length; i++){
        if (mainInputs[i].checked){
            mainIsChecked = true;
            break;
        }
    }
    if (mainIsChecked == false){
        alert("You must choose a main dish!");
        menuMain.scrollIntoView();
        return false;
    }

    let menuDesserts = form.querySelector(".menuDesserts");
    let dessertInputs = $(".menuDesserts input")
    let dessertIsChecked = false;
    for(let i=0; i<dessertInputs.length; i++){
        if (dessertInputs[i].checked){
            dessertIsChecked = true;
            break;
        }
    }

    if (dessertIsChecked == false){
        alert("You must choose a dessert!");
        menuDesserts.scrollIntoView();
        return false;
    }
}