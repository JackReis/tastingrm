for(var i = 0; i < 26; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';
$axure.eventManager.mouseout('u1', function(e) {
if (!IsTrueMouseOut('u1',e)) return;
if (true) {

	SetPanelState('u0', 'pd0u0','fade','',500,'swing','left',500);

}
});
gv_vAlignTable['u2'] = 'center';
$axure.eventManager.focus('u3', function(e) {

if ((GetWidgetText('u3')) == ('Search')) {

SetWidgetFormText('u3', '');

}
});

$axure.eventManager.blur('u3', function(e) {

if ((GetWidgetText('u3')) == ('')) {

SetWidgetFormText('u3', 'Search');

}
});
document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','fade','',500,'swing','left',500);

}
});
gv_vAlignTable['u5'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'swing','right',500);

}
});

$axure.eventManager.mouseover('u6', function(e) {
if (!IsTrueMouseOver('u6',e)) return;
if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u7'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','swing','right',500,'swing','right',500);

}
});

$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelState('u0', 'pd1u0','fade','',500,'swing','right',500);

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'top';