const translations = {
  en: {home:"Home",learn:"Learn",activities:"Activities",about:"About",headline:"Big dreams begin<br>with <span>small steps.</span>",intro:"Explore exciting lessons, play learning games and discover something new every day. Learning is for everyone!",start:"Start learning",explore:"Explore activities",welcome:"Welcome, young learner!",welcomeSub:"Choose a subject and let your adventure begin.",pick:"PICK YOUR FAVOURITE",what:"What shall we learn today?",fun:"Fun lessons made simple for curious minds.",math:"Mathematics",science:"Science",languages:"Languages",environment:"Environment"},
  kn: {home:"ಮುಖಪುಟ",learn:"ಕಲಿಯಿರಿ",activities:"ಚಟುವಟಿಕೆಗಳು",about:"ನಮ್ಮ ಬಗ್ಗೆ",headline:"ದೊಡ್ಡ ಕನಸುಗಳಿಗೆ<br><span>ಸಣ್ಣ ಹೆಜ್ಜೆಗಳು.</span>",intro:"ಆಸಕ್ತಿದಾಯಕ ಪಾಠಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಆಟಗಳ ಮೂಲಕ ಕಲಿಯಿರಿ ಮತ್ತು ಪ್ರತಿದಿನ ಹೊಸದನ್ನು ತಿಳಿಯಿರಿ!",start:"ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",explore:"ಚಟುವಟಿಕೆಗಳನ್ನು ನೋಡಿ",welcome:"ಸ್ವಾಗತ, ಪುಟ್ಟ ಕಲಿಕಾ ಮಿತ್ರರೇ!",welcomeSub:"ಒಂದು ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ.",pick:"ನಿಮ್ಮ ಆಯ್ಕೆ",what:"ಇಂದು ಏನು ಕಲಿಯೋಣ?",fun:"ಕುತೂಹಲದ ಮನಸ್ಸಿಗೆ ಸರಳ ಪಾಠಗಳು.",math:"ಗಣಿತ",science:"ವಿಜ್ಞಾನ",languages:"ಭಾಷೆಗಳು",environment:"ಪರಿಸರ"}
};
const langSelect=document.getElementById('languageSelect');
langSelect.addEventListener('change',()=>applyLanguage(langSelect.value));
function applyLanguage(lang){
 const t=translations[lang];
 document.querySelectorAll('.nav-link').forEach((el,i)=>el.textContent=[t.home,t.learn,t.activities,t.about][i]);
 document.querySelector('h1').innerHTML=t.headline;
 document.querySelector('.hero-copy>p').textContent=t.intro;
 document.querySelectorAll('.hero-buttons .btn')[0].innerHTML=t.start+' <span>→</span>';
 document.querySelectorAll('.hero-buttons .btn')[1].textContent=t.explore;
 document.querySelector('.welcome-strip b').textContent=t.welcome;
 document.querySelector('.welcome-strip small').textContent=t.welcomeSub;
 document.querySelector('#learn .eyebrow').textContent=t.pick;
 document.querySelector('#learn h2').textContent=t.what;
 document.querySelector('#learn .section-heading p').textContent=t.fun;
 const names=[t.math,t.science,t.languages,t.environment];
 document.querySelectorAll('.subject-card b').forEach((el,i)=>el.textContent=names[i]);
}
const questions=[
 {q:"What is 5 + 3?",a:["6","8","9","10"],correct:1,why:"Great job! 5 + 3 = 8."},
 {q:"Which part of a plant takes in water?",a:["Flower","Leaf","Root","Fruit"],correct:2,why:"Correct! Roots absorb water from the soil."},
 {q:"Which one gives us light during the day?",a:["Moon","Sun","Starfish","Cloud"],correct:1,why:"Yes! The Sun gives us daylight."},
 {q:"How many days are there in a week?",a:["5","6","7","8"],correct:2,why:"Wonderful! There are 7 days in a week."}
];
let current=0,score=0,locked=false;
const questionEl=document.getElementById('question'),answersEl=document.getElementById('answers'),feedback=document.getElementById('feedback'),count=document.getElementById('questionCount');
function showQuestion(){
 locked=false;feedback.textContent='';count.textContent=`Question ${current+1} of ${questions.length}`;
 const item=questions[current];questionEl.textContent=item.q;answersEl.innerHTML='';
 item.a.forEach((answer,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=answer;b.addEventListener('click',()=>chooseAnswer(i,b));answersEl.appendChild(b)});
}
function chooseAnswer(index,button){
 if(locked)return;locked=true;const item=questions[current];
 if(index===item.correct){score++;button.classList.add('correct');feedback.textContent='⭐ '+item.why}
 else{button.classList.add('wrong');answersEl.children[item.correct].classList.add('correct');feedback.textContent='💡 Good try! '+item.why}
 [...answersEl.children].forEach(b=>b.disabled=true);
 const next=document.createElement('button');next.className='btn primary';next.style.marginTop='13px';next.textContent=current===questions.length-1?'See my score':'Next question →';next.addEventListener('click',()=>{current++;if(current<questions.length)showQuestion();else showResult()});answersEl.appendChild(next);
}
function showResult(){count.textContent='Challenge complete';questionEl.textContent=`You scored ${score} out of ${questions.length}! ${score===4?'Amazing work! 🌟':'Keep practising — you are doing great! 💛'}`;answersEl.innerHTML='<button class="answer" id="again">Play again ↻</button>';feedback.textContent='Every question is a chance to learn.';document.getElementById('again').onclick=resetQuiz}
function resetQuiz(){current=0;score=0;showQuestion()}
document.getElementById('startQuiz').addEventListener('click',()=>{document.getElementById('quizBox').scrollIntoView({behavior:'smooth',block:'center'});resetQuiz()});
document.getElementById('readyBtn').addEventListener('click',resetQuiz);
document.querySelectorAll('.subject-card').forEach(card=>card.addEventListener('click',()=>{const name=card.querySelector('b').textContent;document.getElementById('lesson').scrollIntoView({behavior:'smooth'});showToast(`${name} learning materials are ready to explore!`)}));
function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2400)}
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('mainNav').classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>document.getElementById('mainNav').classList.remove('open')));
