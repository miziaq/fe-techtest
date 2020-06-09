import buildBoxes from './box-container';

const itemCount = 144;

const app = function() {
    console.log('hello from app!');

    buildBoxes(itemCount);
}

export default app;
