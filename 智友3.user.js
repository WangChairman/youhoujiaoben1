// ==UserScript==
// @name         智友3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://61.183.78.30:810/check*
// @match        http://61.183.78.30:810/workspace*
// @match        about:blank*
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

$(document).ready(function(){
    start();
});
const start = async function() {
    // const 贵重编码=['21099009','21101078','21101005','21101037','21101048','21101001','21101151','21101152','21101153','21101041','21101184','21204035',
    //             '20302218','21501063','50102188','50102138','50102199','50102217','50101296'];
    //         JSON.stringify($('textarea')[0].value.split('\n').map(it => it.replace(/(\u80f6\u56ca)|(\u9897\u7c92)|(\u7cd6\u6d46)|(\u5206\u6563)|(\u7f13\u91ca)|(\u6eb6\u6db2)|(\u5408\u5242)|(\u542b\u7247)|(\u53e3\u670d\u6db2)|(\u53e3\u670d\u6eb6\u6db2)|(\u9732)|(\u6db2)|(\u818f)|(\u7247)|(\u4e38)/g, "")))
    const 五类编码=["氨咖黄敏","感冒灵","连花清瘟","小儿氨酚黄那敏","复方氨酚烷胺","复方氨酚烷胺","氯芬黄敏","小柴胡","复方板蓝根",
                "维C银翘","双黄连","感冒清热","小儿氨酚烷胺","抗病毒","复方感冒灵","风寒感冒","板蓝根","感冒灵","氨酚伪麻美芬","氨麻美敏",
                "氨麻苯美","酚麻美敏","氨麻美敏","感冒清热","感冒","感冒止咳","精制银翘解毒","连花清瘟","氨麻美敏（Ⅱ）",
                "四季感冒","小儿感冒","小儿豉翘清热","复方氨酚溴敏","复方盐酸伪麻黄碱","强力感冒","布洛芬混悬","退热贴","阿司匹林泡腾",
                "阿司匹林维生素C泡腾","安乃近","氨基比林咖啡因","布洛芬","布洛芬","布洛芬混悬滴剂","布洛芬","对乙酰氨基酚滴剂","对乙酰氨基酚混悬滴剂",
                "对乙酰氨基酚","对乙酰氨基酚","对乙酰氨基酚栓","复方对乙酰氨基酚","酚咖","复方小儿退热栓","清热解毒","清火","复方鱼腥草","复方金银花",
                "栀子金花","六神","夏桑菊","银黄","对乙酰氨基酚","银黄","蓝芩","银黄滴","阿莫西林","阿奇霉素干混悬剂","头孢克肟","头孢克洛干混悬剂",
                "阿莫西林克拉维酸钾干混悬剂","头孢克肟","头孢克肟","氨苄西林","阿莫西林","头孢拉定","罗红霉素","阿莫西林克拉维酸钾(7:1)","阿奇霉素",
                "阿莫西林","阿莫西林克拉维酸钾","阿莫西林","阿奇霉素","阿奇霉素","阿奇霉素","复方磺胺甲噁唑","红霉素肠溶","琥乙红霉素","琥乙红霉素",
                "罗红霉素","罗红霉素干混悬剂","罗红霉素","罗红霉素","头孢氨苄","头孢氨苄","头孢丙烯","头孢丙烯","头孢丙烯","头孢丙烯","头孢泊肟酯",
                "头孢泊肟酯","头孢地尼","头孢地尼","头孢呋辛酯","头孢克洛","头孢克洛","头孢克洛","头孢克洛","头孢克洛","头孢克洛","头孢克肟干混悬剂",
                "头孢克肟","头孢羟氨苄","乙酰螺旋霉素","盐酸左氧氟沙星","诺氟沙星","盐酸莫西沙星","克拉霉素","盐酸伐昔洛韦","阿昔洛韦","利巴韦林",
                "阿昔洛韦","泛昔洛韦","利巴韦林","盐酸金刚烷胺","利巴韦林气雾剂","更昔洛韦","盐酸阿比多尔","盐酸阿比多尔","盐酸阿比多尔","盐酸阿比多尔",
                "磷酸奥司他韦","利巴韦林喷雾剂 ","京都念慈菴蜜炼川贝枇杷","氨溴特罗","盐酸氨溴索","枇杷止咳","枇杷止咳","蛇胆川贝枇杷","氢溴酸右美沙芬",
                "蜜炼川贝枇杷","橘红","咳速停","川贝清肺","蛇胆川贝","消炎止咳","小儿化痰止咳","百咳静","半夏止咳","川贝枇杷","肺力咳","复方甘草","复方甘草",
                "桂龙咳喘宁","桂龙咳喘宁","急支","橘红痰咳煎","橘红痰咳","咳特灵","克咳","克咳","强力枇杷","氢溴酸右美沙芬","小儿肺热咳喘","小儿肺热咳喘",
                "小儿咳喘灵","小儿止咳","复方仔癀","金嗓子喉","铁笛","开喉剑喷雾剂","冬凌草","复方草珊瑚","复方冬凌草","复方甲氧那明","复方熊胆薄荷","黄氏响声",
                "硫酸特布他林雾化吸入用","氢溴酸右美沙芬","金银花口服液","蒲地蓝",'二丁'];
    //     const 五类编码=['20303334','20303343','20303359','10303053','10302058','10303023','10803010','10803031','10303061','10803051','10303113','10302003',
    //                 '10303001','20303362','10303040','1030308','10303007','10303116','10501060','10501061','10501069','20302281','20303326','20303365','20302269',
    //                 '10302109','10302022','10302021','10302023','20303028','20303282','20303239','20303225','20803136','20803004','10303084',
    //                 '20803107','20803110','20803034','20803005','20303287','20303361','20303000','20303351','20303171','20303053',
    //                 '20803152','20303341','20303334','20303062','20303202','20303234','20303335','20303025','20303227','20803029',
    //                 '20303004','20303046','20303012','20303189','20302047','20303238','20303047','20303087','20301316','20303000',
    //                 '20304055','20303286','20303058','20303293','20303307','20302218','21201006','21603005','20304033','20304010',
    //                 '20301024','10501008','10501046','10501016','10799019','20803016','20803003','20803149','20302281','20803137',
    //                 '20803131','20803020','20803013','20803067','20803113','20803151','20803139','20803125','20803023','20803144',
    //                 '20803036','20803135','11001031','20803097','10803041','10303039','10803046','20303345','20303215','20803102',
    //                 '20803115','10303095'];
    //佳和
    var org='O36AZ790FID';
    var whid='K36AZ7A6TF1';
    //碧湖
    //var org='O2D8F1QQWYN';
    // var whid='K2D8FI58U5V';
    //联投
    //var org='O2T3JNV5IXX';
    // var whid='K2T52DCW4CP';
    const loginurl='http://61.183.78.30:810/';
    const 消杀编码=['50503129','50503128','50503123','50103595','50103630','50103532','50103611','50103596','50103615','50699100',
                '50699099','50103632','50102056'];
    const checkurl=loginurl+'formservice?service=openDataSet&_pid=8yOqHilJQYBZDFTq7_y6tmq7cmkpUTPSTD9JI4csS-BJGtMmgOFu9z9ksyt37nlpuHC7LbYcV4A1scOpiTH5qPkj64KR0weRlCv7yZEY6g29O_9DwQnslqNg19PqaUpQZ1W_8l0OfbI1mFS2_08ODKaIHwcqfXXveMaooCt7BxA&_formid=3hfbjilfcq317fsn&_tranid=06a71feb-9e4a-4c62-a1fd-cdd4b2fc4254&_moduleid=67rhsk8lcvdypqll&_action=new&_progid=26p1xb7e40d669pz&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22@sel_staff.select.openparam%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22con%22%3A%22%25%22%2C%22conall%22%3A%22%25%25%22%2C%22isRetail%22%3A%22Y%22%7D%7D';
    const warnurl=loginurl+'formservice?service=getWarns&_pid=FmbkVe4imobnb2-Z8SVWsYMiNZ2B-SS910X6pQ01H3F9kYIqoLRKjhOPC_vrQz1qld8LnNKl7lpT2vesF6967SuzxGeR2aXFL25C7Fq99jXtsHoDOGiivuhRIO1p-DNGSwyiJBGQMvi1posjpkBL5-nefgc1zwhRZhB7Dzkx1dI?_pid=FmbkVe4imobnb2-Z8SVWsYMiNZ2B-SS910X6pQ01H3F9kYIqoLRKjhOPC_vrQz1qld8LnNKl7lpT2vesF6967SuzxGeR2aXFL25C7Fq99jXtsHoDOGiivuhRIO1p-DNGSwyiJBGQMvi1posjpkBL5-nefgc1zwhRZhB7Dzkx1dI&_rnd=16343718155679.481301872129798&content=null';
    const modifyurl=loginurl+'formservice?service=openDataSet&_pid=FmbkVe4imobnb2-Z8SVWsYMiNZ2B-SS910X6pQ01H3F9kYIqoLRKjhOPC_vrQz1qld8LnNKl7lpT2vesF6967SuzxGeR2aXFL25C7Fq99jXtsHoDOGiivuhRIO1p-DNGSwyiJBGQMvi1posjpkBL5-nefgc1zwhRZhB7Dzkx1dI&_formid=597zgrtl8vh90wwr&_tranid=07ae3f85-38df-4935-b723-096fc283463c&_moduleid=2k7rp7e252ww5bkn&_action=new&content=%7B%22openmode%22%3A%22service%22%2C%22openparam%22%3A%22WarnDataSetOpenService%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A500%2C%22variables%22%3A%7B%22warnid%22%3A%22WMTCCO9YBGF%22%7D%7D';
    const orderurl2=loginurl+'formservice?service=openDataSet&_pid=N4Ej6m-RjrUFn0QfBMoj0VdBi4QPODj1R_12azn8z2nqCvidfiYS1kyTH5EPUvp86PtAQdxPlDrIsxNACpYVFE49RDZhtXhxAcMAn8doQov9djVIvVnmyXvlT6npVCwJ3VtKKwMbKuu-7znmQJQcrr23m021xEouyUPRBLVm1TE&_formid=4yxky8c10wxkmpyp&_tranid=c21fb5ab-2a8a-49eb-a4d9-0d76bd37d186&_moduleid=6iloe4dsbjg1q6az&_action=new&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_mdqh_xs%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22entid%22%3A%22E2CEEM27O7T%22%2C%22orgid%22%3A%22'+ org +'%22%7D%7D';
    const orderurl=loginurl+'formservice?service=openDataSet&_pid=6KRc49Bh5JlOppd3dse1ZTfkuKWXR41RV62dif3-DDzq9yYEr028KN-zQLXxeG-Oeb4p-HRiQHtNxQ_hfSaJgV1z7inlYGZZIr9LP55crX2I6eFZhstsG-HKZ2fxLTMMuUUtQK860Vy9-7qg&_formid=4yxky8c10wxkmpyp&_tranid=74f5dbe0-bbbe-4d13-8b80-3951e3b5c430&_moduleid=6iloe4dsbjg1q6az&_action=new&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_mdqh_xs%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22entid%22%3A%22E2CEEM27O7T%22%2C%22orgid%22%3A%22'+ org +'%22%2C%22qhbz%22%3A%22HYYY%22%7D%7D';
    const stockurl=loginurl+'formservice?service=openDataSet&_pid=JODapwUNR4Dx57e2ZJoNo1n77476csZjelMC9DAr-ZnNZ4EJfcJZ1zyWD-coafM8yidhma6moHf4_ZPlouWQX1vY0zTvhDkDj7BKhFyZ_MmfWzmtB1wbdpp6K5xbBL2Ym4LG3tkFHTkgRpnehiUWixjXfZangRGWSJP8Pombuus&_formid=3hfbjilfcq317fsn&_tranid=56b19dc4-5266-49cc-85ca-670ddcebab60&_moduleid=67rhsk8lcvdypqll&_action=new&_progid=26p1xb7e40d669pz&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22@sel_goods.select.openparam%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A100%2C%22variables%22%3A%7B%22con%22%3A%22{code}%25%22%2C%22conall%22%3A%22%25{code}%25%22%2C%22conreal%22%3A%22{code}%22%2C%22dbtype%22%3A%22Microsoft%20SQL%20Server%22%2C%22isdbjf%22%3A%22N%22%2C%22ishyr%22%3A%22Y%22%2C%22orgid%22%3A%22'+ org +'%22%2C%22whid%22%3A%22'+ whid +'%22%7D%7D';
    const saleurl=loginurl+'formservice?service=openDataSet&_pid=ymZwp-qD4Hv0Zw4CHks-U-pZqCzLp4vA1R12rOpl1-tNlKpUWUYi7Z5MAlnhpohI_0tlQ-KDiJX-xlpTFMgBOKB36LpwcY7KEjICqS1c_QKr6SyMjzYx36Kx0fSoBpiBN0yLqhGONrzCtV6V9ctDgllL58d6g_hqDgvHL4-moZM&_formid=46u5orw586cyjfp4&_tranid=904aab1b-4107-496c-8c98-23f53e22de5a&_moduleid=67rhsk8lcvdypqll&_action=new&_progid=6qfl3fl7cjb7lm74&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_query6_ret%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22GrSchId%22%3A0%2C%22businessid%22%3A%22%22%2C%22enddate%22%3A%22{enddate}%22%2C%22goodsid%22%3A%22%22%2C%22k_ishxpz%22%3A%22N%22%2C%22orgid%22%3A%22'+ org +'%22%2C%22staffid%22%3A%22%22%2C%22startdate%22%3A%22{startdate}%22%7D%7D';
    const sale2url=loginurl+'formservice?service=openDataSet&_pid=ymZwp-qD4Hv0Zw4CHks-U-pZqCzLp4vA1R12rOpl1-tNlKpUWUYi7Z5MAlnhpohI_0tlQ-KDiJX-xlpTFMgBOKB36LpwcY7KEjICqS1c_QKr6SyMjzYx36Kx0fSoBpiBN0yLqhGONrzCtV6V9ctDgllL58d6g_hqDgvHL4-moZM&_formid=46u5orw586cyjfp4&_tranid=904aab1b-4107-496c-8c98-23f53e22de5a&_moduleid=67rhsk8lcvdypqll&_action=new&_progid=6qfl3fl7cjb7lm74&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_query6_tr%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22GrSchId%22%3A0%2C%22businessid%22%3A%22%22%2C%22enddate%22%3A%22{date}%22%2C%22goodsid%22%3A%22%22%2C%22k_ishxpz%22%3A%22N%22%2C%22orgid%22%3A%22'+ org +'%22%2C%22staffid%22%3A%22%22%2C%22startdate%22%3A%22{date}%22%7D%7D';
    const allstockurl= loginurl+'formservice?service=openDataSet&_pid=ymZwp-qD4Hv0Zw4CHks-U-pZqCzLp4vA1R12rOpl1-tNlKpUWUYi7Z5MAlnhpohI_0tlQ-KDiJX-xlpTFMgBOKB36LpwcY7KEjICqS1c_QKr6SyMjzYx36Kx0fSoBpiBN0yLqhGONrzCtV6V9ctDgllL58d6g_hqDgvHL4-moZM&_formid=1rr5nw258wekx31j&_tranid=e4af3955-fa79-485b-995c-f6732f66a832&_moduleid=2k7rp7e252ww5bkn&_action=new&_progid=2joosf0w7sxyp8kn&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22sel_goods_batch%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A1000%2C%22variables%22%3A%7B%22businessid%22%3A%22%22%2C%22classid%22%3A%22%22%2C%22contactid%22%3A%22%22%2C%22goodsid%22%3A%22{code}%22%2C%22isfsp%22%3A%22N%22%2C%22iskc%22%3A%22N%22%2C%22jgcl%22%3A%22%22%2C%22k_isfml%22%3A%22N%22%2C%22k_jysx%22%3A%22%22%2C%22k_wllb%22%3A%22%22%2C%22orgid%22%3A%22%22%7D%7D';
    const fangyiurl='http://gophar.cdfortis.com/HMRegisterStore/checkhm/queryFeverInfoList';
    const fangyi1url='https://sly.chs-drgs.cn/web/purc/reg/query';
    const chufangurl='https://apigw.91jkys.com/api/drugstore/1.0/prescription_page';
    const guazhanglisturl=loginurl+'formservice?service=openDataSet&_pid=N4Ej6m-RjrUFn0QfBMoj0VdBi4QPODj1R_12azn8z2nqCvidfiYS1kyTH5EPUvp86PtAQdxPlDrIsxNACpYVFE49RDZhtXhxAcMAn8doQov9djVIvVnmyXvlT6npVCwJ3VtKKwMbKuu-7znmQJQcrr23m021xEouyUPRBLVm1TE&_formid=4yxky8c10wxkmpyp&_tranid=c21fb5ab-2a8a-49eb-a4d9-0d76bd37d186&_moduleid=6iloe4dsbjg1q6az&_action=new&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22@@draft.restore.list%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22datatype%22%3A%221%22%2C%22formid%22%3A%224yxky8c10wxkmpyp%22%2C%22orgid%22%3A%22'+ org +'%22%7D%7D';
    const guazhangurl=loginurl+'formservice?service=db.uniqueValue&_pid=N4Ej6m-RjrUFn0QfBMoj0VdBi4QPODj1R_12azn8z2nqCvidfiYS1kyTH5EPUvp86PtAQdxPlDrIsxNACpYVFE49RDZhtXhxAcMAn8doQov9djVIvVnmyXvlT6npVCwJ3VtKKwMbKuu-7znmQJQcrr23m021xEouyUPRBLVm1TE&_formid=4yxky8c10wxkmpyp&_tranid=c21fb5ab-2a8a-49eb-a4d9-0d76bd37d186&_moduleid=6iloe4dsbjg1q6az&_action=new&_rnd=16335728168469.03583524399404&content=%7B%22sql%22%3A%22@@draft.restore.entity%22%2C%22variables%22%3A%7B%22billno%22%3A{value}%7D%7D';
    const shopstockurl= loginurl+'formservice?service=openDataSet&_pid=FmbkVe4imobnb2-Z8SVWsYMiNZ2B-SS910X6pQ01H3F9kYIqoLRKjhOPC_vrQz1qld8LnNKl7lpT2vesF6967SuzxGeR2aXFL25C7Fq99jXtsHoDOGiivuhRIO1p-DNGSwyiJBGQMvi1posjpkBL5-nefgc1zwhRZhB7Dzkx1dI&_formid=02uaoqev8kpkxo7h&_tranid=1f12797c-bd0a-4945-868d-78af9cb65198&_moduleid=2k7rp7e252ww5bkn&_action=new&_progid=38rhz4ca6pmlkoul&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_query%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A5000%2C%22variables%22%3A%7B%22days%22%3A%220%22%2C%22dbtype%22%3A%22Microsoft%20SQL%20Server%22%2C%22goodsid%22%3A%22%22%2C%22whid%22%3A%22'+ whid +'%22%7D%7D';
    const diaobourl=loginurl+'formservice?service=openDataSet&_pid=K4s5blYlqfTZ7P-GZlgjcG7dMWZKIkB0DK9xE684avtGEvl9olnZPjBCxHZN7qSnX5s-BtiLOLYrGSAUW4hx2BuSFuK_mGWTym-mf8j1GcTlCFblMSHZF1VhVrJg-LUfOgmxHLxjtEhMFH05JeaQb_EOrQaWcZsf5KueLymfmrM&_formid=634jgx91abzrstxe&_tranid=fdfdef6f-e8cc-47e8-b11d-277ea2ce836b&_moduleid=6iloe4dsbjg1q6az&_action=new&_progid=40xe1unkcqb44200&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_djhz_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A500%2C%22variables%22%3A%7B%22EndDate%22%3A%222021-10-17%22%2C%22StartDate%22%3A%222021-10-15%22%2C%22billcode%22%3A%22%25%22%2C%22billstate%22%3A0%2C%22caozy%22%3A%22%22%2C%22deptid%22%3A%22%22%2C%22goodsid%22%3A%22%22%2C%22orgid%22%3A%22%22%2C%22staffid%22%3A%22%22%7D%7D';
    const diaobo2url=loginurl+'formservice?service=openDataSet&_pid=K4s5blYlqfTZ7P-GZlgjcG7dMWZKIkB0DK9xE684avtGEvl9olnZPjBCxHZN7qSnX5s-BtiLOLYrGSAUW4hx2BuSFuK_mGWTym-mf8j1GcTlCFblMSHZF1VhVrJg-LUfOgmxHLxjtEhMFH05JeaQb_EOrQaWcZsf5KueLymfmrM&_formid=634jgx91abzrstxe&_tranid=fdfdef6f-e8cc-47e8-b11d-277ea2ce836b&_moduleid=6iloe4dsbjg1q6az&_action=new&_progid=40xe1unkcqb44200&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_djmx_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A500%2C%22variables%22%3A%7B%22EndDate%22%3A%22{enddate}%22%2C%22StartDate%22%3A%22{startdate}%22%2C%22billcode%22%3A%22%25%22%2C%22billstate%22%3A0%2C%22caozy%22%3A%22%22%2C%22deptid%22%3A%22%22%2C%22goodsid%22%3A%22%22%2C%22orgid%22%3A%22%22%2C%22staffid%22%3A%22%22%7D%7D';
    const qinghuourl=loginurl+'formservice?service=openDataSet&_pid=K4s5blYlqfTZ7P-GZlgjcG7dMWZKIkB0DK9xE684avtGEvl9olnZPjBCxHZN7qSnX5s-BtiLOLYrGSAUW4hx2BuSFuK_mGWTym-mf8j1GcTlCFblMSHZF1VhVrJg-LUfOgmxHLxjtEhMFH05JeaQb_EOrQaWcZsf5KueLymfmrM&_formid=1vll0l3b35x1qx63&_tranid=00e20889-4d3c-4d5b-aebe-26f8df8bef47&_moduleid=6iloe4dsbjg1q6az&_action=new&_progid=0trsdeq5blrr7cyz&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_queryHz_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22caozy%22%3A%22%22%2C%22dczt%22%3A%22%E5%85%A8%E9%83%A8%22%2C%22deptid%22%3A%22%22%2C%22endDate%22%3A%22{enddate}%22%2C%22jhlx%22%3A%22%E5%85%A8%E9%83%A8%22%2C%22orgid%22%3A%22'+ org +'%22%2C%22salemanid%22%3A%22%22%2C%22startDate%22%3A%22{startdate}%22%7D%7D';
    const qinghuo2url=loginurl+'formservice?service=openDataSet&_pid=K4s5blYlqfTZ7P-GZlgjcG7dMWZKIkB0DK9xE684avtGEvl9olnZPjBCxHZN7qSnX5s-BtiLOLYrGSAUW4hx2BuSFuK_mGWTym-mf8j1GcTlCFblMSHZF1VhVrJg-LUfOgmxHLxjtEhMFH05JeaQb_EOrQaWcZsf5KueLymfmrM&_formid=1vll0l3b35x1qx63&_tranid=00e20889-4d3c-4d5b-aebe-26f8df8bef47&_moduleid=6iloe4dsbjg1q6az&_action=new&_progid=0trsdeq5blrr7cyz&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_queryMx_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22billno%22%3A{no}%7D%7D';
    const zongbuurl=loginurl+'formservice?service=openDataSet&_pid=6TKd2wX6YTEHeo_oIEnUjX7LPT6NnbbpT_GUg9Ckx_cNWgfVBuKlCxEiMAXqR08R7y1wyFXhwt92w-66pPwCnqArd9p5xQLavebauD8PgripOpkf7XPLwAjSzegDi1KFdcqWcwonUHEOQ5RUmeItEmO0js3H4RlHYHIavVeigjI&_formid=28owxbnm5f13nmk0&_tranid=d6188d77-7fd0-42bc-b3e5-841d126c9f8a&_moduleid=5u329pyn31m4a6wb&_action=new&_progid=00h2bcd3aki24ueo&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_selectMx_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22goodscode%22%3A%22%25%25%22%2C%22whid%22%3A%22K2CZ4S2KN5B%22%7D%7D';
    const tuihuourl=loginurl+'formservice?service=openDataSet&_pid=Utodol2uy-_LBt3PCZ3IwbFsIYKxX2lgPtT7ggI-wz24XhPeBxbrg2aoS409q-byZzUmXxfx0DRfVzysFHwNos9_2zqoT1peOrhf9_ht9LjDICjkrRvwxt2wWx7LIjJRhouJyzuWZzDsVKNriGfOSrLmn52RWOEcYJlTVpQxc9c&_formid=28owxbnm5f13nmk0&_tranid=d2a36179-b653-47fd-bc24-c7ff7a341f7b&_moduleid=5u329pyn31m4a6wb&_action=new&_progid=00h2bcd3aki24ueo&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_selectMx_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22goodscode%22%3A%22%25%25%22%2C%22whid%22%3A%22K2UCZR3QGA1%22%7D%7D';
    const rukuurl=loginurl+'formservice?service=openDataSet&_pid=SYq40cwS4oqKKCESy6NGAIqO7nMk88IlkeXCOGuABbNTvuPNfhcpvS0yvZmRavn9oDq0ANl2l2_xXxZr6hNfaZPH_uuMK9YfmpGZXRbtnB-XcsV9eWaKFNID8t7jZbS0bkZee9eQZWMQFKVHLndIxSPc6CthvqgdmPAcOz9C1Vc&_formid=3d54uuwfatpvdj7m&_tranid=4e6b660b-b3a9-4551-9985-9799364ab190&_moduleid=6iloe4dsbjg1q6az&_action=new&_progid=4i6wsbxm6z4mk8ps&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_djmx_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A500%2C%22variables%22%3A%7B%22EndDate%22%3A%222021-10-19%22%2C%22StartDate%22%3A%222021-10-01%22%2C%22billcode%22%3A%22%25%22%2C%22caozy%22%3A%22%22%2C%22deptid%22%3A%22%22%2C%22goodsid%22%3A%22%22%2C%22orgid%22%3A%22%22%2C%22staffid%22%3A%22%22%7D%7D';
    const xiaoqiurl=loginurl+'formservice?service=openDataSet&_pid=Utodol2uy-_LBt3PCZ3IwbFsIYKxX2lgPtT7ggI-wz24XhPeBxbrg2aoS409q-byZzUmXxfx0DRfVzysFHwNos9_2zqoT1peOrhf9_ht9LjDICjkrRvwxt2wWx7LIjJRhouJyzuWZzDsVKNriGfOSrLmn52RWOEcYJlTVpQxc9c&_formid=28owxbnm5f13nmk0&_tranid=d2a36179-b653-47fd-bc24-c7ff7a341f7b&_moduleid=5u329pyn31m4a6wb&_action=new&_progid=00h2bcd3aki24ueo&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_selectMx_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22goodscode%22%3A%22%25%25%22%2C%22whid%22%3A%22'+ whid +'%22%7D%7D';
    const ziliaourl=loginurl+'formservice?service=openDataSet&_pid=UCVXrxXQ3k0to5wfAst4A74ZTW142Q0QG7kMaVWWDFpcUYxTJ28EUDe0QyQj8xVVGfZABh_Vw9b0VXmoAkz6NIMduldI2nGw6pvVvqutwTyk06qT6YDELpPSAmlpO21G2NIncIY0vtRNrrAYplnmTfUiK-mZIQGwugZZ_w-IJJg&_formid=665sc1dcb4aex8at&_tranid=cfee7d80-5ae9-4ea7-add7-917a27932361&_moduleid=2k7rp7e252ww5bkn&_action=new&_progid=4vfiptyrchm7z1vp&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_sel_goods%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A500%2C%22variables%22%3A%7B%22con%22%3A%22%25%22%2C%22conall%22%3A%22%25%25%22%2C%22treecode%22%3A%22%25%25%22%7D%7D';
    const bibeiurl=loginurl+'formservice?service=openDataSet&_pid=UCVXrxXQ3k0to5wfAst4A74ZTW142Q0QG7kMaVWWDFpcUYxTJ28EUDe0QyQj8xVVGfZABh_Vw9b0VXmoAkz6NIMduldI2nGw6pvVvqutwTyk06qT6YDELpPSAmlpO21G2NIncIY0vtRNrrAYplnmTfUiK-mZIQGwugZZ_w-IJJg&_formid=4d1ikk8xcrzqo6xp&_tranid=4b5fb7c9-993a-4aa6-b08b-e99aeb42c0c8&_moduleid=6iloe4dsbjg1q6az&_action=new&_progid=047e88zmc2cayuxp&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_querymx_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22orgid%22%3A%22'+ org +'%22%7D%7D';
    const hexinurl=loginurl+'formservice?service=openDataSet&_pid=UCVXrxXQ3k0to5wfAst4A74ZTW142Q0QG7kMaVWWDFpcUYxTJ28EUDe0QyQj8xVVGfZABh_Vw9b0VXmoAkz6NIMduldI2nGw6pvVvqutwTyk06qT6YDELpPSAmlpO21G2NIncIY0vtRNrrAYplnmTfUiK-mZIQGwugZZ_w-IJJg&_formid=1o2ghavs3anhaof1&_tranid=dc845741-e12f-4a86-af59-c45895f2fac2&_moduleid=6iloe4dsbjg1q6az&_action=new&_progid=58mkcmlf5hkk7125&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_querymx_sql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A-1%2C%22variables%22%3A%7B%22orgid%22%3A%22'+ org +'%22%7D%7D';
    const jiageurl=loginurl+'formservice?service=openDataSet&_pid=Fo9e_Wy4aEaybIPWl9KHBKoLnfnnNltB0_9t36KKEsgQ_joAxEX1kkJGiRLwAN8HE6c0All5-PYa6-Qpn1AIB2KGVH5Wo3n98XENbUJ_RJeM8yq7dArmVjYPU2KWKAvBrPRo24H2v5Qlv79uvyQeXPhCenzxZEQ8IhDZz-LNNQ8&_formid=3zg5jk2y89y8on5b&_tranid=5d402b03-59cf-4f4b-b758-a1fc6d31aa8b&_moduleid=2k7rp7e252ww5bkn&_action=new&_progid=a48pj6nm9r84kayv&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_zysql%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A10000%2C%22variables%22%3A%7B%22brandname%22%3A%22%22%2C%22businessid%22%3A%22%22%2C%22classid%22%3A%22%22%2C%22dates%22%3A%222021-11-13%22%2C%22enddate%22%3A%222021-11-13%22%2C%22goodsid%22%3A%22%22%2C%22isdongp%22%3A%22N%22%2C%22locatcode%22%3A%22%25%22%2C%22orgid%22%3A%22O2CEEM27IL1%22%2C%22startdate%22%3A%222021-11-01%22%2C%22whid%22%3A%22%22%7D%7D';
    const allurl=loginurl+'formservice?service=openDataSet&_pid=ymZwp-qD4Hv0Zw4CHks-U-pZqCzLp4vA1R12rOpl1-tNlKpUWUYi7Z5MAlnhpohI_0tlQ-KDiJX-xlpTFMgBOKB36LpwcY7KEjICqS1c_QKr6SyMjzYx36Kx0fSoBpiBN0yLqhGONrzCtV6V9ctDgllL58d6g_hqDgvHL4-moZM&_formid=1rr5nw258wekx31j&_tranid=e4af3955-fa79-485b-995c-f6732f66a832&_moduleid=2k7rp7e252ww5bkn&_action=new&_progid=2joosf0w7sxyp8kn&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22sel_goods_batch%22%2C%22pageno%22%3A{no}%2C%22pagesize%22%3A10000%2C%22variables%22%3A%7B%22businessid%22%3A%22%22%2C%22classid%22%3A%22%22%2C%22contactid%22%3A%22%22%2C%22goodsid%22%3A%22%22%2C%22isfsp%22%3A%22N%22%2C%22iskc%22%3A%22N%22%2C%22jgcl%22%3A%22%22%2C%22k_isfml%22%3A%22N%22%2C%22k_jysx%22%3A%22%22%2C%22k_wllb%22%3A%22%22%2C%22orgid%22%3A%22{org}%22%7D%7D';
    const barurl='http://www.t-x-m.com/barcode.asp?bc1={code}&bc2=10&bc3=3.5&bc4=1&bc9=1&bc5=11&bc6=11&bc7=Arial&bc8=15';
    const zhixiaourl=loginurl+'formservice?service=openDataSet&_pid=knx-PHI3nvnbgT4a-aaPzfEoFm7sKIeron3rdBnx3Ebb_Mybdr45Sq1LN8GdPw5FWbM4BZnfy5D7VASzI1K6FsUcC6f4XLI0b9OjCBO0w1dCpaXnaPOjTuxg_AFJwb3sXcclMwcR34ik9LW7HUcAXqOLMPa3zXFEYbgn4WD-We4&_formid=02uaoqev8kpkxo7h&_tranid=5d69a518-0a30-4655-89bd-77a9910d0b7a&_moduleid=2k7rp7e252ww5bkn&_action=new&_progid=38rhz4ca6pmlkoul&content=%7B%22openmode%22%3A%22sql%22%2C%22openparam%22%3A%22uf_query%22%2C%22pageno%22%3A1%2C%22pagesize%22%3A5000%2C%22variables%22%3A%7B%22days%22%3A%22270%22%2C%22dbtype%22%3A%22Microsoft%20SQL%20Server%22%2C%22goodsid%22%3A%22%22%2C%22whid%22%3A%22K36AZ7A6TF1%22%7D%7D';
    //http://www.free-barcode.com/cn/barcode.asp

    // $('html').empty()
    // $('html').append("<head></head><body></body>")
    $('head').empty()
    $('body').empty()
    $('head').append("<style type='text/css'>.trclass:hover { background: #bbb !important; }.trclass:hover td { background: transparent; }.loading {position: fixed;top: 0;bottom: 0;right: 0;left: 0;background-color: black;opacity: 0.4;z-index: 1000;}.loading .gif {height: 100%;width: 100%;background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.soogif.com%2FE2PgO6pYLmRo9RdtfBvIArODLByhfJjU.gif&refer=http%3A%2F%2Fimg.soogif.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg') no-repeat center 0;position: fixed;top: 40%;z-index: 1001;}</style>");
    $('body').append('<div class="loading hide"><div class="gif"></div></div>');
    $('div.loading').hide();
    $('head').append('<style type="text/css">button{margin:5px;}table{border-collapse: collapse;margin: 0 auto;margin-right:20px;margin-top:20px;text-align: center;}table td, table th{border: 1px solid #cad9ea;color: #666;height: 25px;}table thead th{background-color: #CCE8EB;width: 100px;}table tr:nth-child(odd){background: #fff;}table tr:nth-child(even){background: #F5FAFA;}</style>');
    // $('#locator').before('<button id="button1" class="btn">贵重</button><select style="display:none;margin-top:7px;"></select><button id="button6" class="btn">缺货</button><input type="date" id="date1"><button id="button3" class="btn">处方</button><button id="button4" class="btn">登记</button><button id="button7" class="btn" style="float:right">调价</button><button id="button11" class="btn" style="float:right">滞销</button><textarea rows="10" cols="20" style="display:none;float:right"></textarea><button id="button5" class="btn" style="float:right">查信息</button><button id="button9" class="btn" style="float:right">贵重录入</button><button id="button10" class="btn" style="float:right">医保核对</button><div><table id="table1" style="display:inline"></table><table id="table3" style="display:inline"></table></div><div style="margin-top:30px;"><table id="table2" style="display:inline;"></table></div><div style="margin-top:50px;"><table id="table4" style="display:inline;"></table></div><div style="margin-top:50px;"><table id="table5" style="display:inline;"></table></div>');
    $('body').append('<button id="button1" class="btn">贵重</button><select style="display:none;margin-top:7px;"></select><button id="button6" class="btn">缺货</button><input type="date" id="date1"><button id="button3" class="btn">处方</button><button id="button4" class="btn">登记</button><button id="button7" class="btn" style="float:right">调价</button><button id="button11" class="btn" style="float:right">滞销</button><textarea rows="10" cols="20" style="display:none;float:right"></textarea><button id="button5" class="btn" style="float:right">查信息</button><button id="button9" class="btn" style="float:right">贵重录入</button><button id="button10" class="btn" style="float:right">医保核对</button><div><table id="table1" style="display:inline"></table><table id="table3" style="display:inline"></table></div><div style="margin-top:30px;"><table id="table2" style="display:inline;"></table></div><div style="margin-top:50px;"><table id="table4" style="display:inline;"></table></div><div style="margin-top:50px;"><table id="table5" style="display:inline;"></table></div>');

    $('#date1').val(formatDate(new Date()));
    // $('#locator').hide();
    // $('#foo').hide();

    function formatDate(d) {
        var month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
    function addDate(date, days) {
        if (days == undefined || days == '') {
            days = 1;
        }
        var date1 = new Date(date);
        date1.setDate(date1.getDate() + days);
        return formatDate(date1);
    }
    function xml2json(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
                for (var i = 0; i < xml.children.length; i++) {
                    var item = xml.children.item(i);
                    var nodeName = item.nodeName;
                    if (typeof(obj[nodeName]) == "undefined") {
                        obj[nodeName] = xml2json(item);
                    } else {
                        if (typeof(obj[nodeName].push) == "undefined") {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(xml2json(item));
                    }
                }
            } else {
                obj = xml.textContent;
            }
            return obj;
        } catch (e) {
            console.log(e.message);
        }
    }
    function x2j(xml){
        var datas =xml2json(xml).root.data.tr;
        if(datas&&datas.td) datas=[datas];
        return datas;
    }
    function addTableRows(tb,rows,etr){
        var tables = $(tb);
        var ele="<tr class='trclass'>";
        $.each(rows,function(i,row){
            ele+=("<td> " + row + "</td>");
        });
        ele+="</tr>";
        var tr=$(ele);
        if(etr)
            etr.before(tr);
        else
            tr.appendTo(tables);
        return tr;
    }

    function getAjax(url,datas){
        datas=datas?datas:{};
        return new Promise(resolve => {
            $.ajax({
                url: url,
                type:datas.type?datas.type:'GET',
                dataType: datas.dataType?datas.dataType:'xml',
                data:datas.data?datas.data:{},
                //             crossDomain:true, //设置跨域为true
                // xhrFields: {
                //     withCredentials: true //默认情况下，标准的跨域请求是不会发送cookie的
                // },
                contentType:datas.contentType?datas.contentType:"text/xml;charset=utf-8",
                success: function(data){
                    datas.fc?resolve(datas.fc(data)):resolve(data);
                },
                error: function(){
                    resolve('error');
                }
            });
        });
    }

    const check = async () => {
        //     var dateDiff =Math.floor((end.getTime()-start.getTime())/1000);
        var datas=xml2json(await getAjax(checkurl));
        if(datas.errmsg){
            if(datas&&datas.errmsg=="当前用户没有登录"){
                location.href=loginurl;
                return 'login';
            }
            datas=xml2json(await getAjax(location.href));
            if(datas&&datas.html.head.title=='登录'){
                location.href=loginurl;
                return 'login';
            }
        }
    }

    const getdatas = async () => {

        var storage=Object.keys(localStorage).sort().reverse().filter((x, index,self)=> index>30).forEach(item=> localStorage.removeItem(item));

        var today=formatDate(new Date());
        var infos=JSON.parse(localStorage.getItem(today));
        if(infos){
            console.log(infos);
        }else{
            var datas=xml2json(await getAjax(orderurl)).root.data.tr;
            var data2=xml2json(await getAjax(modifyurl)).root;
            if(data2) data2=data2.data.tr;
            if(data2&&data2.td) data2=[data2];
            localStorage.setItem(today,JSON.stringify({data1:datas,data2:data2}));
            infos=JSON.parse(localStorage.getItem(today));
            console.log(infos);
        }
    }

    const getadjust = async () => {
        var today=formatDate(new Date());
        var infos=JSON.parse(localStorage.getItem(today));
        if(infos){
            var modify=xml2json(await getAjax(modifyurl)).root;
            if(modify) modify=modify.data.tr;
            if(modify&&modify.td) modify=[modify];
            if(!infos.data2&&modify||modify&&Object.entries(modify).toString() != Object.entries(infos.data2).toString()){
                infos.data2=modify;
                localStorage.setItem(today,JSON.stringify(infos));
            }
        }
    }

    const setup = async () => {
        var config='9999-99-99';
        var infos=JSON.parse(localStorage.getItem(config));
        if(!infos) {
            infos={};
            localStorage.setItem(config,JSON.stringify(infos));
        }
        if(infos.last&&(new Date(infos.last)).getMonth()==(new Date()).getMonth()) return;
        var page=1,goods=[],datas=xml2json(await getAjax(allurl.replace(/{no}/g,page).replace(/{org}/g,org))).root.data.tr;
        while(datas){
            page++;
            if(datas.td) datas=[datas];
            goods=goods.concat(datas);
            datas=xml2json(await getAjax(allurl.replace(/{no}/g,page).replace(/{org}/g,org))).root.data.tr;
        }
        page=1;
        datas=xml2json(await getAjax(allurl.replace(/{no}/g,page).replace(/{org}/g,'O2CEEM27IL1'))).root.data.tr;
        while(datas){
            page++;
            if(datas.td) datas=[datas];
            goods=goods.concat(datas);
            datas=xml2json(await getAjax(allurl.replace(/{no}/g,page).replace(/{org}/g,'O2CEEM27IL1'))).root.data.tr;
        }
        //             0goodscode:1goodsname:2goodsspec:3manufacturer:4BarCode:5GoodsId:6LastPurP:7lshj:8IsPres:9is_mhj:10isdj:
        goods=goods.filter((x, index,self)=> {return self.findIndex(it=> {return it.td[0] == x.td[0]})==index})
            .map((item,index) => [item.td[0],item.td[1],item.td[2],item.td[3],item.td[20],item.td[14],item.td[75],item.td[108],item.td[174],item.td[239],item.td[254]]);
        infos.goods=goods;
        infos.last=formatDate(new Date());
        localStorage.setItem(config,JSON.stringify(infos));
    }

    const show = async () =>{
        var fns=[];
        var codes=JSON.parse(localStorage.getItem('9999-99-99')).guizhong;
        for(const code of codes){
            fns.push((async () => {
                var row=addTableRows("#table1",[code,'','']);
                var sum=0;
                var data=xml2json(await getAjax(stockurl.replace(/{code}/g,code))).root.data.tr;
                if(data&&data.td){
                    row.find('td:eq(1)')[0].innerHTML=data.td[1];
                    row.find('td:eq(2)')[0].innerHTML=parseInt(data.td[28]);
                } else if(data&&data.length>0){
                    $.each(data,function(i,tr){
                        sum+=parseInt(tr.td[28]);
                    });
                    row.find('td:eq(1)')[0].innerHTML=data[0].td[1];
                    row.find('td:eq(2)')[0].innerHTML=sum;
                } else {
                    row.find('td:eq(1)')[0].innerHTML='无库存';
                    row.find('td:eq(2)')[0].innerHTML=0;
                }
            })());
        }
        await Promise.all(fns);
    }

    const show2 = async () =>{
        // addTableRows("#table1",['编号','姓名','时间','四类药','数量']);
        var etr=addTableRows("#table1",['编号','姓名','时间','药品名','规格','数量']);
        // addTableRows("#table3",['---','','感冒药核对', '---']);
        var date=$('#date1').val(),datas=[],count=0,count1=0;
        var reservation=`${date} - ${date}`;
        var sale=xml2json(await getAjax(saleurl.replace(/{enddate}/g,$('#date1').val()).replace(/{startdate}/g,$('#date1').val()))).root.data.tr,sale2;
        if(sale&&sale.td) sale=[sale];
        if(sale) datas=datas.concat(sale);
        if(date==formatDate(new Date())) sale2=xml2json(await getAjax(sale2url.replace(/{date}/g,$('#date1').val()))).root.data.tr;
        if(sale2&&sale2.td) sale2=[sale2];
        if(sale2) datas=datas.concat(sale2);
        var fns=[];
        var goods=JSON.parse(localStorage.getItem('9999-99-99')).goods;
        //             0goodscode:1goodsname:2goodsspec:3manufacturer:4BarCode:5GoodsId:6LastPurP:7lshj:8IsPres:9is_mhj:10isdj:
        if(datas) datas=datas.reverse();
        for(const data of datas){
            if (data.td[12][0]!='1'&&data.td[12][0]!='2'&&data.td[12][0]!='5') continue;
            var good= goods.find((x, index,self)=> x[0]==data.td[12]);
            if(五类编码.find((x, index,self)=> {return data.td[13].indexOf(x)>-1})||(good&&(good[9]=='Y'||good[10]=='Y'))) {
                count+=parseInt(data.td[4]);
                // addTableRows("#table1",[data.td[12],data.td[25],data.td[7],data.td[13],data.td[4]]);
            }
            if(good){
                //                 if(good[9]=='Y'||good[10]=='Y'||五类编码.includes(data.td[12])) {
                //                     count+=parseInt(data.td[4]);
                //                     addTableRows("#table1",[data.td[12],data.td[25],data.td[7],data.td[13],data.td[4]]);
                //                 };
                if(good[8]=='Y') addTableRows("#table1",[data.td[12],data.td[25],data.td[7],data.td[13],data.td[14],data.td[4]]);
                continue;
            }
            fns.push((async () => {
                // var row=addTableRows("#table1",[data.td[12],'','','','']);
                var row1=addTableRows("#table1",[data.td[12],'','','','']);
                var data1=xml2json(await getAjax(allstockurl.replace(/{code}/g,data.td[11]))).root.data.tr;
                if(data1&&data1.length>1) data1=data1[0];
                if(!data1||!data1.td) return;
                if(data1.td[174]!='Y') row1.remove();
                // if (data1.td[237]!='Y'&&data1.td[252]!='Y'&&!五类编码.includes(data1.td[0])) row.remove();
                if(data1.td[237]=='Y'||data1.td[252]=='Y'||五类编码.includes(data1.td[0])){
                    //                         addTableRows("#table1",[data.td[12],data.td[25],data.td[7],data.td[13],data.td[4]],etr);
                    // row.find('td:eq(1)')[0].innerHTML=data.td[25];
                    // row.find('td:eq(2)')[0].innerHTML=data.td[7];
                    // row.find('td:eq(3)')[0].innerHTML=data.td[13];
                    // row.find('td:eq(4)')[0].innerHTML=data.td[4];
                    // count+=parseInt(data.td[4]);
                }
                if(data1.td[174]=='Y'){
                    row1.find('td:eq(1)')[0].innerHTML=data.td[25];
                    row1.find('td:eq(2)')[0].innerHTML=data.td[7];
                    row1.find('td:eq(3)')[0].innerHTML=data.td[13];
                    row1.find('td:eq(4)')[0].innerHTML=data.td[4];
                }

            })());
        }
        await Promise.all(fns);
        // getAjax(fangyiurl,{data:{draw: 2,start: 0,length: 100,columns: '',order: '',cmd: 'refresh',sortColumn: '',sort: 'asc',reservation: reservation,storeId: 112208},contentType:'application/x-www-form-urlencoded',dataType: "json",type:'POST',}).then(list => {
        //     $.each(list.data.reverse(),function(i,info){
        //         addTableRows("#table3",[info.name,(new Date(info.buyTime)).toLocaleTimeString(),info.drugName, info.drugNum]);
        //         count1+=parseInt(info.drugNum);
        //     });
        //     addTableRows("#table3",['总计','','',count1]);
        // });
        // getAjax(fangyi1url,{data:{"total":0,"pageNum":1,"pageSize":15,"pageSizes":[15,30,500,1000,5000,10000],"crteTimeArr":["2022-05-18T00:00:00.000","2022-05-19T00:00:00.000"]},contentType:'application/x-www-form-urlencoded',dataType: "json",type:'POST',}).then(list => {
        //     $.each(list.data.reverse(),function(i,info){
        //         addTableRows("#table3",[info.name,(new Date(info.buyTime)).toLocaleTimeString(),info.drugName, info.drugNum]);
        //         count1+=parseInt(info.drugNum);
        //     });
        //     addTableRows("#table3",['总计','','',count1]);
        // });
        // addTableRows("#table1",['总计','','','',count]);
    }


    const show3 = async () =>{
        var date=$('#date1').val(),datas=[];;
        var sale=xml2json(await getAjax(saleurl.replace(/{enddate}/g,$('#date1').val()).replace(/{startdate}/g,$('#date1').val()))).root.data.tr,sale2;
        if(sale&&sale.td) sale=[sale];
        if(sale) datas=datas.concat(sale);
        if(date==formatDate(new Date())) sale2=xml2json(await getAjax(sale2url.replace(/{date}/g,$('#date1').val()))).root.data.tr;
        if(sale2&&sale2.td) sale2=[sale2];
        if(sale2) datas=datas.concat(sale2);
        datas=datas.filter((x, index,self) => {return self.findIndex(it=> {return it.td[12]==x.td[12]})==index});
        var fns=[];
        var goods=JSON.parse(localStorage.getItem('9999-99-99')).goods;
        for(const data of datas){
            if (data.td[12][0]!='1') continue;
            var good= goods.find((x, index,self)=> x[0]==data.td[12]);
            if(good){
                if(good[8]!='Y'&&good[9]!='Y'&&good[10]!='Y'&&!五类编码.includes(data.td[12])) addTableRows("#table1",[data.td[12],data.td[7],data.td[25]?data.td[25]:getRandomName(),data.td[13],data.td[14],data.td[4],data.td[20],data.td[22]]);
                continue;
            }
            fns.push((async () => {
                var row=addTableRows("#table1",[data.td[12],'','','','','','','']);
                var data1=xml2json(await getAjax(allstockurl.replace(/{code}/g,data.td[11]))).root.data.tr;
                if(data1&&data1.length>1) data1=data1[0];
                if(data1&&data1.td&&data1.td[174]!='Y'&&data1.td[237]!='Y'&&data1.td[252]!='Y'&&!五类编码.includes(data.td[12])){
                    row.find('td:eq(1)')[0].innerHTML=data.td[7];
                    row.find('td:eq(2)')[0].innerHTML=data.td[25]?data.td[25]:getRandomName();
                    row.find('td:eq(3)')[0].innerHTML=data.td[13];
                    row.find('td:eq(4)')[0].innerHTML=data.td[14];
                    row.find('td:eq(5)')[0].innerHTML=data.td[4];
                    row.find('td:eq(6)')[0].innerHTML=data.td[20];
                    row.find('td:eq(7)')[0].innerHTML=data.td[22];
                } else {
                    row.remove();
                }
            })());
        }
        await Promise.all(fns);
    }

    const show4 = async () =>{
        var list;
        if($('textarea').is(":hidden")){
            $('textarea').show();
            return;
        }else{
            list=$('textarea')[0].value.split('\n').filter(function(value,index,arr){return value.trim();});
            $('textarea').hide();
        }
        var fns=[];
        //         var shop=xml2json(await getAjax(shopstockurl)).root.data.tr;
        var shop=xml2json(await getAjax(xiaoqiurl)).root.data.tr;
        var goods=JSON.parse(localStorage.getItem('9999-99-99')).goods;

        if(list.length==0) list=五类编码.filter((x, index,self) => {return self.findIndex(it=> {return it==x})==index});

        $.each(list,function(n,query){
            var info= goods.find((x, index,self)=> x[0]==query||x[4]==query);
            var datas=shop.filter((x, index,self) => {return self.findIndex(it=> {return query==it.td[0]||(it.td[1].indexOf(query)>-1&&it.td[0] == x.td[0])||((info&&info[0]==it.td[0])&&it.td[0] == x.td[0])})==index});
            // var codes=shop.filter((it, index,self) =>query==it.td[0]||it.td[1].indexOf(query)>-1||(info&&info[0]==it.td[0]));
            var img=list.length<4&&info?`<img style="margin: auto;" src="http://www.t-x-m.com/barcode.asp?bc1=${info[4]}&bc2=10&bc3=3.5&bc4=0.6&bc5=1&bc6=1&bc7=Arial&bc8=15&bc9=1">`:'';
            if(datas.length==0 &&info) addTableRows("#table1",[n+1,query,info[1],info[2],info[3],'',img]);
            else if(datas.length==0 &&!info) addTableRows("#table1",[n+1,query,'','','','','']);
            $.each(datas,function(i,data){
                // var row=addTableRows("#table1",[n+1,data.td[0],data.td[1],data.td[2],data.td[3],shop.filter((it, index,self) =>data.td[0]==it.td[0]).map((it,index) => `[${it.td[5]}:${it.td[7]}:${it.td[10]}]`),img]);
                $.each(shop.filter((it, index,self) =>data.td[0]==it.td[0]),function(j,it){
                    addTableRows("#table1",[n+1,data.td[0],data.td[1],data.td[2],data.td[3],it.td[5],it.td[7],it.td[10],img]);
                });
                // if(五类编码.find((x, index,self)=> {return data.td[1].indexOf(x)>-1})) row.css('background','#ffec8b');
            });
        });
    }

    const show8 = async () =>{
        var zhixiao=xml2json(await getAjax(zhixiaourl)).root.data.tr;
        var shop=xml2json(await getAjax(xiaoqiurl)).root.data.tr;
        var goods=JSON.parse(localStorage.getItem('9999-99-99')).goods;
        var k=1;
        $.each(shop.sort((a, b) =>{return a.td[7]>b.td[7]?1:-1}),function(i,it){
            var info= zhixiao.find((x, index,self)=> it.td[0]==x.td[0]);
            if((info&&addDate(new Date(it.td[7]), -540)<formatDate(new Date()))||addDate(new Date(it.td[7]), -365)<formatDate(new Date())){
                addTableRows("#table1",[k,it.td[0],it.td[1],it.td[2],it.td[3],it.td[5],it.td[7],it.td[10]]);
                k++;
            }
        });
        // $.each(zhixiao,function(j,it){
        //     // addTableRows("#table1",[it.td[0],it.td[1],it.td[2],it.td[6]]);
        //     addTableRows("#table1",[it.td[0]]);
        // });
    }

    const set1 = async () =>{
        var list='';
        var infos=JSON.parse(localStorage.getItem('9999-99-99'));
        if($('textarea').is(":hidden")){
            if(!infos.guizhong) {
                infos.guizhong=[];
            }
            $('textarea').show();
            $.each(infos.guizhong,function(i,data){
                list+=data+'\n';
            });
            $('textarea').val(list);
        }else{
            infos.guizhong=$('textarea')[0].value.split('\n').filter(function(value,index,arr){return value.trim();});
            localStorage.setItem('9999-99-99',JSON.stringify(infos));
            $('textarea').hide();
        }
    }

    const show7 = async () =>{
        if($('textarea').is(":hidden")){
            $('textarea').show();
            return;
        }else{
            $('textarea').hide();
        }
        var list=$('textarea')[0].value.split('\n').filter(function(value,index,arr){return value.trim();});
        var goods=xml2json(await getAjax(allurl.replace(/{no}/g,1).replace(/{org}/g,org))).root.data.tr;
        debugger;
        goods=goods.map((item,index) => [item.td[0],item.td[1],item.td[20],item.td[106],item.td[5]]);
        addTableRows("#table1",['NO','编号','名称','售价','条码','库存']);
        if(list.length==0){
            $.each(goods,function(i,g){
                if(parseFloat(g[4])>0 && !g[2]){
                    addTableRows("#table1",['',g[0],g[1],g[3],g[2],g[4]]);
                }
            });
            return;
        }
        var codelist='',pricelist='',code,price;
        $.each(list,function(i,data){
            var good=data.split(',');
            var g=goods.find((x, index,self)=> {return good[0]==x[0]});
            code=good[2];
            price=good[1];
            if(g){
                if(g[2]!=good[2]||parseFloat(g[3])!=parseFloat(good[1])){
                    addTableRows("#table1",[i+2,g[0],g[1],parseFloat(g[3])!=parseFloat(good[1])?`<font color="#FF0000">${g[3]}</font>`:g[3],g[2]!=good[2]?`<font color="#FF0000">${g[2]}</font>`:g[2],g[4]]);
                    parseFloat(g[3])!=parseFloat(good[1])?price=g[3]:true;
                    g[2]!=good[2]?code=g[2]:true;
                }
            }
            codelist+=code +'\n';
            pricelist+=price +'\n';
        });
        console.log(codelist);
        console.log(pricelist);
        $.each(goods,function(i,g){
            var good=list.find((x, index,self)=> {return g[0]==x.split(',')[0]});
            if(!good && parseFloat(g[4])>0 && g[0][0]<6 && g[0][0]!=4){
                addTableRows("#table1",['',g[0],g[1],g[3],g[2],g[4]]);
            }
        });
    }

    const show5 = async () =>{
        var data,datas,list,list1=[],list2=[],qinghuo2=[],before,xiaoqi,jia,tui,startdate,enddate=formatDate(new Date());
        //         if($('select').is(":hidden")){
        //             $("select").empty();
        //             $("select").append(`<option value=1>三月销售</option>`);
        //             data=xml2json(await getAjax(guazhanglisturl)).root.data.tr;
        //             if(data&&data.td) data=[data];
        //             if(data&&data.length>0){
        //                 $.each(data,function(i,tr){
        //                     $("select").append(`<option value=${tr.td[2]}>${tr.td[1]}</option>`);
        //                 });
        //             }
        //             $('select').show();
        //         } else {
        //             $('select').hide();
        //             let jiage = getAjax(jiageurl);
        let qinghuo=x2j(await getAjax(qinghuourl.replace(/{enddate}/g,enddate).replace(/{startdate}/g,addDate(new Date(), -15))));
        qinghuo=qinghuo?qinghuo.reverse():{};
        let zongbu = getAjax(zongbuurl);
        let tuihuo = getAjax(tuihuourl);
        let sale=getAjax(saleurl.replace(/{enddate}/g,enddate).replace(/{startdate}/g,addDate(new Date(), -15)));
        let sale2=getAjax(sale2url.replace(/{date}/g,formatDate(new Date())));
        let diaobo=getAjax(diaobo2url.replace(/{enddate}/g,enddate).replace(/{startdate}/g,addDate(new Date(), -7)));
        let shop=getAjax(shopstockurl);
        let bibei = getAjax(bibeiurl);
        let hexin = getAjax(hexinurl);

        let order;
        //             if($('select').val()==1) order = getAjax(orderurl);
        //             else order = getAjax(guazhangurl.replace(/{value}/g,$('select').val()),{dataType: "text"});
        order = getAjax(orderurl);
        if(qinghuo.length){
            for(const item of qinghuo){
                data=xml2json(await getAjax(qinghuo2url.replace(/{no}/g,item.td[0]))).root.data.tr;
                if(data&&data.td) data=[data];
                qinghuo2=qinghuo2.concat(data);
                if(qinghuo2.length>20&&!startdate) startdate=formatDate(new Date(item.td[2]));
            }
        }

        sale=x2j(await sale);
        sale2=x2j(await sale2);
        diaobo=x2j(await diaobo);
        shop=x2j(await shop);
        zongbu=x2j(await zongbu);
        tuihuo=x2j(await tuihuo);
        bibei=x2j(await bibei);
        hexin=x2j(await hexin);
        //             jiage=xml2json(await jiage).root.data.tr.sort((a, b) =>{return a.td[12]>b.td[12]?-1:1});
        //             if($('select').val()==1){
        order=x2j(await order).map((item,index) => [item.td[8],item.td[9],item.td[10],item.td[18],item.td[12],item.td[19],item.td[25]]);
        //             } else {
        //                 order=await order;
        //                 order=xml2json($.parseXML('<root>'+order.substring(order.indexOf('<tr sid='),order.indexOf('ds_djhz')-3).replace(/\\/g, "")+'</root>')).root.tr.map((item,index) => [item.td[5],item.td[6],item.td[7],item.td[12],item.td[21],item.td[13],item.td[14]]);
        //             }
        if(sale&&sale.td) sale=[sale];
        if(sale2&&sale2.td) sale2=[sale2];
        if(sale2) list1=list1.concat(sale2.reverse().filter((x, index,self)=> {return self.findIndex(it=> {return it.td[5] == x.td[5]&&it.td[12] == x.td[12]})==index}).map((item,index) => {return [item.td[12],item.td[13],item.td[14],item.td[26],item.td[22],item.td[6]]}));
        if(sale) list1=list1.concat(sale.reverse().filter((x, index,self)=> {return self.findIndex(it=> {return it.td[5] == x.td[5]&&it.td[12] == x.td[12]})==index}).map((item,index) => {return [item.td[12],item.td[13],item.td[14],item.td[26],item.td[22],item.td[6]]}));
        if(diaobo&&diaobo.td) diaobo=[diaobo];
        if(diaobo) list1=list1.concat(diaobo.filter((x, index,self)=> {return self.findIndex(it=> {return it.td[9] == x.td[9]&&it.td[0] == x.td[0]})==index}).map((item,index) => {return [item.td[9],item.td[10],item.td[11],item.td[20]+'???',item.td[14],'']}));
        addTableRows("#table1",['NO','编号','名称','规格','成本/售价',"生产厂家",'门店库存','总部库存','总部效期：库存','状态']);
        var date=Object.keys(localStorage).sort().reverse().find((x, index,self)=> startdate>x);
        console.log(date);
        before=JSON.parse(localStorage.getItem(date));
        if(before) before=before.data1;
        else before=[];
        var goods=JSON.parse(localStorage.getItem('9999-99-99')).goods;
        $.each(order,function(i,item){
            xiaoqi= tuihuo?tuihuo.filter((x, index,self)=> x.td[0]==item[0]).map((it,index) => addDate(new Date(it.td[7]), -365)<formatDate(new Date())?`<font color="#FF0000">[退${it.td[7]}:${it.td[10]}]</font>`:`[退${it.td[7]}:${it.td[10]}]`).toString():'';
            xiaoqi+= zongbu.filter((x, index,self)=> x.td[0]==item[0]).map((it,index) => addDate(new Date(it.td[7]), -365)<formatDate(new Date())?`<font color="#FF0000">[${it.td[7]}:${it.td[10]}]</font>`:`[${it.td[7]}:${it.td[10]}]`).toString();
            var xz=before.findIndex(it=> it.td[8] == item[0])>-1?'':'(新增)';
            var qh=qinghuo2.filter(it=> it.td[11] == item[0]);
            qh=qh.length>0?`(请货${qh.length}次)`:'';
            var ck=list1.filter(it=> it[0] == item[0]);
            ck=ck.length>0?`(出库${ck.length}次)`:'';
            //                 jia= jiage.filter((x, index,self)=> x.td[15]==item[0]);
            //                 item[3]=jia.length>0?`${(jia[0].td[25]/jia.map(i=>i.td[0]).reduce((p,n)=>parseFloat(p)+parseFloat(n))).toFixed(2)}/${jia[0].td[30]}=${(jia[0].td[25]/jia.map(i=>i.td[0]).reduce((p,n)=>parseFloat(p)+parseFloat(n))/jia[0].td[30]).toFixed(2)}`:item[3];
            jia= goods.find((x, index,self)=> x[0]==item[0]);
            item[3]=jia?`${parseFloat(jia[6])}/${parseFloat(jia[7])}=${(parseFloat(jia[6])/parseFloat(jia[7])).toFixed(2)}`:item[3];
            var row=addTableRows("#table1",[i+1,item[0],item[1],item[2],item[3],item[4].replace(/(\u80a1\u4efd)|(\u6709\u9650)|(\u516c\u53f8)|(\u836f\u4e1a)|(\u5236\u836f)|(\u533b\u836f)|(\u96c6\u56e2)/g, "").substr(0,12),item[5],item[6],xiaoqi,(xz+qh+ck)||'未请']);
            row.css('background',xz?'#f08080':(qh+ck?'#ffec8b':'#dcdcdc'));
        });
        addTableRows("#table2",["商品编号","商品名称","商品规格","成本/售价","生产厂家",'最后销售','门店库存','总部效期：库存','状态']);
        list1=list1.map(item=>{
            var s=shop.find((it, index) => item[0]==it.td[0]),count=[];
            if(sale2) count=sale2.filter(it=> it.td[12] == item[0]).map(i=>i.td[4]);
            count.length>0?count=count.reduce((p,n)=>parseInt(p)+parseInt(n)):count=0;
            item.push(s?s.td[4]-count||0:0);
            item.push((tuihuo?tuihuo.filter((x, index,self)=> x.td[0]==item[0]).map((it,index) => addDate(new Date(it.td[7]), -365)<formatDate(new Date())?`<font color="#FF0000">[退${it.td[7]}:${it.td[10]}]</font>`:`[退${it.td[7]}:${it.td[10]}]`).toString():'')+zongbu.filter((x, index,self)=> x.td[0]==item[0]).map((it,index) => addDate(new Date(it.td[7]), -365)<formatDate(new Date())?`<font color="#FF0000">[${it.td[7]}:${it.td[10]}]</font>`:`[${it.td[7]}:${it.td[10]}]`).toString());
            var qh=qinghuo2.filter(it=> it.td[11] == item[0]);
            qh=qh.length>0?`(请货${qh.length}次)`:'';
            item.push(qh);
            //                 jia= jiage.filter((x, index,self)=> x.td[15]==item[0]);
            //                 item[3]=jia.length>0?`${(jia[0].td[25]/jia.map(i=>i.td[0]).reduce((p,n)=>parseFloat(p)+parseFloat(n))).toFixed(2)}/${jia[0].td[30]}=${(jia[0].td[25]/jia.map(i=>i.td[0]).reduce((p,n)=>parseFloat(p)+parseFloat(n))/jia[0].td[30]).toFixed(2)}`:item[3];
            jia= goods.find((x, index,self)=> x[0]==item[0]);
            item[3]=jia?`${parseFloat(jia[6])}/${parseFloat(jia[7])}=${(parseFloat(jia[6])/parseFloat(jia[7])).toFixed(2)}`:item[3];
            item[4]=item[4].replace(/(\u80a1\u4efd)|(\u6709\u9650)|(\u516c\u53f8)|(\u836f\u4e1a)|(\u5236\u836f)|(\u533b\u836f)|(\u96c6\u56e2)/g, "").substr(0,12);
            return item;
        }).filter((x, index,self)=> {
            var o=order.find((item, index) => x[0]==item[0]);
            return self.findIndex(it=> it[0] == x[0])==index && x[6]<4 &&!o;
        }).sort((a, b) =>{return a[6]-b[6]});
        list1.forEach(item=>{
            var row=addTableRows("#table2",item);
            item[8]?row.css('background','#ffec8b'):true;
        });
        addTableRows("#table4",['NO',"商品编号","商品名称","商品规格",'成本/售价',"生产厂家",'总部效期：库存']);
        bibei=bibei.concat(hexin).filter(item=> order.findIndex(it=> it[0] == item.td[2])<0);
        // bibei=bibei.concat(hexin).filter(item=> list1.findIndex(it=> it[0] == item.td[2])<0&&order.findIndex(it=> it[0] == item.td[2])<0);
        $.each(bibei,function(i,item){
            xiaoqi= tuihuo?tuihuo.filter((x, index,self)=> x.td[0]==item.td[2]).map((it,index) => addDate(new Date(it.td[7]), -365)<formatDate(new Date())?`<font color="#FF0000">[退${it.td[7]}:${it.td[10]}]</font>`:`[退${it.td[7]}:${it.td[10]}]`).toString():'';
            xiaoqi+= zongbu.filter((x, index,self)=> x.td[0]==item.td[2]).map((it,index) => addDate(new Date(it.td[7]), -365)<formatDate(new Date())?`<font color="#FF0000">[${it.td[7]}:${it.td[10]}]</font>`:`[${it.td[7]}:${it.td[10]}]`).toString();
            //                 jia= jiage.filter((x, index,self)=> x.td[15]==item.td[2]);
            //                 jia=jia.length>0?`${(jia[0].td[25]/jia.map(i=>i.td[0]).reduce((p,n)=>parseFloat(p)+parseFloat(n))).toFixed(2)}/${jia[0].td[30]}=${(jia[0].td[25]/jia.map(i=>i.td[0]).reduce((p,n)=>parseFloat(p)+parseFloat(n))/jia[0].td[30]).toFixed(2)}`:'';
            jia= goods.find((x, index,self)=> x[0]==item.td[2]);
            jia=jia?`${parseFloat(jia[6])}/${parseFloat(jia[7])}=${(parseFloat(jia[6])/parseFloat(jia[7])).toFixed(2)}`:'';
            var row=addTableRows("#table4",[i+1,item.td[2],item.td[3],item.td[4],jia,item.td[5].replace(/(\u80a1\u4efd)|(\u6709\u9650)|(\u516c\u53f8)|(\u836f\u4e1a)|(\u5236\u836f)|(\u533b\u836f)|(\u96c6\u56e2)/g, "").substr(0,12),xiaoqi]);
        });
        addTableRows("#table5",['NO',"商品编号","商品名称","商品规格",'成本/售价',"生产厂家",'店存','总部效期：库存']);
        $.each(zongbu.filter((x, index,self)=> self.findIndex(it=> it.td[0]==x.td[0])==index&&list1.findIndex(it=> it[0] == x.td[0])<0&&order.findIndex(it=> it[0] == x.td[0])<0&&bibei.findIndex(it=> it.td[2] == x.td[0])<0),function(i,item){
            // $.each(zongbu.filter((x, index,self)=> self.findIndex(it=> it.td[0]==x.td[0])==index&&shop.findIndex(it=> it.td[0] == x.td[0])<0&&list1.findIndex(it=> it[0] == x.td[0])<0&&order.findIndex(it=> it[0] == x.td[0])<0&&bibei.findIndex(it=> it.td[2] == x.td[0])<0),function(i,item){
            xiaoqi= tuihuo?tuihuo.filter((x, index,self)=> x.td[0]==item.td[0]).map((it,index) => addDate(new Date(it.td[7]), -365)<formatDate(new Date())?`<font color="#FF0000">[退${it.td[7]}:${it.td[10]}]</font>`:`[退${it.td[7]}:${it.td[10]}]`).toString():'';
            xiaoqi+= zongbu.filter((x, index,self)=> x.td[0]==item.td[0]).map((it,index) => addDate(new Date(it.td[7]), -365)<formatDate(new Date())?`<font color="#FF0000">[${it.td[7]}:${it.td[10]}]</font>`:`[${it.td[7]}:${it.td[10]}]`).toString();
            //                 jia= jiage.filter((x, index,self)=> x.td[15]==item.td[0]);
            //                 jia=jia.length>0?`${(jia[0].td[25]/jia.map(i=>i.td[0]).reduce((p,n)=>parseFloat(p)+parseFloat(n))).toFixed(2)}/${jia[0].td[30]}=${(jia[0].td[25]/jia.map(i=>i.td[0]).reduce((p,n)=>parseFloat(p)+parseFloat(n))/jia[0].td[30]).toFixed(2)}`:'';
            jia= goods.find((x, index,self)=> x[0]==item.td[0]);
            jia=jia?`${parseFloat(jia[6])}/${parseFloat(jia[7])}=${(parseFloat(jia[6])/parseFloat(jia[7])).toFixed(2)}`:'';
            var d=shop.find((it, index) => item.td[0]==it.td[0]);
            list2.push([item.td[0],item.td[1],item.td[2],jia,item.td[3].replace(/(\u80a1\u4efd)|(\u6709\u9650)|(\u516c\u53f8)|(\u836f\u4e1a)|(\u5236\u836f)|(\u533b\u836f)|(\u96c6\u56e2)/g, "").substr(0,12),d?d.td[4]:0,xiaoqi]);
        });
        list2.sort((a, b) =>{return a[5]-b[5]}).forEach((item,i)=>{
            addTableRows("#table5",[i+1,item[0],item[1],item[2],item[3],item[4],item[5],item[6]]);
        });
        // var test=shop.filter((x, index,self)=> zongbu.findIndex(it=> it.td[0] == x.td[0])<0);
        // debugger;
        //         }
    }

    const show6 = async () =>{
        addTableRows("#table1",["商品编号","商品名称","条码","商品规格","生产厂家","零售价","新零售价","日期","库存"]);
        var shop=xml2json(await getAjax(shopstockurl)).root.data.tr;
        //         var storage=Object.keys(localStorage).sort((a, b) => a[0]>b[0]?-1:1).forEach(item=>{
        var storage=Object.keys(localStorage).sort().reverse().forEach(item=>{
            var data2=JSON.parse(localStorage[item]).data2;
            if(data2){
                for(const data3 of data2){
                    var d=shop.find((it, index) =>data3.td[0]==it.td[0]);
                    addTableRows("#table1",[data3.td[0],data3.td[1],data3.td[2],data3.td[3],data3.td[4],data3.td[5],data3.td[6],data3.td[9],d?d.td[4]:0]);
                }
            }
        });
    }

    if(await check()=='login') return;
    getdatas();
    getadjust();
    setup();
    var int=setInterval(function(){
        getadjust();
    },25000*60);
    $('.btn').click(async (evt)=>{
        $('div.loading').show();
        await check();
        getadjust();
        $("table").empty("");
        switch(evt.currentTarget.id){
            case 'button1':
                // await show(贵重编码);
                await show();
                break;
            case 'button2':
                //                 await show(消杀编码);
                break;
            case 'button3':
                await show2();
                break;
            case 'button4':
                await show3();
                break;
            case 'button5':
                await show4();
                break;
            case 'button6':
                await show5();
                break;
            case 'button7':
                await show6();
                break;
            case 'button8':
                await setup();
                break;
            case 'button9':
                await set1();
                break;
            case 'button10':
                await show7();
                break;
            case 'button11':
                await show8();
                break;
        }
        $('div.loading').hide();
    });

    function getRandomName() {

        var firstNames = new Array(
            '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '蒋', '沈', '韩', '杨',
            '朱', '秦', '许', '何', '吕', '张', '孔', '曹', '严', '金', '魏', '陶', '姜', '戚',
            '谢', '邹', '柏', '窦', '章', '岳', '苏', '潘', '葛', '范', '彭', '郎', '鲁', '韦',
            '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '史', '唐', '费', '廉',
            '岑', '薛', '雷', '贺', '倪', '汤', '殷', '罗', '毕', '郝', '安', '常', '乐', '于',
            '皮', '齐', '康', '伍', '余', '元', '顾', '孟', '黄', '穆', '萧', '尹', '姚', '邵',
            '汪', '祁', '毛', '禹', '狄', '戴', '谈', '宋', '茅', '庞', '熊', '屈', '项', '祝',
            '董', '梁', '杜', '阮', '闽', '贾', '江', '童', '郭', '徐', '骆', '高', '夏', '蔡',
            '田', '樊', '胡', '凌', '霍', '万', '柯', '管', '卢', '莫', '裘', '丁', '邓', '包',
            '诸', '左', '石', '崔', '龚', '裴', '荣', '翁', '段', '侯', '全', '仲', '伊', '刘',
            '叶', '司', '黎', '乔', '冉', '习', '向', '古', '廖', '耿', '巩', '冷', '曾', '荆'
        );
        //.replace(/<div>[\u4E00-\u9FA5]{1,1}/g, "'").replace(/<\/div>/g, "',")
        var lastNames =  new Array(
            '子璇', '淼', '国栋', '夫子', '瑞堂', '甜', '敏', '尚', '国贤', '贺祥', '晨涛',
            '昊轩', '易轩', '益辰', '益帆', '益冉', '瑾春', '瑾昆', '春齐', '杨', '文昊',
            '东东', '雄霖', '浩晨', '熙涵', '溶溶', '冰枫', '欣欣', '宜豪', '欣慧', '建政',
            '美欣', '淑慧', '文轩', '文杰', '欣源', '忠林', '榕润', '欣汝', '慧嘉', '新建',
            '建林', '亦菲', '林', '冰洁', '佳欣', '涵涵', '禹辰', '淳美', '泽惠', '伟洋',
            '涵越', '润丽', '翔', '淑华', '晶莹', '凌晶', '苒溪', '雨涵', '嘉怡', '佳毅',
            '子辰', '佳琪', '紫轩', '瑞辰', '昕蕊', '萌', '明远', '欣宜', '泽远', '欣怡',
            '佳怡', '佳惠', '晨茜', '晨璐', '运昊', '汝鑫', '淑君', '晶滢', '润莎', '榕汕',
            '佳钰', '佳玉', '晓庆', '一鸣', '语晨', '添池', '添昊', '雨泽', '雅晗', '雅涵',
            '清妍', '诗悦', '嘉乐', '晨涵', '天赫', '玥傲', '佳昊', '天昊', '萌萌', '若萌',
            "秋白", "南风", "醉山", "初彤", "凝海", "紫文", "凌晴", "香卉", "雅琴", "傲安",
            "傲之", "初蝶", "寻桃", "代芹", "诗霜", "春柏", "绿夏", "碧灵", "诗柳", "夏柳",
            "采白", "慕梅", "乐安", "冬菱", "紫安", "宛凝", "雨雪", "易真", "安荷", "静竹",
            "飞雪", "雪兰", "雅霜", "从蓉", "冷雪", "靖巧", "翠丝", "觅翠", "凡白", "乐蓉",
            "迎波", "丹烟", "梦旋", "书双", "念桃", "夜天", "海桃", "青香", "恨风", "安筠",
            "觅柔", "初南", "秋蝶", "千易", "安露", "诗蕊", "山雁", "友菱", "香露", "晓兰",
            "涵瑶", "秋柔", "思菱", "醉柳", "以寒", "迎夏", "向雪", "香莲", "以丹", "依凝",
            "如柏", "雁菱", "凝竹", "宛白", "初柔", "南蕾", "书萱", "梦槐", "香芹", "南琴",
            "绿海", "沛儿", "晓瑶", "听春", "易巧", "念云", "晓灵", "静枫", "夏蓉", "如南",
            "幼丝", "秋白", "冰安", "凝蝶", "紫雪", "念双", "念真", "曼寒", "凡霜", "白卉",
            "语山", "冷珍", "秋翠", "夏柳", "如之", "忆南", "书易", "翠桃", "寄瑶", "如曼",
            "问柳", "香梅", "幻桃", "又菡", "春绿", "醉蝶", "亦绿", "诗珊", "听芹", "新之",
            "博瀚", "博超", "才哲", "才俊", "成和", "成弘", "昊苍", "昊昊", "昊空", "昊乾",
            "昊然", "昊然", "昊天", "昊焱", "昊英", "浩波", "浩博", "浩初", "浩大", "浩宕",
            "浩荡", "浩歌", "浩广", "浩涆", "浩瀚", "浩浩", "浩慨", "浩旷", "浩阔", "浩漫",
            "浩淼", "浩渺", "浩邈", "浩气", "浩然", "浩穰", "浩壤", "浩思", "浩言", "皓轩",
            "和蔼", "和安", "和昶", "翔东", "昊伟", "楚桥", "智霖", "浩杰", "炎承", "思哲",
            "璟新", "楚怀", "继智", "昭旺", "俊泽", "子中", "羽睿", "嘉雷", "鸿翔", "明轩",
            "棋齐", "轶乐", "昭易", "臻翔", "泽鑫", "芮军", "浩奕", "宏明", "忠贤", "锦辉",
            "元毅", "霈胜", "宇峻", "子博", "语霖", "胜佑", "俊涛", "浩淇", "乐航", "泽楷",
            "嘉宁", "敬宣", "韦宁", "建新", "宇怀", "皓玄", "冠捷", "俊铭", "一鸣", "堂耀",
            "轩凝", "舰曦", "跃鑫", "梓杰", "筱宇", "弘涛", "羿天", "广嘉", "陆铭", "志卿",
            "连彬", "景智", "孟昕", "羿然", "文渊", "羿楦", "晗昱", "晗日", "涵畅", "涵涤",
            "昊穹", "涵亮", "涵忍", "涵容", "俊可", "智鹏", "诚钰", "书墨", "俊易", "浩渺",
            "宸水", "嘉许", "时贤", "飞腾", "沂晨", "殿斌", "霄鸿", "辰略", "澜鸿", "景博",
            "咨涵", "修德", "景辉", "语旋", "智逸", "鸿锋", "思梵", "弈煊", "泰河", "逞宇",
            "嘉颢", "锦沅", "颢焱", "萧彬", "悦升", "香音", "烨柠", "颢咏", "仁贤", "尚然",
            "羿鳞", "月鸿", "健霖", "鸿昊", "竣杰", "可顺", "炯乐", "俊彦", "海沧", "捷明",
            "飞扬", "杰辰", "羽捷", "曦晴", "裕鸿", "翌锦", "沐宸", "福同", "旻驰", "龙宁",
            "文虹", "义凡", "广晨", "宸滔", "嘉岐", "雅珺", "睿明", "皓轩", "程天", "子酝",
            "艾康", "如羽", "冠玉", "子歉", "永昊", "龙华", "兆颜", "奇文", "月昕", "裕锦",
            "昂佳", "昊浩", "宇韬", "睿焓", "永译", "鸿彬", "颢霖", "益彬", "虹昊", "飞悦",
            "睿珏","?宵童", "睿鸿", "容冰", "逸濠", "楷岩", "弘义", "海萦", "昊孺", "梓铭",
            "生钊", "蓝玺", "晨辕", "宇菡", "砚海", "文揩", "韬瑞", "彦红", "奕韦", "清予",
            "宁翼", "冬睿", "锦昌", "烨宁", "昌权", "国研", "德运", "孝清", "佳阳", "凯玮",
            "正真", "民云", "昕冶", "力威", "帅欣", "知淳", "烨飞", "兴远", "子墨", "澄欣",
            "烨煊", "悦勤", "晨津", "博宏", "育萌", "羽炫", "绍钧", "睿昌", "泓千", "颢炜",
            "虹金", "筠航", "元甲", "星明", "景涛", "铭虹", "德本", "向辉", "基翔", "家易",
            "欣鹏", "羽荃", "泽容", "弘亮", "尚廷", "轩梓", "甫津", "彬楷", "寅飞", "愉君",
            "阳平", "誉杰", "钦昭", "蕴藉", "羽程", "宏海", "涵畅", "光浩", "令沂", "浩浩",
            "睿锦", "易泽", "俊康", "家文", "晨元", "语洋", "裕宏", "梓榛", "阳嘉", "恒展",
            "雨远", "哲伊", "逸江", "丰源", "学东", "奇岩", "浩财", "和蔼", "红言", "瑞赫",
            "森圆", "欣赢", "梓鸿", "博明", "铭育", "颢硕", "宇烯", "宇如", "淳炎", "源承",
            "斌彬", "飞沉", "鸿璐", "昊弘",'茂','宾','乾','旷','才','政','才','磊','兴','曾',
            '天','飒','羽','谚','峻','前','凌','劼','光','碫','闻','州','涛','磊','舜','轩',
            '侪','铖','玄','苓','心','栋','奕','殿','玚','顺','晁','尧','叔','诚','宰','盛',
            '功','砂','魏','彰','珹','凌','喆','晴','镰','飒','孜','亦','煊','河','帅','国',
            '飞','寒','冕','创','晷','厚','钢','辰','澉','维','乔','铿','鑫','鲲','劼','孜',
            '炜','波','钢','征','朴','崈','磊','宽','禅','筠','士','稼','炜','荣','矗','晟',
            '碫','促','保','葆','昴','曾','峰','健','昊','剑','之','洲','易','志','世','含',
            '腾','伟','骄','宙','世','竦','荣','挺','伸','骏','祥','镇','迈','浦','龙','庆',
            '勘','密','楠','飚','钧','仁','弢','宁','矗','涵','煜','胜','纲','备','军','雄',
            '政','凡','劻','林','僖','宾','吏','魏','达','玫','泉','炅','森','助','君','晴',
            '吏','维','逸','之','怡','致','钢','乔','飚','真','庆','俣','涵','骞','玫','菁',
            '旲','弩','瀛','澔','瀚','阔','征','茂','辈','玄','汗','泽','瀚','铖','飙','豪',
            '瑎','煜','珹','问','合','亨','轩','旻','宣','嘉','山','卓','朗','刚','惠','凤',
            '娇','寒','文','凰','奴','囡','明','屏','霭','音','妹','琦','火','思','露','岚',
            '沁','炫','俪','菁','滟','姳','冉','渺','屏','咛','霓','纤','媛','萱','晓','滟',
            '姑','薇','雨','红','雅','虹','素','姜','美','艺','蕊','清','澜','融','黄','秋',
            '姯','玲','飘','雪','冉','花','荣','呤','画','彤','雅','彨','滢','薇','娴','俞',
            '霭','婧','银','馥','纯','火','雁','筠','彩','紫','香','斐','亚','颜','融','雨',
            '怡','锦','姿','霖','心','宛','羽','月','情','露','馨','荭','凤','容','婷','婕',
            '颖','梦','冰','叶','艳','喜','琴','怜','玲','爱','婵','云','亚','绿','平','冽',
            '荔','蓓','宛','妙','巧','淞','荭','情','岚','菡','馥','清','希','露','宜','娅',
            '纹','沁','晓','屏','琴','姜','娴','融','霜','霖','瑛','希','姞','悦','钰','煜',
            '影','亚','烟','彨','滢','嵘','冬','嫣','菡','静','琳','黛','育','惜','菲','渺',
            '柔','蓉','沁','倰','娜','枝','怡','娴','露','翠','薇','凝','滢','文','俞','伊',
            '轩','馨','惠','亦','涟','彨','苹','俪','嫱','淞','竹','娜','烁','纯','倩','环',
            '波','竹','毓','思','琴','纤','炅','妍','贤','帝','胜','祚','庆','砂','缜','豪',
            '倝','沛','纲','黎','凯','谚','瑎','筠','腾','稼','拯','琩','之','谦','茂','僧',
            '辰','鹏','啸','安','金','慕','志','魁','鲲','棋','栋','尊','骏','会','驾','储',
            '沅','兴','州','贤','豹','宏','致','辑','碧','腾','才','飙','晸','庚','曾','敬',
            '风','列','卿','晴','备','晸','坚','封','永','仁','政','良','乒','葆','邶','山',
            '宽','斌','庭','莱','有','弘','嘉','舱','辅','韩','魁','士','瑎','倡','修','韩',
            '龙','敬','促','崇','以','弛','霆','策','瀛','铎','绍','冕','峰','忠','容','鑫',
            '诚','曹','达','晟','密','洲','濮','倧','俊','琦','妍','舷','沛','光','翰','若',
            '新','庆','儒','锋','棠','寒','晋','龙','维','朕','啸','铸','韩','广','伸','晸',
            '义','诚','壮','鸣','清','纲','闻','淏','家','宰','友','高','明','达','子','孜',
            '砂','崇','段','义','丞','葆','保','骄','含','春','嘉','亨','丞','瑜','乐','棋',
            '弘','泉','树','啸','邦','日','昮','仇','祥','达','弢','彪','碧','成','力','成',
            '克','宣','煊','殿','马','谦','伦','侪','鹰','奕','荣','伯','晨','阳'
        );
        var firstLength = firstNames.length;
        var lastLength = lastNames.length;

        var i = parseInt(  Math.random() * firstLength );
        var j = parseInt(  Math.random() * lastLength );
        var name = firstNames[i] + lastNames[j];
        return name;

    }
}
