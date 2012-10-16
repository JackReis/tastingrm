
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_SetZIP}","click",function(sym,e){sym.$("MapGroup").show();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MapGroup}","focus",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-82722581");