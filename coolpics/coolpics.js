const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");

    
    if (!menu.classList.contains("hide") && (window.innerWidth > 750)) {
        const navItems = document.querySelectorAll("nav li");
        navItems.forEach(item => item.style.display = "inline");
    } 
    
    else if (!menu.classList.contains("hide") && (window.innerWidth <= 750)) {

        const navItems = document.querySelectorAll("nav li");
        navItems.forEach(item => item.style.display = "block");
    } 

    else {
       
        const navItems = document.querySelectorAll("nav li");
        navItems.forEach(item => item.style.display = "none");
    }
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    const navItems = document.querySelectorAll("nav li");
    
    if (window.innerWidth >= 1000) {
        menu.classList.remove("hide");
        navItems.forEach(item => item.style.display = "inline");
        menuButton.style.display = "none";
    } else if (window.innerWidth  >= 750) {
        menu.classList.add("hide");
        navItems.forEach(item => item.style.display = "inline");
        menuButton.style.display = "inline";
    }
     else {
        menu.classList.add("hide");
        menuButton.style.display = "inline";
        navItems.forEach(item => {
item.style.display = "block";
            // menuButton.style.display = "none";
        })
        
    }
}

handleResize();
window.addEventListener("resize", handleResize);


function viewerTemplate(pic, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'IMG') {
        const imageSrc = clickedElement.src.split("-")[0] + "-full.jpeg"; 
        const htmlToInsert = viewerTemplate(imageSrc, clickedElement.alt);
        document.body.insertAdjacentHTML("afterbegin", htmlToInsert); 
        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
}


function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove(); 
    }
}




const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);