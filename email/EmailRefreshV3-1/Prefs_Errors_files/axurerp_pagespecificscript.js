for(var i = 0; i < 96; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetWidgetText('u47')) != ('99991340712')) {

SetWidgetFormText('u48', GetGlobalVariableValue('ZIPCode'));

}

});
gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u83'] = 'top';
$axure.eventManager.focus('u85', function(e) {

if ((GetWidgetText('u85')) == ('Enter Your Email Address')) {

SetWidgetFormText('u85', '');

}
});

$axure.eventManager.blur('u85', function(e) {

if ((GetWidgetText('u85')) == ('')) {

SetWidgetFormText('u85', 'Enter Your Email Address');

}
});
u86.tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

SetGlobalVariableValue('EmailAddress', GetWidgetText('u85'));

	SetPanelState('u84', 'pd0u84','none','',500,'none','',500);

SetWidgetRichText('u87', '<p style="text-align:center;"><span style="font-family:Scala Sans OT;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u85')) + '</span></p>');

}
});
gv_vAlignTable['u86'] = 'top';u87.tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

SetWidgetRichText('u87', '<p style="text-align:center;"><span style="font-family:Scala Sans OT;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('EmailAddress')) + '</span></p>');

}
});
gv_vAlignTable['u87'] = 'top';u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

}
});
gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u40'] = 'top';document.getElementById('u41_img').tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Prefs_AllSet.html');

}
});
gv_vAlignTable['u42'] = 'center';
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
gv_vAlignTable['u45'] = 'top';
$axure.eventManager.keyup('u47', function(e) {

if (true) {

SetGlobalVariableValue('ZIPCode', GetWidgetText('u47'));

SetWidgetFormText('u48', GetGlobalVariableValue('ZIPCode'));

}
});

$axure.eventManager.focus('u47', function(e) {

if (true) {

	SetPanelState('u90', 'pd1u90','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u47', function(e) {

if (((GetWidgetText('u47')) == ('99991340712')) || (((GetWidgetValueLength('u47')) < Number('5')) || ((GetWidgetValueLength('u47')) > Number('9')))) {

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

	SetPanelState('u90', 'pd0u90','none','',500,'none','',500);

}
});
document.getElementById('u49_img').tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	SetPanelState('u46', 'pd1u46','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u49', function(e) {
if (!IsTrueMouseOut('u49',e)) return;
if (true) {

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';
$axure.eventManager.change('u56', function(e) {

if (((GetSelectedOption('u56')) == ('dd')) || (((GetSelectedOption('u57')) == ('mm')) || ((GetSelectedOption('u58')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u56')) != ('dd')) && (((GetSelectedOption('u57')) != ('mm')) && ((GetSelectedOption('u58')) != ('yyyy')))) {

}
});

$axure.eventManager.focus('u56', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u56', function(e) {

if (((GetSelectedOption('u56')) == ('dd')) || (((GetSelectedOption('u57')) == ('mm')) || ((GetSelectedOption('u58')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u56')) != ('dd')) && (((GetSelectedOption('u57')) != ('mm')) && ((GetSelectedOption('u58')) != ('yyyy')))) {

}
});

$axure.eventManager.change('u57', function(e) {

if (((GetSelectedOption('u56')) == ('dd')) || (((GetSelectedOption('u57')) == ('mm')) || ((GetSelectedOption('u58')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u56')) != ('dd')) && (((GetSelectedOption('u57')) != ('mm')) && ((GetSelectedOption('u58')) != ('yyyy')))) {

}
});

$axure.eventManager.focus('u57', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u57', function(e) {

if (((GetSelectedOption('u56')) == ('dd')) || (((GetSelectedOption('u57')) == ('mm')) || ((GetSelectedOption('u58')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u56')) != ('dd')) && (((GetSelectedOption('u57')) != ('mm')) && ((GetSelectedOption('u58')) != ('yyyy')))) {

}
});

$axure.eventManager.change('u58', function(e) {

if (((GetSelectedOption('u56')) == ('dd')) || (((GetSelectedOption('u57')) == ('mm')) || ((GetSelectedOption('u58')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u56')) != ('dd')) && (((GetSelectedOption('u57')) != ('mm')) && ((GetSelectedOption('u58')) != ('yyyy')))) {

}
else
if ((GetSelectedOption('u58')) > Number('2007')) {

}
else
if ((GetSelectedOption('u58')) > Number('1997')) {

}
else
if ((GetSelectedOption('u58')) > Number('1991')) {

}
else
if ((GetSelectedOption('u58')) < Number('1991')) {

}
});

$axure.eventManager.focus('u58', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u58', function(e) {

if (((GetSelectedOption('u56')) == ('dd')) || (((GetSelectedOption('u57')) == ('mm')) || ((GetSelectedOption('u58')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u56')) != ('dd')) && (((GetSelectedOption('u57')) != ('mm')) && ((GetSelectedOption('u58')) != ('yyyy')))) {

}
});
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u79'] = 'top';