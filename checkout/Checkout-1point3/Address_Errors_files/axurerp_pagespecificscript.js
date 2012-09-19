for(var i = 0; i < 137; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u11', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

SetWidgetRichText('u103', '<p style="text-align:left;line-height:45px;"><span style="font-family:Helvetica Neue;font-size:18px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">Total</span><span style="font-family:Helvetica Neue;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;"> (' + (GetGlobalVariableValue('ItemsInCart')) + ' items)</span></p>');

}

if (true) {

SetWidgetRichText('u11', '<p style="text-align:left;line-height:27px;"><span style="font-family:Helvetica Neue;font-size:24px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">You have ' + (GetGlobalVariableValue('ItemsInCart')) + ' items in your shopping cart.</span></p>');

}

});
gv_vAlignTable['u80'] = 'top';
u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	SetPanelVisibility('u79','','none',500);

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
gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u110'] = 'top';
$axure.eventManager.focus('u113', function(e) {

if ((GetWidgetText('u112')) == ('')) {

SetWidgetFormText('u112', GetWidgetText('u113'));

SetWidgetFormText('u113', '');

}
});

$axure.eventManager.blur('u113', function(e) {

if ((GetWidgetText('u113')) == ('')) {

SetWidgetFormText('u113', GetWidgetText('u112'));

SetWidgetFormText('u112', '');

}
});
gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u107'] = 'top';document.getElementById('u108_img').tabIndex = 0;
HookHover('u108', false);
HookClick('u108', false);

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', u108Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u108LinksClick'></div>")
var u108LinksClick = document.getElementById('u108LinksClick');
function u108Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u108LinksClick');
}

InsertBeforeEnd(u108LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u108Clicku2651087d4af24f07ba7302f3f265e366(event)'>Valid</div>");
function u108Clicku2651087d4af24f07ba7302f3f265e366(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Payment_Info.html');

	ToggleLinks(e, 'u108LinksClick');
}

InsertBeforeEnd(u108LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u108Clicku7dbcef3f42124534a2e2e7446062ce0c(event)'>NotValid</div>");
function u108Clicku7dbcef3f42124534a2e2e7446062ce0c(e)
{

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	ToggleLinks(e, 'u108LinksClick');
}
gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u127'] = 'center';document.getElementById('u128_img').tabIndex = 0;
HookHover('u128', false);
HookClick('u128', false);

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	SetPanelVisibility('u121','hidden','fade',500);

	SetPanelState('u121', 'pd1u121','none','',500,'fade','',500);

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u94'] = 'top';
$axure.eventManager.focus('u97', function(e) {

if ((GetWidgetText('u96')) == ('')) {

SetWidgetFormText('u96', GetWidgetText('u97'));

SetWidgetFormText('u97', '');

}
});

$axure.eventManager.blur('u97', function(e) {

if ((GetWidgetText('u97')) == ('')) {

SetWidgetFormText('u97', GetWidgetText('u96'));

SetWidgetFormText('u96', '');

}
});
gv_vAlignTable['u98'] = 'top';
u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if ((GetPanelState('u53')) == ('pd1u53')) {

	SetPanelState('u53', 'pd0u53','none','',500,'none','',500);

	MoveWidgetBy('u118', GetNum('0'), GetNum('-406'),'swing',500);

}

if ((GetPanelState('u53')) == ('pd0u53')) {

	SetPanelState('u53', 'pd1u53','swing','up',500,'swing','down',500);

	MoveWidgetBy('u118', GetNum('0'), GetNum('406'),'swing',500);

}
});
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u117'] = 'top';document.getElementById('u119_img').tabIndex = 0;
HookHover('u119', false);
HookClick('u119', false);

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', u119Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u119LinksClick'></div>")
var u119LinksClick = document.getElementById('u119LinksClick');
function u119Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u119LinksClick');
}

InsertBeforeEnd(u119LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u119Clicku17ae371c5f064e0ba8d154b82dace266(event)'>Valid</div>");
function u119Clicku17ae371c5f064e0ba8d154b82dace266(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Payment_Info.html');

	ToggleLinks(e, 'u119LinksClick');
}

InsertBeforeEnd(u119LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u119Clicku560575a089b04c25af5305fe2da59fd9(event)'>NotValid</div>");
function u119Clicku560575a089b04c25af5305fe2da59fd9(e)
{

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	ToggleLinks(e, 'u119LinksClick');
}

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	SetPanelVisibility('u38','','none',500);

}
});
gv_vAlignTable['u42'] = 'top';
$axure.eventManager.focus('u45', function(e) {

if ((GetWidgetText('u44')) == ('')) {

SetWidgetFormText('u44', GetWidgetText('u45'));

SetWidgetFormText('u45', '');

}
});

$axure.eventManager.blur('u45', function(e) {

if ((GetWidgetText('u45')) == ('')) {

SetWidgetFormText('u45', GetWidgetText('u44'));

SetWidgetFormText('u44', '');

}
});
gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u125'] = 'top';document.getElementById('u126_img').tabIndex = 0;
HookHover('u126', false);
HookClick('u126', false);

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	SetPanelVisibility('u121','hidden','fade',500);

}
});
gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u133'] = 'center';u134.tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	ScrollToWidget('u135', false,true,'swing',500);

}
});
gv_vAlignTable['u134'] = 'top';u136.tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	ScrollToWidget('u135', false,true,'swing',500);

}
});
gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u77'] = 'top';