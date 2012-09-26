for(var i = 0; i < 337; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('TopNav')) == ('Home')) {

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Shop')) {

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Explore')) {

	SetPanelState('u2', 'pd2u2','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Blog')) {

	SetPanelState('u2', 'pd3u2','none','',500,'none','',500);

}

});

widgetIdToPanelStateChangeFunction['u2'] = function() {
var e = windowEvent;

if ((GetGlobalVariableValue('TopNav')) == ('Home')) {

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Shop')) {

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Explore')) {

	SetPanelState('u2', 'pd2u2','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Blog')) {

	SetPanelState('u2', 'pd3u2','none','',500,'none','',500);

}

}
document.getElementById('u230_img').tabIndex = 0;
HookHover('u230', false);

u230.style.cursor = 'pointer';
$axure.eventManager.click('u230', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u231'] = 'center';document.getElementById('u232_img').tabIndex = 0;
HookHover('u232', false);

u232.style.cursor = 'pointer';
$axure.eventManager.click('u232', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u233'] = 'center';document.getElementById('u70_img').tabIndex = 0;
HookHover('u70', false);

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u71'] = 'center';document.getElementById('u100_img').tabIndex = 0;
HookHover('u100', false);

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u101'] = 'center';HookHover('u102', false);
gv_vAlignTable['u103'] = 'center';document.getElementById('u104_img').tabIndex = 0;
HookHover('u104', false);

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u109'] = 'center';document.getElementById('u258_img').tabIndex = 0;
HookHover('u258', false);

u258.style.cursor = 'pointer';
$axure.eventManager.click('u258', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u259'] = 'top';document.getElementById('u80_img').tabIndex = 0;
HookHover('u80', false);

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u81'] = 'center';document.getElementById('u82_img').tabIndex = 0;
HookHover('u82', false);

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u83'] = 'center';document.getElementById('u84_img').tabIndex = 0;
HookHover('u84', false);

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wineries.html');

}
});
gv_vAlignTable['u85'] = 'center';document.getElementById('u88_img').tabIndex = 0;
HookHover('u88', false);

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u89'] = 'center';
$axure.eventManager.focus('u268', function(e) {

if ((GetWidgetText('u268')) == ('Search')) {

SetWidgetFormText('u268', '');

}
});

$axure.eventManager.blur('u268', function(e) {

if ((GetWidgetText('u268')) == ('')) {

SetWidgetFormText('u268', 'Search');

}
});
document.getElementById('u269_img').tabIndex = 0;

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Searches for the query entered in the search box"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u90_img').tabIndex = 0;
HookHover('u90', false);

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u91'] = 'center';document.getElementById('u92_img').tabIndex = 0;
HookHover('u92', false);

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u93'] = 'center';document.getElementById('u122_img').tabIndex = 0;
HookHover('u122', false);

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
gv_vAlignTable['u123'] = 'center';document.getElementById('u124_img').tabIndex = 0;
HookHover('u124', false);

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u125'] = 'center';HookHover('u126', false);
gv_vAlignTable['u127'] = 'center';document.getElementById('u128_img').tabIndex = 0;
HookHover('u128', false);

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u24'] = 'center';document.getElementById('u25_img').tabIndex = 0;
HookHover('u25', false);

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u26'] = 'center';document.getElementById('u27_img').tabIndex = 0;
HookHover('u27', false);

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u28'] = 'center';document.getElementById('u132_img').tabIndex = 0;
HookHover('u132', false);

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u133'] = 'center';document.getElementById('u134_img').tabIndex = 0;
HookHover('u134', false);

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u135'] = 'center';document.getElementById('u136_img').tabIndex = 0;
HookHover('u136', false);

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u288'] = 'center';document.getElementById('u35_img').tabIndex = 0;
HookHover('u35', false);

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u36'] = 'center';document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
gv_vAlignTable['u302'] = 'top';gv_vAlignTable['u304'] = 'bottom';gv_vAlignTable['u306'] = 'bottom';document.getElementById('u140_img').tabIndex = 0;
HookHover('u140', false);

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u141'] = 'center';document.getElementById('u142_img').tabIndex = 0;
HookHover('u142', false);

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u143'] = 'center';document.getElementById('u144_img').tabIndex = 0;
HookHover('u144', false);

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u145'] = 'center';document.getElementById('u146_img').tabIndex = 0;
HookHover('u146', false);

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u147'] = 'center';document.getElementById('u148_img').tabIndex = 0;
HookHover('u148', false);

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u310'] = 'bottom';gv_vAlignTable['u312'] = 'top';gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u316'] = 'top';document.getElementById('u150_img').tabIndex = 0;
HookHover('u150', false);

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u151'] = 'center';document.getElementById('u152_img').tabIndex = 0;
HookHover('u152', false);

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u153'] = 'center';document.getElementById('u154_img').tabIndex = 0;
HookHover('u154', false);

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u155'] = 'center';document.getElementById('u156_img').tabIndex = 0;
HookHover('u156', false);

u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u157'] = 'center';document.getElementById('u158_img').tabIndex = 0;
HookHover('u158', false);

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wineries.html');

}
});
gv_vAlignTable['u159'] = 'center';document.getElementById('u234_img').tabIndex = 0;
HookHover('u234', false);

u234.style.cursor = 'pointer';
$axure.eventManager.click('u234', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u235'] = 'center';gv_vAlignTable['u284'] = 'center';gv_vAlignTable['u286'] = 'center';gv_vAlignTable['u162'] = 'center';document.getElementById('u165_img').tabIndex = 0;
HookHover('u165', false);

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu8652ba36d7b84a7e91b77d1d0401c62e1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');
}
setTimeout(waitu8652ba36d7b84a7e91b77d1d0401c62e1, 250);

}
});
gv_vAlignTable['u166'] = 'center';document.getElementById('u167_img').tabIndex = 0;
HookHover('u167', false);

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u2', 'pd2u2','none','',500,'none','',500);
function waitudafda1d97245442bac8455b981f085341() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');
}
setTimeout(waitudafda1d97245442bac8455b981f085341, 250);

}
});
gv_vAlignTable['u168'] = 'center';document.getElementById('u169_img').tabIndex = 0;
HookHover('u169', false);

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu975fbd6d9f3e4c2f9991574918e7871d1() {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));
}
setTimeout(waitu975fbd6d9f3e4c2f9991574918e7871d1, 250);

}
});
document.getElementById('u276_img').tabIndex = 0;

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes User to Home Page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u170'] = 'center';document.getElementById('u173_img').tabIndex = 0;
HookHover('u173', false);

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u174'] = 'center';document.getElementById('u175_img').tabIndex = 0;
HookHover('u175', false);

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u176'] = 'center';document.getElementById('u177_img').tabIndex = 0;
HookHover('u177', false);

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u178'] = 'center';document.getElementById('u179_img').tabIndex = 0;
HookHover('u179', false);

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
HookHover('u252', false);
gv_vAlignTable['u253'] = 'top';document.getElementById('u72_img').tabIndex = 0;
HookHover('u72', false);

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u73'] = 'center';document.getElementById('u74_img').tabIndex = 0;
HookHover('u74', false);

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u75'] = 'center';document.getElementById('u76_img').tabIndex = 0;
HookHover('u76', false);

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
document.getElementById('u205_img').tabIndex = 0;
HookHover('u205', false);

u205.style.cursor = 'pointer';
$axure.eventManager.click('u205', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
document.getElementById('u78_img').tabIndex = 0;
HookHover('u78', false);

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u180'] = 'center';document.getElementById('u181_img').tabIndex = 0;
HookHover('u181', false);

u181.style.cursor = 'pointer';
$axure.eventManager.click('u181', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u182'] = 'center';document.getElementById('u183_img').tabIndex = 0;
HookHover('u183', false);

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u184'] = 'center';document.getElementById('u185_img').tabIndex = 0;
HookHover('u185', false);

u185.style.cursor = 'pointer';
$axure.eventManager.click('u185', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u186'] = 'center';document.getElementById('u187_img').tabIndex = 0;
HookHover('u187', false);

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u188'] = 'center';document.getElementById('u189_img').tabIndex = 0;
HookHover('u189', false);

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u308'] = 'bottom';
$axure.eventManager.mouseout('u266', function(e) {
if (!IsTrueMouseOut('u266',e)) return;
if (true) {

}
});
gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u190'] = 'center';document.getElementById('u191_img').tabIndex = 0;
HookHover('u191', false);

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wineries.html');

}
});
gv_vAlignTable['u192'] = 'center';document.getElementById('u195_img').tabIndex = 0;
HookHover('u195', false);

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u196'] = 'center';document.getElementById('u197_img').tabIndex = 0;
HookHover('u197', false);

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u198'] = 'center';document.getElementById('u199_img').tabIndex = 0;
HookHover('u199', false);

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
u317.tabIndex = 0;

u317.style.cursor = 'pointer';
$axure.eventManager.click('u317', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u318.tabIndex = 0;

u318.style.cursor = 'pointer';
$axure.eventManager.click('u318', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u319.tabIndex = 0;

u319.style.cursor = 'pointer';
$axure.eventManager.click('u319', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item… do we have a central Customer Support page?"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u272.tabIndex = 0;

u272.style.cursor = 'pointer';
$axure.eventManager.click('u272', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to sign-in page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u221'] = 'top';document.getElementById('u96_img').tabIndex = 0;
HookHover('u96', false);

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u97'] = 'center';document.getElementById('u98_img').tabIndex = 0;
HookHover('u98', false);

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
gv_vAlignTable['u99'] = 'center';u320.tabIndex = 0;

u320.style.cursor = 'pointer';
$axure.eventManager.click('u320', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u321.tabIndex = 0;

u321.style.cursor = 'pointer';
$axure.eventManager.click('u321', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u322.tabIndex = 0;

u322.style.cursor = 'pointer';
$axure.eventManager.click('u322', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u323.tabIndex = 0;

u323.style.cursor = 'pointer';
$axure.eventManager.click('u323', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u324.tabIndex = 0;

u324.style.cursor = 'pointer';
$axure.eventManager.click('u324', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u325.tabIndex = 0;

u325.style.cursor = 'pointer';
$axure.eventManager.click('u325', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u326.tabIndex = 0;

u326.style.cursor = 'pointer';
$axure.eventManager.click('u326', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u327.tabIndex = 0;

u327.style.cursor = 'pointer';
$axure.eventManager.click('u327', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u328.tabIndex = 0;

u328.style.cursor = 'pointer';
$axure.eventManager.click('u328', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Emails support@tastingroom.com (mailto link?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u329.tabIndex = 0;

u329.style.cursor = 'pointer';
$axure.eventManager.click('u329', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to twitter page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u1'] = 'center';document.getElementById('u5_img').tabIndex = 0;
HookHover('u5', false);

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu541b67820e8d4152a10858f9b34ff7c61() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');
}
setTimeout(waitu541b67820e8d4152a10858f9b34ff7c61, 250);

}
});
gv_vAlignTable['u6'] = 'center';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u2', 'pd2u2','none','',500,'none','',500);
function waitu6f6f03e9f6564b4b9efe0547f99d6b301() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');
}
setTimeout(waitu6f6f03e9f6564b4b9efe0547f99d6b301, 250);

}
});
gv_vAlignTable['u8'] = 'center';document.getElementById('u9_img').tabIndex = 0;
HookHover('u9', false);

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu5e2da1f3184f48d0bcbeadd21dcd1a471() {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));
}
setTimeout(waitu5e2da1f3184f48d0bcbeadd21dcd1a471, 250);

}
});
gv_vAlignTable['u293'] = 'center';u330.tabIndex = 0;

u330.style.cursor = 'pointer';
$axure.eventManager.click('u330', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u331.tabIndex = 0;

u331.style.cursor = 'pointer';
$axure.eventManager.click('u331', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u332.tabIndex = 0;

u332.style.cursor = 'pointer';
$axure.eventManager.click('u332', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to Press + Media Inquiries (Mailto to Press + Media alias?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u333.tabIndex = 0;

u333.style.cursor = 'pointer';
$axure.eventManager.click('u333', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u334.tabIndex = 0;

u334.style.cursor = 'pointer';
$axure.eventManager.click('u334', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to Winery Inquiries (Winery.TastingRoom.com?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u242_img').tabIndex = 0;
HookHover('u242', false);

u242.style.cursor = 'pointer';
$axure.eventManager.click('u242', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u243'] = 'center';document.getElementById('u244_img').tabIndex = 0;
HookHover('u244', false);

u244.style.cursor = 'pointer';
$axure.eventManager.click('u244', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('T_A_S_T_E__Technology.html');

}
});
gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u10'] = 'center';document.getElementById('u13_img').tabIndex = 0;
HookHover('u13', false);

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u14'] = 'center';document.getElementById('u15_img').tabIndex = 0;
HookHover('u15', false);

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u16'] = 'center';document.getElementById('u17_img').tabIndex = 0;
HookHover('u17', false);

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u18'] = 'center';document.getElementById('u19_img').tabIndex = 0;
HookHover('u19', false);

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u300'] = 'top';document.getElementById('u112_img').tabIndex = 0;
HookHover('u112', false);

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu0732be8ae1aa45fd9abc5e4fb822a9611() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');
}
setTimeout(waitu0732be8ae1aa45fd9abc5e4fb822a9611, 250);

}
});
gv_vAlignTable['u113'] = 'center';document.getElementById('u114_img').tabIndex = 0;
HookHover('u114', false);

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u2', 'pd2u2','none','',500,'none','',500);
function waitu8232468868c244f7ab949d886d58256a1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');
}
setTimeout(waitu8232468868c244f7ab949d886d58256a1, 250);

}
});
gv_vAlignTable['u115'] = 'center';document.getElementById('u116_img').tabIndex = 0;
HookHover('u116', false);

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu80981a2ed8064e999cb6281dd634e5eb1() {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));
}
setTimeout(waitu80981a2ed8064e999cb6281dd634e5eb1, 250);

}
});
gv_vAlignTable['u117'] = 'center';document.getElementById('u254_img').tabIndex = 0;
HookHover('u254', false);

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u255'] = 'top';document.getElementById('u256_img').tabIndex = 0;
HookHover('u256', false);

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
gv_vAlignTable['u20'] = 'center';document.getElementById('u21_img').tabIndex = 0;
HookHover('u21', false);

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u22'] = 'center';document.getElementById('u23_img').tabIndex = 0;
HookHover('u23', false);

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u200'] = 'center';document.getElementById('u203_img').tabIndex = 0;
HookHover('u203', false);

u203.style.cursor = 'pointer';
$axure.eventManager.click('u203', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u204'] = 'center';document.getElementById('u29_img').tabIndex = 0;
HookHover('u29', false);

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u206'] = 'center';document.getElementById('u207_img').tabIndex = 0;
HookHover('u207', false);

u207.style.cursor = 'pointer';
$axure.eventManager.click('u207', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u208'] = 'center';HookHover('u209', false);
document.getElementById('u120_img').tabIndex = 0;
HookHover('u120', false);

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u121'] = 'center';document.getElementById('u260_img').tabIndex = 0;
HookHover('u260', false);

u260.style.cursor = 'pointer';
$axure.eventManager.click('u260', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u261'] = 'top';gv_vAlignTable['u263'] = 'center';gv_vAlignTable['u30'] = 'center';document.getElementById('u31_img').tabIndex = 0;
HookHover('u31', false);

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wineries.html');

}
});
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u210'] = 'center';document.getElementById('u211_img').tabIndex = 0;
HookHover('u211', false);

u211.style.cursor = 'pointer';
$axure.eventManager.click('u211', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u38'] = 'center';document.getElementById('u39_img').tabIndex = 0;
HookHover('u39', false);

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
document.getElementById('u216_img').tabIndex = 0;
HookHover('u216', false);

u216.style.cursor = 'pointer';
$axure.eventManager.click('u216', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');

}
});
gv_vAlignTable['u217'] = 'top';document.getElementById('u218_img').tabIndex = 0;
HookHover('u218', false);

u218.style.cursor = 'pointer';
$axure.eventManager.click('u218', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');

}
});
gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u270'] = 'center';gv_vAlignTable['u257'] = 'top';u273.tabIndex = 0;

u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to View Cart page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u273'] = 'top';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u40'] = 'center';HookHover('u41', false);
gv_vAlignTable['u42'] = 'center';document.getElementById('u43_img').tabIndex = 0;
HookHover('u43', false);

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u44'] = 'center';document.getElementById('u47_img').tabIndex = 0;
HookHover('u47', false);

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u48'] = 'center';document.getElementById('u49_img').tabIndex = 0;
HookHover('u49', false);

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
document.getElementById('u226_img').tabIndex = 0;
HookHover('u226', false);

u226.style.cursor = 'pointer';
$axure.eventManager.click('u226', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u77'] = 'center';document.getElementById('u228_img').tabIndex = 0;
HookHover('u228', false);

u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u229'] = 'center';gv_vAlignTable['u281'] = 'center';gv_vAlignTable['u50'] = 'center';document.getElementById('u51_img').tabIndex = 0;
HookHover('u51', false);

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u55'] = 'center';document.getElementById('u58_img').tabIndex = 0;
HookHover('u58', false);

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu59e96ae50e114659ba4b27ec4bd03c011() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');
}
setTimeout(waitu59e96ae50e114659ba4b27ec4bd03c011, 250);

}
});
gv_vAlignTable['u59'] = 'center';document.getElementById('u236_img').tabIndex = 0;
HookHover('u236', false);

u236.style.cursor = 'pointer';
$axure.eventManager.click('u236', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u237'] = 'center';document.getElementById('u238_img').tabIndex = 0;
HookHover('u238', false);

u238.style.cursor = 'pointer';
$axure.eventManager.click('u238', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u239'] = 'center';document.getElementById('u224_img').tabIndex = 0;
HookHover('u224', false);

u224.style.cursor = 'pointer';
$axure.eventManager.click('u224', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});

$axure.eventManager.focus('u291', function(e) {

if ((GetWidgetText('u290')) == ('')) {

SetWidgetFormText('u290', GetWidgetText('u291'));

SetWidgetFormText('u291', '');

}
});

$axure.eventManager.blur('u291', function(e) {

if ((GetWidgetText('u291')) == ('')) {

SetWidgetFormText('u291', GetWidgetText('u290'));

SetWidgetFormText('u290', '');

}
});
document.getElementById('u292_img').tabIndex = 0;
HookHover('u292', false);
HookClick('u292', false);

u292.style.cursor = 'pointer';
$axure.eventManager.click('u292', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to quick sign-up link with email address pre-populated"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u2', 'pd2u2','none','',500,'none','',500);
function waitu0b9473d00cc74e7fb9b7035568738c911() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');
}
setTimeout(waitu0b9473d00cc74e7fb9b7035568738c911, 250);

}
});
gv_vAlignTable['u61'] = 'center';document.getElementById('u62_img').tabIndex = 0;
HookHover('u62', false);

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu0933e09be67c430eb26bac3055736c1f1() {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));
}
setTimeout(waitu0933e09be67c430eb26bac3055736c1f1, 250);

}
});
gv_vAlignTable['u63'] = 'center';document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u67'] = 'center';document.getElementById('u68_img').tabIndex = 0;
HookHover('u68', false);

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u69'] = 'center';document.getElementById('u246_img').tabIndex = 0;
HookHover('u246', false);

u246.style.cursor = 'pointer';
$axure.eventManager.click('u246', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Partners.html');

}
});
gv_vAlignTable['u247'] = 'center';document.getElementById('u248_img').tabIndex = 0;
HookHover('u248', false);

u248.style.cursor = 'pointer';
$axure.eventManager.click('u248', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('In_the_News.html');

}
});
gv_vAlignTable['u249'] = 'center';