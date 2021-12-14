// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
function addslashes(str) {
  return (str + '').replace(/([\\"'])/g, '\\$1').replace(/\0/g, '\\0');
}
console.log(addslashes("kevin's birthday"));
console.log(String.fromCharCode(92) + '(');
var newtext = document.createTextNode(String.fromCharCode(92) + '(');
console.log(newtext);
const MATH_ATTR = {
  inline: {
    tag: 'span',
    class: 'inline-formula',
    graphic: 'inline-graphic',
    xlink: 'http://www.w3.org/1999/xlink',
    src: function (id) {
      console.log('id');
      //console.log(id);
    },
  },
  disply: {
    tag: 'div',
    class: 'disp-formula',
    graphic: 'graphic',
    xlink: 'http://www.w3.org/1999/xlink',
  },
  func: function (hello) {
    return hello;
  },
};
MATH_ATTR.inline.src();
// select element to unwrap

var string =
  '<span class="uri" data-name="uri" href="http://links.lww.com/MCA/A458" target="_blank" xlink:href="http://links.lww.com/MCA/A458">http://links.lww.com/MCA/A458</span>';
var doc = document.createElement('div');
doc.innerHTML = string;
appDiv.append(doc);

var el = document.querySelector('div');
// get the element's parent node
var parent = el.parentNode;
// move all children out of the element
while (el.firstChild) parent.insertBefore(el.firstChild, el);
// remove the empty element
parent.removeChild(el);

var TEST = 'Equations 1 and 2';
//console.log(TEST.replace('2', '3'))
//console.log(TEST.replace('1', '2'))

var EQ_ORDER = {
  0: {
    label: '(1)',
    index: 0,
    id: 'M3685',
    isNew: true,
  },
  1: {
    label: '(2)',
    index: 1,
    elemenet: document.getElementById('TEST'),
    id: 'M1',
    isNew: false,
    text: document.getElementById('TEST').textContent,
  },
  2: 'M1',
  3: MATH_ATTR.func,
  4: function () {
    console.log('eee');
  },
  5: (String.prototype.lastValue = function () {}),
  6: (String.prototype.lastChar = function () {
    console.log('eee');
  }),
};

console.log(typeof EQ_ORDER[3] == 'function');

Object.entries(EQ_ORDER).forEach(([key, value]) => {
  //console.log([key, value]);
});

for (const [key, value] of Object.entries(EQ_ORDER)) {
  //console.log([key, value]);
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
var key = Object.keys(EQ_ORDER).filter(function (key) {
  return EQ_ORDER[key] === 'M1';
})[0];
//console.log(key);
console.log(
  Object.fromEntries(Object.entries(EQ_ORDER).map((b) => b.reverse()))['M1']
);

var trackDialog = {
  trackInfoMessages: {
    IsCharacterSpace: {
      IsPass: false,
      Info: '[Character Space]',
    },
    IsNewNote: {
      IsPass: false,
      Info: '',
    },
    IsComment: {
      IsPass: false,
      Info: '',
    },
    IsStyle: {
      IsPass: false,
      Info: '',
    },
    IsLink: {
      IsPass: false,
      Info: '',
    },
    IsRepalceImage: {
      IsPass: false,
      Info: '',
    },
    IsEq: {
      IsPass: false,
      Info: {
        inline: '[New Inline Equation]',
        withLab: '[New unnumbered Equation]',
        withoutLab: '[New numbered equation]',
        insertLab: '[The Label added]',
        removeLab: '[The Label removed]',
        edit: '[Equation Edited]',
      },
    },
  },
};

var count = $('#count');
$({ Counter: 0 }).animate(
  { Counter: count.text() },
  {
    duration: 5000,
    easing: 'linear',
    step: function () {
      count.text(Math.ceil(this.Counter) + '%');
    },
  }
);

let prgressBar = document.querySelector('.circular-progress');
let valueConatainer = document.querySelector('.value-container');
let progressValue = 0;
let progressEndValue = 65;
let speed = 500;
let progress = setInterval(() => {
  progressValue++;
  valueConatainer.textContent = `${progressValue}`;
  prgressBar.style.background = `conic-gradient(
    #4d5bf9 ${progressValue * 3.6}deg,
    #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
