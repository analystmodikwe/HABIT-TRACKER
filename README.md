<!-- Habit Tracker -->
A simple habit tracking web app built with HTML, CSS, and JavaScript.

<!-- What it does -->
Add habits with a name, category, and how many days per week you want to do them
Tick a habit as done for the day
Track your streak for each habit
Delete habits you no longer want to track
See a live summary of your total habits, how many you have done today, and your overall completion percentage
Form validation that checks for empty fields, short names, and numbers in the habit name


<!-- Built with -->
HTML
CSS
JavaScript (no libraries or frameworks)


<!-- Files -->
habit-tracker/
index.html — the structure of the page
style.css — the styling and layout
script.js — all the logic and functionality


<!-- How to run it -->
Download or clone the project
Open the `index.html` file in your browser
No installs or setup needed

<!-- JavaScript concepts used -->
Concept and  Where it is used 

Object literal -  The whole app lives inside `habitTracker` 

Properties -  `habits: []` stores all habit data 

Methods -  `addHabit`, `deleteHabit`, `toggleHabit`, and more 

Arrays -  `habits` array holds all habit objects 

`this` keyword -  Used inside methods to access the object's own data 

`.push()` -  Adds a new habit to the array 

`.filter()` -  Removes a habit from the array 

`.forEach()` -  Loops through habits to render and update 

DOM manipulation -  `createElement`, `appendChild`, `textContent` 

Event listeners - Form submit, checkbox change, delete button click 

Form validation -  Checks name length, category, days per week 

Ternary operator -  Used for streak logic and completion percentage 


Features
<!-- Add a habit -->
Fill in the habit name, select how many days per week, choose a category, and click `Add Habit`.

<!-- Mark as done -->
Click the checkbox next to a habit to mark it as done for today. Your streak goes up by 1.

<!-- Uncheck a habit -->
Click the checkbox again to uncheck it. Your streak goes down by 1 but never goes below 0.

<!-- Delete a habit -->
Click the `Delete` button next to any habit to remove it.

<!-- Summary header -->
The header updates automatically every time you add, delete, or tick a habit.

Total Habits — how many habits you have
Done Today — how many you have completed today
Completion — the percentage of habits done today


<!-- form validation -->
Form validation rules

Habit name cannot be empty
Habit name must be at least 2 characters
Habit name cannot contain numbers
A category must be selected
Days per week must be a number greater than 0


Author

Made by Lesedi
