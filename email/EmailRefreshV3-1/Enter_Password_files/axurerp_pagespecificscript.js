for(var i = 0; i < 14; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

;

}

if (true) {

SetGlobalVariableValue('SignupSequenceVar', 'SetPassword');

}

if ((GetGlobalVariableValue('SignupSequenceVar')) == ('SetPassword')) {

}

});
u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Send_Password.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);
HookClick('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', u7Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u7LinksClick'></div>")
var u7LinksClick = document.getElementById('u7LinksClick');
function u7Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u7LinksClick');
}

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clickua925795063584ba8b515adee90544fb8(event)'>SettingPassword</div>");
function u7Clickua925795063584ba8b515adee90544fb8(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Set_Password.html');

	ToggleLinks(e, 'u7LinksClick');
}

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clicku3385c231188c425989cd3cba2204827d(event)'>ChangingPreferences</div>");
function u7Clicku3385c231188c425989cd3cba2204827d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Email_Prefs.html');

	ToggleLinks(e, 'u7LinksClick');
}
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';