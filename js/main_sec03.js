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

// 푸터를 숨기고 #weight 섹션으로 스크롤
function closeFooterAndScrollToWeight() {
  // 푸터와 오버레이 숨기기
  document.getElementById('footer').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';

  // #weight 섹션으로 스크롤
  document.getElementById('weight').scrollIntoView({ behavior: 'smooth' });
}

// 푸터를 보이게 하는 함수
function showFooter() {
  document.getElementById('footer').style.display = 'flex'; // 'block' 대신 'flex'를 사용할 수 있습니다.
  document.getElementById('overlay').style.display = 'block';
}

// 푸터를 숨기는 함수
function hideFooter() {
  document.getElementById('footer').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

// 체중 업데이트 함수
function updateWeight() {
  // 입력값 가져오기
  const weightInput = document.getElementById('weightInput').value;

  // 입력값 유효성 검사
  if (weightInput) {
    // #weight h2 요소에 값 업데이트
    document.getElementById('weightDisplay').textContent = `${weightInput}kg`;

    // 푸터 숨기기 및 #weight 섹션으로 스크롤
    closeFooterAndScrollToWeight();
  } else {
    alert('체중을 입력해주세요.');
  }
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












