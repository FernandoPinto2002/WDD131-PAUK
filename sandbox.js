const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
    // Toggle the menu's visibility and aria-expanded state
    const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
    menuToggle.setAttribute("aria-expanded", !expanded);
    menu.classList.toggle("hidden");
});

menuToggle.addEventListener("keydown", function(event) {
    // Check if Enter or Space is pressed
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault(); // Prevent the default button press behavior
        const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
        menuToggle.setAttribute("aria-expanded", !expanded);
        menu.classList.toggle("hidden");
    }
});

// Ensure users can tab through the menu
menu.addEventListener("keydown", function(event) {
    const focusableItems = menu.querySelectorAll("a");
    const focusableArray = Array.prototype.slice.call(focusableItems);
    let currentIndex = focusableArray.indexOf(document.activeElement);

    if (event.key === "ArrowDown") {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % focusableArray.length;
        focusableArray[currentIndex].focus();
    } else if (event.key === "ArrowUp") {
        event.preventDefault();
        currentIndex = (currentIndex - 1 + focusableArray.length) % focusableArray.length;
        focusableArray[currentIndex].focus();
    }
});