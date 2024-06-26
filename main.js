//navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

//menu section
const foodb = document.querySelector(".foodb");
const mArrow = document.querySelector('#marrow');
const foodl = document.querySelector('.foodl');
const foodItems = document.querySelectorAll('.foodl li');

window.addEventListener("scroll", function() {
    foodb.classList.toggle("sticky", this.scrollY > 80);
});

mArrow.addEventListener('click', () => {
    foodl.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    foodl.classList.remove('open');
});

foodItems.forEach(item => {
    item.addEventListener('click', () => {
        foodl.classList.remove('open');
    });
});


document.addEventListener('DOMContentLoaded', function() {
            const categoryLinks = document.querySelectorAll('.category-link');
            const categories = document.querySelectorAll('.category');

            categories.forEach(category => {
                category.style.display = (category.id === 'appetizers') ? 'block' : 'none';
            });

            // Funkce pro aktualizaci kategorií
            function updateCategory(categoryToShow) {
                categories.forEach(category => {
                    category.style.display = (category.id === categoryToShow) ? 'block' : 'none';
                });
            }

            // Aktualizace kategorií po kliknutí na navigační odkazy
            categoryLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const categoryToShow = this.dataset.category
        updateCategory(categoryToShow);
    });
    });
    
    // Získání aktuálního data
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    
    // Zobrazení aktuálního data 
    const dateElement = document.getElementById('current-date');
    dateElement.textContent = `Menu for ${formattedDate}`;
    });
    
    
    document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    
    
    var currentDateElement = document.getElementById("current-date");
    
    currentDateElement.textContent = "Today's Date: " + currentDate.toDateString();
    
    var dailyMenuSection = document.getElementById("daily-menu");
    
    if (currentHour >= 11 && currentHour < 15) {
    dailyMenuSection.style.display = "block";
    } else {
    dailyMenuSection.style.display = "none";
    }
    });


    

//faq section
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("label");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; 
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); 
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}

//reservation form
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulář byl úspěšně odeslán!');
    this.reset(); 
});

