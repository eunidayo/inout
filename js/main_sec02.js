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




document.addEventListener('DOMContentLoaded', () => {
  const recordWaterButton = document.getElementById('record-water-button');
  const viewWaterRecordsButton = document.getElementById('view-water-records-button');
  const waterAmountElement = document.getElementById('water-amount');

  // 물 기록 입력 페이지로 이동
  recordWaterButton.addEventListener('click', () => {
    window.location.href = 'record-water.html';
  });

  // 물 기록 목록 보기 버튼 클릭 시
  viewWaterRecordsButton.addEventListener('click', () => {
    window.location.href = 'water-record-list.html';  // 물 기록 목록 페이지로 이동
  });

  // 페이지 로드 시 물 섭취량 업데이트
  function updateWaterAmount() {
    const waterAmount = localStorage.getItem('waterAmount');
    if (waterAmount !== null) {
      waterAmountElement.textContent = `${waterAmount}L`;
    } else {
      waterAmountElement.textContent = '0.00L';
    }
  }

  updateWaterAmount();
});
