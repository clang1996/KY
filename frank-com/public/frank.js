function jsonp(url) {
    return new Promise((resolve, reject) => {
        const random = "frankJSONPCallbackName" + Math.random();
        window[random] = data => {
            resolve(data);
        };
        const script = document.createElement("script");
        script.src = `${url}?callback=${random}`;
        script.onload = () => {
            script.remove();
        };
        script.onerror = () => {
            reject();
        };
        console.log(script)
        console.log(url)

        document.body.appendChild(script);
    });
}

jsonp("http://qq.com:8888/xxx.js").then(data => {
    console.log(data);
});














// const request = new XMLHttpRequest
// request.open('get', 'http://qq.com:8888/friends.json')
// request.onreadystatechange = () => {
//     if (request.readyState = 4 && request.status === 200) {
//         console.log(request.response)
//     }
// }
// request.send();