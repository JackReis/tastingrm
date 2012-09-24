for(var i = 0; i < 12; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u6'] = 'top';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

}
});
gv_vAlignTable['u7'] = 'top';document.getElementById('u8_img').tabIndex = 0;
HookHover('u8', false);
HookClick('u8', false);

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (false) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}

if (false) {

SetGlobalVariableValue('HasItem', 'Yes');

SetGlobalVariableValue('CanWeShipVar', 'Yes');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum() + GetNum(GetGlobalVariableValue('ItemsInCart'))) + '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u9'] = 'center';