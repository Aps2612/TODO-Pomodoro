# Task Management App

This Task Management App is a web application that allows users to create, view, update, and delete tasks in a to-do list. It provides features such as task sorting, filtering, and analytics visualization. Users can register for an account, log in, and log out to track their task history.

## Features

- Task Management: Users can create tasks with a title, description, due date, and tomato count.
- Task Sorting: Tasks can be sorted based on due date.
- Task Filtering: Users can filter tasks by completion status.
- Analytics Dashboard: Provides visualizations of task completion data.

## Technologies Used

- React: JavaScript library for building user interfaces.
- useState: React hook for managing component state.
- useEffect: React hook for performing side effects in components.
- Chart.js: Library for creating charts and visualizations.
- Recharts: Library for creating charts and visualizations (alternative to Chart.js).
- CSS: Styling language for designing the user interface.

## File Structure

- `src/components/`: Contains React components used in the application.
  - `TaskManagement.js`: Main component for task management and rendering task list.
  - `AnalyticsDashboard.js`: Component for rendering analytics dashboard and charts.
  - `Timer.js`: Component for displaying a timer.
- `src/App.js`: Main entry point of the application.
- `src/index.js`: Renders the root component into the DOM.
- `src/TaskManagement.css`: CSS file for styling the TaskManagement component.

## Getting Started

To run the Task Management App locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd task-management-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit: `http://localhost:3000`

## Further Improvements

- Implement user authentication using Auth0 for secure registration and login functionality.
- Enhance the visual appeal of the application by refining the CSS styles.
- Add additional analytics and data visualization features, such as productivity trends and time spent on tasks.
- Implement task update functionality to allow users to edit existing tasks.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
