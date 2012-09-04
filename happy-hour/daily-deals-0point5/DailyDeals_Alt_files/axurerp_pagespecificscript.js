for(var i = 0; i < 73; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {
function waitu06c797a883124ac19dee1532eeb4682a1() {

	SetPanelState('u23', 'pd1u23','swing','left',500,'swing','left',500);
}
setTimeout(waitu06c797a883124ac19dee1532eeb4682a1, 4000);

}

if (ValueNotContains(GetGlobalVariableValue('EmailAddress'), GetWidgetText('u30'))) {

SetWidgetFormText('u30', GetGlobalVariableValue('EmailAddress'));

}

});

widgetIdToPanelStateChangeFunction['u23'] = function() {
var e = windowEvent;

if ((GetPanelState('u23')) == ('pd0u23')) {
function waitu42aa1b5de6454f8a98c4f5d643574ba11() {

	SetPanelStateNext('u23',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu42aa1b5de6454f8a98c4f5d643574ba11, 4000);

}

if ((GetPanelState('u23')) == ('pd1u23')) {
function waitu6008edfd99f44a119c6ea2a999987d8b1() {

	SetPanelStateNext('u23',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu6008edfd99f44a119c6ea2a999987d8b1, 4000);

}

if (false) {
function waitu6603c14561b647b290467e14af6129d61() {

	SetPanelStateNext('u23',true,'swing','left',500,'swing','left',500);
}
setTimeout(waitu6603c14561b647b290467e14af6129d61, 4000);

}

}
gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u54'] = 'top';u55.tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	SetPanelState('u37', 'pd1u37','fade','',500,'swing','down',500);

}
});
gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u21'] = 'center';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelVisibility('u62','','fade',500);

	SetPanelState('u62', 'pd0u62','swing','up',500,'swing','down',500);

}
});

$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelVisibility('u62','','fade',500);

	SetPanelState('u62', 'pd0u62','swing','up',500,'swing','down',500);

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u68'] = 'top';u69.tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	SetPanelVisibility('u62','hidden','fade',500);

}
});
gv_vAlignTable['u69'] = 'top';
$axure.eventManager.focus('u30', function(e) {

if ((GetWidgetText('u30')) == ('Enter Your Email Address')) {

SetWidgetFormText('u30', '');

}
});

$axure.eventManager.blur('u30', function(e) {

if ((GetWidgetText('u30')) == ('')) {

SetWidgetFormText('u30', 'Enter Your Email Address');

}
});
document.getElementById('u31_img').tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', u31Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u31LinksClick'></div>")
var u31LinksClick = document.getElementById('u31LinksClick');
function u31Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u31LinksClick');
}

InsertBeforeEnd(u31LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u31Clicku5feb998281e24f04920aa62798739fd0(event)'>Success</div>");
function u31Clicku5feb998281e24f04920aa62798739fd0(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u31LinksClick');
}

InsertBeforeEnd(u31LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u31Clickude1b4252a6d646ff82a46705b3ffad43(event)'>Error</div>");
function u31Clickude1b4252a6d646ff82a46705b3ffad43(e)
{

SetGlobalVariableValue('EmailAddress', GetWidgetText('u30'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u31LinksClick');
}
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	NewTab('http://www.tastingroom.com', "");

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u44'] = 'top';u46.tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	SetPanelState('u37', 'pd0u37','fade','',500,'swing','up',500);

}
});
HookHover('u11', false);
HookClick('u11', false);
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u19'] = 'center';