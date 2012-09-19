for(var i = 0; i < 129; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('HasPROMO1')) == ('Yes')) {

}

if ((GetGlobalVariableValue('HasPROMO1')) == ('No')) {

}

if (true) {

SetWidgetRichText('u7', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

if ((GetGlobalVariableValue('CanWeShipVar')) == ('No')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangedZIP___CantShip.html');

}

if (true) {

SetWidgetRichText('u7', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u15'] = 'top';
$axure.eventManager.focus('u16', function(e) {

if (true) {

	SetPanelState('u9', 'pd1u9','none','',500,'swing','down',500);

	SetPanelVisibility('u25','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u25','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u112'] = 'top';
$axure.eventManager.mouseover('u113', function(e) {
if (!IsTrueMouseOver('u113',e)) return;
if (true) {

	SetPanelVisibility('u111','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u111','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u26'] = 'top';
$axure.eventManager.mouseover('u27', function(e) {
if (!IsTrueMouseOver('u27',e)) return;
if (true) {

	SetPanelVisibility('u25','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u25','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
gv_vAlignTable['u101'] = 'top';
$axure.eventManager.focus('u102', function(e) {

if (true) {

	SetPanelState('u95', 'pd1u95','none','',500,'swing','down',500);

	SetPanelVisibility('u111','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u111','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'top';
$axure.eventManager.focus('u37', function(e) {

if (true) {

	SetPanelState('u30', 'pd1u30','none','',500,'swing','down',500);

	SetPanelVisibility('u46','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u46','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u97'] = 'top';document.getElementById('u117_img').tabIndex = 0;
HookHover('u117', false);
HookClick('u117', false);

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (((GetGlobalVariableValue('LoginState')) == ('NewCustomer')) || ((GetGlobalVariableValue('LoginState')) == ('Guest'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest___New_Customer.html');

}

if ((GetGlobalVariableValue('LoginState')) == ('LoggedIn')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u118'] = 'center';document.getElementById('u119_img').tabIndex = 0;
HookHover('u119', false);
HookClick('u119', false);

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u47'] = 'top';
$axure.eventManager.mouseover('u48', function(e) {
if (!IsTrueMouseOver('u48',e)) return;
if (true) {

	SetPanelVisibility('u46','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u46','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
gv_vAlignTable['u120'] = 'center';document.getElementById('u123_img').tabIndex = 0;
HookHover('u123', false);
HookClick('u123', false);

u123.style.cursor = 'pointer';
$axure.eventManager.click('u123', function(e) {

if (((GetGlobalVariableValue('LoginState')) == ('NewCustomer')) || ((GetGlobalVariableValue('LoginState')) == ('Guest'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest___New_Customer.html');

}

if ((GetGlobalVariableValue('LoginState')) == ('LoggedIn')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u124'] = 'center';document.getElementById('u125_img').tabIndex = 0;
HookHover('u125', false);
HookClick('u125', false);

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';$('#u53').attr('axSubmit', 'u54');

$axure.eventManager.focus('u53', function(e) {

if ((GetWidgetText('u53')) == ('Enter Your ZIP Code...')) {

SetWidgetFormText('u53', '');

}
});

$axure.eventManager.blur('u53', function(e) {

if ((GetWidgetText('u53')) == ('')) {

SetWidgetFormText('u53', 'Enter Your ZIP Code...');

}
});
document.getElementById('u54_img').tabIndex = 0;
HookHover('u54', false);
HookClick('u54', false);

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (((GetWidgetText('u53')) == ('94025')) && ((GetGlobalVariableValue('HasPROMO1')) == ('Yes'))) {

	SetPanelState('u52', 'pd0u52','none','',500,'none','',500);

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u69', 'pd0u69','none','',500,'none','',500);

}
else
if ((GetWidgetText('u53')) == ('94025')) {

	SetPanelState('u52', 'pd0u52','none','',500,'none','',500);

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

}

if ((GetWidgetText('u53')) != ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'No');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangedZIP___CantShip.html');

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u56'] = 'top';u57.tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	SetPanelState('u52', 'pd1u52','none','',500,'none','',500);

	SetPanelState('u81', 'pd1u81','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u60'] = 'top';u62.tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	SetPanelState('u61', 'pd0u61','none','',500,'none','',500);

	SetPanelState('u68', 'pd0u68','none','',500,'none','',500);

SetGlobalVariableValue('HasPROMO1', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';$('#u65').attr('axSubmit', 'u66');

$axure.eventManager.focus('u65', function(e) {

if (true) {

SetWidgetFormText('u65', '');

}
});

$axure.eventManager.blur('u65', function(e) {

if ((GetWidgetText('u65')) != ('PROMO1')) {

SetWidgetFormText('u65', 'Not A Valid Code.');
function waitu3374eb2f5cb048b78824635c8639d6da1() {

SetWidgetFormText('u65', 'Enter A Promo Code…');
}
setTimeout(waitu3374eb2f5cb048b78824635c8639d6da1, 3000);

}
});
document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);
HookClick('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if ((GetWidgetText('u65')) == ('PROMO1')) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	MoveWidgetBy('u91', GetNum('0'), GetNum('30px'),'swing',500);

	SetPanelState('u61', 'pd1u61','none','',500,'none','',500);

	SetPanelState('u68', 'pd1u68','none','',500,'none','',500);

	SetPanelState('u69', 'pd0u69','none','',500,'none','',500);

	BringToFront("u69");

}

if ((GetWidgetText('u65')) != ('PROMO1')) {

SetWidgetFormText('u65', 'Not A Valid Code.');
function waitu3e4f94797b46405fb13165bf84851d981() {

SetWidgetFormText('u65', 'Enter A Promo Code…');
}
setTimeout(waitu3e4f94797b46405fb13165bf84851d981, 3000);

}
});
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u79'] = 'top';