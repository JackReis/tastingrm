for(var i = 0; i < 59; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u56'] = 'top';document.getElementById('u57_img').tabIndex = 0;
HookHover('u57', false);
HookClick('u57', false);

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	NewTab('http://www.tastingroom.com', "");

}
});
gv_vAlignTable['u3'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	SetPanelState('u46', 'pd1u46','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u47'] = 'top';
$axure.eventManager.focus('u10', function(e) {

if ((GetWidgetText('u10')) == ('Enter Your Email Address')) {

SetWidgetFormText('u10', '');

}
});

$axure.eventManager.blur('u10', function(e) {

if ((GetWidgetText('u10')) == ('')) {

SetWidgetFormText('u10', 'Enter Your Email Address');

}
});
document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', u11Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u11LinksClick'></div>")
var u11LinksClick = document.getElementById('u11LinksClick');
function u11Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u11LinksClick');
}

InsertBeforeEnd(u11LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u11Clicku6b6e802142e3465fa4b235ac1d527eaa(event)'>Success</div>");
function u11Clicku6b6e802142e3465fa4b235ac1d527eaa(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u11LinksClick');
}

InsertBeforeEnd(u11LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u11Clicku04764cde16c543e09440a93a1db209d3(event)'>Error</div>");
function u11Clicku04764cde16c543e09440a93a1db209d3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u11LinksClick');
}
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';