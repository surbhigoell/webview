function isWebView() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
   
    // Check for popular mobile app web views
    const isAndroidWebView = /\bwv\b/.test(userAgent) || /Android.*Version\/\d\.\d/.test(userAgent);
    const isIOSWebView = /iP(hone|od|ad).*AppleWebKit(?!.*Safari)/.test(userAgent);
   
    return isAndroidWebView || isIOSWebView;
   }
   
   if (isWebView()) {
    console.log("The page is being opened in a WebView.");
   } else {
    console.log("The page is NOT being opened in a WebView.");
   }