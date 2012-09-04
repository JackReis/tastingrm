for(var i = 0; i < 61; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u55'] = 'top';
$axure.eventManager.mouseover('u56', function(e) {
if (!IsTrueMouseOver('u56',e)) return;
if (true) {

}
});

$axure.eventManager.mouseout('u56', function(e) {
if (!IsTrueMouseOut('u56',e)) return;
if (true) {

}
});
document.getElementById('u57_img').tabIndex = 0;
HookHover('u57', false);
HookClick('u57', false);

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if ((GetWidgetText('u19')) != ('')) {

SetGlobalVariableValue('Password', GetWidgetText('u19'));

	SetPanelVisibility('u59','','none',500);

}

if ((GetGlobalVariableValue('Preferences')) == ('No')) {

}

if ((GetGlobalVariableValue('Preferences')) == ('Yes')) {
function waituba9a816f347a417cbf8ce2ce02a342421() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Preferences.html');
}
setTimeout(waituba9a816f347a417cbf8ce2ce02a342421, 2500);

}
});
gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u18'] = 'top';$('#u19').attr('axSubmit', 'u57');

$axure.eventManager.keyup('u19', function(e) {

if ((GetWidgetValueLength('u19')) == ('0')) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u19')) < Number('5')) && ((GetWidgetValueLength('u19')) > Number('0'))) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u19')) < Number('8')) && ((GetWidgetValueLength('u19')) >= Number('4'))) {

	SetPanelState('u20', 'pd2u20','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u19')) < Number('12')) && ((GetWidgetValueLength('u19')) >= Number('8'))) {

	SetPanelState('u20', 'pd3u20','none','',500,'none','',500);

}
else
if ((GetWidgetValueLength('u19')) >= Number('12')) {

	SetPanelState('u20', 'pd4u20','none','',500,'none','',500);

}
});
