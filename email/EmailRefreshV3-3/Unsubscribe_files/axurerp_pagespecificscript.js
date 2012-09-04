for(var i = 0; i < 30; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'swing','down',500);

}
});
gv_vAlignTable['u21'] = 'top';
u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'swing','down',500);

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'top';
u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'swing','down',500);

}
});
gv_vAlignTable['u27'] = 'top';
$axure.eventManager.focus('u29', function(e) {

if ((GetWidgetText('u29')) == ('Please tell us a bit more...')) {

SetWidgetFormText('u29', '');

}
});

$axure.eventManager.blur('u29', function(e) {

if ((GetWidgetText('u29')) == ('')) {

SetWidgetFormText('u29', 'Please tell us a bit more...');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Unsubscribe_LastCall.html');

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u15'] = 'top';
u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'swing','down',500);

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'top';