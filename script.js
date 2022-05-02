const container = document.getElementById('container');

let str = 
`<p><span class="hw">aa- </span> &nbsp;
<span class="phon">(haha-).</span> &nbsp;
Also <span class="altpron"><span class="DialWord">a- </span>(<span class="DialPhon">ha-</span>).</span> &nbsp;
<span class="gram">1.</span> &nbsp;
<span class="def">Belonging to; possessive classifier, alienable objects and general possessive.</span> &nbsp;
<a name="2"></a>
<a name="aaet"></a>
</p>
<p><span class="hw">aaet </span> &nbsp;
<span class="phon">(hhayẹt).</span> &nbsp;
Also <span class="altpron"><span class="DialWord">aet</span>.</span> &nbsp;
<span class="def">Yes; dialectal variant of <span class="DialWord"><a class="cf"
            href="MED0I.htm#iññā">iññā</a></span> (<span class="DialPhon">yiggay</span>) and <span
        class="DialWord">iiūñ</span> (<span class="DialPhon">'yiyig</span>).</span> &nbsp;
<a name="3"></a>
<a name="ab in et"></a>
</p>
<p><span class="hw">ab in et </span> &nbsp;
<span class="phon">(hab yin yẹt).</span> &nbsp;
Also <span class="altpron"><span class="DialWord">aabinet </span>(<span
        class="DialPhon">hhabinyẹt</span>).</span> &nbsp;
<span class="status">idiom.</span> &nbsp;
<span class="def">But what can I do.</span> &nbsp;
</p>
<p><span class="exmrs">Ab in et ñe edike eok.</span>
<span class="exeng">But what can I do if she doesn't like you.</span>
<a name="4"></a>
<a name="aba"></a>
</p>
<p><span class="hw">aba </span> &nbsp;
<span class="phon">(habah).</span> &nbsp;
<span class="etymol">From Engl.</span> &nbsp;
<span class="def">Harbor; anchorage; port.</span> &nbsp;
</p>`


// EACH PARAGRAPH IS USED FOR EITHER A WORD AND ITS CONTENTS OR IT'S AN EXAMPLE FOR THE PREVIOUS WORD. THIS ISOLATES EACH PARAGRAPH
let paragraphs = str.match(/<p(.*?)<\/p>/gs);

// WITHIN EACH PARAGRAPH GROUP THERE ARE SPAN-CHILDREN THAT HOLD DIFFERENT PORTIONS OF THE WORD-DEFINITION ONE OF WHICH IS THE WORD ITSELF.

// THIS ALSO IGNORES THE OTHER TYPES OF OF TAGS SUCH AS LINK TAGS WHICH INCLUDE USELESS INFORMATION (FOR THIS PROJECT AT LEAST)
let spans = paragraphs.map(par => par.match(/<span(.*?)<\/span>/gs));

// THESE FUNCTIONS WILL HELP ISOLATE THE DIFFERENT PORTIONS EVEN FURTHER
function includesMainWord(arrayOfSpans) {
    for(let i = 0; i < arrayOfSpans.length; i++) {
        if(arrayOfSpans[i].includes('class="hw"')) return true;
    }
    return false;
}

function isExample(arrayOfSpans) {
    for(let i = 0; i < arrayOfSpans.length; i++) {
        if(arrayOfSpans[i].includes('class="ex"')) return true;
    }
    return false;
}

function removeTags(string) {
    return string.replace(/<(.*?)>/gs, '');
}

console.log(removeTags(spans[0][1]))

