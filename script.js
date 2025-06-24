const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const mainImg = document.getElementById('mainImg');
const buttonsDiv = document.getElementById('buttons');
const textInput = document.getElementById('textInput');
const sound = document.getElementById('soundEffect');

// Câu hỏi nút xanh
const noButtonTexts = [
  "Không",
  "Bạn chắc chứ?",
  "Thật không đó?",
  "Đừng đùa nhaaa~",
  "Nghĩ kỹ lại chưa?",
  "Tớ sẽ buồn đó 😢",
  "Suy nghĩ thêm chút nữa đi..."
];

let noClickCount = 0;

noBtn.addEventListener('click', () => {
  sound.play();

  // Cập nhật nội dung
  noBtn.innerText = noButtonTexts[noClickCount];
  mainImg.src = `img/${noClickCount}.jpg`;

  // Tăng scale và trượt sang phải dần
  const scale = 2 + noClickCount * 0.4;
  const shift = noClickCount * 25; // dịch dần sang phải (px)
  yesBtn.style.transform = `translateX(${shift}px) scale(${scale})`;

  // Nút đỏ nổi lên
  yesBtn.style.zIndex = 2;
  noBtn.style.zIndex = 1;

  // Ẩn nút xanh ở lần cuối
  if (noClickCount === noButtonTexts.length - 1) {
    noBtn.style.visibility = 'hidden';
  }

  noClickCount++;
  if (noClickCount >= noButtonTexts.length) {
    noClickCount = noButtonTexts.length - 1;
  }
});

yesBtn.addEventListener('click', () => {
  sound.play();
  buttonsDiv.style.display = 'none';
  question.innerText = "Yayyy! Tớ biết câu trả lời sẽ vậy mà 💌\n \n Yêu  cậu ❤️";
  mainImg.src = "img/yes.jpg";
//   textInput.style.display = 'block';
});
