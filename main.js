/**
 * Main application entry point.
 *
 * @module
 */

'use strict';

const getElement     = document.getElementById.bind(document);
const estimateButton = getElement('estimate');
const result         = getElement('result');

estimateButton.addEventListener('click', () => {
    let optimisticMark  = +getElement('optimistic-mark').value;
    let normalMark      = +getElement('normal-mark').value;
    let pessimisticMark = +getElement('pessimistic-mark').value;

    result.textContent = ((optimisticMark + 4 * normalMark + pessimisticMark) / 6).toFixed(1) + ' hours';
});
