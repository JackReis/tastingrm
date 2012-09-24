for(var i = 0; i < 95; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';
u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if ((GetCheckState('u14')) != (false)) {

	SetPanelVisibility('u3','','fade',500);

	BringToFront("u3");

	BringToFront("u66");

	SetPanelState('u3', 'pd0u3','none','',500,'swing','up',500);

}

if ((GetCheckState('u14')) == (false)) {

	SetPanelVisibility('u3','hidden','fade',500);

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';
$axure.eventManager.blur('u18', function(e) {

if (false) {

}
});
gv_vAlignTable['u19'] = 'top';
u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if ((GetWidgetText('u18')) == ('')) {

}
});

$axure.eventManager.focus('u23', function(e) {

if ((GetWidgetText('u22')) == ('')) {

SetWidgetFormText('u22', GetWidgetText('u23'));

SetWidgetFormText('u23', '');

}
});

$axure.eventManager.blur('u23', function(e) {

if ((GetWidgetText('u23')) == ('')) {

SetWidgetFormText('u23', GetWidgetText('u22'));

SetWidgetFormText('u22', '');

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';
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
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';HookHover('u67', false);
HookClick('u67', false);
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'center';