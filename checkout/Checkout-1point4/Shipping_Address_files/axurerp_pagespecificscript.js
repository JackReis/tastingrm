for(var i = 0; i < 99; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u14'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u69', GetNum('0'), GetNum('360'),'swing',500);

}

}

widgetIdToHideFunction['u14'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u69', GetNum('0'), GetNum('-360'),'swing',500);

}

}

widgetIdToShowFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u69', GetNum('0'), GetNum('54'),'swing',500);

}

}

widgetIdToHideFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u69', GetNum('0'), GetNum('-54'),'swing',500);

}

}

widgetIdToShowFunction['u16'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u16'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToMoveFunction['u7'] = function() {
var e = windowEvent;

if (true) {

}

}
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u91'] = 'center';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if ((GetCheckState('u10')) != (false)) {

	SetPanelVisibility('u14','hidden','fade',500);

	BringToFront("u69");

}

if ((GetCheckState('u10')) == (false)) {

	SetPanelVisibility('u14','','fade',500);

	BringToFront("u14");

	SetPanelState('u14', 'pd0u14','none','',500,'swing','down',500);

	BringToFront("u69");

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u50'] = 'top';
$axure.eventManager.blur('u51', function(e) {

if (false) {

}
});
gv_vAlignTable['u52'] = 'top';
u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if ((GetWidgetText('u51')) == ('')) {

}
});

$axure.eventManager.focus('u56', function(e) {

if ((GetWidgetText('u55')) == ('')) {

SetWidgetFormText('u55', GetWidgetText('u56'));

SetWidgetFormText('u56', '');

}
});

$axure.eventManager.blur('u56', function(e) {

if ((GetWidgetText('u56')) == ('')) {

SetWidgetFormText('u56', GetWidgetText('u55'));

SetWidgetFormText('u55', '');

}
});
gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u60'] = 'top';
$axure.eventManager.focus('u63', function(e) {

if ((GetWidgetText('u62')) == ('')) {

SetWidgetFormText('u62', GetWidgetText('u63'));

SetWidgetFormText('u63', '');

}
});

$axure.eventManager.blur('u63', function(e) {

if ((GetWidgetText('u63')) == ('')) {

SetWidgetFormText('u63', GetWidgetText('u62'));

SetWidgetFormText('u62', '');

}
});
gv_vAlignTable['u64'] = 'top';
u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if ((GetCheckState('u67')) != (false)) {

	SetPanelVisibility('u15','','fade',500);

	BringToFront("u15");

	BringToFront("u69");

	SetPanelState('u15', 'pd0u15','none','',500,'swing','down',500);

}

if ((GetCheckState('u67')) == (false)) {

	SetPanelVisibility('u15','hidden','fade',500);

}
});
gv_vAlignTable['u68'] = 'top';HookHover('u70', false);
HookClick('u70', false);
gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'center';