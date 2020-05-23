export const groceryStores = {
  stores: [
    {
      storeName: "Alphabetical"
    },
    {
      storeName: "Order Entered"
    },
    {
      storeName: "Fresh Thyme",
      storeCategories: [
        {
          storeOrder: 1,
          category: 'Entrance',
          items: [
            "Charcoal", "Flowers", "Sports drink", "Electrolyte water", 
            "Energy drinks","Ice", "Lavender", "Sunflower", "Tamales"
          ]
        },
        {
          storeOrder: 2,
          category: 'Bakery',
          items: [
            "Bagels", "Bread ", "Buns / Rolls", "Croissants", "Donuts",
            "English muffins", "Pastries", "Bagels / Croissants", "Biscuits", 
            "Cake", "Dinner rolls", "Hot dog buns", "Muffins", "Pie", "Paczki"
          ]
        },
        {
          storeOrder: 3,
          category: 'Deli',
          items: [
            "Bleu cheese", "Cheddar", "Cheese", "Cottage cheese", "Cream cheese", 
            "Goat cheese", "Hummus", "Pizza", "Provolone", "Ricotta", 
            "Blue cheese", "Feta cheese","Jack cheese", "Swiss cheese", "Gouda cheese"
          ]
        },
        {
          storeOrder: 4,
          category: 'Beverages',
          items: [
            "Beer", "Champagne", "Club soda / Tonic", "Gin", "Mixers", "Rum", "Sake", 
            "Vodka", "Whiskey", "Wine", "Liquor", "Apple Cider"
          ]
        },
        {
          storeOrder: 5,
          category: 'Produce',
          items: [
            "Apples", "Asparagus", "Avocados","Bananas", "Basil", "Berries", "Black pepper", 
            "Blueberries", "Broccoli","Carrots", "Cauliflower", "Celery", 
            "Cherries", "Cilantro", "Clementines", "Corn", "Cucumbers", 
            "Fruit", "Garlic", "Ginger","Grapefruit", 
            "Grapes", "Greens", "Lemon juice","Lemons ", 
            "Lettuce", "Lime juice", "Limes", "Melon", 
            "Mint", "Mushrooms", "Nectarines", "Onions", "Oranges", 
            "Parsley", "Peaches", "Pears", "Peppers", 
            "Plums", "Potatoes", "Red pepper","Sandwich slices", 
            "Spinach", "Squash", "Tomatoes","Vegetables", 
            "Zucchini", "Apricots", "Artichoke","Artichokes", 
            "Arugula", "Baby carrots ", "Bamboo shoots", "Bay leaves", 
            "Beets", "Bell peppers", "Blackberries","Bok choy", 
            "Brussels sprouts", "Cabbage", "Cantelope", "Cassava", 
            "Cayenne pepper", "Chard", 
            "Chilies", "Chives", "Coleslaw ","Collard greens", 
            "Cranberries","Crisphead lettuce", "Cucumber", "Daikon", 
            "Dates", "Dill", "Edamame", "Eggplant", "Endive", "Fennel", 
            "Figs", "Garlic cloves","Green onions", "Guava", "Honeydew / Muskmelon", 
            "Hot peppers", "Jicama", "Kale", "Kiwi", "Kohlrabi","Kumquats", 
            "Leaf lettuce", "Lemongrass", "Lychee", "Mango", "Mangosteen", 
            "Nopales", "Okra", "Papaya", "Peas", "Pepper", "Peppermint", 
            "Pineapple", "Plantains","Pomegranate", "Portobello mushrooms ", "Pumpkin", 
            "Quince", "Radicchio", "Radishes","Raspberries", "Red grapes", "Rhubarb", 
            "Romaine lettuce", "Salad greens", "Shallots / Leeks","Split peas", 
            "Sprouts", "Strawberries", "Sweet potatoes", "Taro", "Thyme", 
            "Tomatillo", "Turnips / Parsnips", "Watercress", "Watermelon", "Truffles"
          ]
        },
        {
          storeOrder: 6,
          category: 'Bulk Foods',
          items: [
            "Almonds", "Coffee", "Coffee filters","Nuts", 
            "Oatmeal", "Peanut butter", "Cashews", "Celery seed", 
            "Chestnuts", "Fruit snacks", "Green lentils", "Lentils", "Macadamia", 
            "Peanuts", "Pecans", "Pine nuts", "Pistachios", "Walnuts", "Water chestnuts"
          ]
        },
        {
          storeOrder: 7,
          category: 'Freezers',
          items: [
            "Burritos", "Fish sticks", "Ice cream","Popsicles", "Veggie burgers",
            "Cherry juice concentrate", "Chicken bites", "Fries / Tater tots", 
            "Frozen vegetables", "Frozen veggie meat","Lasagna", "Sorbet", 
            "Veggie burritos", "Veggie pizzas", "Frozen berries"
          ]
        },
        {
          storeOrder: 8,
          category: 'Snacks',
          items: [
            "BBQ sauce", "Chip dip","Chips","Fruit juice", "Hot sauce", "Pop", 
            "Popcorn", "Pretzels", "Relish", "Salad dressing", "Salsa", 
            "Steak sauce", "Tea", "Anise", "Baked tortilla chips", 
            "Brazil nuts", "Chai","Diet soft drinks", "Dip", "Dried fruit / Trail mix", 
            "Horseradish", "Hot chocolate mix","Kombucha", "Potato chips", "Soda pop", 
            "Soft drinks", "Tomato sauce", "Tortilla chips","Tortillas (corn)", 
            "Tortillas (flour)"
          ]
        },
        {
          storeOrder: 9,
          category: 'Baking',
          items: [
            "Applesauce", "Baking powder", "Baking soda","Bread crumbs", 
            "Brownie mix", "Cake icing / Decorations", "Cake mix", "Candy", 
            "Chocolate Chips", "Cinnamon", "Cocoa", "Dried fruit", 
            "Flaxseed", "Flour", "Honey", "Jam", "Ketchup", 
            "Olive oil", "Olives", "Oregano", "Pancake mix", "Paprika", "Salt", 
            "Soy sauce", "Spice mix", "Sugar", "Sugar substitute", 
            "Syrup", "Vanilla extract", "Vegetable oil", "Vinegar", "Worcestershire sauce", 
            "Yeast", "Agave nectar", "Allspice", "Almond butter", 
            "Apple cider vinegar", "Balsamic vinegar", "Broth", "Brown rice syrup", 
            "Brownies", "Bullion cubes", "Cake / Brownie mix","Cake decor", 
            "Chili powder", "Clove", "Cloves", "Cocktail sauce", "Cooking wine", "Coriander", 
            "Cornmeal", "Cornstarch", "Croutons", "Cumin", "Curry", "Flax", "Food coloring", 
            "Frosting", "Garlic powder", "Garlic salt", "Gelatin", "Harissa", 
            "Italian seasoning", "Lemon pepper seasoning", "Maple syrup", "Marinade", "Marjoram", 
            "Mayo product", "Muffin mix","Nonstick cooking spray", "Nutmeg", 
            "Nutritional yeast", "Pancake / Waffle mix", "Phyllo / Puff pastry", 
            "Pie crust", "Pie filling","Ponzu", "Poppy seed", "Prunes / Raisins", 
            "Pudding", "Raisins", "Red wine vinegar", "Rice vinegar","Rosemary", 
            "Saffron", "Sage","Seasoned salt", "Seeds", "Sesame oil", 
            "Spearmint", "Sriracha", "Stevia", "Stir fry sauce", 
            "Sugar (brown)", "Tahini", "Tarragon", "Tartar sauce", 
            "Teriyaki", "Tumeric", "TVP", "Vanilla", "Veg. Worcestershire", "Vegetable broth", 
            "Vegetable shortening","Wheat gluten (Seitan)", "Whipped topping", "White vinegar", 
            "Grapeseed oil", "Garam Masala"
          ]
        },
        {
          storeOrder: 10,
          category: 'Dry Goods',
          items: [
            "Baked beans", "Black Beans", "Chili", "Crackers", 
            "Farro", "Gravy", "Mac & cheese","Mayonnaise", "Mustard", "Pasta", 
            "Pasta sauce", "Pickles", "Pita bread", "Rice", 
            "TV dinners", "Amaranth", "Barley", "Beans", "Black-eyed peas", "Brown lentils", 
            "Brown rice", "Buckwheat", "Bulgur", "Burger helper", "Canned fruit", "Canned milk", 
            "Cannellini beans","Chickpeas", "Couscous", "Creamed corn", 
            "Fava beans", "Indian pouches", "Kidney beans","Lima beans", 
            "Macaroni", "Millet", "Navy beans","Noodle mix", 
            "Olives (black)", "Olives (green)", "Pinto beans", "Pizza dough", 
            "Prepared meals", "Quinoa", "Red beans", "Rice mix", 
            "Sorghum", "Soup", "Soup mix","Soups", 
            "Spaghetti", "Spelt","Sun-dried tomatoes", "Sweet & sour", "White beans", 
            "White rice", "Wild rice", "Falafel"
          ]
        },
        {
          storeOrder: 11,
          category: 'Meat Deli',
          items: [
            "Bacon", "Beef", "Catfish","Chicken", "Crab", "Ground beef", "Ham", 
            "Lobster", "Meat","Pork", "Salmon", "Shrimp",
            "Tilapia", "Tinned meats", "Tuna", "Turkey", "Cod", "Deli meat","Ground turkey", 
            "Halibut", "Hamburger", "Steak"
          ]
        },
        {
          storeOrder: 12,
          category: 'Cereals & Breakfast',
          items: [
            "Cereal", "Cereal Bars", "Cliff Bars","Cookies", 
            "Granola bars", "Granola mix", "Waffle Mix", "Baby cereal", 
            "Candy / Gum", "Chocolate", "Dark chocolate","Graham crackers", 
            "Granola / Cereal bars", "Waffles"
          ]
        },
        {
          storeOrder: 13,
          category: 'Home & Pets',
          items: [
            "Aluminum foil", "Bathroom cleaner", "Bleach", "Cat food / Treats", 
            "Cat litter", "Detergent", "Flea treatment","Garbage bags", 
            "Napkins", "Paper towels", "Toilet paper","Dog food", "Dish soap"
          ]
        },
        {
          storeOrder: 14,
          category: 'Fridges',
          items: [
            "Butter","Half & half", "Hot dogs","Margarine", 
            "Milk", "Mozzarella","Orange Juice", "Parmesan", 
            "Sausage", "Sour cream", "Tofu", "Whipped cream", "Yogurt", 
            "Almond milk", "Butter / Soy butter","Cream", 
            "Egg substitute", "Free-range eggs", "Juice", "Rice milk", 
            "Tempeh", "Veggie dogs"
          ]
        },
        {
          storeOrder: 15,
          category: 'Health',
          items: [
            "Bath soap", "Conditioner", "Cotton balls", "Deodorant", 
            "Facial cleanser","Facial tissue", "Greeting card", "Hair gel", 
            "Hair spray", "Hand soap", "Lip balm", "Lotion", "Moisturizing lotion",
            "Mouthwash", "Razors","Shampoo", "Shaving cream", "Sunblock", 
            "Toothpaste", "Vitamins / Supplements", "Floor cleaner",
          ]
        },
        {
          storeOrder: 16,
          category: 'Uncategorized Items',
          items: [],
        },
      ]
    },
    {
      storeName: "Kroger Frandor",
      storeCategories: [
        {
          storeOrder: 1,
          category: 'Produce',
          items: ['Apple', 'Apples', 'Banana','Bananas', 'Grapes']
        },
        {
          storeOrder: 2,
          category: 'Uncategorized Items',
          items: [],
        }
      ]
    },
  ]
};

