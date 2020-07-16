var contestLink = "https://codeforces.com/contest/";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: contestLink + details.url.match(/^https?:\/\/[^\/]+\/[^\/]+\/[^\/]+\/+([\S\s]*)[^\/]/)[1] + "problem/" + details.url.match(/^https?:\/\/[^\/]+\/[^\/]+\/[^\/]+\/[^\/]+\/([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://codeforces.com/problemset/problem/*",
            "*://www.codeforces.com/problemset/problem/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);