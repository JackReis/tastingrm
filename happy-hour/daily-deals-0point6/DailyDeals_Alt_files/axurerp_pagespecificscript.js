for(var i = 0; i < 98; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {
function waitu06c797a883124ac19dee1532eeb4682a1() {

	SetPanelState('u48', 'pd1u48','swing','left',500,'swing','left',500);
}
setTimeout(waitu06c797a883124ac19dee1532eeb4682a1, 4000);

}

if (ValueNotContains(GetGlobalVariableValue('EmailAddress'), GetWidgetText('u55'))) {

SetWidgetFormText('u55', GetGlobalVariableValue('EmailAddress'));

}

});

widgetIdToPanelStateChangeFunction['u48'] = function() {
var e = windowEvent;

if ((GetPanelState('u48')) == ('pd0u48')) {
function waitu42aa1b5de6454f8a98c4f5d643574ba11() {

	SetPanelStateNext('u48',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu42aa1b5de6454f8a98c4f5d643574ba11, 4000);

}

if ((GetPanelState('u48')) == ('pd1u48')) {
function waitu6008edfd99f44a119c6ea2a999987d8b1() {

	SetPanelStateNext('u48',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu6008edfd99f44a119c6ea2a999987d8b1, 4000);

}

if (false) {
function waitu6603c14561b647b290467e14af6129d61() {

	SetPanelStateNext('u48',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu6603c14561b647b290467e14af6129d61, 4000);

}

}
u80.tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	SetPanelState('u62', 'pd1u62','fade','',500,'swing','down',500);

}
});
gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u92'] = 'top';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelVisibility('u0','hidden','none',500);

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u20'] = 'top';HookHover('u21', false);
HookClick('u21', false);
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	NewTab('http://www.tastingroom.com', "");

}
});
gv_vAlignTable['u34'] = 'center';document.getElementById('u36_img').tabIndex = 0;
HookHover('u36', false);
HookClick('u36', false);

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u0','','fade',500);

	BringToFront("u0");

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u93'] = 'top';u94.tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	SetPanelVisibility('u87','hidden','fade',500);

}
});
gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u46'] = 'center';u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	SetPanelVisibility('u87','','fade',500);

	SetPanelState('u87', 'pd0u87','swing','up',500,'swing','down',500);

}
});

$axure.eventManager.mouseover('u47', function(e) {
if (!IsTrueMouseOver('u47',e)) return;
if (true) {

	SetPanelVisibility('u87','','fade',500);

	SetPanelState('u87', 'pd0u87','swing','up',500,'swing','down',500);

}
});
gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'top';
$axure.eventManager.focus('u55', function(e) {

if ((GetWidgetText('u55')) == ('Enter Your Email Address')) {

SetWidgetFormText('u55', '');

}
});

$axure.eventManager.blur('u55', function(e) {

if ((GetWidgetText('u55')) == ('')) {

SetWidgetFormText('u55', 'Enter Your Email Address');

}
});
document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', u56Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u56LinksClick'></div>")
var u56LinksClick = document.getElementById('u56LinksClick');
function u56Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u56LinksClick');
}

InsertBeforeEnd(u56LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u56Clicku5feb998281e24f04920aa62798739fd0(event)'>Success</div>");
function u56Clicku5feb998281e24f04920aa62798739fd0(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u56LinksClick');
}

InsertBeforeEnd(u56LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u56Clickude1b4252a6d646ff82a46705b3ffad43(event)'>Error</div>");
function u56Clickude1b4252a6d646ff82a46705b3ffad43(e)
{

SetGlobalVariableValue('EmailAddress', GetWidgetText('u55'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u56LinksClick');
}
gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u70'] = 'top';u71.tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	SetPanelState('u62', 'pd0u62','fade','',500,'swing','up',500);

}
});
gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u79'] = 'top';