for(var i = 0; i < 44; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u8', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u28'] = 'center';u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('View_Cart.html');

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';document.getElementById('u0_img').tabIndex = 0;
HookHover('u0', false);
HookClick('u0', false);

u0.style.cursor = 'pointer';
$axure.eventManager.click('u0', function(e) {

if (true) {

SetWidgetSelected('u0');
}
});
gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;
HookHover('u2', false);
HookClick('u2', false);

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

SetWidgetNotSelected('u0');
SetWidgetSelected('u2');
}
});
gv_vAlignTable['u3'] = 'center';document.getElementById('u4_img').tabIndex = 0;
HookHover('u4', false);
HookClick('u4', false);

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Billing___Shipping___Guest.html');

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u11'] = 'top';document.getElementById('u12_img').tabIndex = 0;
HookHover('u12', false);
HookClick('u12', false);

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u13'] = 'center';
$axure.eventManager.focus('u14', function(e) {

if ((GetWidgetText('u14')) == ('Email Address')) {

SetWidgetFormText('u14', '');

}
});

$axure.eventManager.blur('u14', function(e) {

if ((GetWidgetText('u14')) == ('')) {

SetWidgetFormText('u14', 'Email Address');

}
});
$('#u15').attr('axSubmit', 'u12');

$axure.eventManager.focus('u15', function(e) {

if ((GetWidgetText('u15')) == ('Password')) {

SetWidgetFormText('u15', '');

}
});

$axure.eventManager.blur('u15', function(e) {

if ((GetWidgetText('u15')) == ('')) {

SetWidgetFormText('u15', 'Password');

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u19'] = 'top';