const bankSoal = [
  {
    id: 1,
    pertanyaan: 'Apa output dari kode berikut?\n\nconsole.log(typeof null);',
    pilihan: ["A. 'object'", "B. 'null'", "C. 'undefined'", "D. 'boolean'"],
  },
  {
    id: 2,
    pertanyaan: 'Manakah di antara berikut ini yang BUKAN tipe data primitif dalam JavaScript?',
    pilihan: ['A. String', 'B. Number', 'C. Boolean', 'D. Array'],
  },
  {
    id: 3,
    pertanyaan: "Apa fungsi utama dari metode 'map()' pada array di JavaScript?",
    pilihan: ['A. Mengubah elemen array menjadi objek', 'B. Mengurutkan elemen array', 'C. Membuat array baru dengan hasil pemanggilan fungsi pada setiap elemen array', 'D. Menambahkan elemen baru ke akhir array'],
  },
  {
    id: 4,
    pertanyaan: "Di manakah posisi keyword 'default' digunakan dalam switch statement?",
    pilihan: ['A. Setelah semua case statements', 'B. Sebelum case pertama', 'C. Di mana saja dalam switch statement', 'D. Hanya jika tidak ada case yang cocok'],
  },
  {
    id: 5,
    pertanyaan: "Apa hasil dari operasi 2 + '3' di JavaScript?",
    pilihan: ['A. 5', "B. '5'", 'C. 23', "D. '23'"],
  },
  {
    id: 6,
    pertanyaan: "Apa output dari kode berikut?\n\nconsole.log(1 === '1');",
    pilihan: ['A. true', 'B. false', 'C. undefined', 'D. Error'],
  },
  {
    id: 7,
    pertanyaan: 'Apa yang dimaksud dengan closure dalam JavaScript?',
    pilihan: [
      'A. Fungsi yang dipanggil segera setelah didefinisikan',
      'B. Fungsi yang memiliki akses ke variabel dari scope luar meskipun setelah fungsi luar telah dieksekusi',
      'C. Fungsi yang tidak memiliki parameter',
      'D. Fungsi yang didefinisikan di dalam objek',
    ],
  },
  {
    id: 8,
    pertanyaan: 'Bagaimana cara mendeklarasikan variabel di JavaScript yang tidak dapat diubah nilainya setelah deklarasi?',
    pilihan: ['A. var', 'B. let', 'C. const', 'D. static'],
  },
  {
    id: 9,
    pertanyaan: 'Manakah di antara berikut ini yang digunakan untuk melakukan iterasi melalui properti sebuah objek?',
    pilihan: ['A. for loop', 'B. forEach', 'C. for...in', 'D. map'],
  },
  {
    id: 10,
    pertanyaan: 'Apa output dari kode berikut?\n\nconsole.log(!!false);',
    pilihan: ['A. true', 'B. false', 'C. null', 'D. undefined'],
  },
];

const answersQuestion = [0, 3, 2, 0, 3, 1, 1, 2, 2, 1];

const timingQuiz = document.querySelector('.timingQuiz');
const contentLoader = document.querySelector('.content-loader');
const contentQuiz = document.querySelector('#contentQuiz');
const amountQuestion = document.querySelector('.amountQuestion');

const maxQuestion = bankSoal.length;
let timingProcessing = 10;
let initValue = 0;

const setLoadBrowser = () => {
  setUI(bankSoal[initValue]);
};

const setUI = (datasQuestion) => {
  const { id, pertanyaan: question, pilihan: chooseAnswer } = datasQuestion;
  const [answer_a, answer_b, answer_c, answer_d] = chooseAnswer;

  contentQuiz.innerHTML = `
    <div class="d-flex gap-3 align-items-center mt-5 pt-5">
                <h3 class="color-brand  px-3 py-3 ">${id}</h3>
                <p>${question}
                </p>
            </div>

            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="chooseAnswer">${answer_a}</div>
                    <div class="chooseAnswer">${answer_b}</div>
                </div>

                <div class="col col-12 col-md-6">
                    <div class="chooseAnswer">${answer_c}</div>
                    <div class="chooseAnswer">${answer_d}</div>
                </div>
            </div>

             <div class="d-flex justify-content-end mt-5">
                <button class="btn btnNext d-flex align-items-center gap-1" onclick="nextQuestion()">Next <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" style="fill: #5818AB;">
                        <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                        </path>
                    </svg></button>
            </div>
  `;
};

const nextQuestion = () => {
  ++initValue;
};

addEventListener('DOMContentLoaded', () => {
  setLoadBrowser();
  setProcessingTime();
});

let durationAnimate = 0;
let logicTimingAnimate = false;

const setProcessingTime = () => {
  setInterval(() => {
    const remainingQuestion = maxQuestion - (initValue + 1);
    timingProcessing -= 1;
    durationAnimate += 10;
    amountQuestion.innerHTML = remainingQuestion;
    contentLoader.style.width = `${durationAnimate}%`;
    timingQuiz.innerText = timingProcessing;

    if (timingProcessing < 1) {
      initValue += 1;
      durationAnimate = 0;
      timingProcessing = 10;
      timingQuiz.innerText = timingProcessing;
      setUI(bankSoal[initValue]);
    }
  }, 1000);
};
