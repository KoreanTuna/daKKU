var selectedBox = null;

function selectStyle(box) {
    if (selectedBox) {
        selectedBox.classList.remove('selected');
    }

    selectedBox = box;
    selectedBox.classList.add('selected');
}

function confirmSelection() {
    var selectedStyle = selectedBox.querySelector('span').textContent;
    var body = document.querySelector('body');

    if (selectedStyle === '사이버') {
        body.style.backgroundColor = '#000000';
    } else if (selectedStyle === '농장주') {
        body.style.backgroundColor = '#00FF00';
    } else if (selectedStyle === '베이커') {
        body.style.backgroundColor = '#FF0000';
    } else if (selectedStyle === '방학') {
        body.style.backgroundColor = '#FFFF00';
    }

    // 이동할 페이지 경로에 맞게 수정하세요
    window.location.href = '/new-page';
}