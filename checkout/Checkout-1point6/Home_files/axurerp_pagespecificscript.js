for(var i = 0; i < 95; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('ItemsInCart')) != ('0')) {

SetWidgetRichText('u78', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">CHECKOUT (</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('ItemsInCart')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">)</span></p>');

}

if ((GetWidgetText('u77')) == ('CHECKOUT ()')) {

SetWidgetRichText('u78', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">CHECKOUT (</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">0</span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">)</span></p>');

}

if ((GetGlobalVariableValue('CanWeShipVar')) == ('Yes')) {

	SetPanelState('u81', 'pd1u81','none','',500,'none','',500);

}

});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u89'] = 'top';document.getElementById('u90_img').tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

SetWidgetFormText('u94', '' + (GetNum(GetWidgetText('u94')) + 1) + '');

SetGlobalVariableValue('ItemsToAdd', '[[ItemsToAddVar + 1]]');

}
});
gv_vAlignTable['u91'] = 'top';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if ((GetWidgetText('u94')) > Number('1')) {

SetWidgetFormText('u94', '' + (GetWidgetText('u94') - 1) + '');

SetGlobalVariableValue('ItemsToAdd', '[[ItemsToAddVar - 1]]');

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	SetPanelVisibility('u2','hidden','none',500);

}
});
gv_vAlignTable['u12'] = 'top';document.getElementById('u13_img').tabIndex = 0;
HookHover('u13', false);
HookClick('u13', false);

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (false) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}

if (false) {

SetGlobalVariableValue('HasItem', 'Yes');

SetGlobalVariableValue('CanWeShipVar', 'Yes');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum() + GetNum(GetGlobalVariableValue('ItemsInCart'))) + '');

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u25'] = 'top';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

	SetPanelVisibility('u2','hidden','none',500);

}
});
gv_vAlignTable['u26'] = 'top';document.getElementById('u27_img').tabIndex = 0;
HookHover('u27', false);
HookClick('u27', false);

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

	SetPanelVisibility('u2','hidden','none',500);

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'center';document.getElementById('u38_img').tabIndex = 0;
HookHover('u38', false);
HookClick('u38', false);

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (((GetGlobalVariableValue('Hurry')) == ('Yes')) && ((GetWidgetText('u61')) == ('94025'))) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('View_Cart.html');

}

if ((GetWidgetText('u61')) == ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u2', 'pd2u2','none','',500,'none','',500);

}
else
if ((GetWidgetText('u61')) != ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'No');

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u47'] = 'top';u48.tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	SetPanelState('u33', 'pd1u33','fade','',500,'swing','down',500);

	SetPanelState('u44', 'pd1u44','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u52'] = 'top';u53.tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	SetPanelState('u44', 'pd0u44','fade','',500,'fade','',500);

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);

}
});
u54.tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	SetPanelState('u33', 'pd1u33','none','',500,'none','',500);

	SetPanelState('u44', 'pd1u44','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u54'] = 'top';document.getElementById('u55_img').tabIndex = 0;
HookHover('u55', false);
HookClick('u55', false);

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (((GetGlobalVariableValue('Hurry')) == ('Yes')) && ((GetWidgetText('u61')) == ('94025'))) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('View_Cart.html');

}

if ((GetWidgetText('u61')) == ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u2', 'pd2u2','none','',500,'none','',500);

}
else
if (true) {

SetGlobalVariableValue('CanWeShipVar', 'No');

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';u60.tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	SetPanelVisibility('u2','hidden','none',500);

}
});
gv_vAlignTable['u60'] = 'top';$('#u61').attr('axSubmit', 'u38');

$axure.eventManager.focus('u61', function(e) {

if (true) {

SetWidgetFormText('u61', '');

}
});

$axure.eventManager.blur('u61', function(e) {

if ((GetWidgetText('u61')) == ('')) {

SetWidgetFormText('u61', 'Enter Your ZIP Code…');

}
});
gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u71'] = 'top';u72.tabIndex = 0;

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	SetPanelVisibility('u62','hidden','none',500);

}
});
gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u74'] = 'top';document.getElementById('u75_img').tabIndex = 0;
HookHover('u75', false);
HookClick('u75', false);

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	SetPanelVisibility('u62','hidden','none',500);

}
});
gv_vAlignTable['u76'] = 'center';document.getElementById('u77_img').tabIndex = 0;
HookHover('u77', false);
HookClick('u77', false);

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (((GetGlobalVariableValue('HasItem')) == ('Yes')) || ((GetGlobalVariableValue('ItemsInCart')) > Number('0'))) {

SetGlobalVariableValue('ZIPVar', '94025');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('View_Cart.html');

}

if (((GetGlobalVariableValue('HasItem')) != ('Yes')) && ((GetGlobalVariableValue('ItemsInCart')) < Number('1'))) {

	SetPanelVisibility('u62','','none',500);

	BringToFront("u62");

}
});
gv_vAlignTable['u78'] = 'center';document.getElementById('u79_img').tabIndex = 0;
HookHover('u79', false);
HookClick('u79', false);

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	SetPanelVisibility('u2','','none',500);

	BringToFront("u2");

}

if ((GetGlobalVariableValue('CanWeShipVar')) == ('Yes')) {

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + GetNum(GetGlobalVariableValue('ItemsToAdd'))) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
