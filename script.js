const container = document.querySelector(".section-item")

const menuItem = [{
    FoodName: "Black Coffee",
    foodImg: "images/BF-Coffee.jpg",
    price: "$2",
    foodType: "breakfast",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"

},
{
    FoodName: "Blueberry muffin",
    foodImg: "images/BF-muffins.jpg",
    price: "$2",
    foodType: "breakfast",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Pão de Queijo",
    foodImg: "images/BF-pao-de-queijo.jpg",
    price: "$4",
    foodType: "breakfast",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"

},
{
    FoodName: "Avocado Toast",
    foodImg: "images/BRUNCH-avocadoToast.jpg",
    price: "$6",
    foodType: "brunch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Mimosa Drink",
    foodImg: "images/BRUNCH-mimosa.jpg",
    price: "$6",
    foodType: "brunch",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Wrap",
    foodImg: "images/BRUNCH-wrap.jpg",
    price: "$7",
    foodType: "brunch",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Loaded Burrito",
    foodImg: "images/LUNCH-burrito.jpg",
    price: "$8",
    foodType: "lunch",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Chicken and veggies plate",
    foodImg: "images/LUNCH-meal.jpg",
    price: "$9",
    foodType: "lunch",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Pastrami Sandwich",
    foodImg: "images/LUNCH-sandwich.jpg",
    price: "$9",
    foodType: "lunch",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Fettuccine Alfredo",
    foodImg: "images/DN-pasta.jpg",
    price: "$14",
    foodType: "dinner",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Ceasar Salad",
    foodImg: "images/DN-salad.jpg",
    price: "$14",
    foodType: "dinner",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


},
{
    FoodName: "Tomato Soup",
    foodImg: "images/DN-TomatoSoup.jpg",
    price: "$12",
    foodType: "dinner",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum enim possimus reiciendis aliquid nam ipsa in, sapiente vel,ut fuga libero quo similique asperiores illo magni unde consequatur. Veritatis, corporis!"


}

]


window.addEventListener("DOMContentLoaded", () =>{
    showOptionItems(menuItem);
});

function showOptionItems(menuOptions){
    let showMenu = menuOptions.map((item) =>{
        return ` <section class="section-item">
        <div class="menu-itens">
            <img src=${item.foodImg} class="image">
                <div class="info">
                <header>
                    <h3 class="title">${item.FoodName}</h3>
                    <h4 class="Price">${item.price}</h4>
                </header>
                <p class="description">
                    ${item.description}
                </p>
            </div>

        </div>
    </section>`
    });
    showMenu = showMenu.join("");
    container.innerHTML = showMenu;
}

const menu = document.querySelectorAll(".btn");
menu.forEach((btn) =>{
    btn.addEventListener("click",(e) => {
        const foodType = e.currentTarget.dataset.btn;
        const menuFoodType = menuItem.filter((menuOption) => {
            //console.log(menuOption.foodType)
            if(menuOption.foodType === foodType){
                return menuOption;
            }       
        });
        //console.log(menuFoodType);
        if(foodType === "all"){
            showOptionItems(menuItem);
        } else {
            showOptionItems(menuFoodType)
        }
    
    })
})


 

