'use strict';
const buttons = document.querySelectorAll('button');
const historyBtn = document.getElementById('historyBtn');
const historyWindow = document.querySelector('.calc-operation-history');

const getByClass = name => {
  return document.querySelector(`.${name}`);
};

const getById = name => {
  return document.getElementById(`${name}`);
};

const historyFunc = () => {
  historyWindow.classList.toggle('show');
};

historyBtn.addEventListener('click', historyFunc);

const clearFunc = () => {
  getByClass('calc-result').textContent = 0;
  startFlag = false;
  dotFlag = false;
  getByClass('calc-result').style.fontSize = '4.2rem';
};

const deleteLastNumber = () => {
  let number = getByClass('calc-result').textContent;
  if (number.length > 1) {
    getByClass('calc-result').textContent = number.slice(0, -1);
  } else if ((number.length = 1)) {
    clearFunc();
  }
};

const allClear = () => {
  currentNum = 0;
  previousNum = 0;
  startFlag = false;
  dotFlag = false;
  getByClass('calc-result').textContent = 0;
  getByClass('calc-operation-history').innerHTML = '';
  numHistory = [];
  getByClass('calc-result').style.fontSize = '4.2rem';
};

let startFlag = false;
let dotFlag = false;
let currentNum = '';
let previousNum = '';
let operatorNum = '';
let numHistory = new Array();
let result;

const dot = () => {
  if (!dotFlag) {
    getByClass('calc-result').textContent += '.';
    dotFlag = true;
    startFlag = true;
  }
};

const num0 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '0';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '0';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '0';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '0';
    } else {
      getByClass('calc-result').textContent += '0';
    }
  }
};

const num1 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '1';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '1';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '1';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '1';
    } else {
      getByClass('calc-result').textContent += '1';
    }
  }
};

const num2 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '2';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '2';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '2';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '2';
    } else {
      getByClass('calc-result').textContent += '2';
    }
  }
};

const num3 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '3';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '3';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '3';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '3';
    } else {
      getByClass('calc-result').textContent += '3';
    }
  }
};

const num4 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '4';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '4';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '4';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '4';
    } else {
      getByClass('calc-result').textContent += '4';
    }
  }
};

const num5 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '5';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '5';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '5';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '5';
    } else {
      getByClass('calc-result').textContent += '5';
    }
  }
};

const num6 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '6';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '6';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '6';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '6';
    } else {
      getByClass('calc-result').textContent += '6';
    }
  }
};

const num7 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '7';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '7';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '7';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '7';
    } else {
      getByClass('calc-result').textContent += '7';
    }
  }
};

const num8 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '8';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '8';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '8';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '8';
    } else {
      getByClass('calc-result').textContent += '8';
    }
  }
};

const num9 = () => {
  if (!startFlag && !dotFlag) {
    getByClass('calc-result').textContent = '9';
    startFlag = true;
  } else {
    if (getByClass('calc-result').textContent.length > 13) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent += '9';
    } else if (getByClass('calc-result').textContent.length > 9) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent += '9';
    } else if (getByClass('calc-result').textContent.length > 6) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent += '9';
    } else {
      getByClass('calc-result').textContent += '9';
    }
  }
};

const equalsFunc = () => {
  result = getByClass('calc-result').textContent;
  let test = String(eval(result));
  if (result.length > 2) {
    if (test.length > 15) {
      getByClass('calc-result').style.fontSize = '1.5rem';
      getByClass('calc-result').textContent = eval(result);
    } else if (test.length > 13) {
      getByClass('calc-result').style.fontSize = '2.3rem';
      getByClass('calc-result').textContent = eval(result);
    } else if (test.length > 10) {
      getByClass('calc-result').style.fontSize = '2.8rem';
      getByClass('calc-result').textContent = eval(result);
    } else {
      getByClass('calc-result').style.fontSize = '4.2rem';
      getByClass('calc-result').textContent = eval(result);
    }
    numHistory.push(`${result} = ${eval(result)}`);
    let historyElem;
    let parent = getByClass('calc-operation-history');
    if (numHistory.length != 0) {
      historyElem = document.createElement('div');
      historyElem.className = 'calc-operation';
      historyElem.textContent = `${result} = ${eval(result)}`;
      parent.appendChild(historyElem);
    }
  }
};
const multiple = () => {
  getByClass('calc-result').textContent += '*';
  dotFlag = false;
};

const division = () => {
  getByClass('calc-result').textContent += '/';
  dotFlag = false;
};

const minus = () => {
  getByClass('calc-result').textContent += '-';
  dotFlag = false;
};

const plus = () => {
  getByClass('calc-result').textContent += '+';
  dotFlag = false;
};
