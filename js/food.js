const apiKey = 'jOVaw19JNMzoCtJS0i7+MUCfYnJls/Hde6OYIfAWw7b8jhl/7tv6whfNNAak+9j7/L4xzGlB/2P+KUjcJV7o0g==';
const searchApiUrl = 'http://api.data.go.kr/openapi/tn_pubr_public_nutri_food_info_api';
const nutrientApiUrl = 'http://apis.data.go.kr/1390802/AgriFood/MzenFoodNutri/getKoreanFoodIdntList';

document.getElementById('searchForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const foodName = document.getElementById('foodName').value;

  try {
    // 음식 코드 검색 API 호출
    const searchResponse = await axios.get(searchApiUrl, {
      params: {
        serviceKey: apiKey,
        food_Name: encodeURIComponent(foodName),
        type: 'json'
      }
    });

    // 응답 데이터 전체 출력
    console.log('음식 코드 검색 응답:', searchResponse.data);

    // 데이터 구조 확인
    const responseBody = searchResponse.data.response;
    const items = responseBody.body ? responseBody.body.items : [];
    if (items.length > 0) {
      const foodCode = items[0].food_Code;

      // 영양 성분 API 호출
      const nutrientResponse = await axios.get(nutrientApiUrl, {
        params: {
          serviceKey: apiKey,
          food_Code: foodCode,
          type: 'json'
        }
      });

      // 영양 성분 응답 데이터 확인
      console.log('영양 성분 응답:', nutrientResponse.data);

      const nutrientResponseBody = nutrientResponse.data.response;
      const nutrientItems = nutrientResponseBody.body ? nutrientResponseBody.body.items : [];
      if (nutrientItems.length > 0) {
        const nutrients = nutrientItems[0];
        const data = {
          labels: ['탄수화물', '단백질', '지방'],
          datasets: [{
            data: [nutrients.carbohydrate_Qy, nutrients.prot_Qy, nutrients.ntrfs_Qy],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }]
        };

        const ctx = document.getElementById('nutrientChart').getContext('2d');
        new Chart(ctx, {
          type: 'pie',
          data: data
        });
      } else {
        alert('영양 성분 정보를 찾을 수 없습니다.');
      }
    } else {
      alert('음식명을 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('API 호출 에러:', error);
  }
});



