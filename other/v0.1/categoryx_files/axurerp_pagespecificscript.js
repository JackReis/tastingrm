for(var i = 0; i < 280; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

SetGlobalVariableValue('vErrorShown', 'false');

}

});

if (bIE) document.getElementById('u174').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u174'); });
else {
    document.getElementById('u174').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u174'); }, true);
    document.getElementById('u174').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u174'); }, true);
}

widgetIdToDragFunction['u174'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u174',widgetDragInfo.xDelta,0,'none',500);

}

if (IsOver(GetWidgetRectangles('u174'), GetWidgetRectangles('u226'))) {

	MoveWidgetTo('u174', GetNum('-340'), GetNum('0'),'none',500);

}
else
if (IsOver(GetWidgetRectangles('u174'), GetWidgetRectangles('u227'))) {

	MoveWidgetTo('u174', GetNum('0'), GetNum('0'),'none',500);

}

}
gv_vAlignTable['u231'] = 'center';gv_vAlignTable['u233'] = 'bottom';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u108'] = 'center';document.getElementById('u109_img').tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u258'] = 'center';gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u83'] = 'top';u85.tabIndex = 0;

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if ((GetGlobalVariableValue('vErrorShown')) == ('false')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('-45'),'linear',500);

SetGlobalVariableValue('vErrorShown', 'true');

	SetPanelVisibility('u135','','none',500);

}
});
gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u268'] = 'top';u269.tabIndex = 0;

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('2')) && ((GetPanelState('u263')) == ('pd2u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

	SetPanelState('u263', 'pd0u263','none','',500,'fade','',500);

	SetPanelState('u239', 'pd0u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u263')) == ('pd2u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

	SetPanelState('u263', 'pd0u263','none','',500,'none','',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('-66'),'linear',500);

}

if ((GetGlobalVariableValue('vErrorShown')) == ('true')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('45'),'linear',500);

	SetPanelVisibility('u135','hidden','none',500);

SetGlobalVariableValue('vErrorShown', 'false');

}
});
gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u95'] = 'top';u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if ((GetGlobalVariableValue('vErrorShown')) == ('false')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('-45'),'linear',500);

SetGlobalVariableValue('vErrorShown', 'true');

	SetPanelVisibility('u135','','none',500);

}
});
gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u129'] = 'top';gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u133'] = 'center';u136.tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if ((GetGlobalVariableValue('vErrorShown')) == ('true')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('45'),'linear',500);

	SetPanelVisibility('u135','hidden','none',500);

SetGlobalVariableValue('vErrorShown', 'false');

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u143'] = 'top';u145.tabIndex = 0;

u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('2')) && ((GetPanelState('u248')) == ('pd1u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'fade','',500);

	SetPanelState('u239', 'pd0u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('2')) && ((GetPanelState('u263')) == ('pd2u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

	SetPanelState('u263', 'pd0u263','none','',500,'fade','',500);

	SetPanelState('u239', 'pd0u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u248')) == ('pd1u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'none','',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('-66'),'linear',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u263')) == ('pd2u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

	SetPanelState('u263', 'pd0u263','none','',500,'none','',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('-66'),'linear',500);

}

if ((GetGlobalVariableValue('vErrorShown')) == ('true')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('45'),'linear',500);

	SetPanelVisibility('u135','hidden','none',500);

SetGlobalVariableValue('vErrorShown', 'false');

}
});
gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u148'] = 'top';u275.tabIndex = 0;

u275.style.cursor = 'pointer';
$axure.eventManager.click('u275', function(e) {

if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('2')) && ((GetPanelState('u263')) == ('pd1u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

	SetPanelState('u263', 'pd0u263','none','',500,'fade','',500);

	SetPanelState('u239', 'pd0u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u263')) == ('pd1u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u263', 'pd0u263','none','',500,'none','',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('-66'),'linear',500);

}

if ((GetGlobalVariableValue('vErrorShown')) == ('true')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('45'),'linear',500);

	SetPanelVisibility('u135','hidden','none',500);

SetGlobalVariableValue('vErrorShown', 'false');

}
});
gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u151'] = 'top';u153.tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if ((GetGlobalVariableValue('vNumberProdsSelected')) == ('0')) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u137', 'pd1u137','none','',500,'none','',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('-66'),'linear',500);

	SetPanelState('u248', 'pd1u248','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u263')) == ('pd0u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '2');

	SetPanelState('u137', 'pd1u137','none','',500,'none','',500);

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u31', 'pd1u31','none','',500,'none','',500);

	SetPanelState('u55', 'pd1u55','none','',500,'none','',500);

	SetPanelState('u67', 'pd1u67','none','',500,'none','',500);

	SetPanelState('u79', 'pd1u79','none','',500,'none','',500);

	SetPanelState('u91', 'pd1u91','none','',500,'none','',500);

	SetPanelState('u263', 'pd2u263','none','',500,'fade','',500);

	SetPanelState('u239', 'pd1u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u248')) == ('pd0u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '2');

	SetPanelState('u137', 'pd1u137','none','',500,'none','',500);

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u31', 'pd1u31','none','',500,'none','',500);

	SetPanelState('u55', 'pd1u55','none','',500,'none','',500);

	SetPanelState('u67', 'pd1u67','none','',500,'none','',500);

	SetPanelState('u79', 'pd1u79','none','',500,'none','',500);

	SetPanelState('u91', 'pd1u91','none','',500,'none','',500);

	SetPanelState('u239', 'pd1u239','none','',500,'fade','',500);

	SetPanelState('u248', 'pd1u248','none','',500,'fade','',500);

}
});
gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u235'] = 'center';gv_vAlignTable['u160'] = 'top';u162.tabIndex = 0;

u162.style.cursor = 'pointer';
$axure.eventManager.click('u162', function(e) {

if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('2')) && ((GetPanelState('u248')) == ('pd2u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'fade','',500);

	SetPanelState('u239', 'pd0u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('2')) && ((GetPanelState('u263')) == ('pd1u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

	SetPanelState('u263', 'pd0u263','none','',500,'fade','',500);

	SetPanelState('u239', 'pd0u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u248')) == ('pd2u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'none','',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('-66'),'linear',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u263')) == ('pd1u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u263', 'pd0u263','none','',500,'none','',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('-66'),'linear',500);

}

if ((GetGlobalVariableValue('vErrorShown')) == ('true')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('45'),'linear',500);

	SetPanelVisibility('u135','hidden','none',500);

SetGlobalVariableValue('vErrorShown', 'false');

}
});
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u168'] = 'top';u170.tabIndex = 0;

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', function(e) {

if ((GetGlobalVariableValue('vNumberProdsSelected')) == ('0')) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u154', 'pd1u154','none','',500,'none','',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('-66'),'linear',500);

	SetPanelState('u248', 'pd2u248','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u263')) == ('pd0u263'))) {

SetGlobalVariableValue('vNumberProdsSelected', '2');

	SetPanelState('u154', 'pd1u154','none','',500,'none','',500);

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u31', 'pd1u31','none','',500,'none','',500);

	SetPanelState('u55', 'pd1u55','none','',500,'none','',500);

	SetPanelState('u67', 'pd1u67','none','',500,'none','',500);

	SetPanelState('u79', 'pd1u79','none','',500,'none','',500);

	SetPanelState('u91', 'pd1u91','none','',500,'none','',500);

	SetPanelState('u263', 'pd1u263','none','',500,'fade','',500);

	SetPanelState('u239', 'pd1u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u248')) == ('pd0u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '2');

	SetPanelState('u154', 'pd1u154','none','',500,'none','',500);

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u31', 'pd1u31','none','',500,'none','',500);

	SetPanelState('u55', 'pd1u55','none','',500,'none','',500);

	SetPanelState('u67', 'pd1u67','none','',500,'none','',500);

	SetPanelState('u79', 'pd1u79','none','',500,'none','',500);

	SetPanelState('u91', 'pd1u91','none','',500,'none','',500);

	SetPanelState('u239', 'pd1u239','none','',500,'fade','',500);

	SetPanelState('u248', 'pd2u248','none','',500,'fade','',500);

}
});
gv_vAlignTable['u176'] = 'bottom';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u179'] = 'bottom';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u253'] = 'top';gv_vAlignTable['u200'] = 'bottom';u73.tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if ((GetGlobalVariableValue('vErrorShown')) == ('false')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('-45'),'linear',500);

SetGlobalVariableValue('vErrorShown', 'true');

	SetPanelVisibility('u135','','none',500);

}
});
gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u182'] = 'bottom';gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u187'] = 'bottom';gv_vAlignTable['u188'] = 'top';u260.tabIndex = 0;

u260.style.cursor = 'pointer';
$axure.eventManager.click('u260', function(e) {

if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('2')) && ((GetPanelState('u248')) == ('pd1u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'fade','',500);

	SetPanelState('u239', 'pd0u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u248')) == ('pd1u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'none','',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('-66'),'linear',500);

}

if ((GetGlobalVariableValue('vErrorShown')) == ('true')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('45'),'linear',500);

	SetPanelVisibility('u135','hidden','none',500);

SetGlobalVariableValue('vErrorShown', 'false');

}
});
gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u212'] = 'bottom';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u215'] = 'center';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u192'] = 'bottom';gv_vAlignTable['u194'] = 'bottom';gv_vAlignTable['u196'] = 'bottom';gv_vAlignTable['u198'] = 'bottom';gv_vAlignTable['u221'] = 'center';gv_vAlignTable['u223'] = 'center';gv_vAlignTable['u225'] = 'center';document.getElementById('u0_img').tabIndex = 0;

u0.style.cursor = 'pointer';
$axure.eventManager.click('u0', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u7'] = 'bottom';gv_vAlignTable['u8'] = 'top';document.getElementById('u240_img').tabIndex = 0;

u240.style.cursor = 'pointer';
$axure.eventManager.click('u240', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('compare.html');

}
});
gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u243'] = 'center';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u110'] = 'center';document.getElementById('u111_img').tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u116'] = 'center';u254.tabIndex = 0;

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('2')) && ((GetPanelState('u248')) == ('pd2u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '1');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'fade','',500);

	SetPanelState('u239', 'pd0u239','none','',500,'fade','',500);

}
else
if (((GetGlobalVariableValue('vNumberProdsSelected')) == ('1')) && ((GetPanelState('u248')) == ('pd2u248'))) {

SetGlobalVariableValue('vNumberProdsSelected', '0');

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'none','',500);

	MoveWidgetBy('u236', GetNum('0'), GetNum('66'),'linear',500);

	MoveWidgetBy('u172', GetNum('0'), GetNum('-66'),'linear',500);

}

if ((GetGlobalVariableValue('vErrorShown')) == ('true')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('45'),'linear',500);

	SetPanelVisibility('u135','hidden','none',500);

SetGlobalVariableValue('vErrorShown', 'false');

}
});
gv_vAlignTable['u256'] = 'center';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u20'] = 'top';u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u21'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('pricingandterms.html');

}
});
gv_vAlignTable['u22'] = 'top';u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u24'] = 'top';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u25'] = 'top';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('pricingandterms.html');

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u35'] = 'top';u37.tabIndex = 0;

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if ((GetGlobalVariableValue('vErrorShown')) == ('false')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('-45'),'linear',500);

SetGlobalVariableValue('vErrorShown', 'true');

	SetPanelVisibility('u135','','none',500);

}
});
gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u217'] = 'center';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u271'] = 'center';gv_vAlignTable['u273'] = 'center';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u47'] = 'top';u49.tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if ((GetGlobalVariableValue('vErrorShown')) == ('false')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('-45'),'linear',500);

SetGlobalVariableValue('vErrorShown', 'true');

	SetPanelVisibility('u135','','none',500);

}
});
gv_vAlignTable['u229'] = 'bottom';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u238'] = 'bottom';u61.tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if ((GetGlobalVariableValue('vErrorShown')) == ('false')) {

	MoveWidgetBy('u236', GetNum('0'), GetNum('-45'),'linear',500);

SetGlobalVariableValue('vErrorShown', 'true');

	SetPanelVisibility('u135','','none',500);

}
});
gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u246'] = 'bottom';gv_vAlignTable['u247'] = 'top';