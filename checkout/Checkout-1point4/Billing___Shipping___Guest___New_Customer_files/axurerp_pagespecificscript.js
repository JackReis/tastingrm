for(var i = 0; i < 321; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u4', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

SetWidgetRichText('u8', '<p style="text-align:left;line-height:45px;"><span style="font-family:Helvetica Neue;font-size:18px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">Total</span><span style="font-family:Helvetica Neue;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;"> (' + (GetGlobalVariableValue('ItemsInCart')) + ' items)</span></p>');

}

if (true) {

SetWidgetRichText('u4', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});

widgetIdToMoveFunction['u152'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u109','u152');

}

}

widgetIdToMoveFunction['u196'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u97','u196');

}

}

widgetIdToShowFunction['u200'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u15', GetNum('0'), GetNum('363'),'swing',500);

	MoveWidgetBy('u264', GetNum('0'), GetNum('360'),'swing',500);

}

}

widgetIdToHideFunction['u200'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u15', GetNum('0'), GetNum('-363'),'swing',500);

	MoveWidgetBy('u264', GetNum('0'), GetNum('-360'),'swing',500);

}

}

widgetIdToShowFunction['u201'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u15', GetNum('0'), GetNum('54'),'swing',500);

	MoveWidgetBy('u264', GetNum('0'), GetNum('54'),'swing',500);

}

}

widgetIdToHideFunction['u201'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u15', GetNum('0'), GetNum('-54'),'swing',500);

	MoveWidgetBy('u264', GetNum('0'), GetNum('-54'),'swing',500);

}

}

widgetIdToShowFunction['u202'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u202'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToShowFunction['u37'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u196', GetNum('0'), GetNum('448'),'swing',500);

	SetPanelState('u100', 'pd0u100','none','',500,'fade','',500);

}

}

widgetIdToHideFunction['u37'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u196', GetNum('0'), GetNum('-448'),'swing',500);

	SetPanelState('u100', 'pd1u100','none','',500,'none','',500);

}

}

widgetIdToShowFunction['u38'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u196', GetNum('0'), GetNum('47'),'swing',500);

}

}

widgetIdToHideFunction['u38'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u196', GetNum('0'), GetNum('-47'),'swing',500);

}

}

widgetIdToShowFunction['u39'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u39'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToShowFunction['u145'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u267', GetNum('0'), GetNum('81'),'swing',500);

}

}

widgetIdToHideFunction['u145'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u267', GetNum('0'), GetNum('-81'),'swing',500);

	SetPanelVisibility('u110','hidden','none',500);

	SetPanelVisibility('u113','hidden','none',500);

}

}

widgetIdToShowFunction['u110'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u267', GetNum('0'), GetNum('38'),'swing',500);

}

}

widgetIdToHideFunction['u110'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u267', GetNum('0'), GetNum('-38'),'swing',500);

}

}

widgetIdToShowFunction['u113'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u267', GetNum('0'), GetNum('350'),'swing',500);

}

}

widgetIdToHideFunction['u113'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u267', GetNum('0'), GetNum('-350'),'swing',500);

}

}

widgetIdToShowFunction['u197'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u15', GetNum('0'), GetNum('468'),'swing',500);

	SetPanelState('u257', 'pd0u257','none','',500,'fade','',500);

}

}

widgetIdToHideFunction['u197'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u15', GetNum('0'), GetNum('-468'),'swing',500);

	SetPanelState('u257', 'pd1u257','none','',500,'fade','',500);

}

}

widgetIdToMoveFunction['u15'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u152','u15');

}

}

widgetIdToHideFunction['u18'] = function() {
var e = windowEvent;

if (true) {

}

}
gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u103'] = 'top';u104.tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	SetPanelVisibility('u37','','fade',500);

	SetPanelState('u37', 'pd0u37','none','',500,'swing','down',500);

}
});
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u259'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u88'] = 'center';
$axure.eventManager.focus('u119', function(e) {

if ((GetWidgetText('u118')) == ('')) {

SetWidgetFormText('u118', GetWidgetText('u119'));

SetWidgetFormText('u119', '');

}
});

$axure.eventManager.blur('u119', function(e) {

if ((GetWidgetText('u119')) == ('')) {

SetWidgetFormText('u119', GetWidgetText('u118'));

SetWidgetFormText('u118', '');

}
});
gv_vAlignTable['u269'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u95'] = 'top';document.getElementById('u98_img').tabIndex = 0;
HookHover('u98', false);
HookClick('u98', false);

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	SetPanelVisibility('u37','hidden','fade',500);

}
});
gv_vAlignTable['u127'] = 'top';
u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','fade',500);

}
});
gv_vAlignTable['u129'] = 'top';document.getElementById('u278_img').tabIndex = 0;
HookHover('u278', false);
HookClick('u278', false);

u278.style.cursor = 'pointer';
$axure.eventManager.click('u278', function(e) {

if ((GetWidgetText('u277')) == ('PROMO1')) {

SetGlobalVariableValue('HasPROMO1', 'Yes');

	SetPanelState('u273', 'pd1u273','none','',500,'none','',500);

}

if ((GetWidgetText('u277')) != ('PROMO1')) {

SetWidgetFormText('u277', 'Not A Valid Code.');
function waitu0bd5f73023dc4b879dabd87b4378a8831() {

SetWidgetFormText('u277', 'Enter A Promo Code…');
}
setTimeout(waitu0bd5f73023dc4b879dabd87b4378a8831, 3000);

}
});
gv_vAlignTable['u279'] = 'center';
$axure.eventManager.focus('u132', function(e) {

if ((GetWidgetText('u131')) == ('')) {

SetWidgetFormText('u131', GetWidgetText('u132'));

SetWidgetFormText('u132', '');

}
});

$axure.eventManager.blur('u132', function(e) {

if ((GetWidgetText('u132')) == ('')) {

SetWidgetFormText('u132', GetWidgetText('u131'));

SetWidgetFormText('u131', '');

}
});
gv_vAlignTable['u133'] = 'top';document.getElementById('u134_img').tabIndex = 0;
HookHover('u134', false);
HookClick('u134', false);

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','none',500);

	SetPanelVisibility('u145','hidden','none',500);

}
});
gv_vAlignTable['u135'] = 'center';
u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if ((GetCheckState('u136')) != (false)) {

	SetPanelVisibility('u113','','fade',500);

	BringToFront("u113");
function waitu77a0975be65f440099869a93a4efd7dc1() {

	SetPanelState('u113', 'pd0u113','none','',500,'swing','down',500);
}
setTimeout(waitu77a0975be65f440099869a93a4efd7dc1, 500);

}

if ((GetCheckState('u136')) == (false)) {

	SetPanelVisibility('u113','hidden','fade',500);

	SendToBack("u113");

}
});
gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u289'] = 'top';gv_vAlignTable['u300'] = 'center';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u304'] = 'center';gv_vAlignTable['u306'] = 'center';gv_vAlignTable['u309'] = 'top';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u141'] = 'top';u142.tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	SetPanelVisibility('u145','','fade',500);

}
});
gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u147'] = 'top';document.getElementById('u148_img').tabIndex = 0;
HookHover('u148', false);
HookClick('u148', false);

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelVisibility('u110','','none',500);

	BringToFront("u110");

	SetPanelState('u110', 'pd0u110','none','',500,'swing','up',500);

SetGlobalVariableValue('IsGift', 'Yes');

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u275'] = 'top';gv_vAlignTable['u276'] = 'top';$('#u277').attr('axSubmit', 'u278');

$axure.eventManager.focus('u277', function(e) {

if (true) {

SetWidgetFormText('u277', '');

}
});

$axure.eventManager.blur('u277', function(e) {

if ((GetWidgetText('u277')) != ('PROMO1')) {

SetWidgetFormText('u277', 'Not A Valid Code.');
function waitu56423340e30f4169ac67d2e64ca041881() {

SetWidgetFormText('u277', 'Enter A Promo Code…');
}
setTimeout(waitu56423340e30f4169ac67d2e64ca041881, 3000);

}
});
gv_vAlignTable['u310'] = 'top';gv_vAlignTable['u311'] = 'top';gv_vAlignTable['u312'] = 'top';gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u315'] = 'top';gv_vAlignTable['u316'] = 'top';document.getElementById('u150_img').tabIndex = 0;
HookHover('u150', false);
HookClick('u150', false);

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	SetPanelVisibility('u145','hidden','fade',500);

SetGlobalVariableValue('IsGift', 'No');

}
});
gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u158'] = 'top';gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u284'] = 'top';gv_vAlignTable['u285'] = 'top';gv_vAlignTable['u286'] = 'top';gv_vAlignTable['u287'] = 'top';gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u293'] = 'top';gv_vAlignTable['u294'] = 'top';gv_vAlignTable['u295'] = 'top';gv_vAlignTable['u296'] = 'top';gv_vAlignTable['u170'] = 'top';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u175'] = 'center';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u178'] = 'center';
u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if ((GetCheckState('u253')) != (false)) {

	SetPanelVisibility('u201','','fade',500);

	BringToFront("u201");

	BringToFront("u264");

	SetPanelState('u201', 'pd0u201','none','',500,'swing','down',500);

}

if ((GetCheckState('u253')) == (false)) {

	SetPanelVisibility('u201','hidden','fade',500);

}
});
gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u181'] = 'top';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u189'] = 'center';gv_vAlignTable['u307'] = 'top';gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u192'] = 'top';HookHover('u194', false);
HookClick('u194', false);
gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u317'] = 'top';gv_vAlignTable['u272'] = 'center';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';
$axure.eventManager.focus('u242', function(e) {

if ((GetWidgetText('u241')) == ('')) {

SetWidgetFormText('u241', GetWidgetText('u242'));

SetWidgetFormText('u242', '');

}
});

$axure.eventManager.blur('u242', function(e) {

if ((GetWidgetText('u242')) == ('')) {

SetWidgetFormText('u242', GetWidgetText('u241'));

SetWidgetFormText('u241', '');

}
});
gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u298'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';document.getElementById('u13_img').tabIndex = 0;
HookHover('u13', false);
HookClick('u13', false);

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', u13Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u13LinksClick'></div>")
var u13LinksClick = document.getElementById('u13LinksClick');
function u13Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u13LinksClick');
}

InsertBeforeEnd(u13LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u13Clicku44debf369a104a739a085177a0af9115(event)'>Valid</div>");
function u13Clicku44debf369a104a739a085177a0af9115(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Payment_Info.html');

	ToggleLinks(e, 'u13LinksClick');
}

InsertBeforeEnd(u13LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u13Clickube137fe24f8f44b684e905328c0c5f13(event)'>NotValid</div>");
function u13Clickube137fe24f8f44b684e905328c0c5f13(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Address_Errors.html');

	ToggleLinks(e, 'u13LinksClick');
}
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u254'] = 'top';
u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if ((GetCheckState('u255')) != (false)) {

	SetPanelVisibility('u200','hidden','fade',500);

	BringToFront("u264");

}

if ((GetCheckState('u255')) == (false)) {

	SetPanelVisibility('u200','','fade',500);

	BringToFront("u200");

	SetPanelState('u200', 'pd0u200','none','',500,'swing','down',500);

	BringToFront("u264");

}
});
gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u26'] = 'top';document.getElementById('u27_img').tabIndex = 0;
HookHover('u27', false);
HookClick('u27', false);

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

}
});
gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u209'] = 'top';gv_vAlignTable['u120'] = 'top';
$axure.eventManager.focus('u123', function(e) {

if ((GetWidgetText('u122')) == ('')) {

SetWidgetFormText('u122', GetWidgetText('u123'));

SetWidgetFormText('u123', '');

}
});

$axure.eventManager.blur('u123', function(e) {

if ((GetWidgetText('u123')) == ('')) {

SetWidgetFormText('u123', GetWidgetText('u122'));

SetWidgetFormText('u122', '');

}
});
gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u125'] = 'top';u261.tabIndex = 0;

u261.style.cursor = 'pointer';
$axure.eventManager.click('u261', function(e) {

if (true) {

	SetPanelVisibility('u197','','fade',500);

	SetPanelVisibility('u264','','fade',500);

	SetPanelState('u197', 'pd0u197','none','',500,'swing','down',500);

}
});

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	SetPanelVisibility('u113','hidden','fade',500);

	SendToBack("u113");

}
});
gv_vAlignTable['u263'] = 'center';document.getElementById('u265_img').tabIndex = 0;
HookHover('u265', false);
HookClick('u265', false);

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if (true) {

	SetPanelVisibility('u197','hidden','fade',500);

	SetPanelVisibility('u264','hidden','none',500);

	SetPanelState('u257', 'pd1u257','none','',500,'none','',500);

}
});
gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u266'] = 'center';gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u205'] = 'top';u274.tabIndex = 0;

u274.style.cursor = 'pointer';
$axure.eventManager.click('u274', function(e) {

if (true) {

	SetPanelState('u273', 'pd0u273','none','',500,'none','',500);

SetGlobalVariableValue('HasPROMO1', 'No');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u46'] = 'top';
u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if ((GetCheckState('u47')) != (false)) {

	SetPanelVisibility('u38','','fade',500);

	BringToFront("u38");

	BringToFront("u97");

	SetPanelState('u38', 'pd0u38','none','',500,'swing','up',500);

}

if ((GetCheckState('u47')) == (false)) {

	SetPanelVisibility('u38','hidden','fade',500);

}
});
gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u226'] = 'center';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u212'] = 'top';document.getElementById('u280_img').tabIndex = 0;
HookHover('u280', false);
HookClick('u280', false);

u280.style.cursor = 'pointer';
$axure.eventManager.click('u280', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Account.html');

}
});
gv_vAlignTable['u281'] = 'center';gv_vAlignTable['u283'] = 'top';gv_vAlignTable['u50'] = 'top';
$axure.eventManager.blur('u51', function(e) {

if (false) {

}
});
gv_vAlignTable['u52'] = 'top';
u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if ((GetWidgetText('u51')) == ('')) {

}
});

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
gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u236'] = 'top';
$axure.eventManager.blur('u237', function(e) {

if (false) {

}
});
gv_vAlignTable['u238'] = 'top';
u239.style.cursor = 'pointer';
$axure.eventManager.click('u239', function(e) {

if ((GetWidgetText('u237')) == ('')) {

}
});
gv_vAlignTable['u291'] = 'center';gv_vAlignTable['u60'] = 'top';
$axure.eventManager.focus('u63', function(e) {

if ((GetWidgetText('u62')) == ('')) {

SetWidgetFormText('u62', GetWidgetText('u63'));

SetWidgetFormText('u63', '');

}
});

$axure.eventManager.blur('u63', function(e) {

if ((GetWidgetText('u63')) == ('')) {

SetWidgetFormText('u63', GetWidgetText('u62'));

SetWidgetFormText('u62', '');

}
});
gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u246'] = 'top';
$axure.eventManager.focus('u249', function(e) {

if ((GetWidgetText('u248')) == ('')) {

SetWidgetFormText('u248', GetWidgetText('u249'));

SetWidgetFormText('u249', '');

}
});

$axure.eventManager.blur('u249', function(e) {

if ((GetWidgetText('u249')) == ('')) {

SetWidgetFormText('u249', GetWidgetText('u248'));

SetWidgetFormText('u248', '');

}
});
