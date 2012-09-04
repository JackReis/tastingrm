for(var i = 0; i < 15; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Send_Password.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);
HookClick('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

SetGlobalVariableValue('SignupSequenceVar', 'EmailPrefs');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Email_Prefs.html');

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';