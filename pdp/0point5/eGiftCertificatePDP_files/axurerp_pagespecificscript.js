for(var i = 0; i < 178; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

function rdo1UpdateAddress1(e) {

}

function rdo1UpdateAddress2(e) {

}

function rdo1UpdateCityTown(e) {

}

function rdo1UpdateStateCounty(e) {

}

function rdo1UpdateZipPostcode(e) {

}

function rdo1UpdateCountry(e) {

}
gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u157'] = 'top';
$axure.eventManager.blur('u158', function(e) {

if ((GetWidgetText('u158')) != ('')) {

	SetPanelState('u159', 'pd0u159','none','',500,'none','',500);

rdo1UpdateCityTown(e);

}
else
if ((GetWidgetText('u158')) == ('')) {

	SetPanelState('u159', 'pd1u159','none','',500,'none','',500);

}
});
gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u171'] = 'top';
$axure.eventManager.focus('u82', function(e) {

if ((GetWidgetText('u81')) == ('')) {

SetWidgetFormText('u81', GetWidgetText('u82'));

SetWidgetFormText('u82', '');

}
});

$axure.eventManager.blur('u82', function(e) {

if ((GetWidgetText('u82')) == ('')) {

SetWidgetFormText('u82', GetWidgetText('u81'));

SetWidgetFormText('u81', '');

}
});
gv_vAlignTable['u83'] = 'top';
$axure.eventManager.focus('u86', function(e) {

if ((GetWidgetText('u85')) == ('')) {

SetWidgetFormText('u85', GetWidgetText('u86'));

SetWidgetFormText('u86', '');

}
});

$axure.eventManager.blur('u86', function(e) {

if ((GetWidgetText('u86')) == ('')) {

SetWidgetFormText('u86', GetWidgetText('u85'));

SetWidgetFormText('u85', '');

}
});
gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u166'] = 'top';
$axure.eventManager.blur('u167', function(e) {

if ((GetWidgetText('u167')) != ('')) {

	SetPanelState('u168', 'pd0u168','none','',500,'none','',500);

rdo1UpdateStateCounty(e);

}
else
if ((GetWidgetText('u167')) == ('')) {

	SetPanelVisibility('u168','hidden','none',500);

rdo1UpdateStateCounty(e);

}
});

$axure.eventManager.focus('u91', function(e) {

if ((GetWidgetText('u90')) == ('')) {

SetWidgetFormText('u90', GetWidgetText('u91'));

SetWidgetFormText('u91', '');

}
});

$axure.eventManager.blur('u91', function(e) {

if ((GetWidgetText('u91')) == ('')) {

SetWidgetFormText('u91', GetWidgetText('u90'));

SetWidgetFormText('u90', '');

}
});
document.getElementById('u92_img').tabIndex = 0;
HookHover('u92', false);
HookClick('u92', false);

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', u92Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u92LinksClick'></div>")
var u92LinksClick = document.getElementById('u92LinksClick');
function u92Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u92LinksClick');
}

InsertBeforeEnd(u92LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u92Clickub2d995f5d71c493ba77b676d66759e93(event)'>explanation</div>");
function u92Clickub2d995f5d71c493ba77b676d66759e93(e)
{

	NewWindow("resources/Other.html#other=" + encodeURI("Shows a preview of the information on the e-Gift Certificate of selected denomination to the cart and goes to a truncated checkout (harvest billing and return to shopping)."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

	ToggleLinks(e, 'u92LinksClick');
}

InsertBeforeEnd(u92LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u92Clicku33c03a6639b34d789598b21a3a953d2c(event)'>not logged in</div>");
function u92Clicku33c03a6639b34d789598b21a3a953d2c(e)
{

	SetPanelVisibility('u94','','none',500);

	BringToFront("u94");

	ToggleLinks(e, 'u92LinksClick');
}

InsertBeforeEnd(u92LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u92Clicku94e32079a9334f4b8e2dc405833313d2(event)'>logged in</div>");
function u92Clicku94e32079a9334f4b8e2dc405833313d2(e)
{

	SetPanelState('u94', 'pd1u94','none','',500,'none','',500);

	SetPanelVisibility('u94','','none',500);

	BringToFront("u94");

	ToggleLinks(e, 'u92LinksClick');
}
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u173'] = 'center';document.getElementById('u176_img').tabIndex = 0;
HookHover('u176', false);
HookClick('u176', false);

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Preview.html');

}
});
gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u110'] = 'center';HookHover('u111', false);
HookClick('u111', false);
gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Zooms the image"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u108'] = 'top';document.getElementById('u109_img').tabIndex = 0;
HookHover('u109', false);
HookClick('u109', false);

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes customer to Order Confirmation page. Retains items in cart before e-gift certificate purchase, allowing full checkout later with these items."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});

$axure.eventManager.focus('u129', function(e) {

if ((GetWidgetText('u128')) == ('')) {

SetWidgetFormText('u128', GetWidgetText('u129'));

SetWidgetFormText('u129', '');

}
});

$axure.eventManager.blur('u129', function(e) {

if ((GetWidgetText('u129')) == ('')) {

SetWidgetFormText('u129', GetWidgetText('u128'));

SetWidgetFormText('u128', '');

}
});
gv_vAlignTable['u31'] = 'top';HookClick('u32', false);
gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u49'] = 'top';
$axure.eventManager.focus('u124', function(e) {

if ((GetWidgetText('u121')) == ('')) {

SetWidgetFormText('u121', GetWidgetText('u124'));

SetWidgetFormText('u124', '');

}
});

$axure.eventManager.blur('u124', function(e) {

if ((GetWidgetText('u124')) == ('')) {

SetWidgetFormText('u124', GetWidgetText('u121'));

SetWidgetFormText('u121', '');

}
});

$axure.eventManager.focus('u125', function(e) {

if ((GetWidgetText('u123')) == ('')) {

SetWidgetFormText('u123', GetWidgetText('u125'));

SetWidgetFormText('u125', '');

}
});

$axure.eventManager.blur('u125', function(e) {

if ((GetWidgetText('u125')) == ('')) {

SetWidgetFormText('u125', GetWidgetText('u123'));

SetWidgetFormText('u123', '');

}
});
gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u51'] = 'center';
$axure.eventManager.focus('u54', function(e) {

if ((GetWidgetText('u53')) == ('')) {

SetWidgetFormText('u53', GetWidgetText('u54'));

SetWidgetFormText('u54', '');

}
});

$axure.eventManager.blur('u54', function(e) {

if ((GetWidgetText('u54')) == ('')) {

SetWidgetFormText('u54', GetWidgetText('u53'));

SetWidgetFormText('u53', '');

}
});
document.getElementById('u55_img').tabIndex = 0;
HookHover('u55', false);
HookClick('u55', false);

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("submits comment as Facebook user"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u130'] = 'top';
$axure.eventManager.blur('u131', function(e) {

if ((GetWidgetText('u131')) != ('')) {

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

rdo1UpdateZipPostcode(e);

}
else
if ((GetWidgetText('u131')) == ('')) {

	SetPanelVisibility('u132','hidden','none',500);

rdo1UpdateZipPostcode(e);

}
});
gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';document.getElementById('u65_img').tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u66'] = 'center';document.getElementById('u67_img').tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u68'] = 'center';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});

$axure.eventManager.blur('u140', function(e) {

if ((GetWidgetText('u140')) != ('')) {

	SetPanelState('u141', 'pd0u141','none','',500,'none','',500);

rdo1UpdateAddress1(e);

}
else
if ((GetWidgetText('u140')) == ('')) {

	SetPanelState('u141', 'pd1u141','none','',500,'none','',500);

}
});
gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u148'] = 'top';
$axure.eventManager.blur('u149', function(e) {

if ((GetWidgetText('u149')) != ('')) {

	SetPanelState('u150', 'pd0u150','none','',500,'none','',500);

rdo1UpdateAddress2(e);

}
else
if ((GetWidgetText('u149')) == ('')) {

	SetPanelVisibility('u150','hidden','none',500);

rdo1UpdateAddress2(e);

}
});
gv_vAlignTable['u70'] = 'center';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares via method listed"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u72'] = 'center';u73.tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Want It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u74.tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Tried It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u75.tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Shares with Extol Social Expressions &quot;Recommend It&quot; tag"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u77'] = 'top';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Brings up graphical drop-down of amounts available:<BR>&#36;25, &#36;50, &#36;75, &#36;100, &#36;150, &#36;200, &#36;250, &#36;300, &#36;350, &#36;400, &#36;450, &#36;500, &#36;600, &#36;700, &#36;800, and &#36;1000"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u153'] = 'top';