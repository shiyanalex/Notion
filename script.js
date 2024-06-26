document.getElementById('processButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.replace(/\n/g, '\n\n');
    document.getElementById('outputText').value = outputText;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Text copied to clipboard');
});
