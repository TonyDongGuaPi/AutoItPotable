function serviceHeader(){return new ServiceHeader(10,"Google Search",'<a href="https://google.com/">https://google.com/</a>'+Const.NL+"Copyright \u00a9 2013 Google. All rights reserved.",Capability.DICTIONARY)}function serviceHost(a,b,c){return"https://google.com"}function serviceLink(a,b,c){return"https://www.google.com/?q="+encodeGetParam(a)}
SupportedLanguages=[-1,"","af","az","sq","ar","hy","eu","be","bg","ca","zh-CN","zh-TW","hr","cs","da","nl","en","et","fi","tl","fr","gl","de","el","ht","iw","hi","hu","is","id","it","ga","ja","ka","ko","lv","lt","mk","ms","mt","no","fa","pl","pt","ro","ru","sr","sk","sl","es","sw","sv","th","tr","uk","ur","vi","cy","yi","eo","hmn","la","lo"];function serviceDictionaryRequest(a,b,c){a=buildUri(a,b,c);return new RequestData(HttpMethod.GET,a)}
function serviceDictionaryResponse(a,b,c,d){b=midString(b,'<div id="ires"><ol>',"</ol></div>",!0);b=removeAttributes(b,["id","name","class"]);b=removeTags(b,["h[1-6]"]);var e=serviceHost(Capability.DICTIONARY,c,d);a=buildUri(a,c,d);a=e+a;b=updateHtmlLinks(b,e);return new ResponseData(b,c,d,a)}function buildUri(a,b,c){return format("/search?q={0}&hl={1}&lr=lang_{1}",encodeGetParam(a),codeFromLanguage(c))};