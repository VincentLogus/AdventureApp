let language = "en"; // default
function setLanguage(lang) {
  language = lang;

  // Update text
  document.getElementById("title").innerText = uiText.title[lang];
  document.getElementById("nameInput").placeholder = uiText.placeholder[lang];
  document.getElementById("start-btn").innerText = uiText.start[lang];
  document.getElementById("lang-text").innerText = uiText.selectLang[lang];
document.getElementById("restart-btn").innerText =
  (language === "th") ? "เล่นอีกครั้ง" : "Play Again";

  // Highlight selected button
  document.getElementById("btn-en").style.opacity = (lang === "en") ? "1" : "0.5";
  document.getElementById("btn-th").style.opacity = (lang === "th") ? "1" : "0.5";
}
let player = {
  name: "",
  hp: 100,
  stats: {
    Hydration: 0,
    Excretion: 0,
    Fiber: 0,
    Sleep: 0,
    Refresh: 0,
    Active: 0,
    Sitting: 0,
    SugarRush: 0,
    Foodtimer: 0,
    Stress: 0,
    Tidy: 0,
    Pollution: 0,
    Social: 0,
    Memory: 0,
    Focus: 0,
    Rest: 0
  },
  currentQuestion: 0
};

const questions = [
  {
	//1
    text: {
      en: "How much water do you usually drink per day?",
      th: "คุณดื่มน้ำวันละเท่าไหร่?"
    },
    choices: [
      {
        text: { en: "2-2.5l.", th: "2-2.5ลิตร" },
        hp: 0,
        stats: { Hydration: 5 }
      },
      {
        text: { en: "1.5-2l.", th: "1.5-2ลิตร" },
        hp: -1,
        stats: { Hydration: 4  }
      },
      {
        text: { en: "1-1.5l.", th: "1-1.5ลิตร" },
        hp: -2,
        stats: { Hydration: 3 }
      },
      {
        text: { en: "0.5-1l.", th: "0.5-1ลิตร" },
        hp: -3,
        stats: { Hydration: 2 }
      },
      {
        text: { en: "less than 0.5l.", th: "น้อยกว่า 0.5ลิตร" },
        hp: -5,
        stats: { Hydration: 1 }
      }
    ]
  },
{
	//2
    text: {
      en: "How many times do you do number 2 per day?",
      th: "ถ่ายบ่อยแค่ไหน?"
    },
    choices: [
      {
        text: { en: "a few times a day.", th: "วันละ1-2ครั้ง" },
        hp: 0,
        stats: { Excretion: 5 }
      },
      {
        text: { en: "once every 2 days.", th: "2 วันครั้ง" },
        hp: -1,
        stats: { Excretion: 4  }
      },
      {
        text: { en: "once every 3-5 days.", th: "3-5 วันครั้ง" },
        hp: -2,
        stats: { Excretion: 3 }
      },
      {
        text: { en: "once a week.", th: "อาทิตย์ละครั้ง" },
        hp: -3,
        stats: { Excretion: 2 }
      },
      {
        text: { en: "need medication for it to come out.", th: "ต้องใช้ยาช่วยเท่านั้น" },
        hp: -5,
        stats: { Excretion: 1 }
      }
    ]
  },
{
	//3
    text: {
      en: "How often do you eat vegetables and fruits?",
      th: "คุณทานผักและผลไม้บ่อยแค่ไหน?"
    },
    choices: [
      {
        text: { en: "Every meal.", th: "ทุกมื้อ" },
        hp: 0,
        stats: { Fiber: 5 }
      },
      {
        text: { en: "once a day.", th: "วันละมื้อ" },
        hp: -1,
        stats: { Fiber: 4  }
      },
      {
        text: { en: "3 times a week.", th: "อาทิตย์ละ 3 ครั้ง" },
        hp: -2,
        stats: { Fiber: 3 }
      },
      {
        text: { en: "a few times a week.", th: "อาทิตย์ละ 1-2 ครั้ง" },
        hp: -3,
        stats: { Fiber: 2 }
      },
      {
        text: { en: "Less than once a week.", th: "น้อยกว่าอาทิตย์ละครั้ง" },
        hp: -5,
        stats: { Fiber: 1 }
      }
    ]
  },
{
	//4
    text: {
      en: "How's your quality of sleep?",
      th: "คุณภาพการนอน?"
    },
    choices: [
      {
        text: { en: "6-8 hrs without waking up during the night.", th: "6-8 ชั่วโมง ไม่สะดุ้งตื่น" },
        hp: 0,
        stats: { Sleep: 5 }
      },
      {
        text: { en: "4-6 hrs without waking up during the night.", th: "4-6 ชั่วโมง ไม่สะดุ้งตื่น" },
        hp: -1,
        stats: { Sleep: 4  }
      },
      {
        text: { en: "6-8 hrs woke up less than 2 times during the night.", th: "6-8 ชั่วโมง มีตื่นน้อยกว่า2 ครั้ง" },
        hp: -2,
        stats: { Sleep: 3 }
      },
      {
        text: { en: "Can only shut eyes for a few hours.", th: "นอนช่วงสั้นๆ2-3 ชั่วโมง" },
        hp: -3,
        stats: { Sleep: 2 }
      },
      {
        text: { en: "Need medication for it.", th: "ต้องพึ่งยานอนหลับเท่านั้น" },
        hp: -5,
        stats: { Sleep: 1 }
      }
    ]
  },
{
	//5
    text: {
      en: "What do you feel after waking up?",
      th: "ความสดชื่นหลังตื่นนอน?"
    },
    choices: [
      {
        text: { en: "Refreshed and ready for the day.", th: "สดชื่น พร้อมทำงาน" },
        hp: 0,
        stats: { Refresh: 5 }
      },
      {
        text: { en: "Drowsy but less than 5 mins.", th: "งัวเงีย ไม่เกิน5นาที" },
        hp: -1,
        stats: { Refresh: 4  }
      },
      {
        text: { en: "Drowsy, I need a coffee to kick back up.", th: "เฉยๆ ต้องกินกาแฟถึงจะสดชื่น" },
        hp: -2,
        stats: { Refresh: 3 }
      },
      {
        text: { en: "Drowsy, My energy run out after half a day.", th: "เฉยๆ และเพลียมาก เมื่อผ่านไปแค่ครึ่งวัน" },
        hp: -3,
        stats: { Refresh: 2 }
      },
      {
        text: { en: "Always low on energy.", th: "รู้สึกเหมือนแบตหมดตลอดเวลา" },
        hp: -5,
        stats: { Refresh: 1 }
      }
    ]
  },
{
	//6
    text: {
      en: "How often do you exercise?(20 mins and above)",
      th: "ความถี่ของการออกกำลังกาย?(20 นาทีขึ้นไป)"
    },
    choices: [
      {
        text: { en: "4 times a week.", th: "ออกกำลังกาย อย่างน้อยสัปดาห์ละ 4 วัน" },
        hp: 0,
        stats: { Active: 5 }
      },
      {
        text: { en: "2 times a week.", th: "ออกกำลังกาย สัปดาห์ละ 2 วัน" },
        hp: -1,
        stats: { Active: 4  }
      },
      {
        text: { en: "Once a week.", th: "ออกกำลังกาย สัปดาห์ละ 1 วัน" },
        hp: -2,
        stats: { Active: 3 }
      },
      {
        text: { en: "Twice a month.", th: "ออกกำลังกาย เดือนละ 2 วัน" },
        hp: -3,
        stats: { Active: 2 }
      },
      {
        text: { en: "Less than twice a month.", th: "ออกกำลังกาย น้อยกว่าเดือนละ 2 วัน" },
        hp: -5,
        stats: { Active: 1 }
      }
    ]
  },
{
	//7
    text: {
      en: "Average time spent sitting per day?",
      th: "เวลาเฉลี่ยในการนั่ง?"
    },
    choices: [
      {
        text: { en: "Less than15 mins.", th: "น้อยกว่า 15 นาที" },
        hp: 0,
        stats: { Sitting: 5 }
      },
      {
        text: { en: "sometimes between30-50 mins.", th: "น้อยกว่า 30-50 นาที" },
        hp: -1,
        stats: { Sitting: 4  }
      },
      {
        text: { en: "less than 1 hr.", th: "น้อยกว่า 1 ชั่วโมง" },
        hp: -2,
        stats: { Sitting: 3 }
      },
      {
        text: { en: "sometimes between 1-3 hrs.", th: "1-3 ชั่วโมง" },
        hp: -3,
        stats: { Sitting: 2 }
      },
      {
        text: { en: "More than 3 hrs.", th: "3 ชั่วโมง++" },
        hp: -5,
        stats: { Sitting: 1 }
      }
    ]
  },
{
	//8
    text: {
      en: "Sugary drinks, Caffeine, Alcohol or 0% sugar(sugar subsitution) drink?",
      th: "การบริโภคเครื่องดื่ม ของหวาน น้ำตาล คาเฟอีน หรือเครื่องดื่มที่มีสารให้ความหวานแทนน้ำตาล?"
    },
    choices: [
      {
        text: { en: "Less than once every 2 week.", th: "น้อยกว่า 2 อาทิตย์ครั้ง" },
        hp: 0,
        stats: { SugarRush: 5 }
      },
      {
        text: { en: "once a week.", th: "อาทิตย์ละ ครั้ง" },
        hp: -1,
        stats: { SugarRush: 4  }
      },
      {
        text: { en: "a few times a week.", th: "อาทิิตย์ละ 2-3ครั้ง" },
        hp: -2,
        stats: { SugarRush: 3 }
      },
      {
        text: { en: "Everyday some meal.", th: "ทุุกวัน ไม่ทุกมื้อ" },
        hp: -3,
        stats: { SugarRush: 2 }
      },
      {
        text: { en: "Everyday every meal.", th: "ทุกวัน ทุกมื้อ" },
        hp: -5,
        stats: { SugarRush: 1 }
      }
    ]
  },
{
	//9
    text: {
      en: "Punctuality in eating meals?",
      th: "ความตรงต่อเวลาของอาหารที่ทาน?"
    },
    choices: [
      {
        text: { en: "Very precise.", th: "ทุกมื้อตรงเวลา" },
        hp: 0,
        stats: { Foodtimer: 5 }
      },
      {
        text: { en: "Mostly precise with less than 30 mins late.", th: "บางมื้อตรงเวลา ห่างจากเวลาปกติไม่เกิน 30 นาที" },
        hp: -1,
        stats: { Foodtimer: 4  }
      },
      {
        text: { en: "not precise, less than 1 hr late.", th: "บางมื้อตรงเวลา ห่างจากเวลาปกติไม่เกิน 1ชม." },
        hp: -2,
        stats: { Foodtimer: 3 }
      },
      {
        text: { en: "not precise, less than 2 hr late.", th: "บางมื้อตรงเวลา ห่างจากเวลาปกติไม่เกิน 2ชม." },
        hp: -3,
        stats: { Foodtimer: 2 }
      },
      {
        text: { en: "not precise at all.", th: "ไม่เคยตรงต่อเวลา ไม่ครบทุกมื้อ" },
        hp: -5,
        stats: { Foodtimer: 1 }
      }
    ]
  },
{
	//10
    text: {
      en: "How do you feel about current stress?",
      th: "คุณตอบสนองต่อความเครียดอย่างไร?"
    },
    choices: [
      {
        text: { en: "Relaxed everything will work out on its own.", th: "ผ่อนคลาย มีพลังในการใช้ชีวิต" },
        hp: 0,
        stats: { Stress: 5 }
      },
      {
        text: { en: "It comes and goes,I can deal with it.", th: "มีความเครียดมากระตุ้นบ้างแต่จัดการมันได้" },
        hp: -1,
        stats: { Stress: 4  }
      },
      {
        text: { en: "I have a lot under the rug.Just leave me alone.", th: "รู้สึกมีความเครียดคงค้างและไม่อยากยุ่งกับใคร" },
        hp: -2,
        stats: { Stress: 3 }
      },
      {
        text: { en: "i kept overthinking about it, repetitively.", th: "เริ่มมีการกังวล และคิดซ้ำวนไปมา" },
        hp: -3,
        stats: { Stress: 2 }
      },
      {
        text: { en: "I'm stressed, burnout and moody.", th: "เครียด และ burnout หงุดหงิดง่าย" },
        hp: -5,
        stats: { Stress: 1 }
      }
    ]
  },
{
	//11
    text: {
      en: "How often do you clean your room?",
      th: "คุณทำความสะอาดบริเวณที่อยู่อาศัยบ่อยแค่ไหน?"
    },
    choices: [
      {
        text: { en: "Not a single dust particle! I did it atleast 3 times a week.", th: "สะอาดเนี๊ยบไร้ฝุ่น ทำความสะอาดอย่างน้อยอาทิตย์ละ 3 วัน" },
        hp: 0,
        stats: { Tidy: 5 }
      },
      {
        text: { en: "Quite Often,once a week.", th: "สะอาด ทำความสะอาดอย่างน้อยอาทิตย์ละ 1 วัน" },
        hp: -1,
        stats: { Tidy: 4  }
      },
      {
        text: { en: "Once every other week along with bedsheet", th: "ทำความสะอาดและซักผ้าปูที่นอนอย่างน้อย 2 อาทิตย์ครั้ง" },
        hp: -2,
        stats: { Tidy: 3 }
      },
      {
        text: { en: "Rarely, maybe once a month.", th: "นานๆทำครั้ง หลักเดือนขึ้นไป" },
        hp: -3,
        stats: { Tidy: 2 }
      },
      {
        text: { en: "I can't remember the last time I did one.", th: "จำวันล่าสุดที่ทำความสะอาดบ้านไม่ได้แล้ว" },
        hp: -5,
        stats: { Tidy: 1 }
      }
    ]
  },
{
	//12
    text: {
      en: "How often do you stay contact to pollution?",
      th: "คุณเจอฝุ่น หรือมลภาวะมากน้อยแค่ไหน?"
    },
    choices: [
      {
        text: { en: "I got Air Filter and clean air.", th: "ไร้มลภาวะ ใช้เครื่องกรองฟอกอากาศ" },
        hp: 0,
        stats: { Pollution: 5 }
      },
      {
        text: { en: "Small amount during transportation.", th: "ได้รับมลภาวะเล็กน้อยจากฝุ่นผงขณะเดินทาง" },
        hp: -1,
        stats: { Pollution: 4  }
      },
      {
        text: { en: "Some, from street and shops by the footpath", th: "ได้รับมลภาวะปานกลางจากร้านค้า ควันจากการประกอบอาหาร" },
        hp: -2,
        stats: { Pollution: 3 }
      },
      {
        text: { en: "Often, from combustions or cars.", th: "ได้รับมลภาวะสูงจากการเผาไหม้ ควันรถยนต์เข้ามายังพื้นที่บ้าน" },
        hp: -3,
        stats: { Pollution: 2 }
      },
      {
        text: { en: "High pollution from factory , smoke , Landfill.", th: "ได้รับมลภาวะสูงจากการเผาไหม้ บุหรี่ โรงงาน บ่อขยะ" },
        hp: -5,
        stats: { Pollution: 1 }
      }
    ]
  },
{
	//13
    text: {
      en: "What would you say about your friends?",
      th: "สังคมรอบตัวเป็นอย่างไรบ้าง?"
    },
    choices: [
      {
        text: { en: "I have friends and they are willingly to support me.", th: "มีคนที่สามารถพูดคุยและคนรอบข้างพร้อมที่จะให้การช่วยเหลือ" },
        hp: 0,
        stats: { Social: 5 }
      },
      {
        text: { en: "I have some friends to talk to about things. But I feel Embarrassed to ask them to do something.", th: "มีคนที่สามารถพูดคุยปรับทุกข์ แต่ไม่อยากลำบากใจขอความช่วยเหลือ" },
        hp: -1,
        stats: { Social: 4  }
      },
      {
        text: { en: "I have some trusted prople to vent to, I don't need their help.", th: "มีคนให้ระบายความรู้สึกแต่ไม่ต้องช่วยก็ได้" },
        hp: -2,
        stats: { Social: 3 }
      },
      {
        text: { en: "I barely trust anyone.", th: "รู้สึกระแวงที่จะพึ่งพิงผู้อื่น" },
        hp: -3,
        stats: { Social: 2 }
      },
      {
        text: { en: "I'm all alone and sad.", th: "ไร้ที่พึ่ง ปล่อยจมดิ่งกับความทุกข์" },
        hp: -5,
        stats: { Social: 1 }
      }
    ]
  },
{
	//14
    text: {
      en: "What would you say about your Memory?",
      th: "ความจำเป็นอย่างไรบ้าง?"
    },
    choices: [
      {
        text: { en: "I have good memory, can remember precisely what did I ate from past 48 hrs on each meal", th: "ความจำดีมาก จำได้ว่า 48 ชั่วโมงก่อนหน้าในมื้อข้าวแต่ละมื้อกินอะไร" },
        hp: 0,
        stats: { Memory: 5 }
      },
      {
        text: { en: "I have a sharp long term memory, but the recent one is quite fuzzy.", th: "ความจำระยะยาวดี แต่ความจำระยะสั้นมีหลงลืมบ้าง" },
        hp: -1,
        stats: { Memory: 4  }
      },
      {
        text: { en: "I do forget things, it just need to take some time to recall them.", th: "เริ่มเกิดภาวะลืมเป็นครั้งคราว แต่สามารถรำลึกคืนมาได้" },
        hp: -2,
        stats: { Memory: 3 }
      },
      {
        text: { en: "I even forgot what do I need to take out of the fridge.", th: "เริ่ิ่มเกิดภาวะลืม เดินออกมายืนหน้าตู้เย็นแล้วลืมว่าจะทำอะไร" },
        hp: -3,
        stats: { Memory: 2 }
      },
      {
        text: { en: "I have a good trait on forgetting things", th: "ลืมความทรงจำ ระยะสั้น หรือยาว โดยสิ้นเชิง" },
        hp: -5,
        stats: { Memory: 1 }
      }
    ]
  },
{
	//15
    text: {
      en: "How long can you stay in Focus zone?",
      th: "ความสามารถในการจดจ่อได้ดีแค่ไหน?"
    },
    choices: [
      {
        text: { en: "More than 3 hours.", th: "สามารถ focus ในเรื่องที่สนใจได้มากกว่า 3 ชั่วโมงต่อเนื่อง" },
        hp: 0,
        stats: { Focus: 5 }
      },
      {
        text: { en: "More than 1 hour.", th: "สามารถ focus ในเรื่องที่สนใจได้มากกว่า 1 ชั่วโมงต่อเนื่อง" },
        hp: -1,
        stats: { Focus: 4  }
      },
      {
        text: { en: "About 30-45 mins.", th: "สามารถ focus ในเรื่องที่สนใจได้ 30-45 นาที" },
        hp: -2,
        stats: { Focus: 3 }
      },
      {
        text: { en: "About 15-30 mins.", th: "สามารถ focus ในเรื่องที่สนใจได้ 15-30 นาที" },
        hp: -3,
        stats: { Focus: 2 }
      },
      {
        text: { en: "less than 15 mins", th: "สามารถ focus ได้น้อยกว่า 15 นาที" },
        hp: -5,
        stats: { Focus: 1 }
      }
    ]
  },
{
	//16
    text: {
      en: "You feel you have a good resting during weekend!",
      th: "คุณรู้สึกว่าได้พักจริงในวันหยุดแค่ไหน?"
    },
    choices: [
      {
        text: { en: "Very True.", th: "จริงมากที่สุด" },
        hp: 0,
        stats: { Rest: 5 }
      },
      {
        text: { en: "Mostly True.", th: "จริงมาก" },
        hp: -1,
        stats: { Rest: 4  }
      },
      {
        text: { en: "Sometimes.", th: "ก็บางครั้ง" },
        hp: -2,
        stats: { Rest: 3 }
      },
      {
        text: { en: "Rarely.", th: "น้อยมาก" },
        hp: -3,
        stats: { Rest: 2 }
      },
      {
        text: { en: "Once in a blue moon", th: "ไม่เลย" },
        hp: -5,
        stats: { Rest: 1 }
      }
    ]
  },
];
const uiText = {
  title: {
    en: "Adventurer",
    th: "นักผจญภัย"
  },
  placeholder: {
    en: "Enter your name",
    th: "กรอกชื่อของคุณ"
  },
  start: {
    en: "Start",
    th: "เริ่มเกม"
  },
  selectLang: {
    en: "Select Language",
    th: "เลือกภาษา"
  }
};
// Start game
function startGame() {
  player.name = document.getElementById("nameInput").value;

  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";

  loadQuestion();
}
//shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    // swap
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
// Load question
function loadQuestion() {
  let q = questions[player.currentQuestion];

  document.getElementById("question").innerText = q.text[language];
  document.getElementById("hp").innerText = player.hp;

  let choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  // 🔥 clone choices first
  let shuffledChoices = [...q.choices];

  // 🔀 shuffle
  shuffleArray(shuffledChoices);

  shuffledChoices.forEach(choice => {
    let btn = document.createElement("button");
    btn.innerText = choice.text[language];
    btn.onclick = () => selectChoice(choice);
    choicesDiv.appendChild(btn);
  });
}

// Select answer
function selectChoice(choice) {
  player.hp += choice.hp;

  for (let key in choice.stats) {
    player.stats[key] += choice.stats[key];
  }

  player.currentQuestion++;

  if (player.currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show result
function showResult() {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  let ending = getEnding(player.hp);
  document.getElementById("result-text").innerText =
    player.name + " - HP: " + player.hp + " → " + ending;

  // 🆕 Description
  document.getElementById("result-description").innerText =
    getDescription(player.hp);

  renderChart();
  saveScore();
}

// Ending logic
function getEnding(hp) {
  if (language === "th") {
    if (hp > 79) return "วีรบุรุษในตำนาน 🏆";
    if (hp > 65) return "นักผจญภัยผู้ชำนาญ ⚔️";
    if (hp > 45) return "ผู้รอดชีวิต 🩸";
    return "แทบเอาชีวิตไม่รอด 💀";
  } else {
    if (hp > 80) return "Legendary Hero 🏆";
    if (hp > 65) return "Adventurer ⚔️";
    if (hp > 45) return "Survivor 🩸";
    return "Barely Alive 💀";
  }
}
//Description
function getDescription(hp) {
  if (language === "th") {
    if (hp > 80) return "คุณคือผู้กล้าที่ผ่านทุกอุปสรรคอย่างสง่างาม มีทั้งพลังและปัญญา";
    if (hp > 65) return "คุณเป็นนักผจญภัยที่สมดุล เอาตัวรอดได้ดีในโลกที่โหดร้าย";
    if (hp > 45) return "คุณรอดมาได้... แต่เต็มไปด้วยบาดแผล การตัดสินใจของคุณเสี่ยงเกินไป";
    return "คุณแทบไม่รอดจากการเดินทางครั้งนี้ ทุกการตัดสินใจเต็มไปด้วยอันตราย";
  } else {
    if (hp > 80) return "You are a legendary hero who overcame every challenge with wisdom and strength.";
    if (hp > 65) return "A balanced adventurer, capable of surviving a harsh world.";
    if (hp > 45) return "You survived... but barely. Your choices were risky.";
    return "You barely made it. Every decision pushed you closer to the edge.";
  }
}

// Radar chart
function renderChart() {
  new Chart(document.getElementById("radarChart"), {
    type: 'radar',
    data: {
      labels: Object.keys(player.stats),
      datasets: [{
        label: player.name,
        data: Object.values(player.stats)
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false   // 🔥 THIS is key
    }
  });
}
//restart session
function restartGame() {
  // reset player
  player.hp = 100;
  player.currentQuestion = 0;

  player.stats = {
    courage: 0,
    wisdom: 0,
    greed: 0,
    kindness: 0,
    chaos: 0
  };

  // go back to start screen
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";

  // optional: clear name
  document.getElementById("nameInput").value = "";
}
function saveScore() {
  fetch("https://script.google.com/macros/s/AKfycbwF_mmObpGmCVjsI-kGSUMGrccA0S2wNFtqvELG7wFLkosbcnQxNBEGLBo4OvyVAdfZjg/exec", {
    method: "POST",
    body: JSON.stringify({
      name: player.name,
      hp: player.hp
    })
  });
}
