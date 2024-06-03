chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'takeScreenshot') {
        chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
            if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError.message });
                return;
            }
            // Create a new tab to display the screenshot
            chrome.tabs.create({ url: dataUrl }, () => {
                sendResponse({ success: true });
            });
        });
        // Return true to indicate you want to send a response asynchronously
        return true;
    }
});
