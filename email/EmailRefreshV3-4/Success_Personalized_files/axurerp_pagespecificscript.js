for(var i = 0; i < 30; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u14', '<p style="text-align:center;"><span style="font-family:Helvetica;font-size:48px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">All set, ' + (GetGlobalVariableValue('FirstNameVar')) + '!</span></p>');

}

});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u18'] = 'top';document.getElementById('u19_img').tabIndex = 0;
HookHover('u19', false);
HookClick('u19', false);

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Preferences.html');

}
});
