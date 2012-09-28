for(var i = 0; i < 112; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u14'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u78', GetNum('0'), GetNum('360'),'swing',500);

	BringToFront("u78");

}

}

widgetIdToHideFunction['u14'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u78', GetNum('0'), GetNum('-360'),'swing',500);

}

}

widgetIdToMoveFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u78','u15');

	MoveWidgetWithThis('u22','u15');

}

}

widgetIdToShowFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u78', GetNum('0'), GetNum('54'),'swing',500);

}

}

widgetIdToHideFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u78', GetNum('0'), GetNum('-54'),'swing',500);

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

widgetIdToMoveFunction['u78'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u78','u78');

}

}

widgetIdToMoveFunction['u7'] = function() {
var e = windowEvent;

if (true) {

}

}
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u91'] = 'center';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if ((GetCheckState('u10')) != (false)) {

	SetPanelVisibility('u14','hidden','fade',500);

	BringToFront("u78");

}

if ((GetCheckState('u10')) == (false)) {

	SetPanelVisibility('u14','','fade',500);

	BringToFront("u14");

	SetPanelState('u14', 'pd0u14','none','',500,'swing','down',500);

	BringToFront("u78");

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u111'] = 'center';HookHover('u23', false);
HookClick('u23', false);
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';
$axure.eventManager.blur('u28', function(e) {

if (false) {

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u30'] = 'top';
u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if ((GetWidgetText('u28')) == ('')) {

}
});
gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';
$axure.eventManager.focus('u36', function(e) {

if ((GetWidgetText('u35')) == ('')) {

SetWidgetFormText('u35', GetWidgetText('u36'));

SetWidgetFormText('u36', '');

}
});

$axure.eventManager.blur('u36', function(e) {

if ((GetWidgetText('u36')) == ('')) {

SetWidgetFormText('u36', GetWidgetText('u35'));

SetWidgetFormText('u35', '');

}
});
gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u99'] = 'top';
$axure.eventManager.focus('u41', function(e) {

if ((GetWidgetText('u40')) == ('')) {

SetWidgetFormText('u40', GetWidgetText('u41'));

SetWidgetFormText('u41', '');

}
});

$axure.eventManager.blur('u41', function(e) {

if ((GetWidgetText('u41')) == ('')) {

SetWidgetFormText('u41', GetWidgetText('u40'));

SetWidgetFormText('u40', '');

}
});
gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u43'] = 'top';
$axure.eventManager.focus('u46', function(e) {

if ((GetWidgetText('u45')) == ('')) {

SetWidgetFormText('u45', GetWidgetText('u46'));

SetWidgetFormText('u46', '');

}
});

$axure.eventManager.blur('u46', function(e) {

if ((GetWidgetText('u46')) == ('')) {

SetWidgetFormText('u46', GetWidgetText('u45'));

SetWidgetFormText('u45', '');

}
});
gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';
u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if ((GetCheckState('u76')) != (false)) {

	SetPanelVisibility('u15','','fade',500);

	BringToFront("u15");

	BringToFront("u78");

	SetPanelState('u15', 'pd0u15','none','',500,'swing','down',500);

}

if ((GetCheckState('u76')) == (false)) {

	SetPanelVisibility('u15','hidden','fade',500);

}
});
gv_vAlignTable['u77'] = 'top';HookHover('u79', false);
HookClick('u79', false);
