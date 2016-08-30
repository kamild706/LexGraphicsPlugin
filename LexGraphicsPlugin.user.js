// ==UserScript==
// @name        Lex.pl Graphics Plugin
// @namespace   matt23.lex.graphics.plugin
// @author      Matt23
// @description Wyświetla grafiki w serwisie Lex
// @version     1
// @include     http://*.lex.pl/*
// @include     https://*.lex.pl/*
// @grant       none
// ==/UserScript==

function getRandomInt() {
  max = 10000000;
  min = 100000;
  return Math.floor(Math.random() * (max - min)) + min;
}

function modifyCssRules(className, content) {
  re = /(\.\w+\s{)/g;
  return content.replace(re, "." + className + ' $1');
}

function extractSVG(data) {
  return data.substring(data.indexOf('<svg'));
}

function renderSVGs(item) {
  $.get(item.href, function(data) {
    content = extractSVG(data);
    className = 'graphicsRender' + getRandomInt();

    item.parentNode.className += ' ' + className;
    svg = modifyCssRules(className, content);

    item.parentNode.innerHTML = svg;
  });
};

function doMagic() {
  $('a[href$="SVG"]').each(function(index) {
    renderSVGs(this);
  });
}

document.addEventListener("keypress", function(event) {
    doMagic();
});
