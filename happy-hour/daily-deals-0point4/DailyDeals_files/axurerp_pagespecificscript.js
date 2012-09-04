for(var i = 0; i < 63; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {
function waitue022939628394724bb6eba04068914101() {

	SetPanelState('u45', 'pd1u45','swing','left',500,'swing','left',500);
}
setTimeout(waitue022939628394724bb6eba04068914101, 4000);

}

});

widgetIdToMoveFunction['u45'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToPanelStateChangeFunction['u45'] = function() {
var e = windowEvent;

if ((GetPanelState('u45')) == ('pd0u45')) {
function waitu83ec85f76f694ae9ab3c17b56f13e6d51() {

	SetPanelStateNext('u45',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu83ec85f76f694ae9ab3c17b56f13e6d51, 4000);

}

if ((GetPanelState('u45')) == ('pd1u45')) {
function waitu05b74f77d8604c84a886556837dfa87b1() {

	SetPanelStateNext('u45',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu05b74f77d8604c84a886556837dfa87b1, 4000);

}

if ((GetPanelState('u45')) == ('pd2u45')) {
function waitu11cab4afe9be4a91bcee174ccd2a8ae61() {

	SetPanelStateNext('u45',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu11cab4afe9be4a91bcee174ccd2a8ae61, 4000);

}

}
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u28'] = 'top';u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	SetPanelVisibility('u30','','fade',500);

	SetPanelState('u30', 'pd0u30','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	NewTab('http://www.tastingroom.com', "");

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u8'] = 'center';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', u42Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u42LinksClick'></div>")
var u42LinksClick = document.getElementById('u42LinksClick');
function u42Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u42LinksClick');
}

InsertBeforeEnd(u42LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u42Clickufe380af519fb4307be3a50a077341251(event)'>Success</div>");
function u42Clickufe380af519fb4307be3a50a077341251(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u42LinksClick');
}

InsertBeforeEnd(u42LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u42Clicku22343757781e41e7a321c7c48504debe(event)'>Error</div>");
function u42Clicku22343757781e41e7a321c7c48504debe(e)
{

SetGlobalVariableValue('EmailAddress', GetWidgetText('u41'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u42LinksClick');
}
u40.tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	SetPanelVisibility('u30','hidden','fade',500);

}
});
gv_vAlignTable['u40'] = 'top';
$axure.eventManager.focus('u41', function(e) {

if ((GetWidgetText('u41')) == ('Enter Your Email Address')) {

SetWidgetFormText('u41', '');

}
});

$axure.eventManager.blur('u41', function(e) {

if ((GetWidgetText('u41')) == ('')) {

SetWidgetFormText('u41', 'Enter Your Email Address');

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';HookHover('u17', false);
HookClick('u17', false);
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';