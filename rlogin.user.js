// ==UserScript==
// @match https://r.factset.com/Citrix/XenApp/site/default.aspx
// ==/UserScript==

var count = 0;

var callback = function() {
    if(count > 15) {
        console.log('max time execeeded, timeout will occur in one minute.');
        return;
    }

    ++count;
    console.log('resetting timeout');

    document.getElementsByTagName('a')[0].click();

    setTimeout(callback, 30000);
};

setTimeout(callback, 30000);

