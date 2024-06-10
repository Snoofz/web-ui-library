class Log {
  static info(message) {
    console.log(`%c${message.toUpperCase()}`, 'font-size: 18px; color: #7289da;');
  }

  static error(message) {
    console.error(`%c${message.toUpperCase()}`, 'font-size: 18px; color: #dc3545;');
  }

  static success(message) {
    console.log(`%c${message.toUpperCase()}`, 'font-size: 18px; color: #28a745;');
  }
}


class UIManager {
    constructor() {
        this.UIContext= null;
        this.LoginUIContext = null;
        this.UIMenus = [];
    }

    createMenu(elementId, titleText) {
        const container = document.createElement('div');
        container.id = elementId;
        container.style.position = 'fixed';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.transform = 'translate(-50%, -50%)';
        container.style.backgroundColor = '#36393f';
        container.style.borderRadius = '8px';
        container.style.padding = '20px';
        container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        container.style.zIndex = '9999';
        container.style.width = '300px';

        const title = document.createElement('h2');
        title.textContent = titleText;
        title.style.color = '#ffffff';
        title.style.marginBottom = '20px';
        title.style.fontSize = '22px';
        title.style.textAlign = 'center';
        container.appendChild(title);

        document.body.appendChild(container);

        this.UIContext = container;

        return container;
    }

    makeDraggable(element) {
        let offsetX, offsetY;

        function handleMouseDown(event) {
            event.preventDefault();
            offsetX = event.clientX - element.getBoundingClientRect().left;
            offsetY = event.clientY - element.getBoundingClientRect().top;
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        function handleMouseMove(event) {
            element.style.left = event.clientX - offsetX + 'px';
            element.style.top = event.clientY - offsetY + 'px';
        }

        function handleMouseUp() {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        const titleBar = element.querySelector('h2');
        titleBar.addEventListener('mousedown', handleMouseDown);
    }

     addButton(buttonText, buttonAction) {
         const button = document.createElement('button');
         button.textContent = buttonText;
         button.style.width = '100%';
         button.style.padding = '10px';
         button.style.backgroundColor = '#7289da';
         button.style.color = '#ffffff';
         button.style.border = 'none';
         button.style.borderRadius = '5px';
         button.style.cursor = 'pointer';
         button.style.marginBottom = '10px';
         button.style.fontWeight = 'bold';
         button.style.fontSize = '16px';
         button.addEventListener('click', buttonAction);

         this.UIContext.appendChild(button);
    }

    addLabel(labelText) {
        const title = document.createElement('h3');
        title.textContent = 'Open Rate (milliseconds)';
        title.style.color = '#ffffff';
        title.style.marginBottom = '20px';
        title.style.fontSize = '18px';
        title.style.textAlign = 'center';

         this.UIContext.appendChild(title);
    }

    addTextInput(placeholderText, valueChangeAction) {
     const tmpInput = document.createElement('input');
        tmpInput.type = 'number';
        tmpInput.placeholder = placeholderText;
        tmpInput.style.width = '100%';
        tmpInput.style.padding = '10px';
        tmpInput.style.marginBottom = '20px';
        tmpInput.value = openRate;
        tmpInput.addEventListener('input', valueChangeAction);

        this.UIContext.appendChild(tmpInput);
        return tmpInput;
    }
}
