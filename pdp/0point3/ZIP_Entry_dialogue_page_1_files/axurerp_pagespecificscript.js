for(var i = 0; i < 32; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u21'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u13', 'pd0u13','fade','',500,'fade','',500);

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

}
});
u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

	SetPanelState('u13', 'pd1u13','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u23'] = 'top';document.getElementById('u24_img').tabIndex = 0;
HookHover('u24', false);
HookClick('u24', false);

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (((GetGlobalVariableValue('Hurry')) == ('Yes')) && ((GetWidgetText('u30')) == ('94025'))) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href='#';

}

if ((GetWidgetText('u30')) == ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

}
else
if (true) {

SetGlobalVariableValue('CanWeShipVar', 'No');

}
});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u28'] = 'top';u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

}
});
gv_vAlignTable['u29'] = 'top';$('#u30').attr('axSubmit', 'u7');

$axure.eventManager.focus('u30', function(e) {

if (true) {

SetWidgetFormText('u30', '');

}
});

$axure.eventManager.blur('u30', function(e) {

if ((GetWidgetText('u30')) == ('')) {

SetWidgetFormText('u30', 'Enter Your ZIP Code…');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);
HookClick('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (((GetGlobalVariableValue('Hurry')) == ('Yes')) && ((GetWidgetText('u30')) == ('94025'))) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href='#';

}

if ((GetWidgetText('u30')) == ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

}
else
if ((GetWidgetText('u30')) != ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'No');

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u16'] = 'top';u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	SetPanelState('u2', 'pd1u2','fade','',500,'swing','down',500);

	SetPanelState('u13', 'pd1u13','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'center';