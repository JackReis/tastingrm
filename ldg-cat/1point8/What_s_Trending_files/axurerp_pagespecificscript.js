for(var i = 0; i < 326; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');

}

if ((GetGlobalVariableValue('LoggedInVar')) == ('Yes')) {

	SetPanelState('u7', 'pd1u7','none','',500,'fade','',500);

}

if ((GetGlobalVariableValue('LoggedInVar')) == ('No')) {

	SetPanelState('u7', 'pd0u7','none','',500,'fade','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Home')) {

	SetPanelState('u114', 'pd0u114','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Shop')) {

	SetPanelState('u114', 'pd1u114','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Explore')) {

	SetPanelState('u114', 'pd2u114','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Blog')) {

	SetPanelState('u114', 'pd3u114','none','',500,'none','',500);

}

if (true) {

rdo7Home(e);

rdo7Shop(e);

rdo7Explore(e);

rdo7Blog(e);

}

});

widgetIdToPanelStateChangeFunction['u114'] = function() {
var e = windowEvent;

if ((GetGlobalVariableValue('TopNav')) == ('Home')) {

	SetPanelState('u114', 'pd0u114','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Shop')) {

	SetPanelState('u114', 'pd1u114','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Explore')) {

	SetPanelState('u114', 'pd2u114','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('TopNav')) == ('Blog')) {

	SetPanelState('u114', 'pd3u114','none','',500,'none','',500);

}

}

function rdo7Home(e) {

}

function rdo7Shop(e) {

}

function rdo7Explore(e) {

}

function rdo7Blog(e) {

}
document.getElementById('u129_img').tabIndex = 0;
HookHover('u129', false);

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u70'] = 'center';u100.tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

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

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u103.tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u104.tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u105.tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Emails support@tastingroom.com (mailto link?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to twitter page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u107.tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u108.tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u109.tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to Press + Media Inquiries (Mailto to Press + Media alias?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u258_img').tabIndex = 0;
HookHover('u258', false);

u258.style.cursor = 'pointer';
$axure.eventManager.click('u258', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u259'] = 'center';document.getElementById('u135_img').tabIndex = 0;
HookHover('u135', false);

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u136'] = 'center';document.getElementById('u125_img').tabIndex = 0;
HookHover('u125', false);

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u81'] = 'bottom';gv_vAlignTable['u83'] = 'bottom';gv_vAlignTable['u85'] = 'bottom';gv_vAlignTable['u87'] = 'bottom';gv_vAlignTable['u89'] = 'top';document.getElementById('u266_img').tabIndex = 0;
HookHover('u266', false);

u266.style.cursor = 'pointer';
$axure.eventManager.click('u266', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u267'] = 'center';document.getElementById('u268_img').tabIndex = 0;
HookHover('u268', false);

u268.style.cursor = 'pointer';
$axure.eventManager.click('u268', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u269'] = 'center';gv_vAlignTable['u183'] = 'center';document.getElementById('u184_img').tabIndex = 0;
HookHover('u184', false);

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u93'] = 'top';u94.tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

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

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item… do we have a central Customer Support page?"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u98.tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u277_img').tabIndex = 0;
HookHover('u277', false);

u277.style.cursor = 'pointer';
$axure.eventManager.click('u277', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu8652ba36d7b84a7e91b77d1d0401c62e1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop_Landing_Page.html');
}
setTimeout(waitu8652ba36d7b84a7e91b77d1d0401c62e1, 250);

}
});
gv_vAlignTable['u278'] = 'center';document.getElementById('u279_img').tabIndex = 0;
HookHover('u279', false);

u279.style.cursor = 'pointer';
$axure.eventManager.click('u279', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u114', 'pd2u114','none','',500,'none','',500);
function waitudafda1d97245442bac8455b981f085341() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore_Landing_Page.html');
}
setTimeout(waitudafda1d97245442bac8455b981f085341, 250);

}
});
gv_vAlignTable['u193'] = 'center';document.getElementById('u194_img').tabIndex = 0;
HookHover('u194', false);

u194.style.cursor = 'pointer';
$axure.eventManager.click('u194', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u195'] = 'center';document.getElementById('u196_img').tabIndex = 0;
HookHover('u196', false);

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u280'] = 'center';document.getElementById('u281_img').tabIndex = 0;
HookHover('u281', false);

u281.style.cursor = 'pointer';
$axure.eventManager.click('u281', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu975fbd6d9f3e4c2f9991574918e7871d1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog_Landing_Page.html');
}
setTimeout(waitu975fbd6d9f3e4c2f9991574918e7871d1, 250);

}
});
gv_vAlignTable['u282'] = 'center';document.getElementById('u285_img').tabIndex = 0;
HookHover('u285', false);

u285.style.cursor = 'pointer';
$axure.eventManager.click('u285', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u286'] = 'center';document.getElementById('u287_img').tabIndex = 0;
HookHover('u287', false);

u287.style.cursor = 'pointer';
$axure.eventManager.click('u287', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u288'] = 'center';document.getElementById('u289_img').tabIndex = 0;
HookHover('u289', false);

u289.style.cursor = 'pointer';
$axure.eventManager.click('u289', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u140'] = 'center';document.getElementById('u141_img').tabIndex = 0;
HookHover('u141', false);

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u290'] = 'center';document.getElementById('u291_img').tabIndex = 0;
HookHover('u291', false);

u291.style.cursor = 'pointer';
$axure.eventManager.click('u291', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u292'] = 'center';document.getElementById('u293_img').tabIndex = 0;
HookHover('u293', false);

u293.style.cursor = 'pointer';
$axure.eventManager.click('u293', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u294'] = 'center';document.getElementById('u295_img').tabIndex = 0;
HookHover('u295', false);

u295.style.cursor = 'pointer';
$axure.eventManager.click('u295', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u296'] = 'center';document.getElementById('u297_img').tabIndex = 0;
HookHover('u297', false);

u297.style.cursor = 'pointer';
$axure.eventManager.click('u297', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u298'] = 'center';document.getElementById('u299_img').tabIndex = 0;
HookHover('u299', false);

u299.style.cursor = 'pointer';
$axure.eventManager.click('u299', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
document.getElementById('u159_img').tabIndex = 0;
HookHover('u159', false);

u159.style.cursor = 'pointer';
$axure.eventManager.click('u159', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u150'] = 'center';document.getElementById('u151_img').tabIndex = 0;
HookHover('u151', false);

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u152'] = 'center';HookHover('u153', false);
gv_vAlignTable['u154'] = 'center';document.getElementById('u155_img').tabIndex = 0;
HookHover('u155', false);

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
document.getElementById('u232_img').tabIndex = 0;
HookHover('u232', false);

u232.style.cursor = 'pointer';
$axure.eventManager.click('u232', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u233'] = 'center';document.getElementById('u234_img').tabIndex = 0;
HookHover('u234', false);

u234.style.cursor = 'pointer';
$axure.eventManager.click('u234', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u235'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u160'] = 'center';document.getElementById('u161_img').tabIndex = 0;
HookHover('u161', false);

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u162'] = 'center';document.getElementById('u163_img').tabIndex = 0;
HookHover('u163', false);

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u167'] = 'center';document.getElementById('u117_img').tabIndex = 0;
HookHover('u117', false);

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu541b67820e8d4152a10858f9b34ff7c61() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop_Landing_Page.html');
}
setTimeout(waitu541b67820e8d4152a10858f9b34ff7c61, 250);

}
});
gv_vAlignTable['u118'] = 'center';document.getElementById('u119_img').tabIndex = 0;
HookHover('u119', false);

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u114', 'pd2u114','none','',500,'none','',500);
function waitu6f6f03e9f6564b4b9efe0547f99d6b301() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore_Landing_Page.html');
}
setTimeout(waitu6f6f03e9f6564b4b9efe0547f99d6b301, 250);

}
});
document.getElementById('u149_img').tabIndex = 0;
HookHover('u149', false);

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u188_img').tabIndex = 0;
HookHover('u188', false);

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u189'] = 'center';document.getElementById('u170_img').tabIndex = 0;
HookHover('u170', false);

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu59e96ae50e114659ba4b27ec4bd03c011() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop_Landing_Page.html');
}
setTimeout(waitu59e96ae50e114659ba4b27ec4bd03c011, 250);

}
});
gv_vAlignTable['u171'] = 'center';document.getElementById('u172_img').tabIndex = 0;
HookHover('u172', false);

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u114', 'pd2u114','none','',500,'none','',500);
function waitu0b9473d00cc74e7fb9b7035568738c911() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore_Landing_Page.html');
}
setTimeout(waitu0b9473d00cc74e7fb9b7035568738c911, 250);

}
});
gv_vAlignTable['u173'] = 'center';document.getElementById('u174_img').tabIndex = 0;
HookHover('u174', false);

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu0933e09be67c430eb26bac3055736c1f1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog_Landing_Page.html');
}
setTimeout(waitu0933e09be67c430eb26bac3055736c1f1, 250);

}
});
gv_vAlignTable['u175'] = 'center';document.getElementById('u178_img').tabIndex = 0;
HookHover('u178', false);

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u126'] = 'center';document.getElementById('u127_img').tabIndex = 0;
HookHover('u127', false);

u127.style.cursor = 'pointer';
$axure.eventManager.click('u127', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u128'] = 'center';document.getElementById('u186_img').tabIndex = 0;
HookHover('u186', false);

u186.style.cursor = 'pointer';
$axure.eventManager.click('u186', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u257'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u79'] = 'top';document.getElementById('u180_img').tabIndex = 0;
HookHover('u180', false);

u180.style.cursor = 'pointer';
$axure.eventManager.click('u180', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u181'] = 'center';document.getElementById('u182_img').tabIndex = 0;
HookHover('u182', false);

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u300'] = 'center';document.getElementById('u301_img').tabIndex = 0;
HookHover('u301', false);

u301.style.cursor = 'pointer';
$axure.eventManager.click('u301', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u302'] = 'center';document.getElementById('u303_img').tabIndex = 0;
HookHover('u303', false);

u303.style.cursor = 'pointer';
$axure.eventManager.click('u303', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u304'] = 'center';document.getElementById('u307_img').tabIndex = 0;
HookHover('u307', false);

u307.style.cursor = 'pointer';
$axure.eventManager.click('u307', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u308'] = 'center';document.getElementById('u309_img').tabIndex = 0;
HookHover('u309', false);

u309.style.cursor = 'pointer';
$axure.eventManager.click('u309', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
document.getElementById('u137_img').tabIndex = 0;
HookHover('u137', false);

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u138'] = 'center';document.getElementById('u210_img').tabIndex = 0;
HookHover('u210', false);

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u211'] = 'center';document.getElementById('u212_img').tabIndex = 0;
HookHover('u212', false);

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
HookHover('u214', false);
gv_vAlignTable['u215'] = 'center';document.getElementById('u190_img').tabIndex = 0;
HookHover('u190', false);

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u191'] = 'center';document.getElementById('u192_img').tabIndex = 0;
HookHover('u192', false);

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u310'] = 'center';document.getElementById('u311_img').tabIndex = 0;
HookHover('u311', false);

u311.style.cursor = 'pointer';
$axure.eventManager.click('u311', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u312'] = 'center';document.getElementById('u315_img').tabIndex = 0;
HookHover('u315', false);

u315.style.cursor = 'pointer';
$axure.eventManager.click('u315', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u316'] = 'center';document.getElementById('u317_img').tabIndex = 0;
HookHover('u317', false);

u317.style.cursor = 'pointer';
$axure.eventManager.click('u317', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u318'] = 'center';document.getElementById('u319_img').tabIndex = 0;
HookHover('u319', false);

u319.style.cursor = 'pointer';
$axure.eventManager.click('u319', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u221'] = 'center';document.getElementById('u224_img').tabIndex = 0;
HookHover('u224', false);

u224.style.cursor = 'pointer';
$axure.eventManager.click('u224', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Shop');
function waitu0732be8ae1aa45fd9abc5e4fb822a9611() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop_Landing_Page.html');
}
setTimeout(waitu0732be8ae1aa45fd9abc5e4fb822a9611, 250);

}
});
gv_vAlignTable['u225'] = 'center';u99.tabIndex = 0;

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u320'] = 'center';HookHover('u321', false);
gv_vAlignTable['u322'] = 'center';document.getElementById('u323_img').tabIndex = 0;
HookHover('u323', false);

u323.style.cursor = 'pointer';
$axure.eventManager.click('u323', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u324'] = 'center';
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
gv_vAlignTable['u5'] = 'center';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to My Account page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u8'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to View Cart page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u9'] = 'top';document.getElementById('u139_img').tabIndex = 0;
HookHover('u139', false);

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
document.getElementById('u240_img').tabIndex = 0;
HookHover('u240', false);

u240.style.cursor = 'pointer';
$axure.eventManager.click('u240', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u241'] = 'center';document.getElementById('u244_img').tabIndex = 0;
HookHover('u244', false);

u244.style.cursor = 'pointer';
$axure.eventManager.click('u244', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to My Account page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u12'] = 'top';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

SetGlobalVariableValue('LoggedInVar', 'No');

	SetPanelState('u7', 'pd0u7','none','',500,'fade','',500);

}
});
u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to View Cart page.<BR>See Checkout Wireframes at ../checkout/checkout-prototypes.html for more"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to My Account page."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to sign-in page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u16'] = 'top';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("opens the member account page for the TRAILBLAZER club.<BR><BR>P2-Displays badges to indicate unbought bottles from membership shipment or other messages."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u18'] = 'top';u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to sign-in page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u19'] = 'top';u110.tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u111.tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to Winery Inquiries (Winery.TastingRoom.com?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u252_img').tabIndex = 0;
HookHover('u252', false);

u252.style.cursor = 'pointer';
$axure.eventManager.click('u252', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u253'] = 'center';document.getElementById('u254_img').tabIndex = 0;
HookHover('u254', false);

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u255'] = 'center';document.getElementById('u256_img').tabIndex = 0;
HookHover('u256', false);

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to View Cart page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u21'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

SetGlobalVariableValue('LoggedInVar', 'Yes');

	SetPanelState('u7', 'pd1u7','none','',500,'fade','',500);

}
});
u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to View Cart page.<BR>See Checkout Wireframes at ../checkout/checkout-prototypes.html for more"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u26'] = 'top';document.getElementById('u27_img').tabIndex = 0;
HookHover('u27', false);
HookClick('u27', false);

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u28'] = 'center';document.getElementById('u29_img').tabIndex = 0;
HookHover('u29', false);
HookClick('u29', false);

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}
});
document.getElementById('u208_img').tabIndex = 0;
HookHover('u208', false);

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u132'] = 'center';document.getElementById('u133_img').tabIndex = 0;
HookHover('u133', false);

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u120'] = 'center';document.getElementById('u121_img').tabIndex = 0;
HookHover('u121', false);

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu5e2da1f3184f48d0bcbeadd21dcd1a471() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog_Landing_Page.html');
}
setTimeout(waitu5e2da1f3184f48d0bcbeadd21dcd1a471, 250);

}
});
gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u185'] = 'center';document.getElementById('u260_img').tabIndex = 0;
HookHover('u260', false);

u260.style.cursor = 'pointer';
$axure.eventManager.click('u260', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u261'] = 'center';document.getElementById('u262_img').tabIndex = 0;
HookHover('u262', false);

u262.style.cursor = 'pointer';
$axure.eventManager.click('u262', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Chefs___Corks.html');

}
});
gv_vAlignTable['u263'] = 'center';document.getElementById('u264_img').tabIndex = 0;
HookHover('u264', false);

u264.style.cursor = 'pointer';
$axure.eventManager.click('u264', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Finder.html');

}
});
gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u33'] = 'center';$('#u36').attr('axSubmit', 'u29');

$axure.eventManager.focus('u36', function(e) {

if ((GetWidgetText('u35')) == ('')) {

SetWidgetFormText('u35', GetWidgetText('u36'));

SetWidgetFormText('u36', '');

}
});

$axure.eventManager.blur('u36', function(e) {

if ((GetWidgetText('u36')) == ('')) {

SetWidgetFormText('u36', GetWidgetText('u35'));

SetWidgetFormText('u35', '');

}
});
document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes User to Home Page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u39'] = 'center';document.getElementById('u216_img').tabIndex = 0;
HookHover('u216', false);

u216.style.cursor = 'pointer';
$axure.eventManager.click('u216', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u217'] = 'center';document.getElementById('u200_img').tabIndex = 0;
HookHover('u200', false);

u200.style.cursor = 'pointer';
$axure.eventManager.click('u200', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u201'] = 'center';document.getElementById('u202_img').tabIndex = 0;
HookHover('u202', false);

u202.style.cursor = 'pointer';
$axure.eventManager.click('u202', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u130'] = 'center';document.getElementById('u131_img').tabIndex = 0;
HookHover('u131', false);

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u203'] = 'center';document.getElementById('u204_img').tabIndex = 0;
HookHover('u204', false);

u204.style.cursor = 'pointer';
$axure.eventManager.click('u204', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u205'] = 'center';document.getElementById('u270_img').tabIndex = 0;
HookHover('u270', false);

u270.style.cursor = 'pointer';
$axure.eventManager.click('u270', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u271'] = 'center';gv_vAlignTable['u274'] = 'center';document.getElementById('u42_img').tabIndex = 0;
HookHover('u42', false);

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog_Landing_Page.html');

}
});
gv_vAlignTable['u43'] = 'top';document.getElementById('u44_img').tabIndex = 0;
HookHover('u44', false);

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
gv_vAlignTable['u45'] = 'top';HookHover('u46', false);
gv_vAlignTable['u47'] = 'top';document.getElementById('u48_img').tabIndex = 0;
HookHover('u48', false);

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u49'] = 'top';document.getElementById('u226_img').tabIndex = 0;
HookHover('u226', false);

u226.style.cursor = 'pointer';
$axure.eventManager.click('u226', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Explore');

	SetPanelState('u114', 'pd2u114','none','',500,'none','',500);
function waitu8232468868c244f7ab949d886d58256a1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore_Landing_Page.html');
}
setTimeout(waitu8232468868c244f7ab949d886d58256a1, 250);

}
});
gv_vAlignTable['u227'] = 'center';document.getElementById('u228_img').tabIndex = 0;
HookHover('u228', false);

u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

SetGlobalVariableValue('TopNav', 'Blog');
function waitu80981a2ed8064e999cb6281dd634e5eb1() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog_Landing_Page.html');
}
setTimeout(waitu80981a2ed8064e999cb6281dd634e5eb1, 250);

}
});
gv_vAlignTable['u229'] = 'center';gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u142'] = 'center';document.getElementById('u143_img').tabIndex = 0;
HookHover('u143', false);

u143.style.cursor = 'pointer';
$axure.eventManager.click('u143', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u144'] = 'center';document.getElementById('u147_img').tabIndex = 0;
HookHover('u147', false);

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('New_Releases.html');

}
});
document.getElementById('u50_img').tabIndex = 0;
HookHover('u50', false);

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tell_us_what_you_think.html');

}
});
gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u59'] = 'center';document.getElementById('u236_img').tabIndex = 0;
HookHover('u236', false);

u236.style.cursor = 'pointer';
$axure.eventManager.click('u236', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Food___Wine.html');

}
});
gv_vAlignTable['u237'] = 'center';HookHover('u238', false);
gv_vAlignTable['u239'] = 'center';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';
$axure.eventManager.focus('u68', function(e) {

if ((GetWidgetText('u67')) == ('')) {

SetWidgetFormText('u67', GetWidgetText('u68'));

SetWidgetFormText('u68', '');

}
});

$axure.eventManager.blur('u68', function(e) {

if ((GetWidgetText('u68')) == ('')) {

SetWidgetFormText('u68', GetWidgetText('u67'));

SetWidgetFormText('u67', '');

}
});
document.getElementById('u69_img').tabIndex = 0;
HookHover('u69', false);
HookClick('u69', false);

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to quick sign-up link with email address pre-populated"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
document.getElementById('u246_img').tabIndex = 0;
HookHover('u246', false);

u246.style.cursor = 'pointer';
$axure.eventManager.click('u246', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Culture.html');

}
});
gv_vAlignTable['u247'] = 'center';document.getElementById('u248_img').tabIndex = 0;
HookHover('u248', false);

u248.style.cursor = 'pointer';
$axure.eventManager.click('u248', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Products.html');

}
});
gv_vAlignTable['u249'] = 'center';