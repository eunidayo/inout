// sec03

// // 탭버튼
function openTab2(tabName) {
  // 모든 탭 버튼과 콘텐츠를 비활성화
  const buttons = document.querySelectorAll('.sec03 .tab-button');
  const contents = document.querySelectorAll('.sec03 .tab-content');
  console.log(buttons);
  buttons.forEach(button => button.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  // 클릭한 버튼을 활성화하고, 관련 콘텐츠를 표시
  document.querySelector(`.sec03 button[onclick="openTab2('${tabName}')"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
}













// weight 체중

// 몸무게 입력
function showFooter() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('footer').style.display = 'flex';
}

function hideFooter() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
}

function updateWeight() {
  const weightInput = document.getElementById('weightInput').value;
  const weightDisplay = document.getElementById('weightDisplay');
  weightDisplay.textContent = `${weightInput}kg`;
  hideFooter(); // Hide the footer and overlay after saving
}





// eye 눈바디

// 카메라 
function openFileDialog(target) {
  document.getElementById('fileInput').setAttribute('data-target', target);
  document.getElementById('fileInput').click();
}


function previewImage(event) {
  const fileInput = event.target;
  const target = fileInput.getAttribute('data-target');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgElement = document.getElementById(target + 'Image');
      imgElement.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}












