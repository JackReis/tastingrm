for(var i = 0; i < 103; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u3'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u3'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToShowFunction['u4'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u4'] = function() {
var e = windowEvent;

if (true) {

}

}
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';
u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if ((GetCheckState('u14')) != (false)) {

	SetPanelVisibility('u3','','fade',500);

	BringToFront("u3");

	BringToFront("u72");

	SetPanelState('u3', 'pd0u3','none','',500,'swing','up',500);

}

if ((GetCheckState('u14')) == (false)) {

	SetPanelVisibility('u3','hidden','fade',500);

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';
$axure.eventManager.blur('u17', function(e) {

if (false) {

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';
u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if ((GetWidgetText('u17')) == ('')) {

}
});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u22'] = 'top';
$axure.eventManager.focus('u25', function(e) {

if ((GetWidgetText('u24')) == ('')) {

SetWidgetFormText('u24', GetWidgetText('u25'));

SetWidgetFormText('u25', '');

}
});

$axure.eventManager.blur('u25', function(e) {

if ((GetWidgetText('u25')) == ('')) {

SetWidgetFormText('u25', GetWidgetText('u24'));

SetWidgetFormText('u24', '');

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u102'] = 'center';
$axure.eventManager.focus('u30', function(e) {

if ((GetWidgetText('u29')) == ('')) {

SetWidgetFormText('u29', GetWidgetText('u30'));

SetWidgetFormText('u30', '');

}
});

$axure.eventManager.blur('u30', function(e) {

if ((GetWidgetText('u30')) == ('')) {

SetWidgetFormText('u30', GetWidgetText('u29'));

SetWidgetFormText('u29', '');

}
});
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';
$axure.eventManager.focus('u35', function(e) {

if ((GetWidgetText('u34')) == ('')) {

SetWidgetFormText('u34', GetWidgetText('u35'));

SetWidgetFormText('u35', '');

}
});

$axure.eventManager.blur('u35', function(e) {

if ((GetWidgetText('u35')) == ('')) {

SetWidgetFormText('u35', GetWidgetText('u34'));

SetWidgetFormText('u34', '');

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u69'] = 'top';HookHover('u73', false);
HookClick('u73', false);
gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'center';