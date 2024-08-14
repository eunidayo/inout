// sec02

// // 탭버튼
function openTab(tabName) {
  // 모든 탭 버튼과 콘텐츠를 비활성화
  const buttons = document.querySelectorAll('.sec02 .tab-button');
  const contents = document.querySelectorAll('.sec02 .tab-content');

  buttons.forEach(button => button.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  // 클릭한 버튼을 활성화하고, 관련 콘텐츠를 표시
  document.querySelector(`.sec02 button[onclick="openTab('${tabName}')"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
}