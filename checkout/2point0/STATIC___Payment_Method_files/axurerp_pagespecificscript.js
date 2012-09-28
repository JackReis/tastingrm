for(var i = 0; i < 73; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u23'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u23'] = function() {
var e = windowEvent;

if (true) {

}

}
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u53'] = 'top';
$axure.eventManager.focus('u56', function(e) {

if ((GetWidgetText('u55')) == ('')) {

SetWidgetFormText('u55', GetWidgetText('u56'));

SetWidgetFormText('u56', '');

}
});

$axure.eventManager.blur('u56', function(e) {

if ((GetWidgetText('u56')) == ('')) {

SetWidgetFormText('u56', GetWidgetText('u55'));

SetWidgetFormText('u55', '');

}
});
gv_vAlignTable['u58'] = 'center';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

}
});
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';document.getElementById('u61_img').tabIndex = 0;
HookHover('u61', false);
HookClick('u61', false);

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','fade',500);

}
});
gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u63'] = 'top';
$axure.eventManager.change('u64', function(e) {

if ((GetSelectedOption('u64')) == ('Gift Card')) {

	NewWindow("resources/Other.html#other=" + encodeURI("This would cause different fields to appear: Gift Card # &amp; Current balance are the only ones I know will be there."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u65'] = 'top';document.getElementById('u67_img').tabIndex = 0;
HookHover('u67', false);

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This would add a similar panel right below their payment method with the form fields required for the selected card type. After clicking {+ Add} the user sees how much would be charged on the first payment type. Credit cards should only be used after all gift cards are exhausted. Payment breakdown occurs on clicking Continue and appears in the right rail."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';