for(var i = 0; i < 120; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

SetWidgetRichText('u44', '<p style="text-align:center;"><span style="font-family:Scala Sans OT;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}

if (true) {

SetGlobalVariableValue('SignupSequenceVar', 'SetPassword');

}

if ((GetGlobalVariableValue('SignupSequenceVar')) == ('SetPassword')) {

	SetPanelState('u0', 'pd0u0','fade','',500,'swing','left',500);

	SetPanelVisibility('u0','','none',500);

}

});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'center';
$axure.eventManager.mouseover('u96', function(e) {
if (!IsTrueMouseOver('u96',e)) return;
if (true) {

	SetPanelVisibility('u110','','none',500);

}
});

$axure.eventManager.mouseout('u96', function(e) {
if (!IsTrueMouseOut('u96',e)) return;
if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u97'] = 'top';
$axure.eventManager.blur('u98', function(e) {

if ((GetWidgetText('u98')) == ('')) {

	SetPanelState('u99', 'pd0u99','none','',500,'none','',500);

}
else
if ((GetWidgetText('u48')) != (GetWidgetText('u98'))) {

	SetPanelState('u99', 'pd1u99','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u99', 'pd0u99','none','',500,'none','',500);

}
});
gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';document.getElementById('u118_img').tabIndex = 0;
HookHover('u118', false);
HookClick('u118', false);

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Email_Prefs.html');

}
});
gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u40'] = 'top';
$axure.eventManager.focus('u42', function(e) {

if ((GetWidgetText('u42')) == ('Enter Your Email Address')) {

SetWidgetFormText('u42', '');

}
});

$axure.eventManager.blur('u42', function(e) {

if ((GetWidgetText('u42')) == ('')) {

SetWidgetFormText('u42', 'Enter Your Email Address');

}
});
u43.tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

SetGlobalVariableValue('EmailAddress', GetWidgetText('u42'));

	SetPanelState('u41', 'pd0u41','none','',500,'none','',500);

SetWidgetRichText('u44', '<p style="text-align:center;"><span style="font-family:Scala Sans OT;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}
});
gv_vAlignTable['u43'] = 'top';u44.tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

;

}
});
gv_vAlignTable['u44'] = 'top';u45.tabIndex = 0;

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	SetPanelState('u41', 'pd1u41','none','',500,'none','',500);

}
});
gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';
$axure.eventManager.keyup('u48', function(e) {

if ((GetWidgetValueLength('u48')) == ('0')) {

	SetPanelState('u60', 'pd0u60','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u48')) < Number('5')) && ((GetWidgetValueLength('u48')) > Number('0'))) {

	SetPanelState('u60', 'pd1u60','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u48')) < Number('8')) && ((GetWidgetValueLength('u48')) >= Number('4'))) {

	SetPanelState('u60', 'pd2u60','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u48')) < Number('12')) && ((GetWidgetValueLength('u48')) >= Number('8'))) {

	SetPanelState('u60', 'pd3u60','none','',500,'none','',500);

}
else
if ((GetWidgetValueLength('u48')) >= Number('12')) {

	SetPanelState('u60', 'pd4u60','none','',500,'none','',500);

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u78'] = 'center';