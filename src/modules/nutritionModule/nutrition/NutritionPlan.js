import React, { useState } from 'react';

const NutritionPlan = () => {
  const [meals, setMeals] = useState([{ mealName: '', ingredients: '', calories: '' }]);

  const handleMealChange = (index, e) => {
    const { name, value } = e.target;
    const newMeals = [...meals];
    newMeals[index][name] = value;
    setMeals(newMeals);
  };

  const addMeal = () => {
    setMeals([...meals, { mealName: '', ingredients: '', calories: '' }]);
  };

  return (
    <div className="nutrition-plan-component">
      <h2>Nutrition Plan</h2>
      <form>
        <div className="form-group">
          <label htmlFor="planName">Plan Name:</label>
          <input type="text" id="planName" name="planName" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" name="startDate" />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" name="endDate" />
        </div>

        <div className="form-group">
          <label>Meals:</label>
          {meals.map((meal, index) => (
            <div key={index} className="meal-group">
              <input
                type="text"
                placeholder="Meal Name"
                name="mealName"
                value={meal.mealName}
                onChange={(e) => handleMealChange(index, e)}
              />
              <input
                type="text"
                placeholder="Ingredients"
                name="ingredients"
                value={meal.ingredients}
                onChange={(e) => handleMealChange(index, e)}
              />
              <input
                type="number"
                placeholder="Calories"
                name="calories"
                value={meal.calories}
                onChange={(e) => handleMealChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addMeal}>Add Meal</button>
        </div>

        <div className="form-group">
          <label htmlFor="goals">Goals:</label>
          <input type="text" id="goals" name="goals" />
        </div>
      </form>
    </div>
  );
};

export default NutritionPlan;
