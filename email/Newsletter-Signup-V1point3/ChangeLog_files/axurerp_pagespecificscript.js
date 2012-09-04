for(var i = 0; i < 42; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u29'] = 'top';document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

SetGlobalVariableValue('Preferences', 'No');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registration.html');

}
});
gv_vAlignTable['u31'] = 'center';document.getElementById('u32_img').tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', u32Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u32LinksClick'></div>")
var u32LinksClick = document.getElementById('u32LinksClick');
function u32Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u32LinksClick');
}

InsertBeforeEnd(u32LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u32Clicku4f826e5aa1634004841c5c98dc7de5f1(event)'>Success</div>");
function u32Clicku4f826e5aa1634004841c5c98dc7de5f1(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

	ToggleLinks(e, 'u32LinksClick');
}

InsertBeforeEnd(u32LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u32Clickubb58a260264c47749592838514f5811e(event)'>Error</div>");
function u32Clickubb58a260264c47749592838514f5811e(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Error.html');

	ToggleLinks(e, 'u32LinksClick');
}
gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u18'] = 'top';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AlreadyHaveAnAccount.html');

}
});
