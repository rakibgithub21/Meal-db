const loadMealBd = async (textId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textId}`
    const res = await fetch(url);
    const data = await res.json();
    displayMealBd(data.meals);
}

const displayMealBd = (meals) => {

    if (meals.length === 0) {
        showErrorMessage(true)
    } else {
        showErrorMessage(false);
    }

    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList = `card bg-gray-300 shadow-xl p-5 ring `
        div.innerHTML = `
        <figure><img class = "border-2 border-purple-500 rounded-full" src="${meal.strMealThumb}" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-black">${meal.strMeal}</h2>
                        <p class="font-medium text-black">Area: ${meal.strArea}</p>
                        <p class="font-medium text-black">Category: ${meal.strCategory}</p>
                        <div class="card-actions justify-end">
                            <button onclick = "loadMeal(${meal.idMeal})" class="btn btn-outline btn-secondary">Show Details</button>
                        </div>
                    </div>
            `;
        mealContainer.appendChild(div);

    });

    toggleLoader(false);
}


const buttonHandler = () => {
    toggleLoader(true);
    const inputFieldContainer = document.getElementById('input-field');
    const inputValue = inputFieldContainer.value;
    loadMealBd(inputValue)
}


const toggleLoader = (isLoading) => {
    const loaderContainer = document.getElementById('loader-container');
    if (isLoading) {
        loaderContainer.classList.remove('hidden');
    } else {
        loaderContainer.classList.add('hidden');
    }
}

const showErrorMessage = (isError) => {
    const errorContainer = document.getElementById('error-container');
    if (isError) {
        errorContainer.classList.remove('hidden');
    }
    else {
        errorContainer.classList.add('hidden')
    }
}




const loadMeal = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    showMeal(data.meals[0]);
}

const showMeal = (meal) => {
    console.log(meal);
}

// loadMealBd()