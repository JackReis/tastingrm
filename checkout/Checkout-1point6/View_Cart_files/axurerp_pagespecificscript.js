for(var i = 0; i < 123; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('HasPROMO1')) == ('Yes')) {

}

if ((GetGlobalVariableValue('HasPROMO1')) == ('No')) {

}

if (true) {

SetWidgetRichText('u8', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

if ((GetGlobalVariableValue('CanWeShipVar')) == ('No')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangedZIP___CantShip.html');

}

if (true) {

SetWidgetRichText('u8', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	SetPanelState('u10', 'pd1u10','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'top';
$axure.eventManager.focus('u17', function(e) {

if (true) {

	SetPanelState('u10', 'pd0u10','none','',500,'swing','down',500);

	SetPanelVisibility('u26','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u26','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u113'] = 'top';
$axure.eventManager.mouseover('u114', function(e) {
if (!IsTrueMouseOver('u114',e)) return;
if (true) {

	SetPanelVisibility('u112','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u112','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'top';
$axure.eventManager.mouseover('u28', function(e) {
if (!IsTrueMouseOver('u28',e)) return;
if (true) {

	SetPanelVisibility('u26','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u26','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u102'] = 'top';
$axure.eventManager.focus('u103', function(e) {

if (true) {

	SetPanelState('u96', 'pd0u96','none','',500,'swing','down',500);

	SetPanelVisibility('u112','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u112','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u107'] = 'top';u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelState('u31', 'pd1u31','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'top';
$axure.eventManager.focus('u38', function(e) {

if (true) {

	SetPanelState('u31', 'pd0u31','none','',500,'swing','down',500);

	SetPanelVisibility('u47','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u47','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u94'] = 'top';u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	SetPanelState('u96', 'pd1u96','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u98'] = 'top';document.getElementById('u118_img').tabIndex = 0;
HookHover('u118', false);
HookClick('u118', false);

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (((GetGlobalVariableValue('LoginState')) == ('NewCustomer')) || ((GetGlobalVariableValue('LoginState')) == ('Guest'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest___New_Customer.html');

}

if ((GetGlobalVariableValue('LoginState')) == ('LoggedIn')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u48'] = 'top';
$axure.eventManager.mouseover('u49', function(e) {
if (!IsTrueMouseOver('u49',e)) return;
if (true) {

	SetPanelVisibility('u47','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u47','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
document.getElementById('u120_img').tabIndex = 0;
HookHover('u120', false);
HookClick('u120', false);

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';$('#u54').attr('axSubmit', 'u55');

$axure.eventManager.focus('u54', function(e) {

if ((GetWidgetText('u54')) == ('Enter Your ZIP Code...')) {

SetWidgetFormText('u54', '');

}
});

$axure.eventManager.blur('u54', function(e) {

if ((GetWidgetText('u54')) == ('')) {

SetWidgetFormText('u54', 'Enter Your ZIP Code...');

}
});
document.getElementById('u55_img').tabIndex = 0;
HookHover('u55', false);
HookClick('u55', false);

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (((GetWidgetText('u54')) == ('94025')) && ((GetGlobalVariableValue('HasPROMO1')) == ('Yes'))) {

	SetPanelState('u53', 'pd0u53','none','',500,'none','',500);

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u70', 'pd0u70','none','',500,'none','',500);

}
else
if ((GetWidgetText('u54')) == ('94025')) {

	SetPanelState('u53', 'pd0u53','none','',500,'none','',500);

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if ((GetWidgetText('u54')) != ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'No');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangedZIP___CantShip.html');

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u57'] = 'top';u58.tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	SetPanelState('u53', 'pd1u53','none','',500,'none','',500);

	SetPanelState('u82', 'pd1u82','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';u63.tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

	SetPanelState('u69', 'pd0u69','none','',500,'none','',500);

SetGlobalVariableValue('HasPROMO1', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u65'] = 'top';$('#u66').attr('axSubmit', 'u67');

$axure.eventManager.focus('u66', function(e) {

if (true) {

SetWidgetFormText('u66', '');

}
});

$axure.eventManager.blur('u66', function(e) {

if ((GetWidgetText('u66')) != ('PROMO1')) {

SetWidgetFormText('u66', 'Not A Valid Code.');
function waitu3374eb2f5cb048b78824635c8639d6da1() {

SetWidgetFormText('u66', 'Enter A Promo Code…');
}
setTimeout(waitu3374eb2f5cb048b78824635c8639d6da1, 3000);

}
});
document.getElementById('u67_img').tabIndex = 0;
HookHover('u67', false);
HookClick('u67', false);

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if ((GetWidgetText('u66')) == ('PROMO1')) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	MoveWidgetBy('u92', GetNum('0'), GetNum('30px'),'swing',500);

	SetPanelState('u62', 'pd1u62','none','',500,'none','',500);

	SetPanelState('u69', 'pd1u69','none','',500,'none','',500);

	SetPanelState('u70', 'pd0u70','none','',500,'none','',500);

	BringToFront("u70");

}

if ((GetWidgetText('u66')) != ('PROMO1')) {

SetWidgetFormText('u66', 'Not A Valid Code.');
function waitu3e4f94797b46405fb13165bf84851d981() {

SetWidgetFormText('u66', 'Enter A Promo Code…');
}
setTimeout(waitu3e4f94797b46405fb13165bf84851d981, 3000);

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u79'] = 'top';