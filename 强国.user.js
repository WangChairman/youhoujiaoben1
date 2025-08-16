// ==UserScript==
// @name         强国
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://greasyfork.org/scripts/423313-utils%E7%8E%AF%E5%A2%83/code/Utils%E7%8E%AF%E5%A2%83.js?version=911306
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @match        https://www.xuexi.cn/
// @match        https://www.xuexi.cn/lgpage/detail/index.html*
// @match        https://pc.xuexi.cn/points/my-points.html*
// @match        https://pc.xuexi.cn/points/exam-practice.html*
// @match        https://pc.xuexi.cn/points/exam-weekly-list.html*
// @match        https://pc.xuexi.cn/points/exam-weekly-detail.html*
// @match        https://pc.xuexi.cn/points/exam-paper-list.html*
// @match        https://pc.xuexi.cn/points/exam-paper-detail.html*
// @match        https://www.xuexi.cn/4426aa87b0b64ac671c96379a3a8bd26/db086044562a57b441c24f2af1c8e101.html*
// @grant        none
// ==/UserScript==

window.onload = async function(){
    const $X = new Utils('学习强国');

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function formatDate(d) {
        var month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }


    function getTask(){
        var info;
        $.ajax({
            url: "https://pc-proxy-api.xuexi.cn/api/score/days/listScoreProgress?sence=score&deviceType=2",
            dataType: "json",
            async:false,
            xhrFields: {
                withCredentials: true
            },
            success: function(d){
                info=d.data;
                console.log((new Date()).toLocaleTimeString());
                console.log(info);
            }
        });
        return info;
    }


    const getBtnDom = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                let nextAll = document.querySelectorAll('.ant-btn')
                let next = nextAll[0]

                if (nextAll.length == 2) {
                    //俩按钮，说明有个按钮是交卷。
                    next = nextAll[1]
                }
                console.log('btn按钮状态', next)
                resolve(next)
            }, 100)
        })
    }
    const doit = async () => {
        console.log('===========开始答题===========')
        //         console.log('延时500ms')
        await $X.wait(getRndInteger(0,2000))
        const next = await getBtnDom()
        console.log('next', next)

        if (next.disabled) {
            await $X.wait(getRndInteger(2000,5000))
            document.querySelector('.tips').click()
            await $X.wait(getRndInteger(1000,3000))
            //所有提示
            let allTips = document.querySelectorAll('font[color=red]')

            //单选多选时候的按钮
            let buttons = document.querySelectorAll('.q-answer')

            //填空时候的那个textbox，这里假设只有一个填空
            let textboxs = document.querySelectorAll('input')
            //问题类型
            let qType = document.querySelector('.q-header').textContent
            console.log('问题类型qType', qType)
            qType = qType.substr(0, 3)
            switch (qType) {
                case '填空题':
                    //第几个填空
                    await $X.wait(getRndInteger(1000,3000))
                    let mevent = new Event('input', { bubbles: true })
                    if (textboxs.length > 1) {
                        //若不止是一个空
                        //填空数量和提示数量是否一致
                        if (document.querySelector('.ant-popover-inner-content').textContent === '请观看视频') {
                            console.log('需要观看视频')
                            for (let x = 0;x < textboxs.length;x++) {
                                textboxs[x].setAttribute('value', getRndInteger(0,100))
                                textboxs[x].dispatchEvent(mevent)
                            }
                        } else if (allTips.length == textboxs.length) {
                            for (
                                let i = 0;
                                i < allTips.length;
                                i++ //数量一致，则一一对应。
                            ) {
                                let tip = allTips[i]
                                let tipText = tip.textContent
                                if (tipText.length > 0) {
                                    //通过设置属性,然后立即让他冒泡这个input事件.
                                    //否则1,setattr后,内容消失.
                                    //否则2,element.value=124后,属性值value不会改变,所以冒泡也不管用.
                                    textboxs[i].setAttribute('value', tipText)
                                    textboxs[i].dispatchEvent(mevent)
                                }
                            }
                        } else {
                            //若填空数量和提示数量不一致，那么，应该都是提示数量多。
                            if (document.querySelector('.ant-popover-inner-content').textContent === '请观看视频') {
                                console.log('需要观看视频')
                                for (let x = 0;x < textboxs.length;x++) {
                                    textboxs[x].setAttribute('value', getRndInteger(0,100))
                                    textboxs[x].dispatchEvent(mevent)
                                }
                            } else if (allTips.length > textboxs.length) {
                                let lineFeed = document.querySelector('.line-feed').textContent //这个是提示的所有内容，不仅包含红色答案部分。

                                let n = 0 //计数，第几个tip。
                                for (
                                    let j = 0;
                                    j < textboxs.length;
                                    j++ //多个填空
                                ) {
                                    let tipText = allTips[n].textContent
                                    let nextTipText = ''
                                    do {
                                        tipText += nextTipText
                                        if (n < textboxs.length - 1) {
                                            n++
                                            nextTipText = allTips[n].textContent
                                        } else {
                                            nextTipText = '结束了，没有了。'
                                        }
                                    } while (lineFeed.indexOf(tipText + nextTipText))

                                        textboxs[j].setAttribute('value', tipText)
                                    textboxs[j].dispatchEvent(mevent)
                                }
                            } else {
                                //提示数量少于填空数量，则我无法分析, 回头研究，暂时放弃作答，刷新题库浏览器
                                // location.reload()
                            }
                            return doit()
                        }
                    } else if (textboxs.length == 1) {
                        if (document.querySelector('.ant-popover-inner-content').textContent === '请观看视频') {
                            console.log('需要观看视频')
                            for (let x = 0;x < textboxs.length;x++) {
                                textboxs[x].setAttribute('value', getRndInteger(0,100))
                                textboxs[x].dispatchEvent(mevent)
                            }
                            return doit()
                        }
                        //只有一个空，直接把所有tips合并。
                        let tipText = ''
                        for (let i = 0; i < allTips.length; i++) {
                            tipText += allTips[i].textContent
                        }
                        textboxs[0].setAttribute('value', tipText)
                        textboxs[0].dispatchEvent(mevent)
                        await $X.wait(500)
                        // return doit()
                    } else {
                        //怕有没空白的情况。  看视频。。
                        console.log('填空题，看视频？')
                        window.location.href = 'http://www.baidu.com'
                    }
                    return doit()
                case '多选题':
                    //循环选项列表。用来点击
                    for (let js = 0; js < buttons.length; js++) {
                        let cButton = buttons[js]
                        for (
                            let i = 0;
                            i < allTips.length;
                            i++ //循环提示列表。
                        ) {
                            let tip = allTips[i]
                            let tipText = tip.textContent
                            if (tipText.length > 0) {
                                //提示内容长度大于0
                                let cButtonText = cButton.textContent //选项按钮的内容
                                console.log('cButtonText', cButtonText)
                                console.log('tipText', tipText)
                                //循环对比点击
                                if (
                                    cButtonText.indexOf(tipText) > -1 ||
                                    tipText.indexOf(cButtonText) > -1
                                ) {
                                    await $X.wait(getRndInteger(400,3000));
                                    if(cButton.className.indexOf("chosen")<0)
                                        cButton.click()
                                }
                            }
                        }
                    }
                    return doit()
                case '单选题':
                    //单选，所以所有的提示，其实是同一个。有时候，对方提示会分成多个部分。
                    //case 块里不能直接用let。所以增加了个if。
                    if (true) {
                        //把红色提示组合为一条
                        let tipText = ''
                        for (let i = 0; i < allTips.length; i++) {
                            tipText += allTips[i].textContent
                        }

                        if (tipText.length > 0) {
                            //循环对比后点击 答案是否包含正确答案
                            for (let js = 0; js < buttons.length; js++) {
                                let cButton = buttons[js]
                                let cButtonText = cButton.textContent
                                //通过判断是否相互包含，来确认是不是此选项
                                if (
                                    cButtonText.indexOf(tipText) > -1 ||
                                    tipText.indexOf(cButtonText) > -1
                                ) {
                                    console.log('延时500选择')
                                    await $X.wait(500)
                                    if(cButton.className.indexOf("chosen")<0) cButton.click();
                                    await $X.wait(500)
                                    console.log('下一步')
                                    return doit()
                                }
                            }

                            // 循环对比答案，若不纯在包含答案  则走 这套比对答案逻辑
                            console.log('循环比对答案 【相似度】')
                            let xiangsidu = [] // 相似度
                            let max_xiangsidu = 0
                            let index = 0
                            for (let js = 0; js < buttons.length; js++) {
                                let cButton = buttons[js]
                                let cButtonText = cButton.textContent
                                //通过判断是否相互包含，来确认是不是此选项
                                xiangsidu.push($X.strSimilarity2Percent(tipText, cButtonText))
                            }

                            max_xiangsidu = $X.getMaxNumOfArr(xiangsidu)
                            index = xiangsidu.findIndex(item => item === max_xiangsidu)
                            console.log(`几个答案相似度【$X{max_xiangsidu}】`)
                            console.log(`找最相似的答案【$X{index}】`)
                            buttons[index].click()
                            await $X.wait(500)
                            document.querySelector('.ant-btn').click()
                            await $X.wait(500)
                            return doit()
                        }
                    }
                    break
                default:
                    break
            }
        } else {
            // 可以点击
            if (
                next.textContent != '再练一次' &&
                next.textContent != '再来一组' &&
                next.textContent != '查看解析'
            ) {
                next.click()
                await $X.wait(500)
                doit()
            } else {
                // 结束
                console.log('答题结束')
                await $X.wait(getRndInteger(3000,10000));
                window.close();
                //                 window.location.reload()
                //                 $X.done()
            }
        }
    }
    function task3(){
        var start1=setInterval(function(){
            let btn = document.querySelector('.ant-btn');
            if(!btn) return;
            clearInterval(start1);

            if (btn.textContent === '确 定' || btn.textContent === '下一题') {
                //                 await $X.wait(500)
                doit();
            }
        },1000);
    }

    if(window.location.href.indexOf("practice")>0 || window.location.href.indexOf("-detail")>0){
        while(!document.querySelector('.ant-btn')){
            await $X.wait(1000);
        }
        let btn = document.querySelector('.ant-btn');
        if (btn.textContent === '确 定' || btn.textContent === '下一题') {
            doit();
        }
        return;
    }

    if(window.location.href.indexOf("list")>0){
        while(!$('.ant-btn-primary:not(.ant-btn-background-ghost)').length){
            await $X.wait(1000);
        }
        await $X.wait(getRndInteger(2000,10000));
        $('.ant-btn-primary:not(.ant-btn-background-ghost)')[0].click();

    }

    if(window.location.href.indexOf("www")>0&&window.location.href.indexOf("lgpage")<0){

        var today=formatDate(new Date());
        var point=window.localStorage.getItem(today);
        if(point){
            console.log(point);
        }else{
            window.localStorage.setItem(today,getRndInteger(38,43));
            point=window.localStorage.getItem(today);
        }
        var list=$('._9qqTGSwcSFhx-e1qT-ZSm .tab-item.center-item');
        var list1=$("[data-data-id$='text-list'],[data-data-id='AKV_AmLu7i'],[data-data-id='JlZpF1k8t9'],[data-data-id='4BbJXwIh4h'],[data-data-id='guyMNoYZuW']");

        while(!list.length||list1.length<20){
            await $X.wait(1000);
            list=$('._9qqTGSwcSFhx-e1qT-ZSm .tab-item.center-item');
            list1=$("[data-data-id$='text-list'],[data-data-id='AKV_AmLu7i'],[data-data-id='JlZpF1k8t9'],[data-data-id='4BbJXwIh4h'],[data-data-id='guyMNoYZuW']");
            list.splice(4,1);
        }

        function doTask(){
            var info=getTask();
            var total=info.totalScore;
            if(total>=point) return;

            setTimeout(function(){
                var remain=[];
                var task=info.taskProgress;
                $.each(task,function(i,part){
//                     if(part.currentScore<part.dayMaxScore && part.guideUrl=="https://www.xuexi.cn") remain.push(part);
                                        if(part.currentScore<part.dayMaxScore) remain.push(part);
                });
                var current = remain[getRndInteger(0,remain.length)];
                switch(current.title){
                    case "视听学习":
                    case "视听学习时长":
                        //                         task1();
                        list[getRndInteger(0,list.length)].click();
                        var link=$('._3PZkTRMhJf4Okt011kJqrM ._3qq02yp6RQqg-s-90jrYAn ._1PcbELBKVoVrF5XKNSE_SF');
                        window.open(link[getRndInteger(0,link.length)].dataset.linkTarget);
                        break;
                    case "我要选读文章":
                        list1[getRndInteger(0,list.length)].children[0].children[0].click();
                        break;
                    case "每日答题":
                        list1[getRndInteger(0,list.length)].children[0].children[0].click();
                        break;
                    case "每周答题":
                        list1[getRndInteger(0,list.length)].children[0].children[0].click();
                        break;
                    case "专项答题":
                        list1[getRndInteger(0,list.length)].children[0].children[0].click();
                        break;
                }

            },getRndInteger(5,20)*1000);
        }

        doTask();
        document.addEventListener("visibilitychange", function() {
            console.log(document.visibilityState);
            if(document.visibilityState == "hidden") {
            } else if (document.visibilityState == "visible") {
                doTask();
            }
        });
    }

    if(window.location.href.indexOf("lgpage")>0){
        await $X.wait(10000);
        var len=$('html')[0].scrollHeight;
        var time;
        if($('.gr-video-player').length) {
            time=getRndInteger(45,60)+getRndInteger(0,1)*60;
            await $X.wait(getRndInteger(5,10)*1000);
            $('html')[0].scrollTop+=getRndInteger(166*2,166*3);
        } else {
            time=getRndInteger(20+parseInt(len/100),50+parseInt(len/100));
            var count=getRndInteger(parseInt(time/30),parseInt(time/15));
            var items=[];
            for(var i=0;i<count;i++) {
                var item=getRndInteger(1,time);
                if($.inArray(item,items)==-1) {
                    items.push(item);
                }
            }
            items.sort(function(a, b){return a - b});
            console.log(time+'---'+count+'---'+items);
            $.each(items,function(i,timer){
                setTimeout(function(){
                    if($('html')[0].scrollTop<len-1600){
                        $('html')[0].scrollTop+=getRndInteger(166*2,166*6);
                    }
                },timer*1000);
            });
        }
        setTimeout(function(){
            window.close();
        },time*1000);
    }

}

