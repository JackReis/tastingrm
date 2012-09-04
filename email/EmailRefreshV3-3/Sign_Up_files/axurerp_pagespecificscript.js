for(var i = 0; i < 53; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('SignupSequenceVar', 'Signup');

}

if ((GetGlobalVariableValue('SignupSequenceVar')) == ('Signup')) {

}

});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	SetPanelState('u46', 'pd1u46','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u47'] = 'top';
$axure.eventManager.focus('u10', function(e) {

if ((GetWidgetText('u10')) == ('Enter Your Email Address')) {

SetWidgetFormText('u10', '');

}
});

$axure.eventManager.blur('u10', function(e) {

if ((GetWidgetText('u10')) == ('')) {

SetWidgetFormText('u10', 'Enter Your Email Address');

}
});
document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

SetGlobalVariableValue('EmailAddress', GetWidgetText('u10'));

SetGlobalVariableValue('SignupSequenceVar', 'Congratulations');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Set_Password.html');

}
});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';