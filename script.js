// @MyReceipt would you like to thanks to Mr. Tamino Martinius for the script.

// I hope everyone enjoy it! Please drop NFT, not BOMB!

// Surabaya, 13 Mar. 2022

var init = function () {
  var isMobile =
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf("mobile") >= 0;
  var isSmall = window.innerWidth < 1000;

  var cb = new CursorBomb({
    ptlGap: isMobile || isSmall ? 0 : 0,
    ptlSize: isMobile || isSmall ? 1 : 1,
    width: 1e9,
    height: 1e9,
  });

  // var gui = new dat.GUI();
  gui
    .add(cb, "ptlGap")
    .min(0)
    .max(5)
    .step(1)
    .onChange(function () {
      cb.init(true);
    });
  gui
    .add(cb, "ptlSize")
    .min(1)
    .max(5)
    .step(1)
    .onChange(function () {
      cb.init(true);
    });
  gui.add(cb, "restless");
  gui.addColor(cb, "color").onChange(function (value) {
    cb.monochrome = true;
    cb.setColor(value);
  });

  window.addEventListener
    ? window.addEventListener(
        "click",
        function () {
          cb.init(true);
        },
        false
      )
    : (window.onclick = function () {
        cb.init(true);
      });
};

var initCursorBomb = (function () {
  var cbScript = document.createElement("script");
  cbScript.addEventListener
    ? cbScript.addEventListener("load", init, false)
    : (cbScript.onload = init);
  cbScript.src = "bomb.js";
  cbScript.setAttribute("type", "text/javascript");
  document.body.appendChild(cbScript);
})(
  window.addEventListener
    ? window.addEventListener("load", initCursorBomb, false)
    : (window.onload = initCursorBomb)
);
