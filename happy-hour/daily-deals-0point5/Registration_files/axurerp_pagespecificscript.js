for(var i = 0; i < 21; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (ValueNotContains(GetGlobalVariableValue('EmailAddress'), 'Enter Your Email Address')) {

SetWidgetFormText('u13', GetGlobalVariableValue('EmailAddress'));

}

});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';
$axure.eventManager.focus('u13', function(e) {

if ((GetWidgetText('u13')) == ('Enter Your Email Address')) {

SetWidgetFormText('u13', '');

}
});

$axure.eventManager.blur('u13', function(e) {

if ((GetWidgetText('u13')) == ('')) {

SetWidgetFormText('u13', 'Enter Your Email Address');

}
});
document.getElementById('u14_img').tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', u14Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u14LinksClick'></div>")
var u14LinksClick = document.getElementById('u14LinksClick');
function u14Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u14LinksClick');
}

InsertBeforeEnd(u14LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u14Clickub8fe5709c3ef4f168e37ef0e8d9a1167(event)'>Success</div>");
function u14Clickub8fe5709c3ef4f168e37ef0e8d9a1167(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u14LinksClick');
}

InsertBeforeEnd(u14LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u14Clicku7a2f8f8f65664634b27685133025cf62(event)'>Error</div>");
function u14Clicku7a2f8f8f65664634b27685133025cf62(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u14LinksClick');
}
gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	NewTab('http://www.tastingroom.com', "");

}
});
gv_vAlignTable['u6'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u9'] = 'center';