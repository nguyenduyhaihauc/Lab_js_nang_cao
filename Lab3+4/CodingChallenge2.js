// ===================Lab3.3 Coding challenge2========================= //

// LAB3.3: (SECTION 11: WORKING WITH ARRAY > CODING CHALLENGE #2)
// Julia và Kate's đang học về loài chó. Lần này họ muốn tính tuổi trung bình của chó
// theo tuổi của người.
// Viết 1 hàm gọi là 'calcAverageHumanAge', nhận vào 1 danh sách tuổi của các chú
// chó ('ages'), và hãy làm theo thứ tự sau
// 1. Tính tuổi của chó theo tuổi của con người theo công thức sau: nếu tuổi của chó
// <= 2, tuổi của người = tuổi của chó * 2. Nếu tuổi của chó > 2, tuổi người = 16 +
// tuổi của chó * 4.
// 2. Loại trừ tất cả những chú chó có tuổi nhỏ hơn so với 1 người 18 tuổi (lấy ra tất
// cả những chú chó trên 18 tuổi)
// 3. Tính tuổi trung bình của các chú chó trưởng thành ra tuổi người
// 4. Chạy hàm với các dữ liệu mẫu dưới đây:
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// ===================Code=================== //

const calcAverageHumanAge = (ages) => {
    console.log(ages);
    const humanAge = ages.map((age) => {
      if (age > 2) {
        return 16 + age * 4;
      } else {
        return age * 2;
      }
    });
    console.log(humanAge);
    const adults = humanAge.filter((age) => {
      if (age >= 18) {
        return age;
      }
    });
    console.log(adults);
  
    const average = adults.reduce((acc, age) => {
      return acc + age / adults.length;
    }, 0);
    return average;
    
  };
  // calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  // calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  console.log('=======TEST DATA 1========')
  const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  console.log('=======TEST DATA 2========')
  const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  
  console.log(avg1,avg2);