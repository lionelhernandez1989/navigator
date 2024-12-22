if (window.navigator){
    const navigatorInfo = {};

    for (const key in window.navigator) {
        try {
            navigatorInfo[key] = window.navigator[key];
        } catch (error) {
            navigatorInfo[key] = "Unavailable";
        }
    }

    document.getElementById('navigatorInfo').textContent = JSON.stringify(navigatorInfo, null, 2);

} else {
    alert("not found")
}