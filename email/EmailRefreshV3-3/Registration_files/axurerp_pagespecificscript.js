for(var i = 0; i < 22; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
document.getElementById('u20_img').tabIndex = 0;
HookHover('u20', false);

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Cancel.html');

}
});
gv_vAlignTable['u19'] = 'center';document.getElementById('u18_img').tabIndex = 0;
HookHover('u18', false);
HookClick('u18', false);

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if ((GetWidgetText('u16')) != ('Enter Your Email Address (required)')) {

SetGlobalVariableValue('EmailAddress', GetWidgetText('u16'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success.html');

}
});
gv_vAlignTable['u17'] = 'top';$('#u16').attr('axSubmit', 'u18');

$axure.eventManager.focus('u16', function(e) {

if ((GetWidgetText('u16')) == ('Enter Your Email Address (required)')) {

SetWidgetFormText('u16', '');

}
});

$axure.eventManager.blur('u16', function(e) {

if ((GetWidgetText('u16')) == ('')) {

SetWidgetFormText('u16', 'Enter Your Email Address (required)');

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u21'] = 'center';