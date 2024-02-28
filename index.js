const loadMealBd = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
    const res = await fetch(url);
    const data = await res.json();
    displayMealBd(data.meals);
}

const displayMealBd = (meals) => {
    const mealContainer = document.getElementById('meal-container');

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList = `card bg-gray-300 shadow-xl p-5 ring `
        div.innerHTML = `
        <figure><img class = "border-2 border-purple-500 rounded-full" src="${meal.strMealThumb}" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-rose-800">${meal.strMeal}</h2>
                        <p><span class = "font-semibold text-lime-800">Area:</span> ${meal.strArea}</p>
                        <p><span class = "font-semibold text-lime-800">Category:</span> ${meal.strCategory}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
            `;
        mealContainer.appendChild(div);

    });
}

loadMealBd()