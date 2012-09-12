for(var i = 0; i < 129; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u2', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u82'] = 'top';document.getElementById('u83_img').tabIndex = 0;
HookHover('u83', false);
HookClick('u83', false);

u83.style.cursor = 'pointer';
$axure.eventManager.click('u83', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Payment_Info.html');

}
});
gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u10'] = 'center';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Account.html');

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u101'] = 'top';HookHover('u103', false);
HookClick('u103', false);
gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u109'] = 'top';
$axure.eventManager.focus('u128', function(e) {

if ((GetWidgetText('u127')) == ('')) {

SetWidgetFormText('u127', GetWidgetText('u128'));

SetWidgetFormText('u128', '');

}
});

$axure.eventManager.blur('u128', function(e) {

if ((GetWidgetText('u128')) == ('')) {

SetWidgetFormText('u128', GetWidgetText('u127'));

SetWidgetFormText('u127', '');

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'center';u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('View_Cart.html');

}
});
gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u99'] = 'top';
$axure.eventManager.focus('u118', function(e) {

if ((GetWidgetText('u117')) == ('')) {

SetWidgetFormText('u117', GetWidgetText('u118'));

SetWidgetFormText('u118', '');

}
});

$axure.eventManager.blur('u118', function(e) {

if ((GetWidgetText('u118')) == ('')) {

SetWidgetFormText('u118', GetWidgetText('u117'));

SetWidgetFormText('u117', '');

}
});
gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u120'] = 'top';
$axure.eventManager.focus('u123', function(e) {

if ((GetWidgetText('u122')) == ('')) {

SetWidgetFormText('u122', GetWidgetText('u123'));

SetWidgetFormText('u123', '');

}
});

$axure.eventManager.blur('u123', function(e) {

if ((GetWidgetText('u123')) == ('')) {

SetWidgetFormText('u123', GetWidgetText('u122'));

SetWidgetFormText('u122', '');

}
});
gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u79'] = 'top';