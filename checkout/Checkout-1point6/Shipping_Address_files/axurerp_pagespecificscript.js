for(var i = 0; i < 133; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToMoveFunction['u103'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u103','u103');

}

}

widgetIdToShowFunction['u14'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u103', GetNum('0'), GetNum('360'),'swing',500);

	BringToFront("u103");

}

}

widgetIdToHideFunction['u14'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u103', GetNum('0'), GetNum('-360'),'swing',500);

}

}

widgetIdToMoveFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u103','u15');

	MoveWidgetWithThis('u22','u15');

}

}

widgetIdToShowFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u103', GetNum('0'), GetNum('54'),'swing',500);

}

}

widgetIdToHideFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u103', GetNum('0'), GetNum('-54'),'swing',500);

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
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u92'] = 'center';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if ((GetCheckState('u10')) != (false)) {

	SetPanelVisibility('u14','hidden','fade',500);

	BringToFront("u103");

}

if ((GetCheckState('u10')) == (false)) {

	SetPanelVisibility('u14','','fade',500);

	BringToFront("u14");

	SetPanelState('u14', 'pd0u14','none','',500,'swing','down',500);

	BringToFront("u103");

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u113'] = 'center';HookHover('u23', false);
HookClick('u23', false);
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u29'] = 'top';
u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if ((GetCheckState('u101')) != (false)) {

	SetPanelVisibility('u15','','fade',500);

	BringToFront("u15");

	BringToFront("u103");

	SetPanelState('u15', 'pd0u15','none','',500,'swing','down',500);

}

if ((GetCheckState('u101')) == (false)) {

	SetPanelVisibility('u15','hidden','fade',500);

}
});
gv_vAlignTable['u102'] = 'top';HookHover('u104', false);
HookClick('u104', false);
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u52'] = 'top';
$axure.eventManager.blur('u53', function(e) {

if (false) {

}
});
gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';
u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if ((GetWidgetText('u53')) == ('')) {

}
});
gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u132'] = 'top';
$axure.eventManager.focus('u61', function(e) {

if ((GetWidgetText('u60')) == ('')) {

SetWidgetFormText('u60', GetWidgetText('u61'));

SetWidgetFormText('u61', '');

}
});

$axure.eventManager.blur('u61', function(e) {

if ((GetWidgetText('u61')) == ('')) {

SetWidgetFormText('u61', GetWidgetText('u60'));

SetWidgetFormText('u60', '');

}
});
gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';
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
gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u68'] = 'top';
$axure.eventManager.focus('u71', function(e) {

if ((GetWidgetText('u70')) == ('')) {

SetWidgetFormText('u70', GetWidgetText('u71'));

SetWidgetFormText('u71', '');

}
});

$axure.eventManager.blur('u71', function(e) {

if ((GetWidgetText('u71')) == ('')) {

SetWidgetFormText('u71', GetWidgetText('u70'));

SetWidgetFormText('u70', '');

}
});
gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'center';