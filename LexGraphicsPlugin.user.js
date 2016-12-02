// ==UserScript==
// @name        Lex.pl Graphics Plugin
// @namespace   matt23.lex.graphics.plugin
// @author      Matt23
// @description Wyświetla grafiki w serwisie Lex
// @version     1
// @include     http://sip.lex.pl/*
// @include     https://sip.lex.pl/*
// @grant       none
// ==/UserScript==

var num = 1;


function addCssRules(className, content) {
  re = /(\.\w+\s{)/g;
  return content.replace(re, "." + className + ' $1');
}

function extractSVG(data) {
  return data.substring(data.indexOf('<svg'));
}

function renderSVGs(item) {
  $.get(item.href, function(data) {
    content = extractSVG(data);
    className = 'graphicsRender' + num++;

    item.parentNode.className += ' ' + className;
    svg = addCssRules(className, content);

    item.parentNode.innerHTML = svg;
  });
}

document.addEventListener("keypress", function(event) {
  $('a[href$="SVG"]').each(function(index) {
    renderSVGs(this);
  });
});
