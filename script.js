document.querySelector(".search").addEventListener('click', () => {
    const recipesContainer = document.getElementById('recipes');
    let input = document.querySelector("input").value;
    // let name = prompt(`Enter recipe`)
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${input}`)
        .then(response => response.json())
        .then(data => {

            const recipes = data.data.recipes;
            console.log(recipes);

            recipes.forEach(recipe => {

                const foodImage = document.createElement("img");
                foodImage.classList.add("shortImage");
                foodImage.src = recipe.image_url;
                recipesContainer.appendChild(foodImage);

                const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipe');
                recipesContainer.appendChild(recipeElement);

                const recipeTitle = document.createElement('h2');
                recipeTitle.textContent = recipe.title;
                recipeElement.appendChild(recipeTitle);

                const recipePublisher = document.createElement('p');
                recipePublisher.textContent = `Publisher: ${recipe.publisher}`;
                recipeElement.appendChild(recipePublisher);

                recipeElement.addEventListener("click", () => {
                    const foodImage = document.querySelector("#foodImage");
                    foodImage.src = recipe.image_url;
                    
                    const name = document.querySelector(".name");
                    name.innerHTML = recipe.title
                    name.classList.remove("hidden")
                    foodImage.classList.remove("hidden")
                })




            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    let text = document.querySelector(".position");
    // text.classList.add("hidden");
    let aside = document.querySelector("aside");
    // aside.classList.add("hidden")
});


