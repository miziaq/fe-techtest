import buildBoxes from '../src/box-container';
import updateBoxes from '../src/checkbox';
import  { createDom, clearDom } from './__mocks__/helpers';

let labels;
const boxCount = Math.floor(Math.random() * 144);
const highlightClass = 'checkbox-label--highlight';

beforeEach(() => {
  createDom(boxCount);
  buildBoxes(boxCount);
  labels = Array.from(document.getElementsByTagName('label'));
});

afterEach(() => {
  clearDom();
});

const multiplied1 = 6;
const multiplied2 = 3;
let multiples;

describe('updateBoxes', function() {
  it('adds and removes the highlighted boxes with multiples of the index value', () => {
    updateBoxes(multiplied1, true, boxCount, [multiplied1]);
    multiples = labels.filter(label => label.classList.contains(highlightClass));
    expect(multiples.length).toBe(Math.floor(boxCount / multiplied1));

    updateBoxes(multiplied2, true, boxCount, [multiplied1, multiplied2]);
    multiples = labels.filter(label => label.classList.contains(highlightClass));
    expect(multiples.length).toBe(Math.floor(boxCount / multiplied2));

    updateBoxes(multiplied1, false, boxCount, [multiplied2]);
    multiples = labels.filter(label => label.classList.contains(highlightClass));
    expect(multiples.length).toBe(Math.floor(boxCount / multiplied2));

    updateBoxes(multiplied2, false, boxCount, []);
    multiples = labels.filter(label => label.classList.contains(highlightClass));
    expect(multiples.length).toBe(0);
  });
});
