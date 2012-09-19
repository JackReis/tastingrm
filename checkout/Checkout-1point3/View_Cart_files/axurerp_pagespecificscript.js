for(var i = 0; i < 114; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';document.getElementById('u89_img').tabIndex = 0;
HookHover('u89', false);
HookClick('u89', false);

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Account.html');

}
});
gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u110'] = 'center';document.getElementById('u111_img').tabIndex = 0;
HookHover('u111', false);
HookClick('u111', false);

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u20'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

SetWidgetFormText('u19', '' + (GetNum(GetWidgetText('u19')) + 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if ((GetWidgetText('u19')) > Number('0')) {

SetWidgetFormText('u19', '' + (GetWidgetText('u19') - 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u103'] = 'top';u105.tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

SetWidgetFormText('u102', '' + (GetNum(GetWidgetText('u102')) + 1) + '');

;

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if ((GetWidgetText('u102')) > Number('0')) {

SetWidgetFormText('u102', '' + (GetWidgetText('u102') - 1) + '');

;

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
document.getElementById('u109_img').tabIndex = 0;
HookHover('u109', false);
HookClick('u109', false);

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (((GetGlobalVariableValue('LoginState')) == ('NewCustomer')) || ((GetGlobalVariableValue('LoginState')) == ('Guest'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest___New_Customer.html');

}

if ((GetGlobalVariableValue('LoginState')) == ('LoggedIn')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u99'] = 'center';u41.tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

SetWidgetFormText('u38', '' + (GetNum(GetWidgetText('u38')) + 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u42.tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if ((GetWidgetText('u38')) > Number('0')) {

SetWidgetFormText('u38', '' + (GetWidgetText('u38') - 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';$('#u50').attr('axSubmit', 'u51');

$axure.eventManager.focus('u50', function(e) {

if ((GetWidgetText('u50')) == ('Enter Your ZIP Code...')) {

SetWidgetFormText('u50', '');

}
});

$axure.eventManager.blur('u50', function(e) {

if ((GetWidgetText('u50')) == ('')) {

SetWidgetFormText('u50', 'Enter Your ZIP Code...');

}
});
document.getElementById('u51_img').tabIndex = 0;
HookHover('u51', false);
HookClick('u51', false);

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (((GetWidgetText('u50')) == ('94025')) && ((GetGlobalVariableValue('HasPROMO1')) == ('Yes'))) {

	SetPanelState('u49', 'pd0u49','none','',500,'none','',500);

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u66', 'pd0u66','none','',500,'none','',500);

}
else
if ((GetWidgetText('u50')) == ('94025')) {

	SetPanelState('u49', 'pd0u49','none','',500,'none','',500);

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	SetPanelState('u78', 'pd0u78','none','',500,'none','',500);

}

if ((GetWidgetText('u50')) != ('94025')) {

SetGlobalVariableValue('CanWeShipVar', 'No');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ChangedZIP___CantShip.html');

}
});
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u53'] = 'top';u54.tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	SetPanelState('u49', 'pd1u49','none','',500,'none','',500);

	SetPanelState('u78', 'pd1u78','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u57'] = 'top';u59.tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	SetPanelState('u58', 'pd0u58','none','',500,'none','',500);

	SetPanelState('u65', 'pd0u65','none','',500,'none','',500);

SetGlobalVariableValue('HasPROMO1', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';$('#u62').attr('axSubmit', 'u63');

$axure.eventManager.focus('u62', function(e) {

if (true) {

SetWidgetFormText('u62', '');

}
});

$axure.eventManager.blur('u62', function(e) {

if ((GetWidgetText('u62')) != ('PROMO1')) {

SetWidgetFormText('u62', 'Not A Valid Code.');
function waitu3374eb2f5cb048b78824635c8639d6da1() {

SetWidgetFormText('u62', 'Enter A Promo Code…');
}
setTimeout(waitu3374eb2f5cb048b78824635c8639d6da1, 3000);

}
});
document.getElementById('u63_img').tabIndex = 0;
HookHover('u63', false);
HookClick('u63', false);

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if ((GetWidgetText('u62')) == ('PROMO1')) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	MoveWidgetBy('u88', GetNum('0'), GetNum('30px'),'swing',500);

	SetPanelState('u58', 'pd1u58','none','',500,'none','',500);

	SetPanelState('u65', 'pd1u65','none','',500,'none','',500);

	SetPanelState('u66', 'pd0u66','none','',500,'none','',500);

	BringToFront("u66");

}

if ((GetWidgetText('u62')) != ('PROMO1')) {

SetWidgetFormText('u62', 'Not A Valid Code.');
function waitu3e4f94797b46405fb13165bf84851d981() {

SetWidgetFormText('u62', 'Enter A Promo Code…');
}
setTimeout(waitu3e4f94797b46405fb13165bf84851d981, 3000);

}
});
gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u77'] = 'top';