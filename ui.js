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
        this.UIContext = null;
        this.UIMenus = [];
    }

    createMenu(elementId, titleText, width = '300px', height = 'auto') {
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
        container.style.width = width;
        container.style.height = height;
        container.style.overflowY = 'auto';

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
        const label = document.createElement('h3');
        label.textContent = labelText;
        label.style.color = '#ffffff';
        label.style.marginBottom = '20px';
        label.style.fontSize = '18px';
        label.style.textAlign = 'center';

        this.UIContext.appendChild(label);
    }

    addTextInput(placeholderText, valueChangeAction) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = placeholderText;
        input.style.width = 'calc(100% - 20px)';
        input.style.padding = '10px';
        input.style.marginBottom = '20px';
        input.style.borderRadius = '5px';
        input.addEventListener('input', valueChangeAction);

        this.UIContext.appendChild(input);
        return input;
    }

    addSlider(min, max, step, valueChangeAction) {
        const sliderContainer = document.createElement('div');
        sliderContainer.style.width = 'calc(100% - 20px)';
        sliderContainer.style.marginBottom = '20px';

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = min;
        slider.max = max;
        slider.step = step;
        slider.style.width = '100%';
        slider.style.borderRadius = '5px';
        slider.addEventListener('input', valueChangeAction);

        sliderContainer.appendChild(slider);
        this.UIContext.appendChild(sliderContainer);

        return slider;
    }

    createTabMenu(tabs) {
        const tabContainer = document.createElement('div');
        tabContainer.style.display = 'flex';
        tabContainer.style.borderBottom = '1px solid #7289da';
        tabContainer.style.marginBottom = '20px';

        const contentContainers = tabs.map(() => document.createElement('div'));

        tabs.forEach((tab, index) => {
            const tabButton = document.createElement('button');
            tabButton.textContent = tab.title;
            tabButton.style.flex = '1';
            tabButton.style.padding = '10px';
            tabButton.style.backgroundColor = '#36393f';
            tabButton.style.color = '#ffffff';
            tabButton.style.border = 'none';
            tabButton.style.cursor = 'pointer';
            tabButton.style.fontWeight = 'bold';
            tabButton.style.fontSize = '16px';
            tabButton.addEventListener('click', () => {
                contentContainers.forEach(container => {
                    container.style.display = 'none';
                });
                contentContainers[index].style.display = 'block';
            });

            tabContainer.appendChild(tabButton);

            const uiTab = new UITab(tab.title, contentContainers[index], document.createElement('div'));
            uiTab.content.innerHTML = tab.content;
            tab.uiTab = uiTab;
        });

        this.UIContext.appendChild(tabContainer);

        contentContainers.forEach(container => {
            this.UIContext.appendChild(container);
        });

        return tabs;
    }


    showTabContent(index, tabs, contentContainer) {
        contentContainer.innerHTML = '';

        const content = document.createElement('div');
        content.innerHTML = tabs[index].content;
        content.style.color = '#ffffff';
        content.style.fontSize = '16px';
        contentContainer.appendChild(content);

        this.activeTabContent = content;
    }
}

class UITab {
    constructor(title, contentContainer, content) {
        this.title = title;
        this.contentContainer = contentContainer;
        this.content = content;
        this.isHidden = true;
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

        this.contentContainer.appendChild(button);
    }

    showContent() {
        const allTabs = this.contentContainer.parentElement.querySelectorAll('.tab-content');
        allTabs.forEach(tab => {
            tab.style.display = 'none';
        });

        if (this.isHidden) {
            this.contentContainer.style.display = 'block';
            this.isHidden = false;
        }
    }
}
