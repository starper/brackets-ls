define(function (require, exports, module) {
  'use strict';

  var LanguageManager = brackets.getModule("language/LanguageManager");
  
  LanguageManager.defineLanguage("livescript", {
    name: "LiveScript",
    mode: "livescript",
    fileExtensions: ["ls"],
    blockComment: ["/*","*/"],
    lineComment: ["#", "#"]
  });
});