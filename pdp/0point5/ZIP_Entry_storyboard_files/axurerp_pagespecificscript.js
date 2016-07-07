for(var i = 0; i < 85; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
u80.tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Opens a new window with the Ship To states / explanation of these restrictions."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u15'] = 'center';document.getElementById('u16_img').tabIndex = 0;
HookHover('u16', false);
HookClick('u16', false);

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (((GetGlobalVariableValue('Hurry')) == ('Yes')) && ((GetWidgetText('u39')) == ('94025'))) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href='#';

}

if ((GetWidgetText('u39')) == ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

}
else
if ((GetWidgetText('u39')) != ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'No');

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u25'] = 'top';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelState('u11', 'pd1u11','fade','',500,'swing','down',500);

	SetPanelState('u22', 'pd1u22','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u30'] = 'top';u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	SetPanelState('u22', 'pd0u22','fade','',500,'fade','',500);

	SetPanelState('u11', 'pd0u11','none','',500,'none','',500);

}
});
u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelState('u11', 'pd1u11','none','',500,'none','',500);

	SetPanelState('u22', 'pd1u22','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u32'] = 'top';document.getElementById('u33_img').tabIndex = 0;
HookHover('u33', false);
HookClick('u33', false);

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (((GetGlobalVariableValue('Hurry')) == ('Yes')) && ((GetWidgetText('u39')) == ('94025'))) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href='#';

}

if ((GetWidgetText('u39')) == ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

}
else
if (true) {

SetGlobalVariableValue('CanWeShipVar', 'No');

}
});
gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u37'] = 'top';u38.tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

}
});
gv_vAlignTable['u38'] = 'top';$('#u39').attr('axSubmit', 'u16');

$axure.eventManager.focus('u39', function(e) {

if (true) {

SetWidgetFormText('u39', '');

}
});

$axure.eventManager.blur('u39', function(e) {

if ((GetWidgetText('u39')) == ('')) {

SetWidgetFormText('u39', 'Enter Your ZIP Code…');

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

}
});
gv_vAlignTable['u47'] = 'top';document.getElementById('u48_img').tabIndex = 0;
HookHover('u48', false);
HookClick('u48', false);

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

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
gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u6'] = 'top';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

}
});
gv_vAlignTable['u7'] = 'top';document.getElementById('u8_img').tabIndex = 0;
HookHover('u8', false);
HookClick('u8', false);

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

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
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u58'] = 'top';u59.tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

}
});
gv_vAlignTable['u59'] = 'top';document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);
HookClick('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangeLog.html');

}
});
gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u79'] = 'center';