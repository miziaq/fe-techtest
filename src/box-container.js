import updateBoxes from './checkbox';

const buildBoxes = function(itemCount) {
    const boxTemplate = document.getElementById('box-template');
    const boxContainer = document.getElementById('box-container');
    const selected = [];

    if (!boxTemplate || !boxContainer) {
        throw new Error('missing container and/or template element');
    }

    for (let i = 1; i <= itemCount; i++) {
        const boxClone = boxTemplate.content.cloneNode(true);
        const li =  document.createElement('li');
        const checkboxId = `check-${i}`;
        const checkbox = boxClone.childNodes[0];
        const label = boxClone.childNodes[1];

        checkbox.value = i;
        label.textContent = i;
        checkbox.id = checkboxId;
        label.setAttribute('for', checkboxId);

        li.appendChild(boxClone);
        boxContainer.appendChild(li);
    }

    boxContainer.addEventListener('change', (ev) => {
        const target = ev.target;
        const index = parseInt(target.value, 10);

        if (index > itemCount / 2) {
            return;
        }

        const on = target.checked;

        if (on) {
            selected.push(index);
        } else {
            selected.splice(selected.indexOf(index), 1);
        }

        updateBoxes(index, on, itemCount, selected);
    });
}

export default buildBoxes;
