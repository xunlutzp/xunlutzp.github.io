require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        // 插件配置
        var config = config["baidu-tongji-with-multiple-channel"] || {};
        var token = config.token;
        var url = config.url;
        var multipleChannelConfig = config.multipleChannelConfig;

        // 开启多渠道配置开关并且存在多渠道配置
        if (JSON.stringify(multipleChannelConfig) !== "{}") {
            var currentHost = location.hostname;
            for(var channelHost in multipleChannelConfig){
                if (currentHost == channelHost) {
                    token = multipleChannelConfig[channelHost].token || token;
                    url = multipleChannelConfig[channelHost].url || url;
                    break;
                }
            }
        }
        
        // 自动插入百度统计代码
        if(url !== "" && token !== ""){
            var hm = document.createElement("script");
            hm.src = url + '?' + token;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        }
    });
});