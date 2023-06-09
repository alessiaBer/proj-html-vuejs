const categories = [
    {
        name: 'Bed',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-9-200x200.jpg',
        amount: 1
    },
    {
        name: 'Food',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-3-200x200.jpg',
        amount: 6
    },
    {
        name: 'Toys',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-2-200x200.jpg',
        amount: 6
    },
    {
        name: 'Transport',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-4-200x200.jpg',
        amount: 6
    }
]

const dogFood = [
    {
        name: 'Kibble',
        description: 'Dry dog food',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-18-200x210.png',
        type: 'Dry Food'
    },
    {
        name: 'Moist',
        description: 'Canned dog food',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-17-200x210.png',
        type: 'Moist Food'
    },
    {
        name: 'Frozen',
        description: 'Freeze-Dried',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-16-200x210.png',
        type: 'Frozen Food'
    }
]

const bestSellers = [
    {
        name: 'Transport cage',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-21-200x200.jpg',
        price: 25.00,
        discount: false,
    },
    {
        name: 'Dog leash',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-20-200x200.jpg',
        price: 25.00,
        discount: false,
    },
    {
        name: 'Animal transport cage',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-16-200x200.jpg',
        price: 25.00,
        discount: true,
        originalPrice: 35.00, 
    },
    {
        name: 'Colorful cat leash',
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-11-200x200.jpg',
        price: 12.00,
        discount: false,
    }
]

const newProducts = [
    {
        name: 'Colored pet bed',
        price: 18.00,
        maxPrice: 26.00,
        discount: false,
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-8-300x300.jpg'
    },
    {
        name: 'Colorful ball set',
        price: 29.00,
        discount: false,
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-2-300x300.jpg'
    },
    {
        name: 'Dog bone',
        price: 18.00,
        discount: true,
        originalPrice: 29.00,
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-3-300x300.jpg'
    },
    {
        name: 'Animal transport bag',
        price: 29.00,
        discount: false,
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-4-300x300.jpg'
    },
    {
        name: 'Animal transport cage',
        price: 35.00,
        discount: false,
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-5-300x300.jpg'
    },
    {
        name: 'Closable cat litter',
        price: 16.00,
        discount: false,
        img: 'https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/product-10-300x300.jpg'
    }
]

export {categories}
export {dogFood}
export {bestSellers}
export {newProducts}