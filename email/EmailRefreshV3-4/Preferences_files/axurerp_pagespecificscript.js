for(var i = 0; i < 36; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

$axure.eventManager.focus('u20', function(e) {

if ((GetWidgetText('u20')) == ('First name')) {

SetWidgetFormText('u20', '');

}
});

$axure.eventManager.blur('u20', function(e) {

if ((GetWidgetText('u20')) == ('')) {

SetWidgetFormText('u20', 'First name');

}
});

$axure.eventManager.focus('u21', function(e) {

if ((GetWidgetText('u21')) == ('Last name')) {

SetWidgetFormText('u21', '');

}
});

$axure.eventManager.blur('u21', function(e) {

if ((GetWidgetText('u21')) == ('')) {

SetWidgetFormText('u21', 'Last name');

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';
$axure.eventManager.change('u33', function(e) {

if (((GetSelectedOption('u33')) == ('dd')) || (((GetSelectedOption('u34')) == ('mm')) || ((GetSelectedOption('u35')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u33')) != ('dd')) && (((GetSelectedOption('u34')) != ('mm')) && ((GetSelectedOption('u35')) != ('yyyy')))) {

}
});

$axure.eventManager.focus('u33', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u33', function(e) {

if (((GetSelectedOption('u33')) == ('dd')) || (((GetSelectedOption('u34')) == ('mm')) || ((GetSelectedOption('u35')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u33')) != ('dd')) && (((GetSelectedOption('u34')) != ('mm')) && ((GetSelectedOption('u35')) != ('yyyy')))) {

}
});

$axure.eventManager.change('u34', function(e) {

if (((GetSelectedOption('u33')) == ('dd')) || (((GetSelectedOption('u34')) == ('mm')) || ((GetSelectedOption('u35')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u33')) != ('dd')) && (((GetSelectedOption('u34')) != ('mm')) && ((GetSelectedOption('u35')) != ('yyyy')))) {

}
});

$axure.eventManager.focus('u34', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u34', function(e) {

if (((GetSelectedOption('u33')) == ('dd')) || (((GetSelectedOption('u34')) == ('mm')) || ((GetSelectedOption('u35')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u33')) != ('dd')) && (((GetSelectedOption('u34')) != ('mm')) && ((GetSelectedOption('u35')) != ('yyyy')))) {

}
});

$axure.eventManager.change('u35', function(e) {

if (((GetSelectedOption('u33')) == ('dd')) || (((GetSelectedOption('u34')) == ('mm')) || ((GetSelectedOption('u35')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u33')) != ('dd')) && (((GetSelectedOption('u34')) != ('mm')) && ((GetSelectedOption('u35')) != ('yyyy')))) {

}
else
if ((GetSelectedOption('u35')) > Number('2007')) {

}
else
if ((GetSelectedOption('u35')) > Number('1997')) {

}
else
if ((GetSelectedOption('u35')) > Number('1991')) {

}
else
if ((GetSelectedOption('u35')) < Number('1991')) {

}
});

$axure.eventManager.focus('u35', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u35', function(e) {

if (((GetSelectedOption('u33')) == ('dd')) || (((GetSelectedOption('u34')) == ('mm')) || ((GetSelectedOption('u35')) == ('yyyy')))) {

}
else
if (((GetSelectedOption('u33')) != ('dd')) && (((GetSelectedOption('u34')) != ('mm')) && ((GetSelectedOption('u35')) != ('yyyy')))) {

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';document.getElementById('u18_img').tabIndex = 0;
HookHover('u18', false);
HookClick('u18', false);

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (((GetWidgetText('u20')) != ('First name')) && ((GetWidgetText('u21')) != ('Last name'))) {

SetGlobalVariableValue('FirstNameVar', GetWidgetText('u20'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Success_Personalized.html');

}

if (true) {

	SetPanelVisibility('u30','','none',500);

}
});
gv_vAlignTable['u19'] = 'center';