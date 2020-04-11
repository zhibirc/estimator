const doc            = document;
const fetch          = doc.getElementById.bind(doc);
const estimateButton = fetch('estimate');
const result         = fetch('result');

estimateButton.addEventListener('click', () => {
    let optimisticMark  = +fetch('optimistic-mark').value;
    let normalMark      = +fetch('normal-mark').value;
    let pessimisticMark = +fetch('pessimistic-mark').value;

    result.textContent = ((optimisticMark + 4 * normalMark + pessimisticMark) / 6).toFixed(1) + ' hours';
});
