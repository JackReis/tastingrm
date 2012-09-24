for(var i = 0; i < 102; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToMoveFunction['u72'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u72','u72');

}

}

widgetIdToShowFunction['u14'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u72', GetNum('0'), GetNum('360'),'swing',500);

	BringToFront("u72");

}

}

widgetIdToHideFunction['u14'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u72', GetNum('0'), GetNum('-360'),'swing',500);

}

}

widgetIdToMoveFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u72','u15');

	MoveWidgetWithThis('u22','u15');

}

}

widgetIdToShowFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u72', GetNum('0'), GetNum('54'),'swing',500);

}

}

widgetIdToHideFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u72', GetNum('0'), GetNum('-54'),'swing',500);

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
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u92'] = 'center';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if ((GetCheckState('u10')) != (false)) {

	SetPanelVisibility('u14','hidden','fade',500);

	BringToFront("u72");

}

if ((GetCheckState('u10')) == (false)) {

	SetPanelVisibility('u14','','fade',500);

	BringToFront("u14");

	SetPanelState('u14', 'pd0u14','none','',500,'swing','down',500);

	BringToFront("u72");

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';HookHover('u23', false);
HookClick('u23', false);
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u53'] = 'top';
$axure.eventManager.blur('u54', function(e) {

if (false) {

}
});
gv_vAlignTable['u55'] = 'top';
u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if ((GetWidgetText('u54')) == ('')) {

}
});

$axure.eventManager.focus('u59', function(e) {

if ((GetWidgetText('u58')) == ('')) {

SetWidgetFormText('u58', GetWidgetText('u59'));

SetWidgetFormText('u59', '');

}
});

$axure.eventManager.blur('u59', function(e) {

if ((GetWidgetText('u59')) == ('')) {

SetWidgetFormText('u59', GetWidgetText('u58'));

SetWidgetFormText('u58', '');

}
});
gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';
$axure.eventManager.focus('u66', function(e) {

if ((GetWidgetText('u65')) == ('')) {

SetWidgetFormText('u65', GetWidgetText('u66'));

SetWidgetFormText('u66', '');

}
});

$axure.eventManager.blur('u66', function(e) {

if ((GetWidgetText('u66')) == ('')) {

SetWidgetFormText('u66', GetWidgetText('u65'));

SetWidgetFormText('u65', '');

}
});
gv_vAlignTable['u67'] = 'top';
u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if ((GetCheckState('u70')) != (false)) {

	SetPanelVisibility('u15','','fade',500);

	BringToFront("u15");

	BringToFront("u72");

	SetPanelState('u15', 'pd0u15','none','',500,'swing','down',500);

}

if ((GetCheckState('u70')) == (false)) {

	SetPanelVisibility('u15','hidden','fade',500);

}
});
gv_vAlignTable['u71'] = 'top';HookHover('u73', false);
HookClick('u73', false);
gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'center';