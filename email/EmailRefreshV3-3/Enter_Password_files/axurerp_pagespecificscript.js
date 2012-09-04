for(var i = 0; i < 14; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('EmailAddress')) != ('email@domain.com')) {

;

}

if (true) {

SetGlobalVariableValue('SignupSequenceVar', 'SetPassword');

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

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clicku3efc2b751d914379bcb89a10be661d11(event)'>SettingPasswordFromEmail</div>");
function u7Clicku3efc2b751d914379bcb89a10be661d11(e)
{

SetGlobalVariableValue('SignupSequenceVar', 'SetPassword');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Set_Password.html');

	ToggleLinks(e, 'u7LinksClick');
}

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clicku85e351ce43194293b47c9a5ebd932cfc(event)'>ChangingPreferences</div>");
function u7Clicku85e351ce43194293b47c9a5ebd932cfc(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Email_Prefs_Master.html');

	ToggleLinks(e, 'u7LinksClick');
}

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clicku5fda3c28f0fc46cb9923f588a3f07d96(event)'>ResettingPassword</div>");
function u7Clicku5fda3c28f0fc46cb9923f588a3f07d96(e)
{

SetGlobalVariableValue('SignupSequenceVar', 'ResetPassword');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Set_Password.html');

	ToggleLinks(e, 'u7LinksClick');
}
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';