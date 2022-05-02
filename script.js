let str = '';

import aWords from './aWords.json' assert {type: "json"};

let container = document.getElementById('container');



for(let i = 0; i < 10; i++) {
    let p = document.createElement('p');
    let text1 = document.createTextNode(aWords[i].mainWord);
    let text2 = document.createTextNode(aWords[i].pronunciation);
    let text3 = document.createTextNode(aWords[i].definiton);
    p.appendChild(text1);
    p.appendChild(text2);
    p.appendChild(text3);
    container.appendChild(p);
}

let paragraphs = str.match(/<p(.*?)<\/p>/gs);

let spans = paragraphs.map(par => par.match(/<span(.*?)<\/span>/gs));

const findMainWord = (arrayOfSpans) => {
    for(let i = 0; i < arrayOfSpans.length; i++) {
        if(arrayOfSpans[i].includes('class="hw"')) return arrayOfSpans[i];
    }
    return null;
}

const findPhon = (arrayOfSpans) => {
    for(let i = 0; i < arrayOfSpans.length; i++) {
        if(arrayOfSpans[i].includes('class="phon"')) return arrayOfSpans[i];
    }
    return null;
}

const findDef = (arrayOfSpans) => {
    for(let i = 0; i < arrayOfSpans.length; i++) {
        if(arrayOfSpans[i].includes('class="def"')) return arrayOfSpans[i];
    }
    return null;
}

const removeTags = (string) => {
    if(string === null) return null;
    return string.replace(/<(.*?)>/gs, '');
}

const createWordObject = (span) => {
    let mainWord = removeTags(findMainWord(span));
    if(mainWord === null) return null
    let pronunciation = removeTags(findPhon(span));
    let definiton = removeTags(findDef(span));
    let template = `{
        "mainWord" : "${mainWord}",
        "pronunciation" : "${pronunciation}",
        "definiton" : "${definiton}"
    }`
    return template;
}

let array = [];
for (let i = 0; i < spans.length; i++) {
    const words = createWordObject(spans[i]);
    if(words !== null) array.push(words);
}

let joinedArray = array.join();
let formattedArray = `[${joinedArray}]`;


