for(var i = 0; i < 19; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u17'] = 'top';document.getElementById('u16_img').tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if ((GetWidgetText('u18')) > Number('0')) {

SetWidgetFormText('u18', '' + (GetWidgetText('u18') - 1) + '');

}
});
gv_vAlignTable['u15'] = 'top';document.getElementById('u10_img').tabIndex = 0;
HookHover('u10', false);
HookClick('u10', false);

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (false) {

SetGlobalVariableValue('CanWeShipVar', 'Yes');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}

if ((GetWidgetText('u18')) != ('0')) {

SetGlobalVariableValue('HasItem', 'Yes');

SetGlobalVariableValue('CanWeShipVar', 'Yes');

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetWidgetText('u18')) + GetNum(GetGlobalVariableValue('ItemsInCart'))) + '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';document.getElementById('u14_img').tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

SetWidgetFormText('u18', '' + (GetNum(GetWidgetText('u18')) + 1) + '');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

}
});
gv_vAlignTable['u9'] = 'top';