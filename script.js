document.getElementById('inputText').addEventListener('input', () => {
    let inputText = document.getElementById('inputText').value;
    
    // Replace multiple \n in a row with ".  "
    inputText = inputText.replace(/(\n{2,})/g, '.  ');

    // Replace single \n with \n\n and add 2 spaces at the end of each line
    const outputText = inputText
        .replace(/\n/g, '\n\n') // Ensure double newlines
        .replace(/([^\s])$/gm, '$1  '); // Add 2 spaces at the end of each line

    document.getElementById('outputText').value = outputText;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    navigator.clipboard.writeText(outputText.value).then(() => {
        const copyButton = document.getElementById('copyButton');
        
        // Blink effect with smoother transition
        copyButton.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        copyButton.style.backgroundColor = '#4CAF50'; // Green
        copyButton.style.color = '#fff';

        setTimeout(() => {
            copyButton.style.backgroundColor = ''; // Revert to original
            copyButton.style.color = '';
        }, 500);
    });
});
