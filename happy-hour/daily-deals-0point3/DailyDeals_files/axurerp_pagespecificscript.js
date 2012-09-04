for(var i = 0; i < 48; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u20'] = 'center';HookHover('u21', false);
HookClick('u21', false);
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u32'] = 'top';u33.tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	SetPanelVisibility('u34','','none',500);

	SetPanelState('u34', 'pd0u34','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	NewTab('http://www.tastingroom.com', "");

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u41'] = 'top';
$axure.eventManager.focus('u45', function(e) {

if ((GetWidgetText('u45')) == ('Enter Your Email Address')) {

SetWidgetFormText('u45', '');

}
});

$axure.eventManager.blur('u45', function(e) {

if ((GetWidgetText('u45')) == ('')) {

SetWidgetFormText('u45', 'Enter Your Email Address');

}
});
u44.tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	SetPanelVisibility('u34','hidden','fade',500);

}
});
gv_vAlignTable['u44'] = 'top';document.getElementById('u46_img').tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', u46Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u46LinksClick'></div>")
var u46LinksClick = document.getElementById('u46LinksClick');
function u46Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u46LinksClick');
}

InsertBeforeEnd(u46LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u46Clickufe380af519fb4307be3a50a077341251(event)'>Success</div>");
function u46Clickufe380af519fb4307be3a50a077341251(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u46LinksClick');
}

InsertBeforeEnd(u46LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u46Clicku22343757781e41e7a321c7c48504debe(event)'>Error</div>");
function u46Clicku22343757781e41e7a321c7c48504debe(e)
{

SetGlobalVariableValue('EmailAddress', GetWidgetText('u45'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u46LinksClick');
}
gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';