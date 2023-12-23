# Shopping Trolley App

Shopping Trolley App is a simple web application that allows users to add items to a shopping list. Users can input the name of the item and add it to their virtual trolley. The application is built using HTML, CSS, and JavaScript, and it uses Firebase Realtime Database for data storage.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [How to Use](#how-to-use)
- [Firebase Configuration](#firebase-configuration)
- [Contributing](#contributing)

## Features

- Add items to the shopping list.
- Remove items by clicking on them.
- Real-time updates using Firebase Realtime Database.

## Technologies Used

- HTML
- CSS
- JavaScript
- Firebase Realtime Database

## File Structure

- **index.html**: HTML file containing the structure of the Trolley App.
- **style.css**: CSS file defining the styles and layout of the application.
- **work.js**: JavaScript file handling the logic and functionality of the application.
- **apple-touch-icon.png**: Apple touch icon for the web application.
- **favicon-32x32.png**: Favicon icon for the web application.
- **favicon-16x16.png**: Favicon icon for the web application.
- **site.webmanifest**: Web App Manifest file for configuring the web application.
- **assets/cat.png**: Image asset used in the application.

## How to Use

1. Open `index.html` in your web browser.
2. Enter the name of the item in the input field.
3. Click "Add to Trolley" to add the item to the shopping list.
4. Click on an item in the list to remove it.

## Firebase Configuration

The application uses Firebase Realtime Database for data storage. To configure Firebase for your project, follow these steps:

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Get your Firebase configuration object (Settings > Project Settings > Your apps > Config).
3. Replace the Firebase configuration object in the `work.js` file.

```javascript
const appSettings = {
    databaseURL: "YOUR_FIREBASE_DATABASE_URL"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
```

## Contributing

Contributions to the project are welcome!
