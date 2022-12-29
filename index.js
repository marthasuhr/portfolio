// Lav variablen "btn" som henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu" som henviser til ".menu"
const menu = document.querySelector(".main-menu");

//Tilføj et klik-event til "btn" som sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);

//Lav funktionen "toggleMenu()" med følgenede funktionalitet
function toggleMenu() {
  // toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // lav variablen menuShown som siger at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // spørg om "menuShown" i if-sætningen nedenfor(=> if (menuShown)) og udskift teksten
  if (menuShown) {
    console.log(menuShown); //se i konsollen?
    //sæt btn.textContent til "Luk" hvis menuShown er "true"
    btn.textContent = "Luk";
  } else {
    console.log(menuShown);
    // sæt btn.textContent til "Menu" hvis menuShown er "false"
    btn.textContent = "Menu";
  }
}
