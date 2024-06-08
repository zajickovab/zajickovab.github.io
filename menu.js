const menuData = {
    "appetizers": [
        {
            "name": "Bruschetta",
            "description": "Crisp toasted bread slices topped with fresh tomatoes, basil, garlic, and a drizzle of olive oil.",
            "price": 15.00,
            "image": "images/menuphoto3.jpg"
        },
        {
            "name": "Stuffed Mushrooms",
            "description": "Savory mushrooms filled with a mixture of cream cheese, herbs, and breadcrumbs, baked to perfection.",
            "price": 15.00,
            "image": "images/menuphoto3.jpg"
        },
        {
            "name": "Caprese Skewers",
            "description": "Cherry tomatoes, fresh mozzarella, and basil leaves drizzled with balsamic glaze on skewers.",
            "price": 15.00,
            "image": "images/menuphoto3.jpg"
        }
    ],
    "main": [
        {
            "name": "Grilled Salmon",
            "description": "Succulent salmon fillet grilled to perfection, served with a zesty lemon-butter sauce.",
            "price": 15.00,
            "image": "images/menuphoto.jpg"
        },
        {
            "name": "Chicken Parmesan",
            "description": "Breaded chicken with marinara and melted mozzarella on spaghetti.",
            "price": 15.00,
            "image": "images/menuphoto.jpg"
        },
        {
            "name": "Beef Stir-Fry",
            "description": "Tender beef strips stir-fried with colorful vegetables in a savory soy-ginger sauce.",
            "price": 15.00,
            "image": "images/menuphoto.jpg"
        }
    ],
    "drinks": [
        {
            "name": "Mojito",
            "description": "A refreshing mix of white rum, mint, lime juice, sugar, and sparkling water.",
            "price": 15.00,
            "image": "images/menuphoto4.jpg"
        },
        {
            "name": "Mango Smoothie",
            "description": "A creamy blend of ripe mangoes, yogurt, and a splash of orange juice.",
            "price": 15.00,
            "image": "images/menuphoto4.jpg"
        },
        {
            "name": "Iced Coffee",
            "description": "Chilled coffee served over ice with a splash of milk and a hint of vanilla.",
            "price": 15.00,
            "image": "images/menuphoto4.jpg"
        }
    ],
    "daily-menu": [
        {
            "name": "Grilled Chicken Salad",
            "description": "Juicy grilled chicken breast served atop crisp mixed greens, cherry tomatoes, cucumbers, and a tangy vinaigrette dressing.",
            "price": 15.00,
            "image": "images/menuphoto2.jpg"
        },
        {
            "name": "Spaghetti Bolognese",
            "description": "Al dente spaghetti dressed in a hearty meat sauce of ground beef, onions, garlic, and tomatoes, finished with a sprinkle of Parmesan cheese.",
            "price": 15.00,
            "image": "images/menuphoto2.jpg"
        },
        {
            "name": "Vegetable Stir-Fry:",
            "description": "Colorful medley of fresh vegetables stir-fried to perfection in a flavorful soy-ginger sauce, served over fluffy white rice.",
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


