document.addEventListener('DOMContentLoaded', function () {
  const dateElement = document.getElementById('current-date');
  const prevButton = document.getElementById('prev-day');
  const nextButton = document.getElementById('next-day');
  const calendarModal = document.getElementById('calendar-modal');
  const closeModalButton = document.querySelector('.close');
  const showCalendarButton = document.getElementById('show-calendar');
  const calendarMonthYear = document.getElementById('calendar-month-year');
  const calendarContainer = document.getElementById('calendar');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');

  let currentDate = new Date();

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${month}.${day}(${getDayName(date)})`;
  }

  function getDayName(date) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[date.getDay()];
  }

  function updateDateDisplay() {
    dateElement.textContent = formatDate(currentDate);
  }

  function updateCalendarHeader() {
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    calendarMonthYear.textContent = `${year}년 ${month}월`;
  }

  function showPreviousDay() {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDateDisplay();
  }

  function showNextDay() {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDateDisplay();
  }

  function showCalendarModal() {
    calendarModal.style.display = 'flex';
    updateCalendarHeader();
    renderCalendar();
  }

  function closeCalendarModal() {
    calendarModal.style.display = 'none';
  }

  function renderCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const calendarTable = document.createElement('table');
    const headerRow = document.createElement('tr');
    daysOfWeek.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
    });
    calendarTable.appendChild(headerRow);

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    let dateNum = 1;

    for (let i = 0; i < 6; i++) { // 최대 6주
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        if (i === 0 && j < firstDayOfMonth) {
          cell.textContent = '';
        } else if (dateNum > lastDateOfMonth) {
          cell.textContent = '';
        } else {
          cell.textContent = dateNum;
          cell.classList.add('calendar-date');
          cell.dataset.date = new Date(year, month, dateNum).toISOString(); // 날짜를 데이터 속성으로 저장
          cell.addEventListener('click', (event) => {
            const selectedDate = new Date(event.target.dataset.date);
            currentDate.setFullYear(selectedDate.getFullYear());
            currentDate.setMonth(selectedDate.getMonth());
            currentDate.setDate(selectedDate.getDate());
            updateDateDisplay();
            closeCalendarModal();
          });
          dateNum++;
        }
        row.appendChild(cell);
      }
      calendarTable.appendChild(row);
    }
    calendarContainer.innerHTML = '';
    calendarContainer.appendChild(calendarTable);
  }

  function showPreviousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendarHeader();
    renderCalendar();
  }

  function showNextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendarHeader();
    renderCalendar();
  }

  // 초기 날짜 표시 및 달력 모달 업데이트
  updateDateDisplay();
  updateCalendarHeader();

  // 이벤트 리스너 추가
  prevButton.addEventListener('click', showPreviousDay);
  nextButton.addEventListener('click', showNextDay);
  showCalendarButton.addEventListener('click', showCalendarModal);
  closeModalButton.addEventListener('click', closeCalendarModal);
  prevMonthButton.addEventListener('click', showPreviousMonth);
  nextMonthButton.addEventListener('click', showNextMonth);

  window.addEventListener('click', function (event) {
    if (event.target === calendarModal) {
      closeCalendarModal();
    }
  });
});
