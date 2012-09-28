for(var i = 0; i < 70; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u59'] = 'top';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	SetPanelState('u11', 'pd0u11','fade','',500,'fade','',500);

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u11', 'pd1u11','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u21'] = 'top';document.getElementById('u22_img').tabIndex = 0;
HookHover('u22', false);
HookClick('u22', false);

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (((GetGlobalVariableValue('Hurry')) == ('Yes')) && ((GetWidgetText('u28')) == ('94025'))) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href='#';

}

if ((GetWidgetText('u28')) == ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

}
else
if (true) {

SetGlobalVariableValue('CanWeShipVar', 'No');

}
});
gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u26'] = 'top';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

}
});
gv_vAlignTable['u27'] = 'top';$('#u28').attr('axSubmit', 'u5');

$axure.eventManager.focus('u28', function(e) {

if (true) {

SetWidgetFormText('u28', '');

}
});

$axure.eventManager.blur('u28', function(e) {

if ((GetWidgetText('u28')) == ('')) {

SetWidgetFormText('u28', 'Enter Your ZIP Code…');

}
});
gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u68'] = 'center';u69.tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Opens a new window with the Ship To states / explanation of these restrictions."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u35'] = 'top';u36.tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

}
});
gv_vAlignTable['u36'] = 'top';document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);
HookClick('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (false) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangeLog.html');

}

if (false) {

SetGlobalVariableValue('HasItem', 'Yes');

SetGlobalVariableValue('CanWeShipVar', 'Yes');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum() + GetNum(GetGlobalVariableValue('ItemsInCart'))) + '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangeLog.html');

}
});
gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';document.getElementById('u5_img').tabIndex = 0;
HookHover('u5', false);
HookClick('u5', false);

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (((GetGlobalVariableValue('Hurry')) == ('Yes')) && ((GetWidgetText('u28')) == ('94025'))) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href='#';

}

if ((GetWidgetText('u28')) == ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

}
else
if ((GetWidgetText('u28')) != ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'No');

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u44'] = 'center';u48.tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

}
});
gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u47'] = 'top';document.getElementById('u49_img').tabIndex = 0;
HookHover('u49', false);
HookClick('u49', false);

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangeLog.html');

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','fade','',500,'swing','down',500);

	SetPanelState('u11', 'pd1u11','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';