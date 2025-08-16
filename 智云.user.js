// ==UserScript==
// @name         智云
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yd.91jkys.com/*
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var listurl='https://apigw.91jkys.com/api/drugstore/1.0/prescription_list_to_deal?pageNo=1&pageSize=1000&prescriptionTotalStatus=1&listType=1';
    var prescriptionurl='https://apigw.91jkys.com/api/drugstore/1.0/wx_pharmacist_audit_prescription';
    var sum=0,count=0;
    function getAjax(url,par){
        $.ajax({
            url: url,
            type:'GET',
            dataType: 'json',
            data:par?par:{},
            contentType:"application/json; charset=utf-8",
            crossDomain:true, //设置跨域为true
            xhrFields: {
                withCredentials: true //默认情况下，标准的跨域请求是不会发送cookie的
            },
            success: function(data){
                // debugger;
                console.log(data);
                var list=data.result.data;
                var i=0;
                if(!list) return;
                count=list.length;
                var current;
                $.each(list,(index,info)=>{
                    current=(new Date(info.createTime));
                    // debugger;
                    if(current.getDay()==0||current.getDay()==6||info.storeName=='武汉同仁美康大药房有限公司佳和馨居店') {
                        i+=400;
                        setTimeout(()=>{
                            console.log(new Date(info.createTime) + info.name);
                            postAjax(prescriptionurl,JSON.stringify({"accept":true,"id":info.id}));
                        },i);
                    }
                })
            },
            error: function(){

            }
        });
    }

    function postAjax(url,data){
        $.ajax({
            url: url,
            type:'POST',
            dataType: 'json',
            data:data?data:{},
            contentType:"application/json; charset=utf-8",
            crossDomain:true, //设置跨域为true
            xhrFields: {
                withCredentials: true //默认情况下，标准的跨域请求是不会发送cookie的
            },
            success: function(data){
                // debugger;
                sum++;
                $('.userStoreName').children()[0].innerText=sum+'/'+count;
                console.log(data);
            },
            error: function(){

            }
        });
    }
    // getAjax(listurl);
    var int=setInterval(()=>{
        if($('.icon-zhiyunyaodianxitonglogo').length){
            clearInterval(int);
            setTimeout(()=>{
                // alert('加载完毕');
                $('.icon-zhiyunyaodianxitonglogo').click(()=>{
                    // alert('点击');
                    getAjax(listurl);
                });
            },1000);
        }
    },200);

        setInterval(()=>{
            getAjax(listurl);
    },360*1000);

})();