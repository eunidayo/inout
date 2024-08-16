
document.addEventListener('DOMContentLoaded', () => {
  const decreaseButton = document.getElementById('decrease-button');
  const increaseButton = document.getElementById('increase-button');
  const saveWaterRecordButton = document.getElementById('save-water-record');
  const waterAmountElement = document.getElementById('water-amount');
  const step = 0.2;
  let currentAmount = 0;

  // 물의 양 업데이트 함수
  function updateWaterAmountDisplay() {
    waterAmountElement.textContent = `${currentAmount.toFixed(2)}L`;
  }

  // 증가 버튼 클릭 이벤트
  increaseButton.addEventListener('click', () => {
    currentAmount += step;
    updateWaterAmountDisplay();
  });

  // 감소 버튼 클릭 이벤트
  decreaseButton.addEventListener('click', () => {
    if (currentAmount >= step) { // 최소값 0을 유지
      currentAmount -= step;
      updateWaterAmountDisplay();
    }
  });

  // 저장 버튼 클릭 이벤트
  saveWaterRecordButton.addEventListener('click', () => {
    localStorage.setItem('waterAmount', currentAmount.toFixed(2));
    window.location.href = 'main.html#water';  // 원래 페이지로 이동
  });

  // 페이지 로드 시 현재 물 양 표시
  const savedAmount = localStorage.getItem('waterAmount');
  if (savedAmount !== null) {
    currentAmount = parseFloat(savedAmount);
  }
  updateWaterAmountDisplay();
});