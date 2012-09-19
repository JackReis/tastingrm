for(var i = 0; i < 85; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u2'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u2'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToShowFunction['u5'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u5'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToShowFunction['u32'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u32'] = function() {
var e = windowEvent;

if (true) {

}

}
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u84'] = 'center';
$axure.eventManager.focus('u11', function(e) {

if ((GetWidgetText('u10')) == ('')) {

SetWidgetFormText('u10', GetWidgetText('u11'));

SetWidgetFormText('u11', '');

}
});

$axure.eventManager.blur('u11', function(e) {

if ((GetWidgetText('u11')) == ('')) {

SetWidgetFormText('u11', GetWidgetText('u10'));

SetWidgetFormText('u10', '');

}
});
gv_vAlignTable['u12'] = 'top';
$axure.eventManager.focus('u15', function(e) {

if ((GetWidgetText('u14')) == ('')) {

SetWidgetFormText('u14', GetWidgetText('u15'));

SetWidgetFormText('u15', '');

}
});

$axure.eventManager.blur('u15', function(e) {

if ((GetWidgetText('u15')) == ('')) {

SetWidgetFormText('u15', GetWidgetText('u14'));

SetWidgetFormText('u14', '');

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';
u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	SetPanelVisibility('u5','hidden','fade',500);

	SendToBack("u5");

}
});
gv_vAlignTable['u19'] = 'top';
u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	SetPanelVisibility('u2','hidden','fade',500);

}
});
gv_vAlignTable['u21'] = 'top';
$axure.eventManager.focus('u24', function(e) {

if ((GetWidgetText('u23')) == ('')) {

SetWidgetFormText('u23', GetWidgetText('u24'));

SetWidgetFormText('u24', '');

}
});

$axure.eventManager.blur('u24', function(e) {

if ((GetWidgetText('u24')) == ('')) {

SetWidgetFormText('u24', GetWidgetText('u23'));

SetWidgetFormText('u23', '');

}
});
gv_vAlignTable['u25'] = 'top';document.getElementById('u26_img').tabIndex = 0;
HookHover('u26', false);
HookClick('u26', false);

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelVisibility('u2','hidden','none',500);

	SetPanelVisibility('u32','hidden','none',500);

}
});
gv_vAlignTable['u27'] = 'center';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if ((GetCheckState('u28')) != (false)) {

	SetPanelVisibility('u5','','fade',500);

	BringToFront("u5");
function waitu6a7e42116886467199c4cf9a53b2bc0b1() {

	SetPanelState('u5', 'pd0u5','none','',500,'swing','down',500);
}
setTimeout(waitu6a7e42116886467199c4cf9a53b2bc0b1, 500);

}

if ((GetCheckState('u28')) == (false)) {

	SetPanelVisibility('u5','hidden','fade',500);

	SendToBack("u5");

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u34'] = 'top';document.getElementById('u35_img').tabIndex = 0;
HookHover('u35', false);
HookClick('u35', false);

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	SetPanelVisibility('u2','','none',500);

	BringToFront("u2");

	SetPanelState('u2', 'pd0u2','none','',500,'swing','up',500);

SetGlobalVariableValue('IsGift', 'Yes');

}
});
gv_vAlignTable['u36'] = 'center';document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);
HookClick('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	SetPanelVisibility('u32','hidden','fade',500);

SetGlobalVariableValue('IsGift', 'No');

}
});
gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u78'] = 'center';