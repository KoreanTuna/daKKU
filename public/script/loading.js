// 서버 통신 상황을 가정한 가짜 로딩 함수
function fakeLoading() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 600);
  });
}

(async function () {
  const progressContainer = document.querySelector(".progress-container");
  const blockSize = 50; // 정사각형 박스의 너비를 설정합니다.
  const containerWidth = 500; // 프로그레스 바 컨테이너의 너비를 설정합니다.
  const numBlocks = containerWidth / blockSize;

  let blockCount = 0;
  while (blockCount < numBlocks) {
    await fakeLoading();
    blockCount++;

    // 새로운 정사각형 박스를 생성합니다.
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = `${(blockCount - 1) * (blockSize + 6)}px`; // 박스 사이 간격을 고려하여 위치 설정

    // 정사각형이 번갈아 나타나도록 설정
    if (blockCount % 2 === 0) {
      block.style.backgroundColor = "#925EFF";
    } else {
      block.style.backgroundColor = "#FFFFFF";
    }

    // 프로그레스 컨테이너에 새로운 박스를 추가합니다.
    progressContainer.appendChild(block);
  }
  var link = "http://localhost:3000/login";
  location.href = link;
})();
