for(var i = 0; i < 138; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u71', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'top';
$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u18','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u18','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	SetPanelState('u23', 'pd1u23','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u103'] = 'top';
u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

SetWidgetRichText('u103', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;B.CC</span></p>');

}
});
gv_vAlignTable['u105'] = 'top';
u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

SetWidgetRichText('u103', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;C.DD</span></p>');

}
});
gv_vAlignTable['u107'] = 'top';
u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

SetWidgetRichText('u103', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;D.EE</span></p>');

}
});
gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u127'] = 'top';$('#u128').attr('axSubmit', 'u129');

$axure.eventManager.focus('u128', function(e) {

if (true) {

SetWidgetFormText('u128', '');

}
});

$axure.eventManager.blur('u128', function(e) {

if ((GetWidgetText('u128')) == ('')) {

SetWidgetFormText('u128', 'Enter A Promo Code…');

}

if ((GetWidgetText('u128')) != ('PROMO1')) {

SetWidgetFormText('u128', 'Not A Valid Promo');
function waitu7f8af7e9ec9c47039f668167a687af041() {

SetWidgetFormText('u128', 'Enter A Promo Code…');
}
setTimeout(waitu7f8af7e9ec9c47039f668167a687af041, 3000);

}
});
document.getElementById('u129_img').tabIndex = 0;
HookHover('u129', false);
HookClick('u129', false);

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (((GetWidgetText('u128')) == ('PROMO1')) && ((GetGlobalVariableValue('Shipping')) == ('Free'))) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u124', 'pd1u124','none','',500,'none','',500);

	SetPanelState('u84', 'pd3u84','none','',500,'none','',500);

	MoveWidgetBy('u63', GetNum('0'), GetNum('15'),'swing',500);

}

if ((GetWidgetText('u128')) != ('PROMO1')) {

SetWidgetFormText('u128', 'Not a valid promo code.');
function waitu5bc762abb6644266854ef8cf9f58a3661() {

SetWidgetFormText('u128', 'Enter A Promo Code…');

	MoveWidgetBy('u63', GetNum('0'), GetNum('-15'),'swing',500);
}
setTimeout(waitu5bc762abb6644266854ef8cf9f58a3661, 3000);

}

if (((GetWidgetText('u128')) == ('PROMO1')) && ((GetGlobalVariableValue('Shipping')) != ('Free'))) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u124', 'pd1u124','none','',500,'none','',500);

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

	MoveWidgetBy('u63', GetNum('0'), GetNum('15'),'swing',500);

}
});

$axure.eventManager.focus('u30', function(e) {

if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'swing','down',500);

	SetPanelVisibility('u39','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u39','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u112'] = 'top';
u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

SetWidgetRichText('u112', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;B.CC</span></p>');

}
});
gv_vAlignTable['u114'] = 'top';
u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

SetWidgetRichText('u112', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;C.DD</span></p>');

}
});
gv_vAlignTable['u116'] = 'top';
u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

SetWidgetRichText('u112', '<p style="text-align:right;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">&#36;D.EE</span></p>');

}
});
gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u40'] = 'top';
$axure.eventManager.mouseover('u41', function(e) {
if (!IsTrueMouseOver('u41',e)) return;
if (true) {

	SetPanelVisibility('u39','','fade',500);
function waitu1e1f7bad84404b3fa8c107275950f60a1() {

	SetPanelVisibility('u39','hidden','fade',500);
}
setTimeout(waitu1e1f7bad84404b3fa8c107275950f60a1, 3000);

}
});
gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u123'] = 'top';u125.tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	SetPanelState('u124', 'pd0u124','none','',500,'none','',500);

SetGlobalVariableValue('HasPROMO1', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u1'] = 'center';u3.tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	SetPanelState('u2', 'pd1u2','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'top';
$axure.eventManager.focus('u9', function(e) {

if (true) {

	SetPanelState('u2', 'pd0u2','none','',500,'swing','down',500);

	SetPanelVisibility('u18','','fade',500);
function waitu31ffa7f527e54c4ab4657dcaadb2166f1() {

	SetPanelVisibility('u18','hidden','fade',500);
}
setTimeout(waitu31ffa7f527e54c4ab4657dcaadb2166f1, 3000);

}
});
gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u57'] = 'top';HookHover('u58', false);
HookClick('u58', false);
gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u62'] = 'center';document.getElementById('u64_img').tabIndex = 0;
HookHover('u64', false);
HookClick('u64', false);

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (((GetGlobalVariableValue('LoginState')) == ('NewCustomer')) || ((GetGlobalVariableValue('LoginState')) == ('Guest'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest___New_Customer.html');

}

if ((GetGlobalVariableValue('LoginState')) == ('LoggedIn')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u65'] = 'center';document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);
HookClick('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u71'] = 'top';$('#u75').attr('axSubmit', 'u76');

$axure.eventManager.focus('u75', function(e) {

if ((GetWidgetText('u75')) == ('Enter Your ZIP Code...')) {

SetWidgetFormText('u75', '');

}
});

$axure.eventManager.blur('u75', function(e) {

if ((GetWidgetText('u75')) == ('')) {

SetWidgetFormText('u75', 'Enter Your ZIP Code...');

}
});
document.getElementById('u76_img').tabIndex = 0;
HookHover('u76', false);
HookClick('u76', false);

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', u76Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u76LinksClick'></div>")
var u76LinksClick = document.getElementById('u76LinksClick');
function u76Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u76LinksClick');
}

InsertBeforeEnd(u76LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u76Clicku8c50d826bc004dc7b74b29fa907a0f9d(event)'>CanShip</div>");
function u76Clicku8c50d826bc004dc7b74b29fa907a0f9d(e)
{

SetGlobalVariableValue('ZIPVar', GetWidgetText('u75'));

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

;

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


	SetPanelState('u84', 'pd0u84','none','',500,'none','',500);

	ToggleLinks(e, 'u76LinksClick');
}

InsertBeforeEnd(u76LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u76Clicku6ca16d5089da4c17888093b14dd8c373(event)'>CantShip</div>");
function u76Clicku6ca16d5089da4c17888093b14dd8c373(e)
{

SetGlobalVariableValue('ZIPVar', GetWidgetText('u75'));

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

;

SetGlobalVariableValue('CanWeShipVar', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


	SetPanelState('u84', 'pd0u84','none','',500,'none','',500);

	ToggleLinks(e, 'u76LinksClick');
}
gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u78'] = 'top';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	SetPanelState('u74', 'pd1u74','none','',500,'none','',500);

	SetPanelState('u84', 'pd4u84','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u79'] = 'top';