// =======================Lab3.2 CodingChallenge1=========================== //

// LAB3.2: (SECTION 11: WORKING WITH ARRAY > CODING CHALLENGE #1)
// Julia và Kate đang nghiên cứu về loài chó. Vì vậy, mỗi người trong số họ đã hỏi 5
// chủ sở hữu chó về tuổi của con chó của họ và lưu trữ dữ liệu vào một mảng (một
// mảng cho mỗi người). Hiện tại, họ chỉ quan tâm đến việc biết một con chó là
// trưởng thành hay chó con. Chó được coi là trưởng thành nếu ít nhất 3 tuổi và là
// chó con nếu chưa đầy 3 tuổi.
// Tạo một hàm 'checkDogs', hàm này chấp nhận 2 mảng tuổi của chó ('dogsJulia' và
// 'dogsKate') và thực hiện những việc sau:
// 1. Julia phát hiện ra rằng chủ của hai con chó ĐẦU TIÊN và HAI con chó CUỐI
// CÙNG thực sự nuôi mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao nông
// của mảng của Julia và xóa tuổi mèo khỏi mảng đã sao chép đó (vì đó là một cách
// làm không tốt để thay đổi các tham số hàm)
// 2. Tạo một mảng có cả dữ liệu của Julia (đã sửa) và Kate
// 3. Đối với mỗi con chó còn lại, hãy đăng nhập vào bảng điều khiển xem đó là chó
// trưởng thành ("Chó số 1 là người lớn và 5 tuổi") hay chó con ("Chó số 2 vẫn là chó
// con �")
// 4. Chạy hàm cho cả hai bộ dữ liệu thử nghiệm
// GỢI Ý: Sử dụng các công cụ từ tất cả các bài giảng trong phần này cho đến nay �
// TEST DATA 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]
// TEST DATA 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]

// ========================Code============================== //

//1.
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrented = dogsJulia.slice();
    dogsJuliaCorrented.splice(0, 1); //[5,2,12,7]
    dogsJuliaCorrented.splice(-2); //[5,2]
  
    //2
    const dogs = dogsJuliaCorrented.concat(dogsKate);
  
    // console.log(dogsJuliaCorrented);
    console.log(dogs);
    //3
    dogs.forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i} is and adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i} is still a puppy`);
      }
    });
    //   dogs.forEach((dog, index) => {
    //     dog >= 3
    //       ? console.log(`Dog number ${index} is and adult, and is ${dog} years old`)
    //       : console.log(`Dog number ${index} is still a puppy`);
    //   });
  };
  
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);