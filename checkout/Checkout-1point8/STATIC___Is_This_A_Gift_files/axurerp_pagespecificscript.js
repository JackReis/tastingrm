for(var i = 0; i < 7; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'top';document.getElementById('u5_img').tabIndex = 0;
HookHover('u5', false);
HookClick('u5', false);

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('4__Checkout_Accordion_page.html');

}
});
gv_vAlignTable['u6'] = 'center';