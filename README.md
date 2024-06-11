# UI Library

![grgrggr-removebg-preview](https://github.com/Snoofz/web-ui-library/assets/165219710/000c5d37-a621-41bb-baec-dcd495fcdbe2)

A lightweight and customizable UI library for creating dynamic user interfaces in web applications.

## Installation

Load the script with tampermonkey

```javascript
window.onload = () => {
    fetch('https://raw.githubusercontent.com/Snoofz/web-ui-library/main/ui.js')
        .then(response => response.text())
        .then(scriptContent => {
            var script = document.createElement('script');
            script.textContent = scriptContent;
            document.head.appendChild(script);

            // Execute the UIManager code after the script is appended
            let uiManager = new UIManager();
            let mainMenu = uiManager.createMenu("epicUI", "My Epic UI Title");
            uiManager.makeDraggable(mainMenu);
            uiManager.addButton("Here's a button!", () => {
                // Button action goes here
            });
            uiManager.addLabel("My Awesome Label");
            let textInputElement = uiManager.addTextInput("Placeholder text?", /* Some value here */ 10);

            textInputElement.value = 'New value';
        })
        .catch(error => console.error('Error loading script:', error));
};

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
let textInputElement = uiManager.addTextInput("Placeholder text?", /* Some value here */ 10);

// Set or get the value
textInputElement.value = 'New value';
```

### Creating Tab Menus

```javascript
let tabs = uiManager.createTabMenu([
    { title: 'Tab 1', content: '<p>This is the content of Tab 1</p>' },
    { title: 'Tab 2', content: '<p>This is the content of Tab 2</p>' },
    { title: 'Tab 3', content: '<p>This is the content of Tab 3</p>' }
]);
```

### Showing Tab Content

```javascript
uiManager.showTabContent(0, tabs, contentContainer); // Index 0 is the first tab
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

### `createTabMenu(tabs)`

Creates a tab menu with the specified tabs.

- `tabs`: (Array) An array of objects, each containing a title and content for a tab.

Returns the created tabs.

### `showTabContent(index, tabs, contentContainer)`

Shows the content of the tab at the specified index.

- `index`: (Number) The index of the tab to show.
- `tabs`: (Array) The array of tabs created with `createTabMenu`.
- `contentContainer`: (HTMLElement) The container where the tab content will be displayed.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
