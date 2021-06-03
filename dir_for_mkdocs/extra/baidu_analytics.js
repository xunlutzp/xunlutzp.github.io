var track = true

switch (window.location.hostname) {
    case "xunlutzp.github.io":
        var token = "5d66842770a32b28d9f241f95832a8a4"
        break
    case "xunlutzp.gitee.io":
        var token = "310ef0d3cb71c5cfbac358ba5d489af5"
        break
    case "zcx980605.github.io":
        var token = "398ad45f7df04732d383364b87fccf42"
        break
    case "zcx980605.gitee.io":
        var token = "310ef0d3cb71c5cfbac358ba5d489af5"
        break
    default:
        var track = false
}

if (track) {

    var _hmt = _hmt || [];

    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?" + token;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    location$.subscribe(function (location) {
        var path = location.pathname + location.search
        _hmt.push(['_trackPageview', path]);
    })
}