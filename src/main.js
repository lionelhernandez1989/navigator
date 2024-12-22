if (window.navigator){
    const navigatorInfo = {};

    for (const key in window.navigator) {
        try {
            navigatorInfo[key] = window.navigator[key];
        } catch (error) {
            navigatorInfo[key] = "Unavailable";
        }
    }

    const devicePixelRatio = window.devicePixelRatio;
    const actualWidth = window.screen.width * devicePixelRatio;
    const actualHeight = window.screen.height * devicePixelRatio;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    document.getElementById('navigatorInfo').textContent = JSON.stringify(navigatorInfo, null, 2);
    document.getElementById('a').textContent = `Window Size: ${windowWidth} x ${windowHeight}`
    document.getElementById('b').textContent = `Device Resolution: ${actualWidth} x ${actualHeight}`

} else {
    alert("not found")
}