const updateBoxes = function(index, on, itemCount, selected) {
    const highlightClass = 'checkbox-label--highlight';

    for (let currentIndex = index; currentIndex <= itemCount; currentIndex = currentIndex + index) {
        const multi = document.querySelector(`[for="check-${currentIndex}"]`);
        const otherDivider = selected.find((el) => currentIndex % el === 0 );

        if (on) {
            multi.classList.add(highlightClass);
        } else if (!otherDivider) {
            multi.classList.remove(highlightClass);
        }
    }
}

export default updateBoxes;
