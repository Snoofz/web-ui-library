```
# UI Library

A lightweight and customizable UI library for creating dynamic user interfaces in web applications.

## Installation

Download the `uiManager.js` file and include it in your project.

```html
<script src="path/to/uiManager.js"></script>
```

## Usage

Instantiate the `UIManager`:

```javascript
let uiManager = new UIManager();
```

### Creating a Menu

```javascript
let mainMenu = uiManager.createMenu("epicUI", "My Epic UI Title");
```

### Making a Menu Draggable

```javascript
uiManager.makeDraggable(mainMenu);
```

### Adding Buttons

```javascript
uiManager.addButton("Here's a button!", () => {
    // Button action goes here
});
```

### Adding Labels

```javascript
uiManager.addLabel("My Awesome Label");
```

### Adding Text Inputs

```javascript
let textInputElement = uiManager.addTextInput("Placeholder text?", () => {
    // Value change action goes here
});

// Set or get the value
textInputElement.value = 'New value';
```

## API

### `createMenu(elementId, titleText)`

Creates a new menu with the specified element ID and title text.

- `elementId`: (String) The ID for the menu element.
- `titleText`: (String) The title text for the menu.

### `makeDraggable(element)`

Makes the specified menu draggable.

- `element`: (HTMLElement) The menu element to make draggable.

### `addButton(buttonText, buttonAction)`

Adds a button to the current menu.

- `buttonText`: (String) The text to display on the button.
- `buttonAction`: (Function) The action to perform when the button is clicked.

### `addLabel(labelText)`

Adds a label to the current menu.

- `labelText`: (String) The text to display on the label.

### `addTextInput(placeholderText, valueChangeAction)`

Adds a text input field to the current menu.

- `placeholderText`: (String) The placeholder text for the input field.
- `valueChangeAction`: (Function) The action to perform when the value of the input field changes.

Returns the created input element.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```
