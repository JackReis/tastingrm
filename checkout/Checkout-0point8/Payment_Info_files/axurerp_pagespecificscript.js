for(var i = 0; i < 108; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u69', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u91'] = 'center';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Account.html');

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u105'] = 'top';document.getElementById('u106_img').tabIndex = 0;
HookHover('u106', false);
HookClick('u106', false);

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	SetPanelVisibility('u78','hidden','none',500);

	SetPanelVisibility('u84','hidden','none',500);

	SetPanelVisibility('u95','hidden','none',500);

}

if ((GetSelectedOption('u74')) == ('- Card Type -')) {

	SetPanelVisibility('u78','','none',500);

}

if (true) {

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

	SetPanelVisibility('u84','','none',500);

}

if ((IsValueNumeric(GetWidgetText('u75'))) && ((GetWidgetValueLength('u75')) == ('16'))) {

	SetPanelVisibility('u84','hidden','none',500);

}

if ((GetWidgetText('u75')) == ('')) {

	SetPanelState('u84', 'pd0u84','none','',500,'none','',500);

	SetPanelVisibility('u84','','none',500);

}

if (((GetSelectedOption('u76')) == ('- Month -')) || ((GetSelectedOption('u77')) == ('- Year -'))) {

	SetPanelVisibility('u95','','none',500);

}
else
if (((GetWidgetVisibility('u78')) == (false)) && (((GetWidgetVisibility('u84')) == (false)) && ((GetWidgetVisibility('u95')) == (false)))) {

	NewWindow("resources/Other.html#other=" + encodeURI("Success! Edit the &quot;success&quot; case on the Submit button to make this do something."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u107'] = 'center';u30.tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('View_Cart.html');

}
});
gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';