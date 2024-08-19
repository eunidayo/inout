// sec04

// 모달 [ 기록 저장, 기록 목록보기, 총 시간 업데이트 ]
document.addEventListener('DOMContentLoaded', () => {
  const recordButton = document.getElementById('record-button');
  const viewRecordsButton = document.getElementById('view-records-button');
  const recordModal = document.getElementById('record-modal');
  const closeButton = document.querySelector('#record-modal .close-button');
  const saveRecordButton = document.getElementById('save-record');
  const totalTimeElement = document.getElementById('total-time');
  let records = JSON.parse(localStorage.getItem('records')) || [];

  // 기록 모달 열기
  recordButton.addEventListener('click', () => {
    recordModal.style.display = 'flex';
  });

  // 기록 모달 닫기
  closeButton.addEventListener('click', () => {
    recordModal.style.display = 'none';
  });

  // 기록 저장
  saveRecordButton.addEventListener('click', () => {
    const category = document.getElementById('exercise-category').value;
    const time = parseInt(document.getElementById('exercise-time').value, 10);
    const weight = parseInt(document.getElementById('exercise-weight').value, 10);
    const reps = parseInt(document.getElementById('exercise-reps').value, 10);

    if (!isNaN(time) && time >= 0) {
      records.push({ category, time, weight, reps });
      localStorage.setItem('records', JSON.stringify(records));
      updateTotalTime();
      recordModal.style.display = 'none';
    }
  });

  // 기록 목록 보기 버튼 클릭 시
  viewRecordsButton.addEventListener('click', () => {
    window.location.href = 'record-list.html';  // 기록 목록 페이지로 이동
  });

  // 총 시간 업데이트 함수
  function updateTotalTime() {
    const totalTime = records.reduce((sum, record) => sum + record.time, 0);
    totalTimeElement.innerHTML = `${totalTime} <p>분</p>`;
  }

  // 페이지 로드 시 총 시간 업데이트
  updateTotalTime();
});











