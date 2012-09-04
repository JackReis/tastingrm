for(var i = 0; i < 56; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {
function waitu24f2e560d89a412094c5b92a98686d511() {

	SetPanelState('u41', 'pd1u41','swing','left',500,'swing','left',500);
}
setTimeout(waitu24f2e560d89a412094c5b92a98686d511, 4000);

}

});

widgetIdToPanelStateChangeFunction['u41'] = function() {
var e = windowEvent;

if ((GetPanelState('u41')) == ('pd0u41')) {
function waitu42aa1b5de6454f8a98c4f5d643574ba11() {

	SetPanelStateNext('u41',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu42aa1b5de6454f8a98c4f5d643574ba11, 4000);

}

if ((GetPanelState('u41')) == ('pd1u41')) {
function waitu6008edfd99f44a119c6ea2a999987d8b1() {

	SetPanelStateNext('u41',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu6008edfd99f44a119c6ea2a999987d8b1, 4000);

}

if (false) {
function waitu6603c14561b647b290467e14af6129d61() {

	SetPanelStateNext('u41',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu6603c14561b647b290467e14af6129d61, 4000);

}

}
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u28'] = 'top';u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	SetPanelVisibility('u30','','fade',500);

	SetPanelState('u30', 'pd0u30','swing','up',500,'swing','down',500);

}
});

$axure.eventManager.mouseover('u29', function(e) {
if (!IsTrueMouseOver('u29',e)) return;
if (true) {

	SetPanelVisibility('u30','','fade',500);

	SetPanelState('u30', 'pd0u30','swing','up',500,'swing','down',500);

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u36'] = 'top';u37.tabIndex = 0;

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	SetPanelVisibility('u30','hidden','fade',500);

}
});
gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	NewTab('http://www.tastingroom.com', "");

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u43'] = 'center';
$axure.eventManager.focus('u48', function(e) {

if ((GetWidgetText('u48')) == ('Enter Your Email Address')) {

SetWidgetFormText('u48', '');

}
});

$axure.eventManager.blur('u48', function(e) {

if ((GetWidgetText('u48')) == ('')) {

SetWidgetFormText('u48', 'Enter Your Email Address');

}
});
gv_vAlignTable['u47'] = 'top';document.getElementById('u49_img').tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', u49Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u49LinksClick'></div>")
var u49LinksClick = document.getElementById('u49LinksClick');
function u49Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u49LinksClick');
}

InsertBeforeEnd(u49LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u49Clicku5feb998281e24f04920aa62798739fd0(event)'>Success</div>");
function u49Clicku5feb998281e24f04920aa62798739fd0(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u49LinksClick');
}

InsertBeforeEnd(u49LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u49Clickude1b4252a6d646ff82a46705b3ffad43(event)'>Error</div>");
function u49Clickude1b4252a6d646ff82a46705b3ffad43(e)
{

SetGlobalVariableValue('EmailAddress', GetWidgetText('u48'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u49LinksClick');
}
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';HookHover('u17', false);
HookClick('u17', false);
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';