for(var i = 0; i < 86; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {
function waitu67f9a3a8632143719ce0c9982617066e1() {

	SetPanelState('u43', 'pd1u43','swing','left',500,'swing','left',500);
}
setTimeout(waitu67f9a3a8632143719ce0c9982617066e1, 4000);

}

if (true) {

;

}

});

widgetIdToMoveFunction['u43'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToPanelStateChangeFunction['u43'] = function() {
var e = windowEvent;

if ((GetPanelState('u43')) == ('pd0u43')) {
function waitu83ec85f76f694ae9ab3c17b56f13e6d51() {

	SetPanelStateNext('u43',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu83ec85f76f694ae9ab3c17b56f13e6d51, 4000);

}

if ((GetPanelState('u43')) == ('pd1u43')) {
function waitu05b74f77d8604c84a886556837dfa87b1() {

	SetPanelStateNext('u43',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu05b74f77d8604c84a886556837dfa87b1, 4000);

}

if ((GetPanelState('u43')) == ('pd2u43')) {
function waitu11cab4afe9be4a91bcee174ccd2a8ae61() {

	SetPanelStateNext('u43',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu11cab4afe9be4a91bcee174ccd2a8ae61, 4000);

}

}
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u84'] = 'top';u85.tabIndex = 0;

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	SetPanelState('u61', 'pd1u61','fade','',500,'swing','down',500);

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';HookHover('u15', false);
HookClick('u15', false);
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u26'] = 'top';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	SetPanelVisibility('u28','','fade',500);

	SetPanelState('u28', 'pd0u28','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u36'] = 'top';u38.tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u28','hidden','fade',500);

}
});
gv_vAlignTable['u38'] = 'top';
$axure.eventManager.focus('u39', function(e) {

if ((GetWidgetText('u39')) == ('Enter Your Email Address')) {

SetWidgetFormText('u39', '');

}
});

$axure.eventManager.blur('u39', function(e) {

if ((GetWidgetText('u39')) == ('')) {

SetWidgetFormText('u39', 'Enter Your Email Address');

}
});
document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', u40Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u40LinksClick'></div>")
var u40LinksClick = document.getElementById('u40LinksClick');
function u40Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u40LinksClick');
}

InsertBeforeEnd(u40LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u40Clickufe380af519fb4307be3a50a077341251(event)'>Success</div>");
function u40Clickufe380af519fb4307be3a50a077341251(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u40LinksClick');
}

InsertBeforeEnd(u40LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u40Clicku22343757781e41e7a321c7c48504debe(event)'>Error</div>");
function u40Clicku22343757781e41e7a321c7c48504debe(e)
{

SetGlobalVariableValue('EmailAddress', GetWidgetText('u39'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u40LinksClick');
}
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	NewTab('http://www.tastingroom.com', "");

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u72'] = 'top';u73.tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	SetPanelState('u61', 'pd0u61','swing','up',500,'fade','',500);

}
});
gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u79'] = 'top';