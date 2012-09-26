for(var i = 0; i < 127; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

$axure.eventManager.focus('u81', function(e) {

if ((GetWidgetText('u80')) == ('')) {

SetWidgetFormText('u80', GetWidgetText('u81'));

SetWidgetFormText('u81', '');

}
});

$axure.eventManager.blur('u81', function(e) {

if ((GetWidgetText('u81')) == ('')) {

SetWidgetFormText('u81', GetWidgetText('u80'));

SetWidgetFormText('u80', '');

}
});
document.getElementById('u82_img').tabIndex = 0;
HookHover('u82', false);
HookClick('u82', false);

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Takes user to quick sign-up link with email address pre-populated"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u92'] = 'top';u10.tabIndex = 0;

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
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';document.getElementById('u17_img').tabIndex = 0;
HookHover('u17', false);

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Shop.html');

}
});
gv_vAlignTable['u18'] = 'top';document.getElementById('u19_img').tabIndex = 0;
HookHover('u19', false);

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Explore.html');

}
});
u110.tabIndex = 0;

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

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u112.tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u113.tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u114.tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u22'] = 'top';document.getElementById('u25_img').tabIndex = 0;
HookHover('u25', false);

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Samplers.html');

}
});
gv_vAlignTable['u26'] = 'center';document.getElementById('u27_img').tabIndex = 0;
HookHover('u27', false);

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_by_the_Glass.html');

}
});
gv_vAlignTable['u28'] = 'center';document.getElementById('u29_img').tabIndex = 0;
HookHover('u29', false);

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Wine_Bottles.html');

}
});
gv_vAlignTable['u100'] = 'bottom';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u106'] = 'top';u107.tabIndex = 0;

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

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item… do we have a central Customer Support page?"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u30'] = 'center';document.getElementById('u31_img').tabIndex = 0;
HookHover('u31', false);

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join_Club_TR.html');

}
});
gv_vAlignTable['u32'] = 'center';document.getElementById('u33_img').tabIndex = 0;
HookHover('u33', false);

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Gift_Center.html');

}
});
gv_vAlignTable['u34'] = 'center';document.getElementById('u35_img').tabIndex = 0;
HookHover('u35', false);

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u36'] = 'center';document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Varietals_1.html');

}
});
gv_vAlignTable['u38'] = 'center';document.getElementById('u39_img').tabIndex = 0;
HookHover('u39', false);

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Regions_1.html');

}
});
gv_vAlignTable['u94'] = 'bottom';gv_vAlignTable['u96'] = 'bottom';gv_vAlignTable['u98'] = 'bottom';u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u117.tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Emails support@tastingroom.com (mailto link?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to twitter page"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u40'] = 'center';document.getElementById('u43_img').tabIndex = 0;
HookHover('u43', false);

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('About_TR_com.html');

}
});
gv_vAlignTable['u44'] = 'center';document.getElementById('u45_img').tabIndex = 0;
HookHover('u45', false);

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('T_A_S_T_E__Technology.html');

}
});
gv_vAlignTable['u46'] = 'center';document.getElementById('u47_img').tabIndex = 0;
HookHover('u47', false);

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Our_Partners.html');

}
});
gv_vAlignTable['u48'] = 'center';document.getElementById('u49_img').tabIndex = 0;
HookHover('u49', false);

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('In_the_News.html');

}
});
u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u121.tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u122.tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to Press + Media Inquiries (Mailto to Press + Media alias?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u123.tabIndex = 0;

u123.style.cursor = 'pointer';
$axure.eventManager.click('u123', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to page listed in text of footer item"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Links to Winery Inquiries (Winery.TastingRoom.com?)"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

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
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u50'] = 'center';document.getElementById('u52_img').tabIndex = 0;
HookHover('u52', false);

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Blog___LoggedIn.html');

}
});
gv_vAlignTable['u53'] = 'top';document.getElementById('u54_img').tabIndex = 0;
HookHover('u54', false);

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_New_Releases.html');

}
});
gv_vAlignTable['u55'] = 'top';document.getElementById('u56_img').tabIndex = 0;
HookHover('u56', false);

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_What_s_Trending.html');

}
});
gv_vAlignTable['u57'] = 'top';document.getElementById('u58_img').tabIndex = 0;
HookHover('u58', false);

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Copy_of_Food___Wine.html');

}
});
gv_vAlignTable['u59'] = 'top';HookHover('u60', false);
gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'center';