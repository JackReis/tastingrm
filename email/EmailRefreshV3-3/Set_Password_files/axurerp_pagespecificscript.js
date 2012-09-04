for(var i = 0; i < 124; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

SetWidgetRichText('u48', '<p style="text-align:center;"><span style="font-family:Helvetica;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}

if ((GetGlobalVariableValue('SignupSequenceVar')) == ('Congratulations')) {

	SetPanelState('u37', 'pd0u37','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('SignupSequenceVar')) == ('SetPassword')) {

	SetPanelState('u37', 'pd1u37','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('SignupSequenceVar')) == ('ResetPassword')) {

	SetPanelState('u37', 'pd2u37','none','',500,'none','',500);

}

if (((GetGlobalVariableValue('SignupSequenceVar')) == ('SetPassword')) || ((GetGlobalVariableValue('SignupSequenceVar')) == ('Congratulations'))) {

	SetPanelState('u0', 'pd0u0','fade','',500,'swing','left',500);

	SetPanelVisibility('u0','','none',500);

}

});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';
$axure.eventManager.mouseover('u100', function(e) {
if (!IsTrueMouseOver('u100',e)) return;
if (true) {

	SetPanelVisibility('u114','','none',500);

}
});

$axure.eventManager.mouseout('u100', function(e) {
if (!IsTrueMouseOut('u100',e)) return;
if (true) {

	SetPanelVisibility('u114','hidden','none',500);

}
});
gv_vAlignTable['u101'] = 'top';
$axure.eventManager.blur('u102', function(e) {

if ((GetWidgetText('u102')) == ('')) {

	SetPanelState('u103', 'pd0u103','none','',500,'none','',500);

}
else
if ((GetWidgetText('u52')) != (GetWidgetText('u102'))) {

	SetPanelState('u103', 'pd1u103','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u103', 'pd0u103','none','',500,'none','',500);

}
});
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u44'] = 'top';
$axure.eventManager.focus('u46', function(e) {

if ((GetWidgetText('u46')) == ('Enter Your Email Address')) {

SetWidgetFormText('u46', '');

}
});

$axure.eventManager.blur('u46', function(e) {

if ((GetWidgetText('u46')) == ('')) {

SetWidgetFormText('u46', 'Enter Your Email Address');

}
});
u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

SetGlobalVariableValue('EmailAddress', GetWidgetText('u46'));

	SetPanelState('u45', 'pd0u45','none','',500,'none','',500);

SetWidgetRichText('u48', '<p style="text-align:center;"><span style="font-family:Helvetica;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}
});
gv_vAlignTable['u47'] = 'top';u48.tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

;

}
});
gv_vAlignTable['u48'] = 'top';u49.tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	SetPanelState('u45', 'pd1u45','none','',500,'none','',500);

}
});
gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u121'] = 'top';document.getElementById('u122_img').tabIndex = 0;
HookHover('u122', false);
HookClick('u122', false);

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Email_Prefs.html');

}
});
gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';
$axure.eventManager.keyup('u52', function(e) {

if ((GetWidgetValueLength('u52')) == ('0')) {

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u52')) < Number('5')) && ((GetWidgetValueLength('u52')) > Number('0'))) {

	SetPanelState('u64', 'pd1u64','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u52')) < Number('8')) && ((GetWidgetValueLength('u52')) >= Number('4'))) {

	SetPanelState('u64', 'pd2u64','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u52')) < Number('12')) && ((GetWidgetValueLength('u52')) >= Number('8'))) {

	SetPanelState('u64', 'pd3u64','none','',500,'none','',500);

}
else
if ((GetWidgetValueLength('u52')) >= Number('12')) {

	SetPanelState('u64', 'pd4u64','none','',500,'none','',500);

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';