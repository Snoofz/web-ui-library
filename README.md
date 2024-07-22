# UIManager and Log Classes

This project includes the `UIManager`, `UITab`, and `Log` classes for creating a dynamic user interface with notifications, draggable menus, tabs, and logging.

## Classes

### Log

The `Log` class provides static methods for logging messages to the console with different styles:

- `Log.info(message)`: Logs an informational message in blue.
- `Log.error(message)`: Logs an error message in red.
- `Log.success(message)`: Logs a success message in green.

### UIManager

The `UIManager` class manages the user interface, including notifications, menus, tabs, and various UI elements.

#### Constructor

- `constructor()`: Initializes the `UIManager` instance with properties like `UIContext`, `UIMenus`, `tabs`, `notificationStack`, `notificationHeight`, and `notificationMargin`.

#### Methods

- `getAllTabs()`: Returns all the tabs.
- `createNotification(titleText, descriptionText)`: Creates a notification with the given title and description. Notifications are displayed at the bottom left of the screen and disappear after 5 seconds.
- `calculateNotificationBottom()`: Calculates the bottom position for the next notification based on the existing notifications.
- `removeNotification(notification)`: Removes a notification from the stack and repositions the remaining notifications.
- `repositionNotifications()`: Repositions notifications after one has been removed.
- `createMenu(elementId, titleText, width = '300px', height = 'auto')`: Creates a draggable menu with the specified title, width, and height.
- `makeDraggable(element)`: Makes an element draggable by its title bar.
- `addButton(buttonText, buttonAction)`: Adds a button to the current UI context.
- `addLabel(labelText)`: Adds a label to the current UI context.
- `addSpacer(height)`: Adds a spacer with the specified height to the current UI context.
- `addTextInput(placeholderText, valueChangeAction)`: Adds a text input to the current UI context.
- `addSlider(min, max, step, currentValue, customText, valueChangeAction)`: Adds a slider to the current UI context.
- `addLogo()`: Adds a logo to the current UI context.
- `createTabMenu(tabs)`: Creates a tab menu with the specified tabs.
- `addTabsToTabMenu(existingTabs, newTabs)`: Adds new tabs to an existing tab menu.
- `showTabContent(index, tabs, contentContainer)`: Shows the content of the specified tab.

### UITab

The `UITab` class represents a single tab in a tab menu.

#### Constructor

- `constructor(title, contentContainer, content)`: Initializes the `UITab` instance with the specified title, content container, and content.

#### Methods

- `addButton(buttonText, buttonAction)`: Adds a button to the tab's content container.
- `addLabel(labelText)`: Adds a label to the tab's content container.
- `addTextInput(placeholderText, valueChangeAction)`: Adds a text input to the tab's content container.
- `addSpacer(height)`: Adds a spacer with the specified height to the tab's content container.
- `addSlider(min, max, step, currentValue, customText, valueChangeAction)`: Adds a slider to the tab's content container.
- `showContent()`: Shows the tab's content, hiding other tabs' content.

## Example Usage

```javascript
// Create an instance of UIManager
const uiManager = new UIManager();

// Create a menu
const menu = uiManager.createMenu('menu1', 'Menu Title');

// Add elements to the menu
uiManager.addButton('Click Me', () => Log.info('Button clicked!'));
uiManager.addLabel('This is a label');
uiManager.addSpacer(20);
uiManager.addTextInput('Enter text...', (e) => Log.info(`Text input changed: ${e.target.value}`));
uiManager.addSlider(0, 100, 1, 50, 'Slider', (value) => Log.info(`Slider value: ${value}`));

// Create a notification
uiManager.createNotification('Notification Title', 'This is a notification message.');

// Create a tab menu
const tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' }
];
const tabMenu = uiManager.createTabMenu(tabs);
