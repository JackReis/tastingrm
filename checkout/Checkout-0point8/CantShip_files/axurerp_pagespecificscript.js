for(var i = 0; i < 14; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
document.getElementById('u10_img').tabIndex = 0;
HookHover('u10', false);
HookClick('u10', false);

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

}
});
gv_vAlignTable['u9'] = 'top';