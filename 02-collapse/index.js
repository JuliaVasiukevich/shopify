const content = document
    .querySelector('.collapsible__content')
    .animate({
        visibility: ['visible', 'hidden'],
        height: ['calc(100%)', '0%']
    }, {
        fill: 'both',
    });

const buttonVisible = document
    .querySelector('.collapsible__action--visible')
    .animate({
        fontSize: ['1em', '0em'],
    }, {
        fill: 'both',
    });

const buttonHidden = document
    .querySelector('.collapsible__action--hidden')
    .animate({
        fontSize: ['0em', '1em'],
    }, {
        fill: 'both',
    });

document.querySelector('.collapsible__button').addEventListener('click', () => {
    [
        content,
        buttonVisible,
        buttonHidden,
    ].forEach((item) => {
            item.reverse();
    });
});
