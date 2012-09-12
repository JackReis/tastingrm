for(var i = 0; i < 25; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u16'] = 'top';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if ((GetWidgetText('u17')) > Number('0')) {

SetWidgetFormText('u17', '' + (GetWidgetText('u17') - 1) + '');

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u12'] = 'center';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

SetWidgetFormText('u17', '' + (GetNum(GetWidgetText('u17')) + 1) + '');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

}
});
gv_vAlignTable['u9'] = 'top';document.getElementById('u21_img').tabIndex = 0;
HookHover('u21', false);
HookClick('u21', false);

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if ((GetGlobalVariableValue('Hurry')) != ('Yes')) {

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + GetNum(GetWidgetText('u17'))) + '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}

if ((GetGlobalVariableValue('Hurry')) == ('Yes')) {

SetGlobalVariableValue('ItemsInCart', '' + (GetNum(GetGlobalVariableValue('ItemsInCart')) + GetNum(GetWidgetText('u17'))) + '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('View_Cart.html');

}
});
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';