for(var i = 0; i < 167; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u165', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

	SetPanelState('u46', 'pd1u46','fade','',500,'fade','',500);

}

if (true) {

SetWidgetRichText('u165', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u155'] = 'top';gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u80'] = 'center';u81.tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u87'] = 'center';u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u92'] = 'center';document.getElementById('u10_img').tabIndex = 0;
HookHover('u10', false);
HookClick('u10', false);

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', u10Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u10LinksClick'></div>")
var u10LinksClick = document.getElementById('u10LinksClick');
function u10Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u10LinksClick');
}

InsertBeforeEnd(u10LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u10Clicku02d886c448974d2d98a02031d83f513d(event)'>Case 1</div>");
function u10Clicku02d886c448974d2d98a02031d83f513d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

	ToggleLinks(e, 'u10LinksClick');
}

InsertBeforeEnd(u10LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u10Clicku2454c794124d4b268cd7b18feb7146a5(event)'>Case 1</div>");
function u10Clicku2454c794124d4b268cd7b18feb7146a5(e)
{

SetGlobalVariableValue('LoginState', 'NewCustomer');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

	ToggleLinks(e, 'u10LinksClick');
}
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'top';$('#u17').attr('axSubmit', 'u10');
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u20'] = 'top';document.getElementById('u21_img').tabIndex = 0;
HookHover('u21', false);
HookClick('u21', false);

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

SetWidgetSelected('u21');
	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u22'] = 'center';document.getElementById('u23_img').tabIndex = 0;
HookHover('u23', false);
HookClick('u23', false);

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

SetWidgetNotSelected('u21');
SetWidgetSelected('u23');
	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u24'] = 'center';document.getElementById('u25_img').tabIndex = 0;
HookHover('u25', false);
HookClick('u25', false);

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'Guest');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u28'] = 'top';document.getElementById('u29_img').tabIndex = 0;
HookHover('u29', false);
HookClick('u29', false);

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'LoggedIn');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u102'] = 'center';u103.tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u105'] = 'center';u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u129'] = 'top';gv_vAlignTable['u30'] = 'center';
$axure.eventManager.focus('u31', function(e) {

if ((GetWidgetText('u31')) == ('Email Address')) {

SetWidgetFormText('u31', '');

}
});

$axure.eventManager.blur('u31', function(e) {

if ((GetWidgetText('u31')) == ('')) {

SetWidgetFormText('u31', 'Email Address');

}
});
$('#u32').attr('axSubmit', 'u29');

$axure.eventManager.focus('u32', function(e) {

if ((GetWidgetText('u32')) == ('Password')) {

SetWidgetFormText('u32', '');

}
});

$axure.eventManager.blur('u32', function(e) {

if ((GetWidgetText('u32')) == ('')) {

SetWidgetFormText('u32', 'Password');

}
});
document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'LoggedIn');

	NewWindow("resources/Other.html#other=" + encodeURI("Facebook Connect widget appears. User follows standard screens and achieves &quot;Logged In&quot; state through OpenGraph."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);
function waitu3b52deb1c5154755abd7a9cda9557e651() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');
}
setTimeout(waitu3b52deb1c5154755abd7a9cda9557e651, 5000);

}
});
gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u119'] = 'center';document.getElementById('u40_img').tabIndex = 0;
HookHover('u40', false);
HookClick('u40', false);

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

SetWidgetSelected('u40');
	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u41'] = 'center';document.getElementById('u42_img').tabIndex = 0;
HookHover('u42', false);
HookClick('u42', false);

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

SetWidgetNotSelected('u40');
SetWidgetSelected('u42');
	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u43'] = 'center';document.getElementById('u44_img').tabIndex = 0;
HookHover('u44', false);
HookClick('u44', false);

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'Guest');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u125'] = 'center';u126.tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('View_Cart.html');

}
});
gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u2'] = 'top';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'NewCustomer');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';u53.tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u55'] = 'center';u56.tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u134'] = 'top';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u60'] = 'center';u61.tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Signed_In_Customer.html');

}
});
gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';u66.tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Payment_Info.html');

}
});
gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u77'] = 'center';u78.tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u152'] = 'center';