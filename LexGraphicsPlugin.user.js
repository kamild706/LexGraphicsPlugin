// ==UserScript==
// @name        Lex.pl Graphics Plugin
// @namespace   matt23.lex.graphics.plugin
// @author      Matt23
// @description Wyświetla grafiki w serwisie Lex
// @version     3
// @include     http://sip.lex.pl/*
// @include     https://sip.lex.pl/*
// @grant       none
// ==/UserScript==

let pictureNumber = 1;

document.addEventListener('keypress', event => {
    const svgElements = document.querySelectorAll('a[href$="svg"]');
    for (const element of svgElements) {
        fetch(element.href)
            .then(response => response.text())
            .then(content => extractSVGpart(content))
            .then(svg => {
                const svgClass = `myGraphics${pictureNumber++}`;
                element.parentNode.className += ` ${svgClass}`;
                return appendCssRules(svg, svgClass);
            })
            .then(svg => element.parentNode.innerHTML = svg);
    }
});

async function extractSVGpart(content) {
    return content.substring(content.indexOf('<svg'));
}

async function appendCssRules(svg, svgClass) {
    const re = /(\.\w+\s{)/g;
    return svg.replace(re, `.${svgClass} $1`);
}
