
// this is an object that will hold all the methods for our habit tracker
const habitTracker = {
    // an array to hold all the habits
    habits: [],

    // a method to add a habit to the array
    // this method will take in the name, category, and target of the habit and create a new habit object and add it to the habits array
    addHabit(name, category, target){
        const newHabit = {           
            name:name,
            category: category,
            target: target,
            streak: 0,
            doneToday: false,
            id : Date.now(),
        };

        this.habits.push(newHabit);
        this.renderHabits();
        this.updateSummary();

    },

    // delete a habit from the array
    // this method will take in the id of the habit and remove it from the habits array
    deleteHabit(id) {
        this.habits = this.habits.filter((habit) =>{
            return habit.id !==id;
        })
        this.renderHabits();
        this.updateSummary();
    },

    // toggle the doneToday property of a habit so that we can mark a habit as done or not done for the day
    toggleHabit(id){
        this.habits.forEach((habit) => {
            if(habit.id === id) {
                habit.doneToday = !habit.doneToday;

                if(habit.doneToday) { 
                    habit.streak = habit.streak + 1;

                }else{
                    habit.streak = habit.streak > 0 ? habit.streak - 1 : 0;
                }
            }

        })

        this.renderHabits();
        this.updateSummary();       
    },

    // a method to validate the form input before adding a habit to the array 
    validateForm(name, category, target) {
        const theError = document.getElementById("form-error");

        if (name.trim().length === 0) {
            theError.textContent = "enter a habit"; 
            return false;
        }
                   
        if(name.trim().length < 2) {
            theError.textContent = "habit name is too short";
            return false;
        } 

        if (/\d/.test(name)) {
            theError.textContent = "habit name should not contain numbers";
            return false;
        }

        if(category.trim().length === 0){
            theError.textContent = "select a category";
            return false;

        }
        
        if (!target || target <= 0) {
            theError.textContent = "enter the number of days per week you want to do this habit";
            return false;
         
        }    

        theError.textContent ="";
        return true;
    },

    // a method to render the habits in the DOM by creating list items for each habit in the habits array and appending them to the habit list in the HTML 
    renderHabits() {
        const habitList = document.getElementById("habit-list"); habitList.innerHTML ="";

        const self = this;

        this.habits.forEach((habit) => {
            const habitItem = document.createElement("li");
            const checkbox = document.createElement("input");
            const label = document.createElement("span");
            const deleteBtn = document.createElement("button");

            checkbox.type = "checkbox";
            checkbox.checked = habit.doneToday;
            checkbox.addEventListener("change", function() {
                self.toggleHabit(habit.id);
            });

            label.textContent = `${habit.name} - ${habit.category} - Target: ${habit.target} days/week - Streak: ${habit.streak} days`;

            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function() {
                self.deleteHabit(habit.id);                
            });

            habitItem.appendChild(checkbox);
            habitItem.appendChild(label);
            habitItem.appendChild(deleteBtn);
            habitList.appendChild(habitItem);

        });

    },

    // a method to update the summary section in the header with the total number of habits, how many are done today, and the completion percentage
    updateSummary() {
        const totalHabits = this.habits.length;

        let totalStreak = 0;
        this.habits.forEach((habit) => {
            if (habit.doneToday) {
                totalStreak = totalStreak + 1;
            }
        });

        const complePercentage = totalHabits > 0
            ?  Math.round((totalStreak / totalHabits) * 100) 
            : 0;

        const theSummary = document.querySelectorAll("header div p");
        theSummary[0].textContent = `Total Habits: ${totalHabits}`;
        theSummary[1].textContent = `DONE TODAY: ${totalStreak}`;
        theSummary[2].textContent = `Completion: ${complePercentage}%`;  
    },
    // a method to initialize the habit tracker by setting up the event listeners for the form submission and rendering any existing habits in the DOM
    init() {
        
        const form = document.querySelector("form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("habit").value;
            const category = document.getElementById("category").value;
            const target = Number(document.getElementById("days-per-week").value);

            if (this.validateForm(name, category, target )) {
                this.addHabit(name, category, target);
                form.reset();
            }
        });
    }
};
// initialize the habit tracker by calling the init method to set up the event listeners and render any existing habits
habitTracker.init();







    