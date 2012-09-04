for(var i = 0; i < 111; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('vFeaturedProd', '1');

	SetPanelState('u34', 'pd0u34','none','',500,'none','',500);

	SetPanelState('u61', 'pd0u61','none','',500,'none','',500);

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	MoveWidgetBy('u16', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u16','','none',500);

	MoveWidgetBy('u19', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u19','','none',500);

}

});

if (bIE) document.getElementById('u1').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u1'); });
else {
    document.getElementById('u1').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u1'); }, true);
    document.getElementById('u1').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u1'); }, true);
}

widgetIdToDragFunction['u1'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('vFeaturedProd')) == ('1')) && (IsOver(GetWidgetRectangles('u1'), GetWidgetRectangles('u16')))) {

SetGlobalVariableValue('vFeaturedProd', '2');

	SetPanelState('u34', 'pd1u34','none','',500,'none','',500);

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	SetPanelState('u61', 'pd1u61','none','',500,'none','',500);

	SetPanelVisibility('u16','hidden','none',500);

	MoveWidgetBy('u16', GetNum('0'), GetNum('105'),'none',500);

	SetPanelVisibility('u19','hidden','none',500);

	MoveWidgetBy('u19', GetNum('0'), GetNum('105'),'none',500);

	MoveWidgetTo('u1', GetNum('640'), GetNum('0'),'linear',500);
function waitu16bbf37b658d4ae69ee6f14a2cd30dbd1() {

	SetPanelVisibility('u22','','none',500);

	MoveWidgetBy('u22', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u25','','none',500);

	MoveWidgetBy('u25', GetNum('0'), GetNum('-105'),'none',500);
}
setTimeout(waitu16bbf37b658d4ae69ee6f14a2cd30dbd1, 1000);

}
else
if (((GetGlobalVariableValue('vFeaturedProd')) == ('2')) && (IsOver(GetWidgetRectangles('u1'), GetWidgetRectangles('u22')))) {

SetGlobalVariableValue('vFeaturedProd', '3');

	SetPanelState('u34', 'pd2u34','none','',500,'none','',500);

	SetPanelState('u56', 'pd1u56','none','',500,'none','',500);

	SetPanelState('u61', 'pd1u61','none','',500,'none','',500);

	SetPanelVisibility('u22','hidden','none',500);

	MoveWidgetBy('u22', GetNum('0'), GetNum('105'),'none',500);

	SetPanelVisibility('u25','hidden','none',500);

	MoveWidgetBy('u25', GetNum('0'), GetNum('105'),'none',500);

	MoveWidgetTo('u1', GetNum('320'), GetNum('0'),'linear',500);
function waitu7f45b858f12f40ddab53b12e7c7d8ab91() {

	SetPanelVisibility('u31','','none',500);

	MoveWidgetBy('u31', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u28','','none',500);

	MoveWidgetBy('u28', GetNum('0'), GetNum('-105'),'none',500);
}
setTimeout(waitu7f45b858f12f40ddab53b12e7c7d8ab91, 1000);

}
else
if (((GetGlobalVariableValue('vFeaturedProd')) == ('2')) && (IsOver(GetWidgetRectangles('u1'), GetWidgetRectangles('u25')))) {

SetGlobalVariableValue('vFeaturedProd', '1');

	SetPanelState('u34', 'pd0u34','none','',500,'none','',500);

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	SetPanelState('u61', 'pd0u61','none','',500,'none','',500);

	SetPanelVisibility('u25','hidden','none',500);

	MoveWidgetBy('u25', GetNum('0'), GetNum('105'),'none',500);

	SetPanelVisibility('u22','hidden','none',500);

	MoveWidgetBy('u22', GetNum('0'), GetNum('105'),'none',500);

	MoveWidgetTo('u1', GetNum('960'), GetNum('0'),'linear',500);
function waitu018ba16445ac42469b5dc1adbf4a77561() {

	SetPanelVisibility('u16','','none',500);

	MoveWidgetBy('u16', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u19','','none',500);

	MoveWidgetBy('u19', GetNum('0'), GetNum('-105'),'none',500);
}
setTimeout(waitu018ba16445ac42469b5dc1adbf4a77561, 1000);

}
else
if (((GetGlobalVariableValue('vFeaturedProd')) == ('3')) && (IsOver(GetWidgetRectangles('u1'), GetWidgetRectangles('u31')))) {

SetGlobalVariableValue('vFeaturedProd', '2');

	SetPanelState('u34', 'pd1u34','none','',500,'none','',500);

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	SetPanelState('u61', 'pd1u61','none','',500,'none','',500);

	SetPanelVisibility('u31','hidden','none',500);

	MoveWidgetBy('u31', GetNum('0'), GetNum('105'),'none',500);

	SetPanelVisibility('u28','hidden','none',500);

	MoveWidgetBy('u28', GetNum('0'), GetNum('105'),'none',500);

	MoveWidgetTo('u1', GetNum('640'), GetNum('0'),'linear',500);
function waitu0da5e088b3654fe9ac0cd476d2c4dc2b1() {

	SetPanelVisibility('u22','','none',500);

	MoveWidgetBy('u22', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u25','','none',500);

	MoveWidgetBy('u25', GetNum('0'), GetNum('-105'),'none',500);
}
setTimeout(waitu0da5e088b3654fe9ac0cd476d2c4dc2b1, 1000);

}
else
if (((GetGlobalVariableValue('vFeaturedProd')) == ('1')) && (IsOver(GetWidgetRectangles('u1'), GetWidgetRectangles('u19')))) {
function waitu1407db18a1764b70abd448ed74ac26111() {

	MoveWidgetTo('u1', GetNum('960'), GetNum('0'),'none',500);
}
setTimeout(waitu1407db18a1764b70abd448ed74ac26111, 500);

}
else
if (((GetGlobalVariableValue('vFeaturedProd')) == ('3')) && (IsOver(GetWidgetRectangles('u1'), GetWidgetRectangles('u28')))) {
function waitufb44fabf0985465fa6e95ef12ea555e71() {

	MoveWidgetTo('u1', GetNum('320'), GetNum('0'),'none',500);
}
setTimeout(waitufb44fabf0985465fa6e95ef12ea555e71, 500);

}
else
if (true) {

	MoveWidgetBy('u1',widgetDragInfo.xDelta,0,'none',500);

}

}
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u91'] = 'top';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u11'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u13'] = 'center';document.getElementById('u14_img').tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u18'] = 'center';u110.tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u100'] = 'center';u102.tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
u103.tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
u104.tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
u105.tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
u107.tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
u108.tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
u109.tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');

}
});
gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u3'] = 'center';u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u4'] = 'top';u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u5'] = 'top';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u6'] = 'top';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u7'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u8'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';u66.tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if ((GetGlobalVariableValue('vFeaturedProd')) == ('2')) {

SetGlobalVariableValue('vFeaturedProd', '1');

	SetPanelState('u34', 'pd0u34','none','',500,'none','',500);

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	SetPanelState('u61', 'pd0u61','none','',500,'none','',500);

	SetPanelVisibility('u25','hidden','none',500);

	MoveWidgetBy('u25', GetNum('0'), GetNum('105'),'none',500);

	SetPanelVisibility('u22','hidden','none',500);

	MoveWidgetBy('u22', GetNum('0'), GetNum('105'),'none',500);

	MoveWidgetTo('u1', GetNum('960'), GetNum('0'),'linear',500);
function waitucec02f1a137f4f8cb36049ef5957bf9c1() {

	SetPanelVisibility('u16','','none',500);

	MoveWidgetBy('u16', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u19','','none',500);

	MoveWidgetBy('u19', GetNum('0'), GetNum('-105'),'none',500);
}
setTimeout(waitucec02f1a137f4f8cb36049ef5957bf9c1, 1500);

}
else
if ((GetGlobalVariableValue('vFeaturedProd')) == ('3')) {

SetGlobalVariableValue('vFeaturedProd', '2');

	SetPanelState('u34', 'pd1u34','none','',500,'none','',500);

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	SetPanelState('u61', 'pd1u61','none','',500,'none','',500);

	SetPanelVisibility('u31','hidden','none',500);

	MoveWidgetBy('u31', GetNum('0'), GetNum('105'),'none',500);

	SetPanelVisibility('u28','hidden','none',500);

	MoveWidgetBy('u28', GetNum('0'), GetNum('105'),'none',500);

	MoveWidgetTo('u1', GetNum('640'), GetNum('0'),'linear',500);
function waitu1c487561a9c243c6b3d258e3c3fca6961() {

	SetPanelVisibility('u22','','none',500);

	MoveWidgetBy('u22', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u25','','none',500);

	MoveWidgetBy('u25', GetNum('0'), GetNum('-105'),'none',500);
}
setTimeout(waitu1c487561a9c243c6b3d258e3c3fca6961, 1500);

}
});
u67.tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if ((GetGlobalVariableValue('vFeaturedProd')) == ('1')) {

SetGlobalVariableValue('vFeaturedProd', '2');

	SetPanelState('u34', 'pd1u34','none','',500,'none','',500);

	SetPanelState('u56', 'pd0u56','none','',500,'none','',500);

	SetPanelState('u61', 'pd1u61','none','',500,'none','',500);

	SetPanelVisibility('u16','hidden','none',500);

	MoveWidgetBy('u16', GetNum('0'), GetNum('105'),'none',500);

	SetPanelVisibility('u19','hidden','none',500);

	MoveWidgetBy('u19', GetNum('0'), GetNum('105'),'none',500);

	MoveWidgetTo('u1', GetNum('640'), GetNum('0'),'linear',500);
function waitua6f555104d6445068ff91e305ec9e4921() {

	SetPanelVisibility('u22','','none',500);

	MoveWidgetBy('u22', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u25','','none',500);

	MoveWidgetBy('u25', GetNum('0'), GetNum('-105'),'none',500);
}
setTimeout(waitua6f555104d6445068ff91e305ec9e4921, 1500);

}
else
if ((GetGlobalVariableValue('vFeaturedProd')) == ('2')) {

SetGlobalVariableValue('vFeaturedProd', '3');

	SetPanelState('u34', 'pd2u34','none','',500,'none','',500);

	SetPanelState('u56', 'pd1u56','none','',500,'none','',500);

	SetPanelState('u61', 'pd1u61','none','',500,'none','',500);

	SetPanelVisibility('u22','hidden','none',500);

	MoveWidgetBy('u22', GetNum('0'), GetNum('105'),'none',500);

	SetPanelVisibility('u25','hidden','none',500);

	MoveWidgetBy('u25', GetNum('0'), GetNum('105'),'none',500);

	MoveWidgetTo('u1', GetNum('320'), GetNum('0'),'linear',500);
function waitu10342d4754d446e995271c797cc1f83c1() {

	SetPanelVisibility('u31','','none',500);

	MoveWidgetBy('u31', GetNum('0'), GetNum('-105'),'none',500);

	SetPanelVisibility('u28','','none',500);

	MoveWidgetBy('u28', GetNum('0'), GetNum('-105'),'none',500);
}
setTimeout(waitu10342d4754d446e995271c797cc1f83c1, 1500);

}
});
document.getElementById('u68_img').tabIndex = 0;

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u79'] = 'top';