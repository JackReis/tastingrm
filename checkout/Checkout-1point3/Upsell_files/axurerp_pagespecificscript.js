for(var i = 0; i < 158; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (((GetGlobalVariableValue('Shipping')) == ('Free')) && ((GetGlobalVariableValue('HasPROMO1')) == ('No'))) {

	SetPanelState('u78', 'pd2u78','none','',500,'none','',500);

}

if (((GetGlobalVariableValue('Shipping')) == ('Free')) && ((GetGlobalVariableValue('HasPROMO1')) == ('Yes'))) {

	SetPanelState('u78', 'pd3u78','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('HasPROMO1')) == ('Yes')) {

	SetPanelState('u78', 'pd1u78','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('HasPROMO1')) != ('Yes')) {

	SetPanelState('u78', 'pd0u78','none','',500,'none','',500);

}

if (true) {

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u133', 'pd1u133','none','',500,'swing','left',500);

}

if (true) {

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});

widgetIdToPanelStateChangeFunction['u60'] = function() {
var e = windowEvent;

if (((GetPanelState('u78')) == ('pd1u78')) || ((GetPanelState('u78')) == ('pd3u78'))) {

	MoveWidgetBy('u50', GetNum('0'), GetNum('40'),'none',500);

	MoveWidgetBy('u44', GetNum('0'), GetNum('40'),'none',500);

}

}
gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'top';u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

SetWidgetFormText('u13', '' + (GetNum(GetWidgetText('u13')) + 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if ((GetWidgetText('u13')) > Number('0')) {

SetWidgetFormText('u13', '' + (GetWidgetText('u13') - 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';
u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

SetWidgetRichText('u97', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;C.DD</span></p>');

}
});
gv_vAlignTable['u101'] = 'top';
u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

SetWidgetRichText('u97', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;D.EE</span></p>');

}
});
gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u106'] = 'top';
u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

SetWidgetRichText('u106', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;B.CC</span></p>');

}
});
gv_vAlignTable['u108'] = 'top';
u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

SetWidgetRichText('u106', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;C.DD</span></p>');

}
});
gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'top';u35.tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

SetWidgetFormText('u32', '' + (GetNum(GetWidgetText('u32')) + 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u36.tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if ((GetWidgetText('u32')) > Number('0')) {

SetWidgetFormText('u32', '' + (GetWidgetText('u32') - 1) + '');

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u110'] = 'top';
u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

SetWidgetRichText('u106', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;D.EE</span></p>');

}
});
gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u118'] = 'top';document.getElementById('u45_img').tabIndex = 0;
HookHover('u45', false);
HookClick('u45', false);

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (((GetGlobalVariableValue('LoginState')) == ('NewCustomer')) || ((GetGlobalVariableValue('LoginState')) == ('Guest'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest___New_Customer.html');

}

if ((GetGlobalVariableValue('LoginState')) == ('LoggedIn')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u46'] = 'center';document.getElementById('u47_img').tabIndex = 0;
HookHover('u47', false);
HookClick('u47', false);

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u54'] = 'top';HookHover('u55', false);
HookClick('u55', false);
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u59'] = 'center';u130.tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

SetWidgetFormText('u127', '' + (GetNum(GetWidgetText('u127')) + 1) + '');

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + ' items in your shopping cart.</span></p>');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u131.tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if ((GetWidgetText('u127')) > Number('0')) {

SetWidgetFormText('u127', '' + (GetWidgetText('u127') - 1) + '');

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart') - 1) + ' items in your shopping cart.</span></p>');

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u97'] = 'top';
u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

SetWidgetRichText('u97', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;B.CC</span></p>');

}
});
gv_vAlignTable['u99'] = 'top';$('#u62').attr('axSubmit', 'u63');

$axure.eventManager.focus('u62', function(e) {

if ((GetWidgetText('u62')) == ('Enter Your ZIP Code...')) {

SetWidgetFormText('u62', '');

}
});

$axure.eventManager.blur('u62', function(e) {

if ((GetWidgetText('u62')) == ('')) {

SetWidgetFormText('u62', 'Enter Your ZIP Code...');

}
});
document.getElementById('u63_img').tabIndex = 0;
HookHover('u63', false);
HookClick('u63', false);

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', u63Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u63LinksClick'></div>")
var u63LinksClick = document.getElementById('u63LinksClick');
function u63Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u63LinksClick');
}

InsertBeforeEnd(u63LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u63Clickud35fcdbd0b2c47b79e4c2664b85d24af(event)'>CanShip</div>");
function u63Clickud35fcdbd0b2c47b79e4c2664b85d24af(e)
{

	SetPanelState('u61', 'pd0u61','none','',500,'none','',500);

	SetPanelState('u78', 'pd0u78','none','',500,'none','',500);

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	ToggleLinks(e, 'u63LinksClick');
}

InsertBeforeEnd(u63LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u63Clickuc52fe932bd794d15b558c2c4f0dbdc1a(event)'>CantShip</div>");
function u63Clickuc52fe932bd794d15b558c2c4f0dbdc1a(e)
{

	SetPanelState('u61', 'pd0u61','none','',500,'none','',500);

SetGlobalVariableValue('CanWeShipVar', 'No');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell___CantShip.html');

	ToggleLinks(e, 'u63LinksClick');
}
gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u65'] = 'top';u66.tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	SetPanelState('u61', 'pd1u61','none','',500,'none','',500);

	SetPanelState('u78', 'pd4u78','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u149'] = 'center';u71.tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	SetPanelState('u70', 'pd0u70','none','',500,'none','',500);

	SetPanelState('u78', 'pd4u78','none','',500,'none','',500);

SetGlobalVariableValue('HasPROMO1', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';$('#u74').attr('axSubmit', 'u75');

$axure.eventManager.focus('u74', function(e) {

if (true) {

SetWidgetFormText('u74', '');

}
});

$axure.eventManager.blur('u74', function(e) {

if ((GetWidgetText('u74')) == ('')) {

SetWidgetFormText('u74', 'Enter A Promo Code…');

}

if ((GetWidgetText('u74')) != ('PROMO1')) {

SetWidgetFormText('u74', 'Not A Valid Promo');
function waitu80512af5bab34e4e89fe46912c65f8c01() {

SetWidgetFormText('u74', 'Enter A Promo Code…');
}
setTimeout(waitu80512af5bab34e4e89fe46912c65f8c01, 3000);

}
});
document.getElementById('u75_img').tabIndex = 0;
HookHover('u75', false);
HookClick('u75', false);

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (((GetWidgetText('u74')) == ('PROMO1')) && ((GetGlobalVariableValue('Shipping')) == ('Free'))) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u70', 'pd1u70','none','',500,'none','',500);

	SetPanelState('u78', 'pd3u78','none','',500,'none','',500);

	MoveWidgetBy('u44', GetNum('0'), GetNum('40'),'swing',500);

	MoveWidgetBy('u50', GetNum('0'), GetNum('40'),'none',500);

}

if (((GetWidgetText('u74')) == ('PROMO1')) && ((GetGlobalVariableValue('Shipping')) != ('Free'))) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u78', 'pd1u78','none','',500,'none','',500);

	SetPanelState('u70', 'pd1u70','none','',500,'none','',500);

	MoveWidgetBy('u44', GetNum('0'), GetNum('40'),'swing',500);

	MoveWidgetBy('u50', GetNum('0'), GetNum('40'),'none',500);

}
});
gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u152'] = 'top';