// Listen for the custom command event on the body element
const pageBody = document.getElementById('page-body');

pageBody.addEventListener('command', (event) => {
    // Check if the command is our custom '--change-background' command
    if (event.command === '--change-background') {
        // Get the value from the button that triggered the command
        const backgroundTheme = event.source.value;
        
        // Remove all background classes
        pageBody.classList.remove('bg-purple', 'bg-ocean', 'bg-sunset', 'bg-forest');
        
        // Add the new background class based on the button's value
        pageBody.classList.add(`bg-${backgroundTheme}`);
        
        // Optional: Log to console for demonstration purposes
        console.log(`Background changed to: ${backgroundTheme}`);
        console.log('Command:', event.command);
        console.log('Source button:', event.source);
    }
});