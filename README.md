# React Todo List with Firebase

This is a simple todo list application built using React and Vite for the frontend and Firebase for the backend/database. This application allows users to create, read, update, and delete todo items in real-time.

## Features

- **Authentication**: Users can sign up and log in securely using Firebase Authentication.
- **Real-time Updates**: Todo items are synchronized across multiple clients in real-time.
- **CRUD Operations**: Users can create, read, update, and delete todo items.
- **Responsive Design**: The application is designed to work on various screen sizes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling.
- **Firebase**: Platform for building web and mobile applications.
- **Tailwind CSS**: For styles.
- **React Icos**: For Icons.

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:bautistaJuan/my-todo-list-with-firebase.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-todo-list-with-firebase
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Enable Firestore database and Firebase Authentication for your project.
3. Copy the Firebase configuration object from your Firebase project settings.
4. Paste the configuration object into `src/firebase/firebase.js`.

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your web browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## Deployment

To deploy the application, you can follow the hosting instructions provided by Firebase. Typically, you would use the Firebase CLI to deploy your application.

```bash
firebase login
firebase init
# Follow the prompts to initialize Firebase Hosting
firebase deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvement.

## Acknowledgments

- [React](https://reactjs.org/)
- [Context API](https://react.dev/reference/react/useContext)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [Firestore](https://firebase.google.com/docs/firestore)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
