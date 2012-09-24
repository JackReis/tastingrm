for(var i = 0; i < 9; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'top';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);
HookClick('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('4__Checkout_Accordion_page.html');

}
});
gv_vAlignTable['u8'] = 'center';