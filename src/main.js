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
    const gpu = getVideoCardInfo()?.renderer

    document.getElementById('navigatorInfo').textContent = JSON.stringify(navigatorInfo, null, 2);
    document.getElementById('a').textContent = `Window Size: ${windowWidth} x ${windowHeight}`
    document.getElementById('b').textContent = `Device Resolution: ${actualWidth} x ${actualHeight}`
    document.getElementById('c').textContent = `GPU: ${gpu}`

} else {
    alert("not found")
}

function getVideoCardInfo() {
    const gl = document.createElement('canvas').getContext('webgl');
    if (!gl) {
        return {
            error: "no webgl",
        };
    }
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return debugInfo ? {
        vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
        renderer:  gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    } : {
        error: "no WEBGL_debug_renderer_info",
    };
}

function handleMotionEvent(event) {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;

    document.getElementById('d').textContent = `Motion: ${x} , ${y} , ${z}`
}

window.addEventListener("devicemotion", handleMotionEvent, true);
