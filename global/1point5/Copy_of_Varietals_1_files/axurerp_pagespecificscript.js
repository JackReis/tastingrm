﻿for(var i = 0; i < 317; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('TopNav')) == ('Home')) {

	SetPanelState('u105', 'pd0u105','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Shop')) {

	SetPanelState('u105', 'pd1u105','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Explore')) {

	SetPanelState('u105', 'pd2u105','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Blog')) {

	SetPanelState('u105', 'pd3u105','none','',500,'none','',500);

}

if (true) {

rdo8Home(e);

rdo8Shop(e);

rdo8Explore(e);

rdo8Blog(e);

}

});

widgetIdToPanelStateChangeFunction['u105'] = function() {
var e = windowEvent;

if ((GetGlobalVariableValue('TopNav')) == ('Home')) {

	SetPanelState('u105', 'pd0u105','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Shop')) {

	SetPanelState('u105', 'pd1u105','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Explore')) {

	SetPanelState('u105', 'pd2u105','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Blog')) {

	SetPanelState('u105', 'pd3u105','none','',500,'none','',500);

}

}

function rdo8Home(e) {

}

function rdo8Shop(e) {

}

function rdo8Explore(e) {

}

function rdo8Blog(e) {

}
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u70'] = 'top';u100.tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to Press + Media Inquiries (Mailto to Press + Media alias?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u101.tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u102.tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to Winery Inquiries (Winery.TastingRoom.com?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u254'] = 'center';document.getElementById('u255_img').tabIndex = 0;
HookHover('u255', false);

u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u256'] = 'center';document.getElementById('u257_img').tabIndex = 0;
HookHover('u257', false);

u257.style.cursor = 'pointer';
$axure.eventManager.click('u257', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u258'] = 'center';document.getElementById('u259_img').tabIndex = 0;
HookHover('u259', false);

u259.style.cursor = 'pointer';
$axure.eventManager.click('u259', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
document.getElementById('u124_img').tabIndex = 0;
HookHover('u124', false);

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u84'] = 'top';u85.tabIndex = 0;

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u86.tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u87.tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item… do we have a central Customer Support page?"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u89.tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u268_img').tabIndex = 0;
HookHover('u268', false);

u268.style.cursor = 'pointer';
$axure.eventManager.click('u268', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu8652ba36d7b84a7e91b77d1d0401c62e1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');
}
setTimeout(waitu8652ba36d7b84a7e91b77d1d0401c62e1, 250);

}
});
gv_vAlignTable['u269'] = 'center';document.getElementById('u183_img').tabIndex = 0;
HookHover('u183', false);

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u184'] = 'center';u90.tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u91.tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u92.tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u93.tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u270_img').tabIndex = 0;
HookHover('u270', false);

u270.style.cursor = 'pointer';
$axure.eventManager.click('u270', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u105', 'pd2u105','none','',500,'none','',500);
function waitudafda1d97245442bac8455b981f085341() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');
}
setTimeout(waitudafda1d97245442bac8455b981f085341, 250);

}
});
u95.tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u96.tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Emails support@tastingroom.com (mailto link?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to twitter page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u98.tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u276_img').tabIndex = 0;
HookHover('u276', false);

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u277'] = 'center';document.getElementById('u278_img').tabIndex = 0;
HookHover('u278', false);

u278.style.cursor = 'pointer';
$axure.eventManager.click('u278', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u279'] = 'center';document.getElementById('u193_img').tabIndex = 0;
HookHover('u193', false);

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u194'] = 'center';document.getElementById('u195_img').tabIndex = 0;
HookHover('u195', false);

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u196'] = 'center';document.getElementById('u280_img').tabIndex = 0;
HookHover('u280', false);

u280.style.cursor = 'pointer';
$axure.eventManager.click('u280', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u281'] = 'center';document.getElementById('u282_img').tabIndex = 0;
HookHover('u282', false);

u282.style.cursor = 'pointer';
$axure.eventManager.click('u282', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u283'] = 'center';document.getElementById('u284_img').tabIndex = 0;
HookHover('u284', false);

u284.style.cursor = 'pointer';
$axure.eventManager.click('u284', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u285'] = 'center';document.getElementById('u286_img').tabIndex = 0;
HookHover('u286', false);

u286.style.cursor = 'pointer';
$axure.eventManager.click('u286', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u287'] = 'center';document.getElementById('u288_img').tabIndex = 0;
HookHover('u288', false);

u288.style.cursor = 'pointer';
$axure.eventManager.click('u288', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u289'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'top';document.getElementById('u140_img').tabIndex = 0;
HookHover('u140', false);

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
gv_vAlignTable['u141'] = 'center';document.getElementById('u290_img').tabIndex = 0;
HookHover('u290', false);

u290.style.cursor = 'pointer';
$axure.eventManager.click('u290', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u291'] = 'center';document.getElementById('u292_img').tabIndex = 0;
HookHover('u292', false);

u292.style.cursor = 'pointer';
$axure.eventManager.click('u292', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u293'] = 'center';document.getElementById('u294_img').tabIndex = 0;
HookHover('u294', false);

u294.style.cursor = 'pointer';
$axure.eventManager.click('u294', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wineries.html');

}
});
gv_vAlignTable['u295'] = 'center';document.getElementById('u298_img').tabIndex = 0;
HookHover('u298', false);

u298.style.cursor = 'pointer';
$axure.eventManager.click('u298', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u299'] = 'center';document.getElementById('u44_img').tabIndex = 0;
HookHover('u44', false);

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Question___Answer.html');

}
});
document.getElementById('u150_img').tabIndex = 0;
HookHover('u150', false);

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u151'] = 'center';document.getElementById('u152_img').tabIndex = 0;
HookHover('u152', false);

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u153'] = 'center';document.getElementById('u154_img').tabIndex = 0;
HookHover('u154', false);

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u230'] = 'center';document.getElementById('u231_img').tabIndex = 0;
HookHover('u231', false);

u231.style.cursor = 'pointer';
$axure.eventManager.click('u231', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u232'] = 'center';document.getElementById('u235_img').tabIndex = 0;
HookHover('u235', false);

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
document.getElementById('u161_img').tabIndex = 0;
HookHover('u161', false);

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu59e96ae50e114659ba4b27ec4bd03c011() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');
}
setTimeout(waitu59e96ae50e114659ba4b27ec4bd03c011, 250);

}
});
gv_vAlignTable['u162'] = 'center';document.getElementById('u163_img').tabIndex = 0;
HookHover('u163', false);

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u105', 'pd2u105','none','',500,'none','',500);
function waitu0b9473d00cc74e7fb9b7035568738c911() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');
}
setTimeout(waitu0b9473d00cc74e7fb9b7035568738c911, 250);

}
});
gv_vAlignTable['u164'] = 'center';document.getElementById('u165_img').tabIndex = 0;
HookHover('u165', false);

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu0933e09be67c430eb26bac3055736c1f1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog.html');
}
setTimeout(waitu0933e09be67c430eb26bac3055736c1f1, 250);

}
});
gv_vAlignTable['u166'] = 'center';document.getElementById('u169_img').tabIndex = 0;
HookHover('u169', false);

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
document.getElementById('u116_img').tabIndex = 0;
HookHover('u116', false);

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u170'] = 'center';document.getElementById('u171_img').tabIndex = 0;
HookHover('u171', false);

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u172'] = 'center';document.getElementById('u173_img').tabIndex = 0;
HookHover('u173', false);

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u174'] = 'center';document.getElementById('u175_img').tabIndex = 0;
HookHover('u175', false);

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u176'] = 'center';document.getElementById('u177_img').tabIndex = 0;
HookHover('u177', false);

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u178'] = 'center';document.getElementById('u179_img').tabIndex = 0;
HookHover('u179', false);

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
document.getElementById('u126_img').tabIndex = 0;
HookHover('u126', false);

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u127'] = 'center';document.getElementById('u128_img').tabIndex = 0;
HookHover('u128', false);

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u186'] = 'center';document.getElementById('u187_img').tabIndex = 0;
HookHover('u187', false);

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wineries.html');

}
});
gv_vAlignTable['u72'] = 'bottom';gv_vAlignTable['u74'] = 'bottom';gv_vAlignTable['u76'] = 'bottom';gv_vAlignTable['u78'] = 'bottom';gv_vAlignTable['u180'] = 'center';document.getElementById('u181_img').tabIndex = 0;
HookHover('u181', false);

u181.style.cursor = 'pointer';
$axure.eventManager.click('u181', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u182'] = 'center';document.getElementById('u300_img').tabIndex = 0;
HookHover('u300', false);

u300.style.cursor = 'pointer';
$axure.eventManager.click('u300', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u301'] = 'center';document.getElementById('u302_img').tabIndex = 0;
HookHover('u302', false);

u302.style.cursor = 'pointer';
$axure.eventManager.click('u302', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u303'] = 'center';document.getElementById('u306_img').tabIndex = 0;
HookHover('u306', false);

u306.style.cursor = 'pointer';
$axure.eventManager.click('u306', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u307'] = 'center';document.getElementById('u308_img').tabIndex = 0;
HookHover('u308', false);

u308.style.cursor = 'pointer';
$axure.eventManager.click('u308', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
gv_vAlignTable['u309'] = 'center';document.getElementById('u138_img').tabIndex = 0;
HookHover('u138', false);

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u212'] = 'center';document.getElementById('u199_img').tabIndex = 0;
HookHover('u199', false);

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
document.getElementById('u191_img').tabIndex = 0;
HookHover('u191', false);

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u192'] = 'center';document.getElementById('u310_img').tabIndex = 0;
HookHover('u310', false);

u310.style.cursor = 'pointer';
$axure.eventManager.click('u310', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u311'] = 'center';HookHover('u312', false);
gv_vAlignTable['u313'] = 'center';document.getElementById('u314_img').tabIndex = 0;
HookHover('u314', false);

u314.style.cursor = 'pointer';
$axure.eventManager.click('u314', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u315'] = 'center';u94.tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u224'] = 'center';document.getElementById('u225_img').tabIndex = 0;
HookHover('u225', false);

u225.style.cursor = 'pointer';
$axure.eventManager.click('u225', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
u99.tabIndex = 0;

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});

$axure.eventManager.mouseout('u1', function(e) {
if (!IsTrueMouseOut('u1',e)) return;
if (true) {

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

	NewWindow("resources/Other.html#other=" + encodeURI("Searches for the query entered in the search box"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes User to Home Page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u240'] = 'center';document.getElementById('u108_img').tabIndex = 0;
HookHover('u108', false);

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu541b67820e8d4152a10858f9b34ff7c61() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');
}
setTimeout(waitu541b67820e8d4152a10858f9b34ff7c61, 250);

}
});
gv_vAlignTable['u109'] = 'center';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to My Account page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u10'] = 'top';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to View Cart page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';document.getElementById('u16_img').tabIndex = 0;
HookHover('u16', false);

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop___LoggedIn.html');

}
});
gv_vAlignTable['u17'] = 'top';document.getElementById('u18_img').tabIndex = 0;
HookHover('u18', false);

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Wine_Samplers.html');

}
});
gv_vAlignTable['u19'] = 'top';document.getElementById('u110_img').tabIndex = 0;
HookHover('u110', false);

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u105', 'pd2u105','none','',500,'none','',500);
function waitu6f6f03e9f6564b4b9efe0547f99d6b301() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');
}
setTimeout(waitu6f6f03e9f6564b4b9efe0547f99d6b301, 250);

}
});
gv_vAlignTable['u111'] = 'center';document.getElementById('u112_img').tabIndex = 0;
HookHover('u112', false);

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu5e2da1f3184f48d0bcbeadd21dcd1a471() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog.html');
}
setTimeout(waitu5e2da1f3184f48d0bcbeadd21dcd1a471, 250);

}
});
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u250'] = 'center';document.getElementById('u251_img').tabIndex = 0;
HookHover('u251', false);

u251.style.cursor = 'pointer';
$axure.eventManager.click('u251', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u252'] = 'center';document.getElementById('u253_img').tabIndex = 0;
HookHover('u253', false);

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
document.getElementById('u118_img').tabIndex = 0;
HookHover('u118', false);

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u119'] = 'center';document.getElementById('u20_img').tabIndex = 0;
HookHover('u20', false);

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u21'] = 'top';document.getElementById('u22_img').tabIndex = 0;
HookHover('u22', false);

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Wine_Bottles.html');

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'top';document.getElementById('u26_img').tabIndex = 0;
HookHover('u26', false);

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Regions_1.html');

}
});
gv_vAlignTable['u27'] = 'top';document.getElementById('u28_img').tabIndex = 0;
HookHover('u28', false);

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Join_Club_TR.html');

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u206'] = 'center';document.getElementById('u207_img').tabIndex = 0;
HookHover('u207', false);

u207.style.cursor = 'pointer';
$axure.eventManager.click('u207', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u208'] = 'center';document.getElementById('u132_img').tabIndex = 0;
HookHover('u132', false);

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u133'] = 'center';document.getElementById('u134_img').tabIndex = 0;
HookHover('u134', false);

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wineries.html');

}
});
document.getElementById('u120_img').tabIndex = 0;
HookHover('u120', false);

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u121'] = 'center';document.getElementById('u122_img').tabIndex = 0;
HookHover('u122', false);

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u123'] = 'center';document.getElementById('u185_img').tabIndex = 0;
HookHover('u185', false);

u185.style.cursor = 'pointer';
$axure.eventManager.click('u185', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u260'] = 'center';document.getElementById('u261_img').tabIndex = 0;
HookHover('u261', false);

u261.style.cursor = 'pointer';
$axure.eventManager.click('u261', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wineries.html');

}
});
gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u265'] = 'center';document.getElementById('u30_img').tabIndex = 0;
HookHover('u30', false);

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Trailblazer.html');

}
});
gv_vAlignTable['u31'] = 'top';document.getElementById('u32_img').tabIndex = 0;
HookHover('u32', false);

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Adventurer.html');

}
});
gv_vAlignTable['u33'] = 'top';document.getElementById('u34_img').tabIndex = 0;
HookHover('u34', false);

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Gift_Center.html');

}
});
gv_vAlignTable['u35'] = 'top';document.getElementById('u36_img').tabIndex = 0;
HookHover('u36', false);

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Gift_Certificates.html');

}
});
document.getElementById('u38_img').tabIndex = 0;
HookHover('u38', false);

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Gift_Packs__4_packs_.html');

}
});
document.getElementById('u215_img').tabIndex = 0;
HookHover('u215', false);

u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu0732be8ae1aa45fd9abc5e4fb822a9611() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');
}
setTimeout(waitu0732be8ae1aa45fd9abc5e4fb822a9611, 250);

}
});
gv_vAlignTable['u216'] = 'center';document.getElementById('u217_img').tabIndex = 0;
HookHover('u217', false);

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u105', 'pd2u105','none','',500,'none','',500);
function waitu8232468868c244f7ab949d886d58256a1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');
}
setTimeout(waitu8232468868c244f7ab949d886d58256a1, 250);

}
});
gv_vAlignTable['u218'] = 'center';document.getElementById('u219_img').tabIndex = 0;
HookHover('u219', false);

u219.style.cursor = 'pointer';
$axure.eventManager.click('u219', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu80981a2ed8064e999cb6281dd634e5eb1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog.html');
}
setTimeout(waitu80981a2ed8064e999cb6281dd634e5eb1, 250);

}
});
gv_vAlignTable['u200'] = 'center';document.getElementById('u201_img').tabIndex = 0;
HookHover('u201', false);

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('What_s_Trending.html');

}
});
gv_vAlignTable['u202'] = 'center';document.getElementById('u130_img').tabIndex = 0;
HookHover('u130', false);

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u131'] = 'center';document.getElementById('u203_img').tabIndex = 0;
HookHover('u203', false);

u203.style.cursor = 'pointer';
$axure.eventManager.click('u203', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u204'] = 'center';HookHover('u205', false);
gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u271'] = 'center';document.getElementById('u272_img').tabIndex = 0;
HookHover('u272', false);

u272.style.cursor = 'pointer';
$axure.eventManager.click('u272', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu975fbd6d9f3e4c2f9991574918e7871d1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog.html');
}
setTimeout(waitu975fbd6d9f3e4c2f9991574918e7871d1, 250);

}
});
gv_vAlignTable['u273'] = 'center';document.getElementById('u40_img').tabIndex = 0;
HookHover('u40', false);

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Gift_Membership.html');

}
});
gv_vAlignTable['u41'] = 'top';document.getElementById('u42_img').tabIndex = 0;
HookHover('u42', false);

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u45'] = 'top';document.getElementById('u46_img').tabIndex = 0;
HookHover('u46', false);

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Party_Planner.html');

}
});
gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u226'] = 'center';document.getElementById('u227_img').tabIndex = 0;
HookHover('u227', false);

u227.style.cursor = 'pointer';
$axure.eventManager.click('u227', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u228'] = 'center';HookHover('u229', false);
document.getElementById('u142_img').tabIndex = 0;
HookHover('u142', false);

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u143'] = 'center';HookHover('u144', false);
gv_vAlignTable['u145'] = 'center';document.getElementById('u146_img').tabIndex = 0;
HookHover('u146', false);

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u56'] = 'center';
$axure.eventManager.focus('u59', function(e) {

if ((GetWidgetText('u58')) == ('')) {

SetWidgetFormText('u58', GetWidgetText('u59'));

SetWidgetFormText('u59', '');

}
});

$axure.eventManager.blur('u59', function(e) {

if ((GetWidgetText('u59')) == ('')) {

SetWidgetFormText('u59', GetWidgetText('u58'));

SetWidgetFormText('u58', '');

}
});
gv_vAlignTable['u236'] = 'center';document.getElementById('u237_img').tabIndex = 0;
HookHover('u237', false);

u237.style.cursor = 'pointer';
$axure.eventManager.click('u237', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u238'] = 'center';document.getElementById('u239_img').tabIndex = 0;
HookHover('u239', false);

u239.style.cursor = 'pointer';
$axure.eventManager.click('u239', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
document.getElementById('u223_img').tabIndex = 0;
HookHover('u223', false);

u223.style.cursor = 'pointer';
$axure.eventManager.click('u223', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);
HookClick('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to quick sign-up link with email address pre-populated"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u64'] = 'center';document.getElementById('u243_img').tabIndex = 0;
HookHover('u243', false);

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u244'] = 'center';document.getElementById('u245_img').tabIndex = 0;
HookHover('u245', false);

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u246'] = 'center';document.getElementById('u247_img').tabIndex = 0;
HookHover('u247', false);

u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u248'] = 'center';document.getElementById('u249_img').tabIndex = 0;
HookHover('u249', false);

u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
