// Settting URL GET API
// https://quizapi.io/api/v1/questions?apiKey=mwiG4BX80PHJStDJ8dpqmvrctkJdjIyJAqQOlMi9&category=Code&difficulty=Easy&limit=10

const quizContent = document.querySelector('.quiz-content');
const endPoint = 'https://quizapi.io/api/v1/questions';
const apiKey = 'mwiG4BX80PHJStDJ8dpqmvrctkJdjIyJAqQOlMi9';
const maxQuestion = 19;

let no = 1;

const setLoadBrowser = async (url) => {
  try {
    const api = await fetch(url);
    if (!api.ok) {
      throw new Error('Your Network | URL Error');
    }
    const result = await api.json();

    const { question, answers, correct_answer, category, difficulty } = result[no];
    setUIQuizApp(no, question, answers, correct_answer, category, difficulty);
    return result;
  } catch (err) {
    console.log(err);
  }
};

setLoadBrowser(`${endPoint}?apiKey=${apiKey}&category=Code&diffculty=Easy&Limit=10`);

const setUIQuizApp = (no, question, chooseAnswers, correctAnswers, category, difficulty) => {
  const { answer_a, answer_b, answer_c, answer_d } = chooseAnswers;
  quizContent.innerHTML = `
               <div class="quiz-question py-4 d-flex align-items-center gap-3">
                        <h4 class="fs-3 no-question">${no}.</h4>
                        <p class="mt-2">${question}</p>
                    </div>

                    <div class="position-relative px-5 pb-5 gap-3 d-flex justify-content-between flex-wrap quizAnswer">
                        <div class="flex-grow-1">
                            <p class="border px-3 py-2 rounded">${answer_a}</p>
                            <p class="border px-3 py-2 rounded">${answer_b}</p>
                        </div>

                        <!-- <button class="categoryQuiz btn btn-primary">DevOps</button> -->
                        <div class="flex-grow-1">
                            <p class="border px-3 py-2 rounded">${answer_c}</p>
                            <p class="border px-3 py-2 rounded">${answer_d}</p>
                        </div>
                    </div>
                    <div class="d-flex gap-3 px-5 quizBtn">
                        <button class="btn btn-danger px-5 flex-grow-1 prevButton" onclick="prevQuestion()">Prev</button>
                        <button class="text-white px-5 flex-grow-1 nextButton" onclick="nextQuestion()">Next</button>
                    </div>
        `;
};

const nextQuestion = () => {
  no += 1;
  setLoadBrowser(`${endPoint}?apiKey=${apiKey}&category=Code&diffculty=Easy&Limit=10`);
};

const prevQuestion = () => {
  no -= 1;
  setLoadBrowser(`${endPoint}?apiKey=${apiKey}&category=Code&diffculty=Easy&Limit=10`);
};

// Tugas
// 1 Mengganti Data pada Soal Soalnya dengan Data Kita Sendiri
// 2 Membuat Fitur Countdown
// 3 Ketika Soalnya masih pertama Disabled Button yang kedua
// 4 Selama Countdown Berjalan Selama 30 Detik , Jika Salah Satu Jawaban Tidak ada yang diklick maka
//   soalnya akan lanjut ke soal yang lain. dan jangan lupa juga menambahkan pop up , ketika di berhasil , dan tidak menjawab soalnya.
// 5 Kalkulasi kan Setiap Soal bernilai 10 , jika benar , dan jika salah maka nilai nya tidak dihitung
// 6 menambahkan ui pada quiz tersebut supaya ketika melakukan filtering pada fitur category dan difficulty
// maka user akan tahu dia sedang dalam tingkat kesulitan yang mana , dan dalam soal category  apa.

// 7 Ketika Pertama Kali Load Browser nya  Menu pada Soal Pertanyaan beserta lainnya / content-quiz akan dihilangkan dan dirubah menjadi button Lihat Aturan Main , dengan Mulai Main.

// 8 Dan Ketika Ingin menekan Mulai Main , akan terjadi Pop Up Box Pilihan yang dimana menyatakan , Sebelum Anda MAIN DIPERSILAHKAN TERLEBIH DAHULU MELIHAT ATURAN MAIN NYA , YANG MEMBERIKAN DUA PILIHAN SUDAH DAN LIHAT ATURAN.
