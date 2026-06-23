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
const defaultStats = {
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
};
let player = {
    name: "",
    hp: 100,
    stats: {...defaultStats},
    currentQuestion: 0
};
const characters = [
{
  name: "Nick Wild",
	description:"Clever, adaptable, and always two steps ahead, you possess a sharp mind and a talent for reading people. Though you may appear carefree or mischievous, beneath that charming smile lies someone who values loyalty and genuine friendship. You know how to survive in a complicated world, often using wit rather than force, and when it truly matters, you're willing to stand by those you care about.",
  stats: {
    Hydration:3,
    Excretion:5,
    Fiber:3,
    Sleep:5,
    Refresh:3,
    Active:5,
    Sitting:1,
    SugarRush:3,
    Foodtimer:3,
    Stress:3,
    Tidy:3,
    Pollution:3,
    Social:3,
    Memory:1,
    Focus:1,
    Rest:3
  }
},

{
  name: "Max Goof Jr.",
description:"Optimistic, energetic, and full of heart, you value friendship and family above all else. You seek your own path while still cherishing the people who support you. Though you sometimes stumble or feel uncertain, your sincerity and determination allow you to grow stronger with every experience. You believe life should be enjoyed, and you face challenges with both enthusiasm and kindness.",
  stats: {
    Hydration:5,
    Excretion:5,
    Fiber:3,
    Sleep:3,
    Refresh:5,
    Active:1,
    Sitting:3,
    SugarRush:3,
    Foodtimer:4,
    Stress:4,
    Tidy:4,
    Pollution:3,
    Social:5,
    Memory:3,
    Focus:4,
    Rest:3
  }
},
	{
  name: "Mufasa",
description:"Wise, dependable, and noble, you carry a strong sense of responsibility and strive to protect those who matter most. You lead not through fear, but through compassion, integrity, and the example you set for others. Though challenges and burdens may weigh heavily upon you, your calm strength and unwavering principles inspire trust and bring hope to those around you. True greatness, to you, is measured not by power, but by the legacy of kindness and courage you leave behind.",
  stats: {
    Hydration:3,
    Excretion:3,
    Fiber:3,
    Sleep:3,
    Refresh:5,
    Active:1,
    Sitting:1,
    SugarRush:1,
    Foodtimer:4,
    Stress:4,
    Tidy:1,
    Pollution:1,
    Social:5,
    Memory:3,
    Focus:4,
    Rest:3
  }
},
	{
  name: "Elsa",
  description: "Graceful and introspective, you value self-control and responsibility. Though reserved, your love and loyalty run deep.",
  stats: {
    Hydration:4, Excretion:3, Fiber:3, Sleep:4,
    Refresh:3, Active:2, Sitting:5, SugarRush:1,
    Foodtimer:4, Stress:3, Tidy:5, Pollution:1,
    Social:1, Memory:5, Focus:5, Rest:4
  }
},

{
  name: "Tiana",
  description: "Hardworking and ambitious, you believe dreams come true through dedication and perseverance.",
  stats: {
    Hydration:4, Excretion:4, Fiber:4, Sleep:3,
    Refresh:3, Active:5, Sitting:1, SugarRush:1,
    Foodtimer:5, Stress:4, Tidy:4, Pollution:1,
    Social:3, Memory:4, Focus:5, Rest:2
  }
},

{
  name: "Peter Pan",
  description: "Adventurous and free-spirited, you live in the moment and never lose your sense of wonder.",
  stats: {
    Hydration:2, Excretion:2, Fiber:1, Sleep:1,
    Refresh:5, Active:5, Sitting:1, SugarRush:4,
    Foodtimer:1, Stress:1, Tidy:1, Pollution:4,
    Social:5, Memory:1, Focus:1, Rest:1
  }
},
{
  name: "Louis",
  description: "Joyful and full of passion, you live life with rhythm and never hesitate to share your happiness with others.",
  stats: {
    Hydration:3, Excretion:3, Fiber:2, Sleep:3,
    Refresh:5, Active:4, Sitting:2, SugarRush:4,
    Foodtimer:2, Stress:1, Tidy:2, Pollution:3,
    Social:5, Memory:3, Focus:2, Rest:3
  }
},
{
  name: "Prince Naveen",
  description: "Charming and carefree, you embrace life's pleasures and find joy in every adventure.",
  stats: {
    Hydration:2, Excretion:2, Fiber:2, Sleep:2,
    Refresh:5, Active:4, Sitting:1, SugarRush:4,
    Foodtimer:1, Stress:1, Tidy:2, Pollution:3,
    Social:5, Memory:2, Focus:1, Rest:2
  }
},
	{
  name: "Pascal",
  description: "Quiet and observant, you show your love through loyalty and thoughtful actions.",
  stats: {
    Hydration:3, Excretion:3, Fiber:3, Sleep:4,
    Refresh:4, Active:2, Sitting:4, SugarRush:2,
    Foodtimer:3, Stress:1, Tidy:4, Pollution:1,
    Social:2, Memory:4, Focus:4, Rest:4
  }
},
	{
  name: "Kenai",
  description: "Adventurous and strong-willed, you grow through experience and learn to cherish every bond.",
  stats: {
    Hydration:4, Excretion:4, Fiber:3, Sleep:3,
    Refresh:4, Active:5, Sitting:1, SugarRush:2,
    Foodtimer:3, Stress:3, Tidy:2, Pollution:2,
    Social:3, Memory:3, Focus:3, Rest:3
  }
},
	{
  name: "Koda",
  description: "Playful and warm-hearted, you bring laughter and comfort wherever you go.",
  stats: {
    Hydration:3, Excretion:3, Fiber:2, Sleep:4,
    Refresh:5, Active:4, Sitting:2, SugarRush:3,
    Foodtimer:2, Stress:1, Tidy:1, Pollution:2,
    Social:5, Memory:2, Focus:1, Rest:4
  }
},
	{
  name: "Donald Duck",
  description: "Passionate and determined, you wear your emotions openly and fiercely protect those you love.",
  stats: {
    Hydration:3, Excretion:3, Fiber:2, Sleep:2,
    Refresh:3, Active:4, Sitting:2, SugarRush:3,
    Foodtimer:2, Stress:5, Tidy:2, Pollution:2,
    Social:4, Memory:3, Focus:2, Rest:2
  }
},{
  name: "Chip",
  description: "Thoughtful and reliable, you enjoy planning ahead and solving problems with care.",
  stats: {
    Hydration:3, Excretion:3, Fiber:3, Sleep:4,
    Refresh:3, Active:2, Sitting:4, SugarRush:2,
    Foodtimer:3, Stress:2, Tidy:4, Pollution:1,
    Social:3, Memory:5, Focus:5, Rest:4
  }
},
	{
  name: "Dale",
  description: "Cheerful and spontaneous, you remind everyone that life is meant to be enjoyed.",
  stats: {
    Hydration:2, Excretion:2, Fiber:2, Sleep:3,
    Refresh:5, Active:4, Sitting:1, SugarRush:4,
    Foodtimer:2, Stress:1, Tidy:1, Pollution:2,
    Social:5, Memory:2, Focus:1, Rest:3
  }
},
	
{
  name: "Judy Hopps",
  description: "Optimistic and determined, you chase your goals with relentless energy and a kind heart.",
  stats: {
    Hydration:4, Excretion:4, Fiber:4, Sleep:3,
    Refresh:4, Active:5, Sitting:1, SugarRush:2,
    Foodtimer:4, Stress:3, Tidy:4, Pollution:1,
    Social:4, Memory:4, Focus:5, Rest:3
  }
},

{
  name: "Olaf",
  description: "Cheerful and innocent, you spread warmth and happiness wherever you go.",
  stats: {
    Hydration:3, Excretion:2, Fiber:2, Sleep:4,
    Refresh:5, Active:2, Sitting:4, SugarRush:4,
    Foodtimer:2, Stress:1, Tidy:2, Pollution:1,
    Social:5, Memory:2, Focus:1, Rest:5
  }
},

{
  name: "Ariel",
  description: "Curious and passionate, you are always eager to explore new worlds and follow your dreams.",
  stats: {
    Hydration:5, Excretion:3, Fiber:3, Sleep:3,
    Refresh:5, Active:4, Sitting:1, SugarRush:3,
    Foodtimer:3, Stress:2, Tidy:2, Pollution:2,
    Social:4, Memory:3, Focus:2, Rest:3
  }
},
{
  name: "Robin Hood",
  description: "Generous and quick-witted, you believe that true wealth is found in helping others and standing up for what is right.",
  stats: {
    Hydration:3, Excretion:3, Fiber:3, Sleep:3,
    Refresh:4, Active:5, Sitting:1, SugarRush:2,
    Foodtimer:2, Stress:2, Tidy:2, Pollution:2,
    Social:5, Memory:4, Focus:4, Rest:3
  }
},

{
  name: "Baloo",
  description: "Relaxed and cheerful, you know how to enjoy life and remind others not to worry too much.",
  stats: {
    Hydration:3, Excretion:2, Fiber:2, Sleep:5,
    Refresh:5, Active:2, Sitting:4, SugarRush:4,
    Foodtimer:2, Stress:1, Tidy:1, Pollution:2,
    Social:5, Memory:2, Focus:1, Rest:5
  }
},

{
  name: "Tigger",
  description: "Energetic and optimistic, you bring excitement wherever you go and never run out of enthusiasm.",
  stats: {
    Hydration:2, Excretion:2, Fiber:1, Sleep:1,
    Refresh:5, Active:5, Sitting:1, SugarRush:5,
    Foodtimer:1, Stress:2, Tidy:1, Pollution:3,
    Social:5, Memory:2, Focus:1, Rest:1
  }
},

{
  name: "WALL-E",
  description: "Quiet and devoted, you find beauty in simple things and care deeply for the world around you.",
  stats: {
    Hydration:2, Excretion:2, Fiber:2, Sleep:2,
    Refresh:3, Active:2, Sitting:5, SugarRush:1,
    Foodtimer:3, Stress:1, Tidy:5, Pollution:1,
    Social:1, Memory:5, Focus:5, Rest:4
  }
},

{
  name: "Scar",
  description: "Intelligent and ambitious, you think carefully and never underestimate the power of strategy.",
  stats: {
    Hydration:2, Excretion:2, Fiber:2, Sleep:1,
    Refresh:1, Active:1, Sitting:5, SugarRush:2,
    Foodtimer:2, Stress:5, Tidy:4, Pollution:3,
    Social:1, Memory:5, Focus:5, Rest:1
  }
},

{
  name: "Tinker Bell",
  description: "Creative and passionate, your fiery spirit shines brightest when helping those you love.",
  stats: {
    Hydration:3, Excretion:3, Fiber:2, Sleep:2,
    Refresh:5, Active:5, Sitting:1, SugarRush:3,
    Foodtimer:2, Stress:4, Tidy:3, Pollution:2,
    Social:2, Memory:3, Focus:3, Rest:2
  }
},

{
  name: "Mushu",
  description: "Funny and loyal, you encourage others to believe in themselves, even if you sometimes cause chaos.",
  stats: {
    Hydration:2, Excretion:2, Fiber:2, Sleep:2,
    Refresh:4, Active:4, Sitting:1, SugarRush:4,
    Foodtimer:2, Stress:4, Tidy:1, Pollution:3,
    Social:5, Memory:3, Focus:2, Rest:2
  }
},

{
  name: "Thumper",
  description: "Friendly and joyful, you spread kindness and make life brighter for everyone around you.",
  stats: {
    Hydration:4, Excretion:4, Fiber:4, Sleep:4,
    Refresh:5, Active:4, Sitting:1, SugarRush:3,
    Foodtimer:4, Stress:1, Tidy:3, Pollution:1,
    Social:5, Memory:3, Focus:2, Rest:4
  }
},

{
  name: "Meeko",
  description: "Playful and curious, you are always looking for fun and never afraid to explore something new.",
  stats: {
    Hydration:2, Excretion:2, Fiber:1, Sleep:2,
    Refresh:5, Active:5, Sitting:1, SugarRush:5,
    Foodtimer:1, Stress:2, Tidy:1, Pollution:4,
    Social:4, Memory:2, Focus:1, Rest:2
  }
},

{
  name: "Dumbo",
  description: "Gentle and humble, your kindness and perseverance help you soar higher than anyone expects.",
  stats: {
    Hydration:4, Excretion:3, Fiber:3, Sleep:5,
    Refresh:4, Active:2, Sitting:4, SugarRush:2,
    Foodtimer:3, Stress:4, Tidy:2, Pollution:1,
    Social:3, Memory:4, Focus:3, Rest:5
  }
},
{
  name: "Goofy",
  description: "Kind-hearted and carefree, you may stumble now and then, but your sincerity wins hearts.",
  stats: {
    Hydration:3, Excretion:3, Fiber:2, Sleep:4,
    Refresh:5, Active:3, Sitting:2, SugarRush:4,
    Foodtimer:2, Stress:1, Tidy:1, Pollution:3,
    Social:5, Memory:2, Focus:1, Rest:4
  }
},

{
  name: "Carl Fredricksen",
  description: "Quiet and dependable, you treasure memories and the people who matter most.",
  stats: {
    Hydration:4, Excretion:4, Fiber:4, Sleep:4,
    Refresh:2, Active:1, Sitting:5, SugarRush:1,
    Foodtimer:4, Stress:2, Tidy:4, Pollution:1,
    Social:1, Memory:5, Focus:4, Rest:5
  }
},

{
  name: "Timon",
  description: "Funny and easygoing, you know how to enjoy life and help others laugh through difficult times.",
  stats: {
    Hydration:2, Excretion:2, Fiber:1, Sleep:3,
    Refresh:5, Active:4, Sitting:1, SugarRush:4,
    Foodtimer:1, Stress:1, Tidy:1, Pollution:3,
    Social:5, Memory:2, Focus:1, Rest:3
  }
},

{
  name: "Pumbaa",
  description: "Gentle and loyal, you are stronger and kinder than people first assume.",
  stats: {
    Hydration:3, Excretion:3, Fiber:3, Sleep:4,
    Refresh:4, Active:2, Sitting:3, SugarRush:3,
    Foodtimer:3, Stress:1, Tidy:1, Pollution:4,
    Social:5, Memory:3, Focus:2, Rest:5
  }
},
	{
  name: "Rapunzel",
  description: "Creative and curious, you seek beauty and adventure while bringing joy to those around you.",
  stats: {
    Hydration:4, Excretion:3, Fiber:4, Sleep:4,
    Refresh:5, Active:4, Sitting:2, SugarRush:3,
    Foodtimer:4, Stress:2, Tidy:3, Pollution:2,
    Social:4, Memory:3, Focus:3, Rest:4
  }
},

{
  name: "Belle",
  description: "Curious and thoughtful, you value knowledge and see beauty beyond appearances.",
  stats: {
    Hydration:3, Excretion:3, Fiber:4, Sleep:4,
    Refresh:3, Active:2, Sitting:5, SugarRush:1,
    Foodtimer:3, Stress:2, Tidy:4, Pollution:1,
    Social:3, Memory:5, Focus:5, Rest:4
  }
},

{
  name: "Stitch",
  description: "Energetic and chaotic, your heart is bigger than your mistakes and you treasure your ohana.",
  stats: {
    Hydration:2, Excretion:2, Fiber:1, Sleep:2,
    Refresh:4, Active:5, Sitting:1, SugarRush:5,
    Foodtimer:1, Stress:5, Tidy:1, Pollution:4,
    Social:5, Memory:2, Focus:1, Rest:2
  }
},

{
  name: "Mulan",
  description: "Brave and determined, you face difficulties head-on and protect those you love.",
  stats: {
    Hydration:4, Excretion:4, Fiber:4, Sleep:3,
    Refresh:4, Active:5, Sitting:1, SugarRush:2,
    Foodtimer:4, Stress:3, Tidy:3, Pollution:2,
    Social:3, Memory:4, Focus:5, Rest:3
  }
},

{
  name: "Baymax",
  description: "Calm and caring, your greatest strength lies in your compassion and desire to help others.",
  stats: {
    Hydration:5, Excretion:5, Fiber:5, Sleep:5,
    Refresh:4, Active:1, Sitting:5, SugarRush:1,
    Foodtimer:5, Stress:1, Tidy:4, Pollution:1,
    Social:4, Memory:4, Focus:4, Rest:5
  }
},

{
  name: "Simba",
  description: "Strong-hearted and responsible, you learn from the past and grow into someone others can rely on.",
  stats: {
    Hydration:4, Excretion:4, Fiber:4, Sleep:4,
    Refresh:4, Active:4, Sitting:2, SugarRush:2,
    Foodtimer:4, Stress:3, Tidy:3, Pollution:2,
    Social:4, Memory:4, Focus:4, Rest:4
  }
},

{
  name: "Winnie the Pooh",
  description: "Simple and kind, you treasure peaceful moments and the friends who make life sweet.",
  stats: {
    Hydration:3, Excretion:2, Fiber:2, Sleep:5,
    Refresh:5, Active:1, Sitting:5, SugarRush:5,
    Foodtimer:2, Stress:1, Tidy:1, Pollution:2,
    Social:4, Memory:2, Focus:1, Rest:5
  }
},
	
{
  name: "Flounder",
description:"Gentle, loyal, and kind-hearted, you treasure friendship and care deeply for those around you. Though you may sometimes worry or hesitate in the face of danger, your courage shines when it matters most. You prefer harmony over conflict and bring warmth, support, and a touch of joy to every journey. Your strength lies not in fearlessness, but in your willingness to stand beside the people you love.",
  stats: {
    Hydration:5,
    Excretion:1,
    Fiber:2,
    Sleep:4,
    Refresh:5,
    Active:3,
    Sitting:2,
    SugarRush:1,
    Foodtimer:3,
    Stress:5,
    Tidy:4,
    Pollution:5,
    Social:4,
    Memory:2,
    Focus:1,
    Rest:4
  }
},
{
  name: "Marie from Aristocat",
	description:"Elegant, affectionate, and full of charm, you appreciate the finer things in life and bring warmth to those around you. Though you may appear delicate or a little stubborn at times, your kindness and genuine care make you a beloved friend. You enjoy beauty and comfort, yet beneath your graceful appearance lies a heart that is brave, loyal, and eager to help those you love.",
  stats: {
    Hydration:4,
    Excretion:3,
    Fiber:3,
    Sleep:3,
    Refresh:4,
    Active:1,
    Sitting:4,
    SugarRush:2,
    Foodtimer:2,
    Stress:4,
    Tidy:4,
    Pollution:1,
    Social:2,
    Memory:3,
    Focus:1,
    Rest:3
  }
}
];
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
  player.name = document.getElementById("nameInput").value.trim();

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
    btn.addEventListener("touchend", (e) => {
  e.preventDefault();
  selectChoice(choice);
});
    choicesDiv.appendChild(btn);
  });
}

// Select answer
function selectChoice(choice) {
  if (gameEnded) return;

  player.hp += choice.hp;

  for (let key in choice.stats) {
    player.stats[key] += choice.stats[key];
  }

  player.currentQuestion++;

  if (player.currentQuestion < questions.length) {
    loadQuestion();
  } else {
    gameEnded = true;
    showResult();
  }
}

// Show result
function showResult() {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
console.log("player name",player.name);
  let ending = getEnding(player.hp);
  let description = getDescription(player.hp);
  const character = getCharacterResult(player.stats);

  player.result = Object.freeze({
    ending,
    description,
    character: Object.freeze(character)
  });
  document.getElementById("player-name").innerText =
  "Player: " + player.name;
  document.getElementById("result-text").innerText = ending;
  document.getElementById("result-description").innerText = description;

  document.getElementById("character-name").innerText =
    "Character Match : " + character.name;

  document.getElementById("character-description").innerText =
    character.description;

  renderChart();
  saveScore();
}
// Ending logic
function getEnding(hp) {
  if (language === "th") {
    if (hp > 90) return "วีรบุรุษในตำนาน 🏆";
	if (hp > 84) return "นักล่ารางวัล 🏆";
	  if (hp > 79) return "พ่อค้าแห่งเส้นทางสายไหม";
    if (hp > 70) return "นักผจญภัยผู้โชกเลือด ⚔️";
	  if (hp > 64) return "ลูกกระจ๊อกนักผจญภัย ⚔️";
    if (hp > 59) return "ผู้รอดชีวิต 🩸";
    return "แทบเอาชีวิตไม่รอด 💀";
  } else {
    if (hp > 90) return "Legendary Hero 🏆";
	if (hp > 84) return "Bounty Hunter 🏆";
	  if (hp > 79) return "Merchant of Silver Guild";
    if (hp > 70) return "Wounded Adventurer ⚔️";
	  if (hp > 64) return "Adventuror Companion ⚔️";
    if (hp > 59) return "Survivor 🩸";
    return "Barely Alive 💀";
  }
}
//Description
function getDescription(hp) {
  if (language === "th") {
    if (hp > 90) return "คุณคือผู้กล้าที่ผ่านทุกอุปสรรคอย่างสง่างาม มีทั้งพลังและปัญญา";
	  if (hp > 84) return "คุณคือนักล่าความสำเร็จ ที่ฝ่าฟันอุปสรรค์ด้วยประสบการณ์และความช่ำชอง";
	  if (hp > 79) return "คุณมีจิตวิญญาณของพ่อค่าตัวยง มักทำสิ่งที่ได้ประโยชน์สูงสุด ด้วยวิธีที่เรียบง่ายที่สุด";
    if (hp > 70) return "คุณเป็นนักผจญภัยที่สมดุล เอาตัวรอดได้ดีในโลกที่โหดร้าย ถึงจะมีผิดพลาดไปบ้างแต่ก็ยังไม่สายที่จะแก้ไข";
	  if (hp > 64) return "คุณเป็นผู้ร่วมนักผจญภัย ชั่งลังเลและต้องมีคนคอยชี้นำ";
    if (hp > 59) return "คุณรอดมาได้... แต่เต็มไปด้วยบาดแผล การตัดสินใจของคุณเสี่ยงเกินไป";
    return "คุณแทบไม่รอดจากการเดินทางครั้งนี้ ทุกการตัดสินใจเต็มไปด้วยอันตราย";
  } else {
    if (hp > 90) return "You are a legendary hero who overcame every challenge with wisdom and strength.";
	  if (hp > 84) return "You are a success hunter, forging your way through adversity with experience and expertise.";
	  if (hp > 79) return "You possess the spirit of a true merchant, always seeking the greatest rewards through the simplest and most efficient paths.";
    if (hp > 70) return "A balanced adventurer, capable of surviving a harsh world. You made a wrong choice here and there but it is ok to fix it.";
	  if (hp > 64) return "You are a companion of the journey, cautious and uncertain at times, relying on trusted voices to light the way ahead.";
    if (hp > 59) return "You survived... but barely. Your choices were risky.";
    return "You barely made it. Every decision pushed you closer to the edge.";
  }
}
function getCharacterResult(playerStats)
{
    let bestCharacter = null;
    let bestDistance = Infinity;

    characters.forEach(character => {

        let distance = 0;

        for(let key in playerStats)
        {
            let p = playerStats[key] ?? 0;
let c = character.stats[key] ?? 0;

distance += Math.pow(p - c, 2);
        }

        distance = Math.sqrt(distance);

        if(distance < bestDistance)
        {
            bestDistance = distance;
            bestCharacter = character;
        }
    });

    return bestCharacter;
}
// Radar chart
let radarChart = null;

function renderChart() {

  const ctx = document.getElementById("radarChart");

  if (!ctx) {
    console.error("❌ radarChart canvas not found");
    return;
  }

  if (radarChart) {
    radarChart.destroy();
  }

  radarChart = new Chart(ctx, {
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
      maintainAspectRatio: false
    }
  });
}
//restart session
function restartGame() {
  gameEnded = false;

  player.name = "";
  player.hp = 100;
  player.currentQuestion = 0;
  player.stats = { ...defaultStats };
  player.result = null;

  document.getElementById("result-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

function saveScore() {
    console.log("language =", language);
    console.log("ending =", player.result.ending);

    fetch("https://script.google.com/macros/s/AKfycbzLj7b0s3RHpZR_qQiC0TCTOsnLARuVCqPnABamf8S3uV-jHNgeq6zjw519AQOw2StdSQ/exec", {
        method: "POST",
        body: JSON.stringify({
            name: player.name,
            hp: player.hp,
            ending: player.result.ending,
            character: player.result.character.name
        })
    })
    .then(r => r.text())
    .then(data => console.log("Success:", data))
    .catch(err => console.error(err));
}
