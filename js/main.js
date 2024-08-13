
function openTab(tabName) {
  // 모든 탭 버튼과 콘텐츠를 비활성화합니다.
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(button => button.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  // 클릭한 버튼을 활성화하고, 관련 콘텐츠를 표시합니다.
  document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
}

// 페이지 로드 시 기본적으로 첫 번째 탭을 열어놓습니다.
document.addEventListener('DOMContentLoaded', () => {
  openTab('weight');
});

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



















// Function to open file dialog and set the target
function openFileDialog(target) {
  document.getElementById('fileInput').setAttribute('data-target', target);
  document.getElementById('fileInput').click();
}

// Function to preview image and update the target element
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































































// 프로필사진 변경
// function openFileDialog() {
//   document.getElementById('fileInput').click();
// }

// function previewImage() {
//   const fileInput = document.getElementById('fileInput');
//   const profileImg = document.getElementById('profileImg');
//   const file = fileInput.files[0];

//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       profileImg.src = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }





