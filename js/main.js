import {data} from './data.js'

const stringToHTML = (str) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(str, 'text/html')
    return doc.body.children
}

const elements = [...stringToHTML(data)]
const mappedWords = elements.map(word => word.outerHTML.includes('class="ex') ? 'example' : 'main')
let JSONtemplateArray = []
let JSONtemplate = `{ "word" : "", "key" : ${0}, "ex" : [] }`
for (const i in mappedWords) {if(mappedWords[i].includes('main')) JSONtemplateArray.push(JSONtemplate)}
const JSONarray = JSON.parse(`[${JSONtemplateArray}]`)

console.log(JSONarray)