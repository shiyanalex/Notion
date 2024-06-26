document.getElementById('inputText').addEventListener('input', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.replace(/\n/g, '\n\n');
    document.getElementById('outputText').value = outputText;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');

    // Blink effect for the button
    const copyButton = document.getElementById('copyButton');
    copyButton.classList.add('blink');
    setTimeout(() => {
        copyButton.classList.remove('blink');
    }, 400);
});
