# home_testing_automation_react

# Todo List Application

A simple React-based Todo List application designed for managing tasks efficiently. The app demonstrates React fundamentals and testing using Jest, React Testing Library, and Cypress.

---

## **Features**
- Add new tasks to the list.
- Mark tasks as completed/uncompleted.
- Delete tasks from the list.
- Filter tasks by:
  - **All**: Shows all tasks.
  - **Active**: Shows tasks that are not completed.
  - **Completed**: Shows tasks that are marked as completed.

---

## **Getting Started**

### **Setup Instructions**
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
2. **Navigate to the project directory**:
     ```bash
    cd todolist-reactapp
3. **Install dependencies**:
    ```bash
   npm install
4. **Run the application**:
    ```
   npm start
5. **View the application**:
Open your browser and visit: http://localhost:3000.



# **Testing**

Unit and Integration Tests
The application includes tests for:

Rendering components.
Adding and deleting tasks.
Marking tasks as completed/uncompleted.
Filtering tasks.


**Run unit and integration tests**:
npm test

## **Project Structure**
scss
- Copy code
- src/
  - components/
    - Filters.jsx      // Component for filtering tasks
    - TodoItem.jsx     // Component for individual tasks
  - App.js             // Main application logic
  - App.test.js        // Unit and integration tests
  - 
  
## **Technologies Used**

Frontend:
- React
- React-Bootstrap

Testing:
- Jest
- React Testing Library
- Cypress
 
**Future Enhancements**
 Add persistent storage with a backend (e.g., Node.js + Express).
 Add drag-and-drop functionality for task reordering.
 Enhance UI with animations.
 
### **Contributing**
Contributions are welcome! To contribute:

Fork the repository.
```
  git checkout -b feature-name

  git commit -m "Add feature name"
   
  git push origin feature-name

  Open a pull request.
