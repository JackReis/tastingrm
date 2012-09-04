for(var i = 0; i < 36; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", ClickLinkToReferencePageu20);
else u20.addEventListener("click", ClickLinkToReferencePageu20, true);
function ClickLinkToReferencePageu20(e)
{
    self.location.href=$axure.globalVariableProvider.getLinkUrl('categoryx.html');
}

x = 0;
y = 56;
InsertAfterBegin(u20ann, "<img src='resources/images/newwindow.gif' id='u20PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u20PagePopup = document.getElementById('u20PagePopup');
if (bIE) u20PagePopup.attachEvent("onclick", u20PagePopupHandler);
else u20PagePopup.addEventListener("click", u20PagePopupHandler, true);

function u20PagePopupHandler(event)
{
    window.open($axure.globalVariableProvider.getLinkUrl('categoryx.html'));
}
gv_vAlignTable['u21'] = 'center';
u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", ClickLinkToReferencePageu22);
else u22.addEventListener("click", ClickLinkToReferencePageu22, true);
function ClickLinkToReferencePageu22(e)
{
    self.location.href=$axure.globalVariableProvider.getLinkUrl('compare.html');
}

x = 0;
y = 56;
InsertAfterBegin(u22ann, "<img src='resources/images/newwindow.gif' id='u22PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u22PagePopup = document.getElementById('u22PagePopup');
if (bIE) u22PagePopup.attachEvent("onclick", u22PagePopupHandler);
else u22PagePopup.addEventListener("click", u22PagePopupHandler, true);

function u22PagePopupHandler(event)
{
    window.open($axure.globalVariableProvider.getLinkUrl('compare.html'));
}
gv_vAlignTable['u23'] = 'center';
u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", ClickLinkToReferencePageu24);
else u24.addEventListener("click", ClickLinkToReferencePageu24, true);
function ClickLinkToReferencePageu24(e)
{
    self.location.href=$axure.globalVariableProvider.getLinkUrl('pricingandterms.html');
}

x = 0;
y = 56;
InsertAfterBegin(u24ann, "<img src='resources/images/newwindow.gif' id='u24PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u24PagePopup = document.getElementById('u24PagePopup');
if (bIE) u24PagePopup.attachEvent("onclick", u24PagePopupHandler);
else u24PagePopup.addEventListener("click", u24PagePopupHandler, true);

function u24PagePopupHandler(event)
{
    window.open($axure.globalVariableProvider.getLinkUrl('pricingandterms.html'));
}
gv_vAlignTable['u25'] = 'center';
u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", ClickLinkToReferencePageu26);
else u26.addEventListener("click", ClickLinkToReferencePageu26, true);
function ClickLinkToReferencePageu26(e)
{
    self.location.href=$axure.globalVariableProvider.getLinkUrl('proddetail.html');
}

x = 0;
y = 56;
InsertAfterBegin(u26ann, "<img src='resources/images/newwindow.gif' id='u26PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u26PagePopup = document.getElementById('u26PagePopup');
if (bIE) u26PagePopup.attachEvent("onclick", u26PagePopupHandler);
else u26PagePopup.addEventListener("click", u26PagePopupHandler, true);

function u26PagePopupHandler(event)
{
    window.open($axure.globalVariableProvider.getLinkUrl('proddetail.html'));
}
gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';
u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", ClickLinkToReferencePageu18);
else u18.addEventListener("click", ClickLinkToReferencePageu18, true);
function ClickLinkToReferencePageu18(e)
{
    self.location.href=$axure.globalVariableProvider.getLinkUrl('home.html');
}

x = 0;
y = 56;
InsertAfterBegin(u18ann, "<img src='resources/images/newwindow.gif' id='u18PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u18PagePopup = document.getElementById('u18PagePopup');
if (bIE) u18PagePopup.attachEvent("onclick", u18PagePopupHandler);
else u18PagePopup.addEventListener("click", u18PagePopupHandler, true);

function u18PagePopupHandler(event)
{
    window.open($axure.globalVariableProvider.getLinkUrl('home.html'));
}
gv_vAlignTable['u19'] = 'center';