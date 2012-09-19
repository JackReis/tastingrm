for(var i = 0; i < 134; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u67', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'top';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

SetWidgetFormText('u11', '' + (GetNum(GetWidgetText('u11')) + 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if ((GetWidgetText('u11')) > Number('0')) {

SetWidgetFormText('u11', '' + (GetWidgetText('u11') - 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';
u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

SetWidgetRichText('u99', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;B.CC</span></p>');

}
});
gv_vAlignTable['u101'] = 'top';
u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

SetWidgetRichText('u99', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;C.DD</span></p>');

}
});
gv_vAlignTable['u103'] = 'top';
u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

SetWidgetRichText('u99', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;D.EE</span></p>');

}
});
gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u108'] = 'top';
u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

SetWidgetRichText('u108', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;B.CC</span></p>');

}
});
gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u31'] = 'top';u33.tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

SetWidgetFormText('u30', '' + (GetNum(GetWidgetText('u30')) + 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if ((GetWidgetText('u30')) > Number('0')) {

SetWidgetFormText('u30', '' + (GetWidgetText('u30') - 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u110'] = 'top';
u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

SetWidgetRichText('u108', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;C.DD</span></p>');

}
});
gv_vAlignTable['u112'] = 'top';
u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

SetWidgetRichText('u108', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;D.EE</span></p>');

}
});
gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u49'] = 'top';u121.tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

	SetPanelState('u120', 'pd0u120','none','',500,'none','',500);

SetGlobalVariableValue('HasPROMO1', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u123'] = 'top';$('#u124').attr('axSubmit', 'u125');

$axure.eventManager.focus('u124', function(e) {

if (true) {

SetWidgetFormText('u124', '');

}
});

$axure.eventManager.blur('u124', function(e) {

if ((GetWidgetText('u124')) == ('')) {

SetWidgetFormText('u124', 'Enter A Promo Code…');

}

if ((GetWidgetText('u124')) != ('PROMO1')) {

SetWidgetFormText('u124', 'Not A Valid Promo');
function waitu7f8af7e9ec9c47039f668167a687af041() {

SetWidgetFormText('u124', 'Enter A Promo Code…');
}
setTimeout(waitu7f8af7e9ec9c47039f668167a687af041, 3000);

}
});
document.getElementById('u125_img').tabIndex = 0;
HookHover('u125', false);
HookClick('u125', false);

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (((GetWidgetText('u124')) == ('PROMO1')) && ((GetGlobalVariableValue('Shipping')) == ('Free'))) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u120', 'pd1u120','none','',500,'none','',500);

	SetPanelState('u80', 'pd3u80','none','',500,'none','',500);

	MoveWidgetBy('u59', GetNum('0'), GetNum('15'),'swing',500);

}

if ((GetWidgetText('u124')) != ('PROMO1')) {

SetWidgetFormText('u124', 'Not a valid promo code.');
function waitu5bc762abb6644266854ef8cf9f58a3661() {

SetWidgetFormText('u124', 'Enter A Promo Code…');

	MoveWidgetBy('u59', GetNum('0'), GetNum('-15'),'swing',500);
}
setTimeout(waitu5bc762abb6644266854ef8cf9f58a3661, 3000);

}

if (((GetWidgetText('u124')) == ('PROMO1')) && ((GetGlobalVariableValue('Shipping')) != ('Free'))) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u120', 'pd1u120','none','',500,'none','',500);

	SetPanelState('u80', 'pd1u80','none','',500,'none','',500);

	MoveWidgetBy('u59', GetNum('0'), GetNum('15'),'swing',500);

}
});
gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u53'] = 'top';HookHover('u54', false);
HookClick('u54', false);
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u99'] = 'top';document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);
HookClick('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (((GetGlobalVariableValue('LoginState')) == ('NewCustomer')) || ((GetGlobalVariableValue('LoginState')) == ('Guest'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest___New_Customer.html');

}

if ((GetGlobalVariableValue('LoginState')) == ('LoggedIn')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u61'] = 'center';document.getElementById('u62_img').tabIndex = 0;
HookHover('u62', false);
HookClick('u62', false);

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u67'] = 'top';$('#u71').attr('axSubmit', 'u72');

$axure.eventManager.focus('u71', function(e) {

if ((GetWidgetText('u71')) == ('Enter Your ZIP Code...')) {

SetWidgetFormText('u71', '');

}
});

$axure.eventManager.blur('u71', function(e) {

if ((GetWidgetText('u71')) == ('')) {

SetWidgetFormText('u71', 'Enter Your ZIP Code...');

}
});
document.getElementById('u72_img').tabIndex = 0;
HookHover('u72', false);
HookClick('u72', false);

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', u72Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u72LinksClick'></div>")
var u72LinksClick = document.getElementById('u72LinksClick');
function u72Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u72LinksClick');
}

InsertBeforeEnd(u72LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u72Clicku8c50d826bc004dc7b74b29fa907a0f9d(event)'>CanShip</div>");
function u72Clicku8c50d826bc004dc7b74b29fa907a0f9d(e)
{

SetGlobalVariableValue('ZIPVar', GetWidgetText('u71'));

	SetPanelState('u70', 'pd0u70','none','',500,'none','',500);

;

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


	SetPanelState('u80', 'pd0u80','none','',500,'none','',500);

	ToggleLinks(e, 'u72LinksClick');
}

InsertBeforeEnd(u72LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u72Clicku6ca16d5089da4c17888093b14dd8c373(event)'>CantShip</div>");
function u72Clicku6ca16d5089da4c17888093b14dd8c373(e)
{

SetGlobalVariableValue('ZIPVar', GetWidgetText('u71'));

	SetPanelState('u70', 'pd0u70','none','',500,'none','',500);

;

SetGlobalVariableValue('CanWeShipVar', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


	SetPanelState('u80', 'pd0u80','none','',500,'none','',500);

	ToggleLinks(e, 'u72LinksClick');
}
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u74'] = 'top';u75.tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	SetPanelState('u70', 'pd1u70','none','',500,'none','',500);

	SetPanelState('u80', 'pd4u80','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u78'] = 'top';