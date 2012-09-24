for(var i = 0; i < 110; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	var obj1 = document.getElementById("u64");
    obj1.disabled = false;

	var obj1 = document.getElementById("u73");
    obj1.disabled = false;

	var obj1 = document.getElementById("u82");
    obj1.disabled = false;

	var obj1 = document.getElementById("u91");
    obj1.disabled = false;

	var obj1 = document.getElementById("u100");
    obj1.disabled = false;

}

});

function rdo1UpdateAddress1(e) {

if (true) {

	var obj1 = document.getElementById("u1");
    obj1.focus();

}

}

function rdo1UpdateAddress2(e) {

if (true) {

	var obj1 = document.getElementById("u3");
    obj1.focus();

}

}

function rdo1UpdateCityTown(e) {

if (true) {

	var obj1 = document.getElementById("u5");
    obj1.focus();

}

}

function rdo1UpdateStateCounty(e) {

if (true) {

	var obj1 = document.getElementById("u7");
    obj1.focus();

}

}

function rdo1UpdateZipPostcode(e) {

if (true) {

	var obj1 = document.getElementById("u9");
    obj1.focus();

}

}

function rdo1UpdateCountry(e) {

if (true) {

	var obj1 = document.getElementById("u11");
    obj1.focus();

}

}

function rdo7UpdateAddress1(e) {

}

function rdo7UpdateAddress2(e) {

}

function rdo7UpdateCityTown(e) {

}

function rdo7UpdateStateCounty(e) {

}

function rdo7UpdateZipPostcode(e) {

}

function rdo7UpdateCountry(e) {

}
gv_vAlignTable['u81'] = 'top';
$axure.eventManager.blur('u82', function(e) {

if ((GetWidgetText('u82')) != ('')) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

rdo7UpdateAddress2(e);

}
else
if ((GetWidgetText('u82')) == ('')) {

	SetPanelVisibility('u83','hidden','none',500);

rdo7UpdateAddress2(e);

}
});
gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u90'] = 'top';
$axure.eventManager.blur('u91', function(e) {

if ((GetWidgetText('u91')) != ('')) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

rdo7UpdateCityTown(e);

}
else
if ((GetWidgetText('u91')) == ('')) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u10'] = 'top';
$axure.eventManager.focus('u11', function(e) {

if (true) {

;

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';
$axure.eventManager.blur('u14', function(e) {

if ((GetWidgetText('u14')) != ('')) {

	SetPanelState('u15', 'pd0u15','none','',500,'none','',500);

rdo1UpdateZipPostcode(e);

}
else
if ((GetWidgetText('u14')) == ('')) {

	SetPanelVisibility('u15','hidden','none',500);

rdo1UpdateZipPostcode(e);

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'top';
$axure.eventManager.blur('u23', function(e) {

if ((GetWidgetText('u23')) != ('')) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

rdo1UpdateAddress1(e);

}
else
if ((GetWidgetText('u23')) == ('')) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';
$axure.eventManager.blur('u100', function(e) {

if ((GetWidgetText('u100')) != ('')) {

	SetPanelState('u101', 'pd0u101','none','',500,'none','',500);

rdo7UpdateStateCounty(e);

}
else
if ((GetWidgetText('u100')) == ('')) {

	SetPanelVisibility('u101','hidden','none',500);

rdo7UpdateStateCounty(e);

}
});
gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u31'] = 'top';
$axure.eventManager.blur('u32', function(e) {

if ((GetWidgetText('u32')) != ('')) {

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);

rdo1UpdateAddress2(e);

}
else
if ((GetWidgetText('u32')) == ('')) {

	SetPanelVisibility('u33','hidden','none',500);

rdo1UpdateAddress2(e);

}
});
gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u40'] = 'top';
$axure.eventManager.blur('u41', function(e) {

if ((GetWidgetText('u41')) != ('')) {

	SetPanelState('u42', 'pd0u42','none','',500,'none','',500);

rdo1UpdateCityTown(e);

}
else
if ((GetWidgetText('u41')) == ('')) {

	SetPanelState('u42', 'pd1u42','none','',500,'none','',500);

}
});
gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u49'] = 'top';
$axure.eventManager.focus('u1', function(e) {

if (true) {

SetWidgetFormText('u73', GetWidgetText('u23'));

}
});
gv_vAlignTable['u2'] = 'top';
$axure.eventManager.focus('u3', function(e) {

if (true) {

SetWidgetFormText('u82', GetWidgetText('u32'));

}
});
gv_vAlignTable['u4'] = 'top';
$axure.eventManager.focus('u5', function(e) {

if (true) {

SetWidgetFormText('u91', GetWidgetText('u41'));

}
});
gv_vAlignTable['u6'] = 'top';
$axure.eventManager.focus('u7', function(e) {

if (true) {

SetWidgetFormText('u100', GetWidgetText('u50'));

}
});
gv_vAlignTable['u8'] = 'top';
$axure.eventManager.focus('u9', function(e) {

if (true) {

SetWidgetFormText('u64', GetWidgetText('u14'));

}
});

$axure.eventManager.blur('u50', function(e) {

if ((GetWidgetText('u50')) != ('')) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

rdo1UpdateStateCounty(e);

}
else
if ((GetWidgetText('u50')) == ('')) {

	SetPanelVisibility('u51','hidden','none',500);

rdo1UpdateStateCounty(e);

}
});
gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u56'] = 'center';
$axure.eventManager.click('u58', function(e) {

if (true) {

	var obj1 = document.getElementById("u1");
    obj1.focus();

}
});

$axure.eventManager.click('u58', function(e) {

if (true) {

	var obj1 = document.getElementById("u1");
    obj1.focus();

}
});

$axure.eventManager.click('u58', function(e) {

if (true) {

	var obj1 = document.getElementById("u1");
    obj1.focus();

}
});

$axure.eventManager.click('u58', function(e) {

if (true) {

	var obj1 = document.getElementById("u1");
    obj1.focus();

}
});

$axure.eventManager.click('u58', function(e) {

if (true) {

	var obj1 = document.getElementById("u1");
    obj1.focus();

}
});

$axure.eventManager.click('u58', function(e) {

if (true) {

	var obj1 = document.getElementById("u1");
    obj1.focus();

}
});
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u60'] = 'top';
u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if ((GetCheckState('u61')) == (false)) {

SetWidgetFormText('u73', '');

SetWidgetFormText('u82', '');

SetWidgetFormText('u91', '');

SetWidgetFormText('u100', '');

SetWidgetFormText('u64', '');

;

	var obj1 = document.getElementById("u73");
    obj1.disabled = false;

	var obj1 = document.getElementById("u82");
    obj1.disabled = false;

	var obj1 = document.getElementById("u91");
    obj1.disabled = false;

	var obj1 = document.getElementById("u100");
    obj1.disabled = false;

	var obj1 = document.getElementById("u64");
    obj1.disabled = false;

}
else
if ((GetCheckState('u61')) == (true)) {

SetWidgetFormText('u73', GetWidgetText('u23'));

SetWidgetFormText('u82', GetWidgetText('u32'));

SetWidgetFormText('u91', GetWidgetText('u41'));

SetWidgetFormText('u100', GetWidgetText('u50'));

SetWidgetFormText('u64', GetWidgetText('u14'));

;

	var obj1 = document.getElementById("u73");
    obj1.disabled = true;

	var obj1 = document.getElementById("u82");
    obj1.disabled = true;

	var obj1 = document.getElementById("u91");
    obj1.disabled = true;

	var obj1 = document.getElementById("u100");
    obj1.disabled = true;

	var obj1 = document.getElementById("u64");
    obj1.disabled = true;

}
});
gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u63'] = 'top';
$axure.eventManager.blur('u64', function(e) {

if ((GetWidgetText('u64')) != ('')) {

	SetPanelState('u65', 'pd0u65','none','',500,'none','',500);

rdo7UpdateZipPostcode(e);

}
else
if ((GetWidgetText('u64')) == ('')) {

	SetPanelVisibility('u65','hidden','none',500);

rdo7UpdateZipPostcode(e);

}
});
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u72'] = 'top';
$axure.eventManager.blur('u73', function(e) {

if ((GetWidgetText('u73')) != ('')) {

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

rdo7UpdateAddress1(e);

}
else
if ((GetWidgetText('u73')) == ('')) {

	SetPanelState('u74', 'pd1u74','none','',500,'none','',500);

}
});
gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u79'] = 'center';