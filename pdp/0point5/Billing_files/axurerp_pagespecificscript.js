for(var i = 0; i < 68; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

function rdo0UpdateAddress1(e) {

}

function rdo0UpdateAddress2(e) {

}

function rdo0UpdateCityTown(e) {

}

function rdo0UpdateStateCounty(e) {

}

function rdo0UpdateZipPostcode(e) {

}

function rdo0UpdateCountry(e) {

}
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u56'] = 'top';
$axure.eventManager.blur('u57', function(e) {

if ((GetWidgetText('u57')) != ('')) {

	SetPanelState('u58', 'pd0u58','none','',500,'none','',500);

rdo0UpdateStateCounty(e);

}
else
if ((GetWidgetText('u57')) == ('')) {

	SetPanelVisibility('u58','hidden','none',500);

rdo0UpdateStateCounty(e);

}
});
gv_vAlignTable['u20'] = 'top';
$axure.eventManager.blur('u21', function(e) {

if ((GetWidgetText('u21')) != ('')) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

rdo0UpdateZipPostcode(e);

}
else
if ((GetWidgetText('u21')) == ('')) {

	SetPanelVisibility('u22','hidden','none',500);

rdo0UpdateZipPostcode(e);

}
});
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'center';HookHover('u66', false);
HookClick('u66', false);
gv_vAlignTable['u67'] = 'center';
$axure.eventManager.blur('u30', function(e) {

if ((GetWidgetText('u30')) != ('')) {

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

rdo0UpdateAddress1(e);

}
else
if ((GetWidgetText('u30')) == ('')) {

	SetPanelState('u31', 'pd1u31','none','',500,'none','',500);

}
});
gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u38'] = 'top';
$axure.eventManager.blur('u39', function(e) {

if ((GetWidgetText('u39')) != ('')) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

rdo0UpdateAddress2(e);

}
else
if ((GetWidgetText('u39')) == ('')) {

	SetPanelVisibility('u40','hidden','none',500);

rdo0UpdateAddress2(e);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u42'] = 'center';
$axure.eventManager.blur('u48', function(e) {

if ((GetWidgetText('u48')) != ('')) {

	SetPanelState('u49', 'pd0u49','none','',500,'none','',500);

rdo0UpdateCityTown(e);

}
else
if ((GetWidgetText('u48')) == ('')) {

	SetPanelState('u49', 'pd1u49','none','',500,'none','',500);

}
});
gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u47'] = 'top';
$axure.eventManager.focus('u14', function(e) {

if ((GetWidgetText('u11')) == ('')) {

SetWidgetFormText('u11', GetWidgetText('u14'));

SetWidgetFormText('u14', '');

}
});

$axure.eventManager.blur('u14', function(e) {

if ((GetWidgetText('u14')) == ('')) {

SetWidgetFormText('u14', GetWidgetText('u11'));

SetWidgetFormText('u11', '');

}
});

$axure.eventManager.focus('u15', function(e) {

if ((GetWidgetText('u13')) == ('')) {

SetWidgetFormText('u13', GetWidgetText('u15'));

SetWidgetFormText('u15', '');

}
});

$axure.eventManager.blur('u15', function(e) {

if ((GetWidgetText('u15')) == ('')) {

SetWidgetFormText('u15', GetWidgetText('u13'));

SetWidgetFormText('u13', '');

}
});
gv_vAlignTable['u16'] = 'top';
$axure.eventManager.focus('u19', function(e) {

if ((GetWidgetText('u18')) == ('')) {

SetWidgetFormText('u18', GetWidgetText('u19'));

SetWidgetFormText('u19', '');

}
});

$axure.eventManager.blur('u19', function(e) {

if ((GetWidgetText('u19')) == ('')) {

SetWidgetFormText('u19', GetWidgetText('u18'));

SetWidgetFormText('u18', '');

}
});
