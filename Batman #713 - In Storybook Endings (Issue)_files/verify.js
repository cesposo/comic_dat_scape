$dvbs.pubSub.subscribe("AfterDecisionRender",'793c277586a3417d9184211f8cf48084',"PerformanceCollector", 
                function() { 
                    try { 
                        if (typeof(_dv_win) == 'undefined' || typeof($dvbs) == 'undefined' || typeof($dvbs.tags) == 'undefined' || typeof($dvbs.tags['793c277586a3417d9184211f8cf48084']) == 'undefined' || typeof($dvbs.tags['793c277586a3417d9184211f8cf48084'].perf) == 'undefined') return; 
                        var perf = {}; 
                        for (var i = 0; i < $dvbs.tags['793c277586a3417d9184211f8cf48084'].perf.count; i++) { 
                            perf['dvp_r' + i] = $dvbs.tags['793c277586a3417d9184211f8cf48084'].perf['r' + i] 
                        } 

                        var guid = '781148873745'; 
                        if (window.performance && typeof(window.performance.getEntries) === 'function') 
                            var perfEntries = window.performance.getEntries(); 
                        var duration = -1; 
                        if (perfEntries) { 
                            for (var i = 0; i < perfEntries.length; i++) { 
                                var entry = perfEntries[i]; 
                                var regexStr = 'verify\.js.*' + guid; 
                                if ((new RegExp(regexStr, 'i')).test(entry.name)) 
                                    duration = Math.floor(entry.duration); 
                            } 
                        } 
                        perf.dvp_fetchd = duration; 
                        $dvbs.registerEventCall('793c277586a3417d9184211f8cf48084', perf, 0) 
                    } catch (e) {} 
                });var dvObj = $dvbs;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};if (a['pltfrm'])dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("793c277586a3417d9184211f8cf48084",false);$dvbs.pubSub.subscribe('BeforeDecisionRender', '793c277586a3417d9184211f8cf48084', 'wpdc', function() {try { var result = 0; var cur = window; var tryNum = 0; try {    while (!result && tryNum < 10) {        if (cur.maple != undefined) {            result = 1;            break;        }        if (cur == cur.parent)            break;        tryNum++;        cur = cur.parent;    } } catch (er) {}	if (result) {		$dvbs.registerEventCall('793c277586a3417d9184211f8cf48084', { dvp_maple: result});	}} catch (e) {}});


try{__tagObject_callback_781148873745({ImpressionID:"793c277586a3417d9184211f8cf48084", ServerPublicDns:"tps624.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "793c277586a3417d9184211f8cf48084");}catch(e){}
try{__verify_callback_781148873745({
ResultID:1,
Passback:"%3Ca%20href%3D%22https%3A%2F%2Fwww.redcross.org%2Findex.jsp%22%20target%3D%22_blank%22%3E%0D%0A%3Cimg%20src%3D%22https%3A%2F%2Fa248.e.akamai.net%2Fappnexus.download.akamai.com%2F89298%2Fadnexus-prod%2Fp%2Fbb%2Fd9%2Fb0%2F85%2Fbbd9b08591b886903e1fc3b7dd8c0f7f.jpg%22%20width%3D%22728%22%20height%3D%2290%22%3E%0D%0A%3C%2Fa%3E",
AdWidth:728,
AdHeight:90});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "793c277586a3417d9184211f8cf48084");}catch(e){}
