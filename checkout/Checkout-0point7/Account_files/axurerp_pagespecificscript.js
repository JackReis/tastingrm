for(var i = 0; i < 111; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u109', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

	SetPanelState('u34', 'pd1u34','fade','',500,'fade','',500);

SetWidgetSelected('u101');
}

});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u99'] = 'top';$('#u17').attr('axSubmit', 'u10');
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u22'] = 'top';document.getElementById('u23_img').tabIndex = 0;
HookHover('u23', false);
HookClick('u23', false);

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u24'] = 'center';
$axure.eventManager.focus('u25', function(e) {

if ((GetWidgetText('u25')) == ('Email Address')) {

SetWidgetFormText('u25', '');

}
});

$axure.eventManager.blur('u25', function(e) {

if ((GetWidgetText('u25')) == ('')) {

SetWidgetFormText('u25', 'Email Address');

}
});
$('#u26').attr('axSubmit', 'u23');

$axure.eventManager.focus('u26', function(e) {

if ((GetWidgetText('u26')) == ('Password')) {

SetWidgetFormText('u26', '');

}
});

$axure.eventManager.blur('u26', function(e) {

if ((GetWidgetText('u26')) == ('')) {

SetWidgetFormText('u26', 'Password');

}
});
gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u29'] = 'top';document.getElementById('u101_img').tabIndex = 0;
HookHover('u101', false);
HookClick('u101', false);

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

SetWidgetSelected('u101');
	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u102'] = 'center';document.getElementById('u103_img').tabIndex = 0;
HookHover('u103', false);
HookClick('u103', false);

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

SetWidgetNotSelected('u101');
SetWidgetSelected('u103');
	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u104'] = 'center';document.getElementById('u105_img').tabIndex = 0;
HookHover('u105', false);
HookClick('u105', false);

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u40'] = 'center';u41.tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u43'] = 'center';u44.tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';document.getElementById('u10_img').tabIndex = 0;
HookHover('u10', false);
HookClick('u10', false);

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Upsell.html');

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u63'] = 'center';u64.tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u57'] = 'center';