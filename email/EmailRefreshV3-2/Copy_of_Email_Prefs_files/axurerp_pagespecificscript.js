for(var i = 0; i < 118; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

SetWidgetRichText('u58', '<p style="text-align:center;"><span style="font-family:Helvetica;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}

if (true) {

SetGlobalVariableValue('SignupSequenceVar', 'Preferences');

}

if ((GetGlobalVariableValue('SignupSequenceVar')) == ('Preferences')) {

	SetPanelState('u0', 'pd1u0','fade','',500,'swing','left',500);

	SetPanelVisibility('u0','','none',500);

}

});
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u86'] = 'top';u87.tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}
});
gv_vAlignTable['u87'] = 'top';u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	SetPanelState('u62', 'pd1u62','none','',500,'none','',500);

}
});
gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u114'] = 'top';u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}
});
gv_vAlignTable['u115'] = 'top';u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	SetPanelState('u62', 'pd1u62','none','',500,'none','',500);

}
});
gv_vAlignTable['u116'] = 'top';u117.tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

SetGlobalVariableValue('SignupSequenceVar', 'ResetPassword');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Set_Password.html');

}
});
gv_vAlignTable['u117'] = 'top';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Prefs_AllSet.html');

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u42'] = 'top';
$axure.eventManager.focus('u43', function(e) {

if ((GetWidgetText('u43')) == ('First name (optional)')) {

SetWidgetFormText('u43', '');

}
});

$axure.eventManager.blur('u43', function(e) {

if ((GetWidgetText('u43')) == ('')) {

SetWidgetFormText('u43', 'First name (optional)');

}
});

$axure.eventManager.focus('u44', function(e) {

if ((GetWidgetText('u44')) == ('Last name (optional)')) {

SetWidgetFormText('u44', '');

}
});

$axure.eventManager.blur('u44', function(e) {

if ((GetWidgetText('u44')) == ('')) {

SetWidgetFormText('u44', 'Last name (optional)');

}
});

$axure.eventManager.focus('u45', function(e) {

if ((GetWidgetText('u45')) == ('ZIP code (optional)')) {

SetWidgetFormText('u45', '');

}
});

$axure.eventManager.blur('u45', function(e) {

if ((GetWidgetText('u45')) == ('')) {

SetWidgetFormText('u45', 'ZIP code (optional)');

}
});
gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';
$axure.eventManager.change('u52', function(e) {

if (((GetSelectedOption('u52')) == ('dd')) || (((GetSelectedOption('u53')) == ('mm')) || ((GetSelectedOption('u54')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u52')) != ('dd')) && (((GetSelectedOption('u53')) != ('mm')) && ((GetSelectedOption('u54')) != ('yyyy')))) {

}
});

$axure.eventManager.focus('u52', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u52', function(e) {

if (((GetSelectedOption('u52')) == ('dd')) || (((GetSelectedOption('u53')) == ('mm')) || ((GetSelectedOption('u54')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u52')) != ('dd')) && (((GetSelectedOption('u53')) != ('mm')) && ((GetSelectedOption('u54')) != ('yyyy')))) {

}
});

$axure.eventManager.change('u53', function(e) {

if (((GetSelectedOption('u52')) == ('dd')) || (((GetSelectedOption('u53')) == ('mm')) || ((GetSelectedOption('u54')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u52')) != ('dd')) && (((GetSelectedOption('u53')) != ('mm')) && ((GetSelectedOption('u54')) != ('yyyy')))) {

}
});

$axure.eventManager.focus('u53', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u53', function(e) {

if (((GetSelectedOption('u52')) == ('dd')) || (((GetSelectedOption('u53')) == ('mm')) || ((GetSelectedOption('u54')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u52')) != ('dd')) && (((GetSelectedOption('u53')) != ('mm')) && ((GetSelectedOption('u54')) != ('yyyy')))) {

}
});

$axure.eventManager.change('u54', function(e) {

if (((GetSelectedOption('u52')) == ('dd')) || (((GetSelectedOption('u53')) == ('mm')) || ((GetSelectedOption('u54')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u52')) != ('dd')) && (((GetSelectedOption('u53')) != ('mm')) && ((GetSelectedOption('u54')) != ('yyyy')))) {

}
else
if ((GetSelectedOption('u54')) > Number('2007')) {

}
else
if ((GetSelectedOption('u54')) > Number('1997')) {

}
else
if ((GetSelectedOption('u54')) > Number('1991')) {

}
else
if ((GetSelectedOption('u54')) < Number('1991')) {

}
});

$axure.eventManager.focus('u54', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u54', function(e) {

if (((GetSelectedOption('u52')) == ('dd')) || (((GetSelectedOption('u53')) == ('mm')) || ((GetSelectedOption('u54')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u52')) != ('dd')) && (((GetSelectedOption('u53')) != ('mm')) && ((GetSelectedOption('u54')) != ('yyyy')))) {

}
});

$axure.eventManager.focus('u56', function(e) {

if ((GetWidgetText('u56')) == ('Enter Your Email Address')) {

SetWidgetFormText('u56', '');

}
});

$axure.eventManager.blur('u56', function(e) {

if ((GetWidgetText('u56')) == ('')) {

SetWidgetFormText('u56', 'Enter Your Email Address');

}
});
u57.tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

SetGlobalVariableValue('EmailAddress', GetWidgetText('u56'));

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

SetWidgetRichText('u58', '<p style="text-align:center;"><span style="font-family:Helvetica;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u56')) + '</span></p>');

}
});
gv_vAlignTable['u57'] = 'top';u58.tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

SetWidgetRichText('u58', '<p style="text-align:center;"><span style="font-family:Helvetica;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}
});
gv_vAlignTable['u58'] = 'top';u59.tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	SetPanelState('u55', 'pd1u55','none','',500,'none','',500);

}
});
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u60'] = 'top';u61.tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}
});
gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';