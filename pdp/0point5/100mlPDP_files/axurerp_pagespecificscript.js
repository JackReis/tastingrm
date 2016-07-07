for(var i = 0; i < 127; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u102'] = 'center';
$axure.eventManager.focus('u105', function(e) {

if ((GetWidgetText('u104')) == ('')) {

SetWidgetFormText('u104', GetWidgetText('u105'));

SetWidgetFormText('u105', '');

}
});

$axure.eventManager.blur('u105', function(e) {

if ((GetWidgetText('u105')) == ('')) {

SetWidgetFormText('u105', GetWidgetText('u104'));

SetWidgetFormText('u104', '');

}
});
document.getElementById('u106_img').tabIndex = 0;
HookHover('u106', false);
HookClick('u106', false);

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("submits comment as Facebook user"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u31'] = 'center';document.getElementById('u32_img').tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

SetWidgetFormText('u36', '' + (GetNum(GetWidgetText('u36')) + 1) + '');

}
});
gv_vAlignTable['u33'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if ((GetWidgetText('u36')) > Number('0')) {

SetWidgetFormText('u36', '' + (GetWidgetText('u36') - 1) + '');

}
});
gv_vAlignTable['u35'] = 'center';document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);
HookClick('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u98'] = 'top';document.getElementById('u116_img').tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u117'] = 'center';document.getElementById('u118_img').tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u40'] = 'center';document.getElementById('u41_img').tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Zooms the image"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u49'] = 'center';document.getElementById('u120_img').tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u121'] = 'center';document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u123'] = 'center';u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Want It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u125.tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Tried It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u126.tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Recommend It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u8'] = 'center';document.getElementById('u51_img').tabIndex = 0;
HookHover('u51', false);
HookClick('u51', false);

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';HookClick('u60', false);
gv_vAlignTable['u61'] = 'bottom';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';document.getElementById('u64_img').tabIndex = 0;
HookHover('u64', false);
HookClick('u64', false);

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("if signed in: Adds # of items in quantity picker to the cart <BR>if NOT signed in: shows ZIP entry dialogue"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';HookClick('u70', false);
gv_vAlignTable['u71'] = 'bottom';gv_vAlignTable['u73'] = 'center';document.getElementById('u74_img').tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

SetWidgetFormText('u78', '' + (GetNum(GetWidgetText('u78')) + 1) + '');

}
});
gv_vAlignTable['u75'] = 'center';document.getElementById('u76_img').tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if ((GetWidgetText('u78')) > Number('0')) {

SetWidgetFormText('u78', '' + (GetWidgetText('u78') - 1) + '');

}
});
gv_vAlignTable['u77'] = 'center';