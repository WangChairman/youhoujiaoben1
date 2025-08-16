// ==UserScript==
// @name         继续教育
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require    https://www.whlpa.com/theme/default/js/jquery.js
// @match        https://www.whlpa.com/index/video/*
// @grant        none
// ==/UserScript==


(function() {

    //var total=Math.floor($('#player-con')[0].firstChild.duration);
    var total_time;
    var cid=$("[name='cid']")[0].value;
    var time1=0;
    var first=1;
    var count=setInterval(function(){
        //debugger;
        if(!($('#player-con')&&$('#player-con')[0]&&$('#player-con')[0].firstChild.duration>0)) return;
        total_time=parseInt($('#player-con')[0].firstChild.duration);
        $.ajax({
            url: "https://www.whlpa.com/member/shipin.html",
            data: {cid: cid,total_time:total_time,time1:time1},
            dataType: "json",
            success: function(data){
                var d=JSON.parse(data);
                var current=parseInt(total_time*d.speed/100);
                var per=parseInt(time1/total_time*100)+20;
                if(d.speed>per){
                    time1=current;
                    first=0;
                }
                if(d.status=='nn'){
                    window.clearInterval(count);
                }
                if(d.speed>90&&first==1){
                    window.clearInterval(count);
                }
                if(d.speed>99){
                    window.clearInterval(count);
                }
            }
        });
        time1=time1+60;
        if(time1>total_time) window.clearInterval(count);
    },1000);
})();