var fpsDiv = document.createElement('div');
fpsDiv.style.cssText = 'position:fixed; bottom:15px; left:15px; background:rgba(0,0,0,0.6); color:#4caf50; padding:4px 10px; border-radius:6px; font-size:13px; z-index:9999; font-family:monospace; pointer-events:none;';
fpsDiv.innerText = 'FPS: --';
document.body.appendChild(fpsDiv);

var lastTime = performance.now();
var frames = 0;

function calcFPS() {
    var now = performance.now();
    frames++;
    if (now >= lastTime + 1000) {
        var fps = Math.round((frames * 1000) / (now - lastTime));
        fpsDiv.innerText = 'FPS ' + fps + ' · ' + (fps >= 50 ? '流畅' : '卡顿');
        lastTime = now;
        frames = 0;
    }
    requestAnimationFrame(calcFPS);
}
requestAnimationFrame(calcFPS);