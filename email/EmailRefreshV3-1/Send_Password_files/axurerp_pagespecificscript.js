for(var i = 0; i < 13; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u11', '<p style="text-align:center;"><span style="font-family:Scala Sans OT;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}

if (true) {

SetGlobalVariableValue('SignupSequenceVar', 'SetPassword');

}

if ((GetGlobalVariableValue('SignupSequenceVar')) == ('SetPassword')) {

}

});
gv_vAlignTable['u10'] = 'top';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

SetWidgetRichText('u11', '<p style="text-align:center;"><span style="font-family:Scala Sans OT;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);
HookClick('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Send_Password_AllSet.html');

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';