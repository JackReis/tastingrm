for(var i = 0; i < 56; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u54', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u21'] = 'top';$('#u22').attr('axSubmit', 'u15');
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'top';document.getElementById('u26_img').tabIndex = 0;
HookHover('u26', false);
HookClick('u26', false);

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

SetWidgetSelected('u26');
	SetPanelState('u5', 'pd0u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u27'] = 'center';document.getElementById('u28_img').tabIndex = 0;
HookHover('u28', false);
HookClick('u28', false);

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

SetWidgetNotSelected('u26');
SetWidgetSelected('u28');
	SetPanelState('u5', 'pd1u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u29'] = 'center';document.getElementById('u30_img').tabIndex = 0;
HookHover('u30', false);
HookClick('u30', false);

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'Guest');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'top';document.getElementById('u34_img').tabIndex = 0;
HookHover('u34', false);
HookClick('u34', false);

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'LoggedIn');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u35'] = 'center';
$axure.eventManager.focus('u36', function(e) {

if ((GetWidgetText('u36')) == ('Email Address')) {

SetWidgetFormText('u36', '');

}
});

$axure.eventManager.blur('u36', function(e) {

if ((GetWidgetText('u36')) == ('')) {

SetWidgetFormText('u36', 'Email Address');

}
});
$('#u37').attr('axSubmit', 'u34');

$axure.eventManager.focus('u37', function(e) {

if ((GetWidgetText('u37')) == ('Password')) {

SetWidgetFormText('u37', '');

}
});

$axure.eventManager.blur('u37', function(e) {

if ((GetWidgetText('u37')) == ('')) {

SetWidgetFormText('u37', 'Password');

}
});
document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'LoggedIn');

	NewWindow("resources/Other.html#other=" + encodeURI("Facebook Connect widget appears. User follows standard screens and achieves &quot;Logged In&quot; state through OpenGraph."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);
function waitue878c612903944efb91d0d7417a437951() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');
}
setTimeout(waitue878c612903944efb91d0d7417a437951, 5000);

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u41'] = 'top';document.getElementById('u45_img').tabIndex = 0;
HookHover('u45', false);
HookClick('u45', false);

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

SetWidgetSelected('u45');
	SetPanelState('u5', 'pd0u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u48'] = 'center';document.getElementById('u49_img').tabIndex = 0;
HookHover('u49', false);
HookClick('u49', false);

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'Guest');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
document.getElementById('u47_img').tabIndex = 0;
HookHover('u47', false);
HookClick('u47', false);

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

SetWidgetNotSelected('u45');
SetWidgetSelected('u47');
	SetPanelState('u5', 'pd1u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u9'] = 'center';document.getElementById('u15_img').tabIndex = 0;
HookHover('u15', false);
HookClick('u15', false);

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', u15Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u15LinksClick'></div>")
var u15LinksClick = document.getElementById('u15LinksClick');
function u15Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u15LinksClick');
}

InsertBeforeEnd(u15LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u15Clickud0728ec32f3947c4b53e11965a86419c(event)'>Case 1</div>");
function u15Clickud0728ec32f3947c4b53e11965a86419c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

	ToggleLinks(e, 'u15LinksClick');
}

InsertBeforeEnd(u15LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u15Clicku1d9b1b41cccb44428c561006e72cab17(event)'>Case 1</div>");
function u15Clicku1d9b1b41cccb44428c561006e72cab17(e)
{

SetGlobalVariableValue('LoginState', 'NewCustomer');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

	ToggleLinks(e, 'u15LinksClick');
}
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

SetGlobalVariableValue('LoginState', 'NewCustomer');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';