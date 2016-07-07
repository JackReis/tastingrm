for(var i = 0; i < 259; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u70'] = 'bottom';gv_vAlignTable['u101'] = 'center';
$axure.eventManager.focus('u104', function(e) {

if ((GetWidgetText('u103')) == ('')) {

SetWidgetFormText('u103', GetWidgetText('u104'));

SetWidgetFormText('u104', '');

}
});

$axure.eventManager.blur('u104', function(e) {

if ((GetWidgetText('u104')) == ('')) {

SetWidgetFormText('u104', GetWidgetText('u103'));

SetWidgetFormText('u103', '');

}
});
document.getElementById('u105_img').tabIndex = 0;
HookHover('u105', false);
HookClick('u105', false);

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("submits comment as Facebook user"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u118'] = 'center';document.getElementById('u119_img').tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u129'] = 'top';gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u148'] = 'top';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u152'] = 'top';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u156'] = 'center';document.getElementById('u157_img').tabIndex = 0;

u157.style.cursor = 'pointer';
$axure.eventManager.click('u157', function(e) {

if (true) {

SetWidgetFormText('u161', '' + (GetNum(GetWidgetText('u161')) + 1) + '');

}
});
gv_vAlignTable['u158'] = 'center';document.getElementById('u159_img').tabIndex = 0;

u159.style.cursor = 'pointer';
$axure.eventManager.click('u159', function(e) {

if ((GetWidgetText('u161')) > Number('0')) {

SetWidgetFormText('u161', '' + (GetWidgetText('u161') - 1) + '');

}
});
gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u160'] = 'center';document.getElementById('u162_img').tabIndex = 0;
HookHover('u162', false);
HookClick('u162', false);

u162.style.cursor = 'pointer';
$axure.eventManager.click('u162', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u165'] = 'center';document.getElementById('u166_img').tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Zooms the image"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u172'] = 'center';document.getElementById('u174_img').tabIndex = 0;
HookHover('u174', false);
HookClick('u174', false);

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u175'] = 'center';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u72'] = 'center';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

SetWidgetFormText('u77', '' + (GetNum(GetWidgetText('u77')) + 1) + '');

}
});
gv_vAlignTable['u74'] = 'center';document.getElementById('u75_img').tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if ((GetWidgetText('u77')) > Number('0')) {

SetWidgetFormText('u77', '' + (GetWidgetText('u77') - 1) + '');

}
});
gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u182'] = 'top';HookClick('u183', false);
gv_vAlignTable['u184'] = 'bottom';gv_vAlignTable['u185'] = 'top';gv_vAlignTable['u186'] = 'top';document.getElementById('u187_img').tabIndex = 0;
HookHover('u187', false);
HookClick('u187', false);

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u192'] = 'center';HookClick('u193', false);
gv_vAlignTable['u194'] = 'bottom';gv_vAlignTable['u196'] = 'center';document.getElementById('u197_img').tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

SetWidgetFormText('u201', '' + (GetNum(GetWidgetText('u201')) + 1) + '');

}
});
gv_vAlignTable['u198'] = 'center';document.getElementById('u199_img').tabIndex = 0;

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if ((GetWidgetText('u201')) > Number('0')) {

SetWidgetFormText('u201', '' + (GetWidgetText('u201') - 1) + '');

}
});
gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u240'] = 'center';document.getElementById('u241_img').tabIndex = 0;

u241.style.cursor = 'pointer';
$axure.eventManager.click('u241', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u242'] = 'center';document.getElementById('u243_img').tabIndex = 0;

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u244'] = 'center';document.getElementById('u245_img').tabIndex = 0;

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u250'] = 'top';document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u116'] = 'center';document.getElementById('u117_img').tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u120'] = 'center';document.getElementById('u121_img').tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u122'] = 'center';u123.tabIndex = 0;

u123.style.cursor = 'pointer';
$axure.eventManager.click('u123', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Want It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Tried It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u125.tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Recommend It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u30'] = 'center';document.getElementById('u31_img').tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

SetWidgetFormText('u35', '' + (GetNum(GetWidgetText('u35')) + 1) + '');

}
});
gv_vAlignTable['u32'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if ((GetWidgetText('u35')) > Number('0')) {

SetWidgetFormText('u35', '' + (GetWidgetText('u35') - 1) + '');

}
});
gv_vAlignTable['u34'] = 'center';document.getElementById('u36_img').tabIndex = 0;
HookHover('u36', false);
HookClick('u36', false);

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u203'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Zooms the image"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';
$axure.eventManager.focus('u228', function(e) {

if ((GetWidgetText('u227')) == ('')) {

SetWidgetFormText('u227', GetWidgetText('u228'));

SetWidgetFormText('u228', '');

}
});

$axure.eventManager.blur('u228', function(e) {

if ((GetWidgetText('u228')) == ('')) {

SetWidgetFormText('u228', GetWidgetText('u227'));

SetWidgetFormText('u227', '');

}
});
document.getElementById('u229_img').tabIndex = 0;
HookHover('u229', false);
HookClick('u229', false);

u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("submits comment as Facebook user"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u50_img').tabIndex = 0;
HookHover('u50', false);
HookClick('u50', false);

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u58'] = 'top';HookClick('u59', false);
gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u238'] = 'top';document.getElementById('u239_img').tabIndex = 0;

u239.style.cursor = 'pointer';
$axure.eventManager.click('u239', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u60'] = 'bottom';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u62'] = 'top';document.getElementById('u63_img').tabIndex = 0;
HookHover('u63', false);
HookClick('u63', false);

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'center';HookClick('u69', false);
gv_vAlignTable['u246'] = 'center';u247.tabIndex = 0;

u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Want It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u248.tabIndex = 0;

u248.style.cursor = 'pointer';
$axure.eventManager.click('u248', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Tried It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u249.tabIndex = 0;

u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Recommend It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
