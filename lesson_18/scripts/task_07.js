"use strict"

//Умова: Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

const transportPrices = {
   car: 100,
   bus: 60,
   plane: 200
}

const mealPrices = {
   breakfast: 10,
   lunch: 15,
   dinner: 20
}

const guidePrices = {
   guide1: 50,
   guide2: 70,
   guide3: 90
}

const transportNames = {
   car: "Car",
   bus: "Bus",
   plane: "Plane"
}

const guideNames = {
   guide1: "Guide Anna",
   guide2: "Guide Mark",
   guide3: "Guide Sofia"
}

function createTripStage(index) {
   const stage = document.createElement('div')
   stage.className = 'trip-stage'
   stage.innerHTML = `
        <div class="trip-stage__title">Stage ${index + 1}</div>
        <div class="trip-section trip-section--transport">
          <label for="transport-${index}">Transport:</label>
          <select name="transport-${index}" class="trip-transport">
            <option value="car">Car ($100)</option>
            <option value="bus">Bus ($60)</option>
            <option value="plane">Plane ($200)</option>
          </select>
        </div>
        <div class="trip-section trip-section--meals">
          <label>Meals:</label>
          <label><input type="checkbox" name="meal-${index}" value="breakfast"> Breakfast ($10)</label>
          <label><input type="checkbox" name="meal-${index}" value="lunch"> Lunch ($15)</label>
          <label><input type="checkbox" name="meal-${index}" value="dinner"> Dinner ($20)</label>
        </div>
        <div class="trip-section trip-section--guide">
          <label>Guide:</label>
          <label><input type="radio" name="guide-${index}" value="guide1" checked> Anna ($50)</label>
          <label><input type="radio" name="guide-${index}" value="guide2"> Mark ($70)</label>
          <label><input type="radio" name="guide-${index}" value="guide3"> Sofia ($90)</label>
        </div>
      `
   return stage
}
function initTripStages() {
   const container = document.getElementById('stagesContainer')
   for (let i = 0; i < 3; i++) {
      const stage = createTripStage(i)
      container.appendChild(stage)
   }
}
function calculateTotal() {
   let total = 0
   for (let i = 0; i < 3; i++) {
      const transport = document.querySelector(`select[name="transport-${i}"]`).value
      total += transportPrices[transport]

      const meals = document.querySelectorAll(`input[name="meal-${i}"]:checked`)
      meals.forEach(meal => {
         total += mealPrices[meal.value];
      })

      const guide = document.querySelector(`input[name="guide-${i}"]:checked`).value
      total += guidePrices[guide]
   }

   document.getElementById('result').textContent = `Total Trip Cost: $${total}`
}
window.addEventListener('DOMContentLoaded', initTripStages)