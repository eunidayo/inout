
document.addEventListener('DOMContentLoaded', () => {
  const recordList = document.getElementById('recordList');
  const editModal = document.getElementById('edit-modal');
  const closeEditButton = document.querySelector('#edit-modal .close-button');
  const saveEditsButton = document.getElementById('save-edits');
  let editIndex = null;
  const records = JSON.parse(localStorage.getItem('records')) || [];

  // 기록 목록을 표시하는 함수
  function displayRecords() {
    recordList.innerHTML = '';
    records.forEach((record, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        [ 부위 ] ${record.category}, [ 시간 ] ${record.time}분, [ 중량 ] ${record.weight}kg, 횟수: ${record.reps}
        <button class="edit-button" data-index="${index}">수정</button>
        <button class="delete-button" data-index="${index}">삭제</button>
      `;
      recordList.appendChild(listItem);
    });
  }

  // 수정 버튼 클릭 시
  recordList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-button')) {
      editIndex = event.target.getAttribute('data-index');
      const record = records[editIndex];

      // 모달에 기존 기록 값 설정
      document.getElementById('edit-category').value = record.category;
      document.getElementById('edit-time').value = record.time;
      document.getElementById('edit-weight').value = record.weight;
      document.getElementById('edit-reps').value = record.reps;

      // 모달 열기
      editModal.style.display = 'flex';
    } else if (event.target.classList.contains('delete-button')) {
      const index = event.target.getAttribute('data-index');
      // 기록 삭제
      records.splice(index, 1);
      localStorage.setItem('records', JSON.stringify(records));
      displayRecords();
    }
  });

  // 수정 모달 저장 버튼 클릭 시
  saveEditsButton.addEventListener('click', () => {
    if (editIndex !== null) {
      const newCategory = document.getElementById('edit-category').value;
      const newTime = document.getElementById('edit-time').value;
      const newWeight = document.getElementById('edit-weight').value;
      const newReps = document.getElementById('edit-reps').value;

      // 기록 업데이트
      records[editIndex] = {
        category: newCategory,
        time: newTime,
        weight: newWeight,
        reps: newReps
      };
      localStorage.setItem('records', JSON.stringify(records));
      displayRecords();

      // 모달 닫기
      editModal.style.display = 'none';
      editIndex = null;
    }
  });

  // 수정 모달 닫기
  closeEditButton.addEventListener('click', () => {
    editModal.style.display = 'none';
    editIndex = null;
  });

  // 페이지 로드 시 기록 목록 표시
  displayRecords();
});