const menuData = {
    "appetizers": [
        {
            "name": "appetizer",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto3.jpg"
        },
        {
            "name": "appetizer",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto3.jpg"
        },
        {
            "name": "appetizer",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto3.jpg"
        }
    ],
    "main": [
        {
            "name": "meal",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto.jpg"
        },
        {
            "name": "meal",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto.jpg"
        },
        {
            "name": "meal",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto.jpg"
        }
    ],
    "drinks": [
        {
            "name": "drink",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto4.jpg"
        },
        {
            "name": "drink",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto4.jpg"
        },
        {
            "name": "drink",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto4.jpg"
        }
    ],
    "daily-menu": [
        {
            "name": "meal",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto2.jpg"
        },
        {
            "name": "meal",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto2.jpg"
        },
        {
            "name": "meal",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            "price": 15.00,
            "image": "images/menuphoto2.jpg"
        }
    ]
};

// Funkce pro generování obsahu menu
function generateMenu(category, items) {
    const categoryElement = document.getElementById(category);
    const shopContent = categoryElement.querySelector('.menu-content');
    
    items.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('row');

        const image = document.createElement('img');
        image.src = item.image;
        row.appendChild(image);

        const name = document.createElement('h3');
        name.textContent = item.name;
        row.appendChild(name);

        const description = document.createElement('p');
        description.textContent = item.description;
        row.appendChild(description);

        const inText = document.createElement('div');
        inText.classList.add('in-text');

        const price = document.createElement('div');
        price.classList.add('price');

        const priceTag = document.createElement('h6');
        priceTag.textContent = '$' + item.price.toFixed(2); 
        price.appendChild(priceTag);

        inText.appendChild(price);
        row.appendChild(inText);

        shopContent.appendChild(row);
    });
}

generateMenu('appetizers', menuData.appetizers);
generateMenu('main', menuData.main);
generateMenu('drinks', menuData.drinks);
generateMenu('daily-menu', menuData['daily-menu']);


