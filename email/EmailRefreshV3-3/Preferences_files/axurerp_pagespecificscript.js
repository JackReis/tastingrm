for(var i = 0; i < 35; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u21'] = 'top';
$axure.eventManager.focus('u22', function(e) {

if ((GetWidgetText('u22')) == ('First name')) {

SetWidgetFormText('u22', '');

}
});

$axure.eventManager.blur('u22', function(e) {

if ((GetWidgetText('u22')) == ('')) {

SetWidgetFormText('u22', 'First name');

}
});

$axure.eventManager.focus('u23', function(e) {

if ((GetWidgetText('u23')) == ('Last name')) {

SetWidgetFormText('u23', '');

}
});

$axure.eventManager.blur('u23', function(e) {

if ((GetWidgetText('u23')) == ('')) {

SetWidgetFormText('u23', 'Last name');

}
});

$axure.eventManager.focus('u24', function(e) {

if ((GetWidgetText('u24')) == ('Billing state (optional)')) {

SetWidgetFormText('u24', '');

}
});

$axure.eventManager.blur('u24', function(e) {

if ((GetWidgetText('u24')) == ('')) {

SetWidgetFormText('u24', 'Billing state (optional)');

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';document.getElementById('u18_img').tabIndex = 0;
HookHover('u18', false);
HookClick('u18', false);

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (((GetWidgetText('u22')) != ('First name')) && ((GetWidgetText('u23')) != ('Last name'))) {

SetGlobalVariableValue('FirstNameVar', GetWidgetText('u22'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success_Personalized.html');

}

if (true) {

	SetPanelVisibility('u33','','none',500);

}
});
gv_vAlignTable['u19'] = 'center';