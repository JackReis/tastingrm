for(var i = 0; i < 51; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u49', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

if (true) {

SetWidgetRichText('u49', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u20'] = 'top';document.getElementById('u21_img').tabIndex = 0;
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
gv_vAlignTable['u30'] = 'center';
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
function waitue878c612903944efb91d0d7417a437951() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');
}
setTimeout(waitue878c612903944efb91d0d7417a437951, 5000);

}
});
gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u2'] = 'top';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'NewCustomer');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u4'] = 'center';document.getElementById('u42_img').tabIndex = 0;
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
document.getElementById('u40_img').tabIndex = 0;
HookHover('u40', false);
HookClick('u40', false);

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

SetWidgetSelected('u40');
	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u43'] = 'center';document.getElementById('u44_img').tabIndex = 0;
HookHover('u44', false);
HookClick('u44', false);

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'Guest');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u49'] = 'top';document.getElementById('u10_img').tabIndex = 0;
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

InsertBeforeEnd(u10LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u10Clickud0728ec32f3947c4b53e11965a86419c(event)'>Case 1</div>");
function u10Clickud0728ec32f3947c4b53e11965a86419c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

	ToggleLinks(e, 'u10LinksClick');
}

InsertBeforeEnd(u10LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u10Clicku1d9b1b41cccb44428c561006e72cab17(event)'>Case 1</div>");
function u10Clicku1d9b1b41cccb44428c561006e72cab17(e)
{

SetGlobalVariableValue('LoginState', 'NewCustomer');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

	ToggleLinks(e, 'u10LinksClick');
}
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'top';$('#u17').attr('axSubmit', 'u10');
gv_vAlignTable['u18'] = 'top';