document.getElementById('screenshotButton').addEventListener('click', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Taking screenshot...';

    if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: 'takeScreenshot' }, (response) => {
            if (response && response.success) {
                messageElement.textContent = 'Screenshot taken successfully!';
            } else {
                messageElement.textContent = 'Failed to take screenshot.';
            }
        });
    } else {
        messageElement.textContent = 'Error: chrome.runtime is not available.';
    }
});
