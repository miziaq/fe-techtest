import pageMock from './fileMock';

const createDom = function(boxCount) {
    document.body.innerHTML = pageMock;
}

const clearDom =  function(){
    document.body.innerHTML = '';
}

module.exports = { createDom, clearDom };
