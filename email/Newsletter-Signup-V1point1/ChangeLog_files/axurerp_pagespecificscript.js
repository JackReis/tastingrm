for(var i = 0; i < 32; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

SetGlobalVariableValue('Preferences', 'No');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registration.html');

}
});
gv_vAlignTable['u29'] = 'center';document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', u30Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u30LinksClick'></div>")
var u30LinksClick = document.getElementById('u30LinksClick');
function u30Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u30LinksClick');
}

InsertBeforeEnd(u30LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u30Clicku4f826e5aa1634004841c5c98dc7de5f1(event)'>Success</div>");
function u30Clicku4f826e5aa1634004841c5c98dc7de5f1(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u30LinksClick');
}

InsertBeforeEnd(u30LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u30Clickubb58a260264c47749592838514f5811e(event)'>Error</div>");
function u30Clickubb58a260264c47749592838514f5811e(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u30LinksClick');
}
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AlreadyHaveAnAccount.html');

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';