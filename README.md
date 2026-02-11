# InvokerCommands

## What is InvokerCommands?

InvokerCommands is a native HTML API that allows you to control interactive elements (like dialogs and popovers) directly from buttons using only HTML attributes, without requiring JavaScript.

## Demos Included

### 1. Modal Dialog Demo (`/demo1`)

A simple example showing how to open and close a modal dialog without any JavaScript.

**Features:**
- Single button to open a modal dialog
- Modal blocks background interaction
- Close button inside the dialog
- Backdrop overlay
- ESC key support

**Key concepts:**
- `command="show-modal"` - Opens the dialog as a modal
- `command="close"` - Closes the dialog
- `commandfor="element-id"` - Targets the element to control

---

### 2. Custom Commands Demo (`/demo2`)

An advanced example demonstrating custom InvokerCommands that trigger JavaScript logic.

**Features:**
- Multiple buttons with the same custom command
- Each button changes the page background to a different gradient
- Smooth transitions between backgrounds
- Single event listener handling multiple buttons

**Key concepts:**
- Custom commands must start with `--` (e.g., `--change-background`)
- `event.command` - The command that was triggered
- `event.source` - The button that triggered the command
- `value` attribute - Pass data from the button to the handler

---

## Browser Support

InvokerCommands achieved **Baseline** support in early 2026:

- Chrome/Edge 135+
- Firefox 144+
- Safari 26.2+
- Opera 120+

---

## How to Run

1. Clone this repository
2. Open `demo1/index.html` or `demo2/index.html` in a modern browser
3. No build process or server required - just open the HTML files!