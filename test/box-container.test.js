import buildBoxes from '../src/box-container';
import updateBoxes from '../src/checkbox';
import { createDom, clearDom } from './__mocks__/helpers';

let boxes;
const boxCount = Math.floor(Math.random() * 144);

beforeEach(() => {
  createDom(boxCount);
  buildBoxes(boxCount);
  boxes = Array.from(document.getElementsByTagName('li'));
});

afterEach(() => {
  clearDom();
});

jest.mock('../src/checkbox');
updateBoxes.mockImplementation(() => {});

describe('buildBoxes', function() {
  it('renders desired count of boxes', () => {
    expect(boxes.length).toBe(boxCount);
  });

  it('renders desired count of boxes', () => {
    for(let i = 1; i <= boxes.length; i++) {
      const currentId = `check-${i}`;
      const currentCheckBox = boxes[i - 1].childNodes[0];
      const currentLabel = boxes[i - 1].childNodes[1];

      expect(currentCheckBox.value).toBe(i.toString());
      expect(currentCheckBox.id).toBe(currentId);
      expect(currentLabel.innerHTML).toBe(i.toString());
      expect(currentLabel.getAttribute('for')).toBe(currentId);
    }
  });

  it('fires events on click with according arguments', () => {
    const randomIndex = Math.floor(Math.random() * boxCount / 2);
    const randomBox = boxes[randomIndex].childNodes[1];
    const randomValue = randomIndex + 1;

    randomBox.click();
    expect(updateBoxes).toBeCalledWith(randomValue, true, boxCount, [randomValue]);

    randomBox.click();
    expect(updateBoxes).toBeCalledWith(randomValue, false, boxCount, []);
    
    randomBox.click();
    expect(updateBoxes).toBeCalledWith(randomValue, true, boxCount, [randomValue]);
  });
});

describe('throws and error when neccessary elements are not present', function() {
  clearDom();

  try {
    buildBoxes(boxCount);
  } catch (e) {
    expect(e.message).toBe('missing container and/or template element');
  }
});
