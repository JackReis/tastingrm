for(var i = 0; i < 162; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (((GetGlobalVariableValue('Shipping')) == ('Free')) && ((GetGlobalVariableValue('HasPROMO1')) == ('No'))) {

	SetPanelState('u82', 'pd2u82','none','',500,'none','',500);

}

if (((GetGlobalVariableValue('Shipping')) == ('Free')) && ((GetGlobalVariableValue('HasPROMO1')) == ('Yes'))) {

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('HasPROMO1')) == ('Yes')) {

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('HasPROMO1')) != ('Yes')) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if (true) {

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

	SetPanelState('u136', 'pd0u136','none','',500,'none','',500);

	SetPanelState('u137', 'pd1u137','none','',500,'swing','left',500);

}

if (true) {

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});

widgetIdToPanelStateChangeFunction['u64'] = function() {
var e = windowEvent;

if (((GetPanelState('u82')) == ('pd1u82')) || ((GetPanelState('u82')) == ('pd3u82'))) {

	MoveWidgetBy('u54', GetNum('0'), GetNum('40'),'none',500);

	MoveWidgetBy('u48', GetNum('0'), GetNum('40'),'none',500);

}

}
gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u10'] = 'top';
$axure.eventManager.focus('u11', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','none','',500,'swing','down',500);

	SetPanelVisibility('u20','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u20','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u21'] = 'top';
$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelVisibility('u20','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u20','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelState('u25', 'pd1u25','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u101'] = 'top';
u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

SetWidgetRichText('u101', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;B.CC</span></p>');

}
});
gv_vAlignTable['u103'] = 'top';
u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

SetWidgetRichText('u101', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;C.DD</span></p>');

}
});
gv_vAlignTable['u105'] = 'top';
u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

SetWidgetRichText('u101', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;D.EE</span></p>');

}
});
gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u31'] = 'top';
$axure.eventManager.focus('u32', function(e) {

if (true) {

	SetPanelState('u25', 'pd0u25','none','',500,'swing','down',500);

	SetPanelVisibility('u41','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u41','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u110'] = 'top';
u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

SetWidgetRichText('u110', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;B.CC</span></p>');

}
});
gv_vAlignTable['u112'] = 'top';
u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

SetWidgetRichText('u110', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;C.DD</span></p>');

}
});
gv_vAlignTable['u114'] = 'top';
u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

SetWidgetRichText('u110', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;D.EE</span></p>');

}
});
gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u42'] = 'top';
$axure.eventManager.mouseover('u43', function(e) {
if (!IsTrueMouseOver('u43',e)) return;
if (true) {

	SetPanelVisibility('u41','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u41','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
document.getElementById('u49_img').tabIndex = 0;
HookHover('u49', false);
HookClick('u49', false);

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (((GetGlobalVariableValue('LoginState')) == ('NewCustomer')) || ((GetGlobalVariableValue('LoginState')) == ('Guest'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest___New_Customer.html');

}

if ((GetGlobalVariableValue('LoginState')) == ('LoggedIn')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u2'] = 'top';u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	SetPanelState('u4', 'pd1u4','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u50'] = 'center';document.getElementById('u51_img').tabIndex = 0;
HookHover('u51', false);
HookClick('u51', false);

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u58'] = 'top';HookHover('u59', false);
HookClick('u59', false);
gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u132'] = 'top';u134.tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

SetWidgetFormText('u131', '' + (GetNum(GetWidgetText('u131')) + 1) + '');

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + ' items in your shopping cart.</span></p>');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + 1) + '');

}
});
u135.tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if ((GetWidgetText('u131')) > Number('0')) {

SetWidgetFormText('u131', '' + (GetWidgetText('u131') - 1) + '');

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart') - 1) + ' items in your shopping cart.</span></p>');

SetGlobalVariableValue('ItemsInCart', '' + (GetGlobalVariableValue('ItemsInCart') - 1) + '');

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'center';$('#u66').attr('axSubmit', 'u67');

$axure.eventManager.focus('u66', function(e) {

if ((GetWidgetText('u66')) == ('Enter Your ZIP Code...')) {

SetWidgetFormText('u66', '');

}
});

$axure.eventManager.blur('u66', function(e) {

if ((GetWidgetText('u66')) == ('')) {

SetWidgetFormText('u66', 'Enter Your ZIP Code...');

}
});
document.getElementById('u67_img').tabIndex = 0;
HookHover('u67', false);
HookClick('u67', false);

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', u67Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u67LinksClick'></div>")
var u67LinksClick = document.getElementById('u67LinksClick');
function u67Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u67LinksClick');
}

InsertBeforeEnd(u67LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u67Clickud35fcdbd0b2c47b79e4c2664b85d24af(event)'>CanShip</div>");
function u67Clickud35fcdbd0b2c47b79e4c2664b85d24af(e)
{

	SetPanelState('u65', 'pd0u65','none','',500,'none','',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	ToggleLinks(e, 'u67LinksClick');
}

InsertBeforeEnd(u67LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u67Clickuc52fe932bd794d15b558c2c4f0dbdc1a(event)'>CantShip</div>");
function u67Clickuc52fe932bd794d15b558c2c4f0dbdc1a(e)
{

	SetPanelState('u65', 'pd0u65','none','',500,'none','',500);

SetGlobalVariableValue('CanWeShipVar', 'No');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell___CantShip.html');

	ToggleLinks(e, 'u67LinksClick');
}
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u149'] = 'center';u70.tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	SetPanelState('u65', 'pd1u65','none','',500,'none','',500);

	SetPanelState('u82', 'pd4u82','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';u75.tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u82', 'pd4u82','none','',500,'none','',500);

SetGlobalVariableValue('HasPROMO1', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u77'] = 'top';$('#u78').attr('axSubmit', 'u79');

$axure.eventManager.focus('u78', function(e) {

if (true) {

SetWidgetFormText('u78', '');

}
});

$axure.eventManager.blur('u78', function(e) {

if ((GetWidgetText('u78')) == ('')) {

SetWidgetFormText('u78', 'Enter A Promo Code…');

}

if ((GetWidgetText('u78')) != ('PROMO1')) {

SetWidgetFormText('u78', 'Not A Valid Promo');
function waitu80512af5bab34e4e89fe46912c65f8c01() {

SetWidgetFormText('u78', 'Enter A Promo Code…');
}
setTimeout(waitu80512af5bab34e4e89fe46912c65f8c01, 3000);

}
});
document.getElementById('u79_img').tabIndex = 0;
HookHover('u79', false);
HookClick('u79', false);

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (((GetWidgetText('u78')) == ('PROMO1')) && ((GetGlobalVariableValue('Shipping')) == ('Free'))) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u74', 'pd1u74','none','',500,'none','',500);

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

	MoveWidgetBy('u48', GetNum('0'), GetNum('40'),'swing',500);

	MoveWidgetBy('u54', GetNum('0'), GetNum('40'),'none',500);

}

if (((GetWidgetText('u78')) == ('PROMO1')) && ((GetGlobalVariableValue('Shipping')) != ('Free'))) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u74', 'pd1u74','none','',500,'none','',500);

	MoveWidgetBy('u48', GetNum('0'), GetNum('40'),'swing',500);

	MoveWidgetBy('u54', GetNum('0'), GetNum('40'),'none',500);

}
});
gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u153'] = 'center';