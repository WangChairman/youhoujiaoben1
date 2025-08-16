// ==UserScript==
// @name         教育
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        www.hblpa.com/web/web/*
// @match        https://study.21yyh.com/*
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// @icon         https://www.google.com/s2/favicons?domain=hblpa.com
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue

// ==/UserScript==

$(document).ready(function(){
    // start();
    if(window.location.href.indexOf("courseStudy")>0){
        console.log('courseStudy');
        pageCourseStudy();
    }
    if(window.location.href.indexOf("videoDetails")>0){
        console.log('videoDetails');
        pageVideoDetails();
    }

    // function setId(){
    //     var idList=['990aacb2aed14fe1ae33ebb3279e810d','52139209864743e6aa28ac25b203761b','69cabc9e55c84a569177616811f65867','c06a5aba203d45b6b1991bd2b6badbef'];
    //     Set = GM_getValue("set");
    //     Set["idCard"]=idList[Math.floor((new Date().getMinutes())/15)];
    //     console.log(Set);
    //     GM_setValue("set", Set);
    // }
    // setId();
    // setInterval(function () {
    //     setId();
    // }, 15*60*1000);

});

function httpRequest(url,datas){
    datas=datas?datas:{};
    return new Promise(resolve => {
        GM_xmlhttpRequest({
            method: datas.method?datas.method:'get',
            url: url,
            data: datas.data?datas.data:{},
            responseType:datas.responseType?datas.responseType:'json',
            // headers: { "Content-Type": "application/x-www-form-urlencoded" },
            onload: function(data) {
                resolve(data.response);
            },
            onerror: function(){
                resolve('error');
            }
        });
    });
}

function getAjax(url,datas){
    datas=datas?datas:{};
    return new Promise(resolve => {
        $.ajax({
            url: url,
            type:datas.type?datas.type:'GET',
            dataType: datas.dataType?datas.dataType:'json',
            data:datas.data?datas.data:{},
            headers:datas.header?datas.header:{},
            //             crossDomain:true, //设置跨域为true
            // xhrFields: {
            //     withCredentials: true //默认情况下，标准的跨域请求是不会发送cookie的
            // },
            contentType:datas.contentType?datas.contentType:"text/xml;charset=utf-8",
            success: function(data){
                resolve(data);
            },
            error: function(){
                resolve('error');
            }
        });
    });
}

function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

function getCookieValue (cookieName) {
    let cookieString = document.cookie;
    // 将cookie字符串拆分成多个键值对
    let cookieArray = cookieString.split('; ');
    // 遍历键值对数组，找到匹配的cookie
    for (let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('=');
        // 去除空格并判断cookie名称是否匹配
        if (cookiePair[0].trim() === cookieName) {
            return cookiePair[1];
        }
    }
    // 若未找到匹配的cookie，则返回null或者其他你认为适合的默认值
    return null;
};

const openVideo = async function() {
    await sleep(10000);
    let yswebToken=getCookieValue('yswebToken');
    var datas =await getAjax('https://study.21yyh.com/client-pro/wsCourse/getLockSubject',{contentType:'application/json;charset=UTF-8',data:JSON.stringify({courseId:null,subjectId:null}),type:'POST',header:{Authorization:`Bearer ${yswebToken}`}});
    if(datas.data){
        await getAjax('https://study.21yyh.com/client-pro/wsCourse/release',{contentType:'application/json;charset=UTF-8',data:JSON.stringify({courseId:datas.data.courseId,subjectId:datas.data.subjectId,userId:'09286ced7cde412f9b76f0c0a45b5b91'}),type:'POST',header:{Authorization:`Bearer ${yswebToken}`}});
    }
    datas =await getAjax(`https://study.21yyh.com/client-pro/wsCourse/getCourseSelectionList?pageSize=100&pageNum=1&courseId=&searchFlag=3&courseTypeId=2&courseYear=${new Date().getFullYear()}&studyStatus=`,{header:{Authorization:`Bearer ${yswebToken}`}});
    console.log(datas);
    let courses=datas.data.rows;
    for(let course in courses){
        let row=courses[course];
        if(row.studyProgress<31 || (row.studyProgress>33 && row.studyProgress<64) || (row.studyProgress>66 && row.studyProgress<100)){
            window.open(`https://study.21yyh.com/videoDetails?subjectId=${row.subjectId}&courseId=${row.courseId}&flag=1`);
            return;
        }
    }
    await sleep(1000);
    datas =await getAjax(`https://study.21yyh.com/client-pro/wsCourse/getCourseSelectionList?pageSize=100&pageNum=1&courseId=&searchFlag=3&courseTypeId=1&courseYear=${new Date().getFullYear()}&studyStatus=`,{header:{Authorization:`Bearer ${yswebToken}`}});
    console.log(datas);
    courses=datas.data.rows;
    for(let course in courses){
        let row=courses[course];
        if(row.studyProgress<31 || (row.studyProgress>33 && row.studyProgress<64) || (row.studyProgress>66 && row.studyProgress<100)){
            window.open(`https://study.21yyh.com/videoDetails?subjectId=${row.subjectId}&courseId=${row.courseId}&flag=1`);
            return;
        }
    }
}

const pageCourseStudy = async function() {
    openVideo();
    document.addEventListener("visibilitychange", function() {
        //debugger;
        console.log(document.visibilityState);
        if(document.visibilityState == "hidden") {
        } else if (document.visibilityState == "visible") {
            openVideo();
        }
    });
}

const pageVideoDetails = async function() {
    var play = document.createElement("audio");
    play.id = "auto";
    play.autoplay='autoplay';
    play.src = "";
    var i=0,j=0;
    document.body.appendChild(play);

    // 观察目标（建议使用具体容器而非document.body）
    const container = $('#app')[0] || document.body;
    //debugger;
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            $(mutation.addedNodes).each(function() {
                // 检测新增的video元素
                const videos = $(this).is('video') ? $(this) : $(this).find('video');
                if (videos.length) {
                    //debugger;
                    console.log('检测到video元素:', videos);
                    // 可在此添加视频加载后的处理逻辑
                    videos.on('loadeddata', () => {
                        console.log('视频已加载元数据');
                        videos.prop('muted', true);
                    });
                    // return;
                }
            });
        });
    });

    //配置观察选项
    observer.observe(container, {
        childList: true,  // 观察子元素
        subtree: true     // 观察所有后代元素
    });
    //debugger;
    if($('video').length>0) $('video').prop('muted', true);

    while(i<420){

        await sleep(10000);
        i++;
        if($('[aria-label="试题"]').parent().css('display')=='block'){
            console.log(222222222);
            // let auto = $("#auto");
            // auto.attr("src",'http://data.huiyi8.com/2017/gha/03/17/1702.mp3');
            i=420;
        } else if(($('[aria-label="验证码"]').parent().css('display')=='block')){
            console.log(33333333333);
            var elm=$('[placeholder="请输入验证码"]');
            let auto = $("#auto");
            auto.attr("src",'http://data.huiyi8.com/2017/gha/03/17/1702.mp3');
            if(elm.val()&&elm.val().length>0){
                console.log(4444444444444);
                var code=elm.val().replace(/[a-zA-Z]/g, '');
                elm.val(code);
                var tijiao=$("span:contains('提交验证码')");
                tijiao.click();
            }else{
                j++;
                if(j>3){
                    i=420;
                }
            }
        }
    }

    var link=location.href;
    var subjectId=link.substring(link.indexOf('subjectId')+10,link.indexOf('&courseId'));
    var courseId=link.substring(link.indexOf('courseId')+9,link.indexOf('&flag'));
    let yswebToken=getCookieValue('yswebToken');
    var datas =await getAjax('https://study.21yyh.com/client-pro/wsCourse/release',{contentType:'application/json;charset=UTF-8',data:JSON.stringify({courseId:courseId,subjectId:subjectId,userId:'09286ced7cde412f9b76f0c0a45b5b91'}),type:'POST',header:{Authorization:`Bearer ${yswebToken}`}});
    window.close();

}