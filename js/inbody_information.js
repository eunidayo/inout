
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;

  if (isNaN(weight) || isNaN(height) || isNaN(age) || height <= 0 || age <= 0 || !gender) {
    document.getElementById('result').innerText = '올바른 체중, 신장, 나이, 성별을 입력해주세요.';
    return;
  }

  const bmi = weight / (height * height);
  let resultText = `당신의 BMI는 ${bmi.toFixed(2)}입니다. `;

  if (bmi < 18.5) {
    resultText += '저체중입니다.';
  } else if (bmi < 24.9) {
    resultText += '정상체중입니다.';
  } else if (bmi < 29.9) {
    resultText += '과체중입니다.';
  } else {
    resultText += '비만입니다.';
  }

  // 나이에 따른 추가 해석
  if (age < 18) {
    resultText += ' 나이대에 따른 건강 관리를 권장합니다.';
  } else if (age < 60) {
    resultText += ' 성인 건강 관리에 유의하세요.';
  } else {
    resultText += ' 노인 건강 관리에 유의하세요.';
  }

  // 성별에 따른 추가 해석 (간단한 예시)
  if (gender === 'male') {
    resultText += ' 남성의 경우, 근육량을 유지하는 것이 중요합니다.';
  } else if (gender === 'female') {
    resultText += ' 여성의 경우, 체지방 감소에 유의하세요.';
  }

  document.getElementById('result').innerText = resultText;
}


