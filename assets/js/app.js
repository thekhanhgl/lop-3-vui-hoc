(() => {
  const data = window.LEARNING_DATA;
  // Tích hợp ngân hàng Toán theo từng bài; giữ nguyên các môn học khác.
  if (window.MATH_BANK?.topics?.length) data.math.topics = window.MATH_BANK.topics;
  const $ = (s, root=document) => root.querySelector(s);
  const state = { stars:0, completed:[], lastTopic:null, current:null, index:0, correct:0, answered:false, flashIndex:0 };
  const STORAGE = "lop3vuihoc_progress_v1";
  try { Object.assign(state, JSON.parse(localStorage.getItem(STORAGE) || "{}")); } catch(e) {}
  const allTopics = Object.values(data).flatMap(s=>s.topics);
  const save = () => localStorage.setItem(STORAGE, JSON.stringify({stars:state.stars,completed:state.completed,lastTopic:state.lastTopic}));
  const total = allTopics.length;
  const toast = msg => { const el=$("#toast"); el.textContent=msg; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2100); };
  function updateStats(){
    $("#starCount").textContent=state.stars;
    $("#lessonCount").textContent=state.completed.length;
    const pct=Math.round(state.completed.length/total*100);
    $("#progressPercent").textContent=pct+"%";
    $("#progressLabel").textContent=state.completed.length?`Bạn đã hoàn thành ${state.completed.length}/${total} chủ đề. Cố lên nhé!`:"Bắt đầu bài học đầu tiên nào!";
    $("#progressBar").style.width=pct+"%";
  }
  function renderHome(){
    $("#subjectGrid").innerHTML=Object.entries(data).map(([key,s])=>{
      const done=s.topics.filter(t=>state.completed.includes(t.id)).length;
      return `<article class="subject-card" data-subject="${key}">
        <div class="subject-icon" style="background:${s.color}">${s.icon}</div><span class="decoration">${s.icon}</span>
        <h3>${s.title}</h3><p>${s.description}</p>
        <div class="subject-meta"><span>${s.topics.length} chủ đề học tập</span><b>${done}/${s.topics.length} hoàn thành →</b></div>
      </article>`;
    }).join("");
    const picks=allTopics.filter(t=>!state.completed.includes(t.id)).slice(0,3);
    const shown=picks.length?picks:allTopics.slice(0,3);
    $("#recommendedGrid").innerHTML=shown.map(t=>`<div class="recommend-card" data-topic="${t.id}"><span class="recommend-icon">${t.icon}</span><span><b>${t.title}</b><small>${state.completed.includes(t.id)?"Ôn tập lại chủ đề":"Chủ đề chưa hoàn thành"}</small></span></div>`).join("");
    updateStats();
  }
  function openSubject(key){
    const s=data[key]; state.current={key,subject:s};
    $("#dialogSubject").textContent=`${s.icon} ${s.title}`;
    $("#dialogContent").innerHTML=`<div class="dialog-body"><p class="muted" style="margin-top:0">${s.description}</p><div class="topic-grid">${s.topics.map(t=>{
      const done=state.completed.includes(t.id);
      const count=t.questions?.length || t.words?.length || 0;
      return `<button class="topic-card" data-topic="${t.id}"><span class="emoji">${t.icon}</span><b>${t.title}</b><small>${count} ${t.words?"từ vựng":"câu luyện tập"} · ${done?'<span class="done">✓ Đã hoàn thành</span>':'Sẵn sàng học'}</small></button>`;
    }).join("")}</div></div>`;
    $("#lessonDialog").showModal();
  }
  function findTopic(id){ for(const [key,s] of Object.entries(data)){const t=s.topics.find(x=>x.id===id);if(t)return {key,subject:s,topic:t};} }
  function startTopic(id){
    const found=findTopic(id); if(!found)return;
    state.current=found; state.lastTopic=id; state.index=0; state.correct=0; state.answered=false; state.flashIndex=0;
    if(found.topic.summary){ renderLessonIntro(); return; }
    if(found.topic.words) renderFlashcard(); else renderQuestion();
  }
  function renderLessonIntro(){
    const t=state.current.topic, s=t.summary;
    const section=(title,items)=>'<section class="knowledge-section"><h3>'+title+'</h3>'+items+'</section>';
    const goals=s.goals.map(x=>'<li>'+x+'</li>').join('');
    const knowledge=s.knowledge.map(x=>'<article class="knowledge-card"><b>'+x.title+'</b><p>'+x.detail+'</p></article>').join('');
    const examples=s.examples.map(x=>'<article class="example-card"><b>'+x.question+'</b><p><strong>'+x.answer+'</strong></p><small>'+x.explain+'</small></article>').join('');
    const mistakes=s.commonMistakes.map(x=>'<li>'+x+'</li>').join('');
    $("#dialogContent").innerHTML='<div class="dialog-body lesson-intro"><div class="lesson-label">TOÁN 3 · '+t.book+' · BÀI '+t.lessonNo+'</div><h2>'+t.title+'</h2>'+
      section('🎯 Em sẽ học được gì?','<ul>'+goals+'</ul>')+
      section('📘 Kiến thức cần nhớ','<div class="knowledge-grid">'+knowledge+'</div>')+
      section('✏️ Ví dụ minh họa','<div class="example-grid">'+examples+'</div>')+
      section('⚠️ Những lỗi cần tránh','<ul>'+mistakes+'</ul>')+
      '<div class="tip-box">💡 '+s.tip+'</div><div class="quiz-actions"><button class="btn btn-soft" id="backToTopics">Quay lại</button><button class="btn btn-primary" id="beginMathPractice">Bắt đầu luyện tập →</button></div></div>';
    $("#backToTopics").addEventListener("click",()=>openSubject(state.current.key));
    $("#beginMathPractice").addEventListener("click",beginMathPractice);
  }
  function beginMathPractice(){
    const original=state.current.topic;
    // Mỗi lượt lấy ngẫu nhiên 10 câu, không lặp trong cùng lượt.
    const shuffle=(items)=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
    // Mỗi lượt cân đối: 3 câu Nhận biết, 3 câu Thông hiểu, 4 câu Vận dụng.
    const selected=[
      ...shuffle(original.questions.filter(q=>q[4]==="NB")).slice(0,3),
      ...shuffle(original.questions.filter(q=>q[4]==="TH")).slice(0,3),
      ...shuffle(original.questions.filter(q=>q[4]==="VD")).slice(0,4)
    ];
    const pool=shuffle(selected);
    state.current.topic={...original,questions:pool};
    state.index=0;state.correct=0;state.answered=false;renderQuestion();
  }
  function renderQuestion(){
    const t=state.current.topic, q=t.questions[state.index]; state.answered=false;
    $("#dialogContent").innerHTML=`<div class="dialog-body">
      <div class="quiz-top"><span>Câu ${state.index+1}/${t.questions.length}</span><span>⭐ ${state.correct} câu đúng</span></div>
      <div class="quiz-track"><span style="width:${state.index/t.questions.length*100}%"></span></div>
      <div class="question-kicker">${state.current.subject.title.toUpperCase()} · THỬ THÁCH</div>
      <h2 class="question-text">${q[0]}</h2>
      <div class="answer-grid">${q[1].map((a,i)=>`<button class="answer-btn" data-answer="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join("")}</div>
      <div id="feedback" class="feedback"></div>
      <div class="quiz-actions"><button class="btn btn-soft" id="quitQuiz">Thoát</button><button class="btn btn-primary" id="nextQuestion" disabled>${state.index===t.questions.length-1?"Xem kết quả":"Câu tiếp theo →"}</button></div>
    </div>`;
    $$("#dialogContent [data-answer]").forEach(btn=>btn.addEventListener("click",()=>answer(Number(btn.dataset.answer))));
    $("#nextQuestion").addEventListener("click",next);
    $("#quitQuiz").addEventListener("click",()=>openSubject(state.current.key));
  }
  const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
  function answer(n){
    if(state.answered)return; state.answered=true;
    const q=state.current.topic.questions[state.index], buttons=$$("#dialogContent [data-answer]");
    buttons.forEach((b,i)=>{b.disabled=true;if(i===q[2])b.classList.add("correct");if(i===n&&i!==q[2])b.classList.add("wrong");});
    const ok=n===q[2];if(ok)state.correct++;
    $("#feedback").textContent=(ok?"🎉 Chính xác! ":"💪 Cố gắng nhé! ")+q[3];
    $("#nextQuestion").disabled=false;
  }
  function next(){
    const t=state.current.topic;
    if(state.index<t.questions.length-1){state.index++;renderQuestion();return;}
    const earned=Math.max(2,Math.round(state.correct/t.questions.length*10));
    finish(t,earned,`${state.correct}/${t.questions.length} câu đúng`);
  }
  function renderFlashcard(){
    const t=state.current.topic, w=t.words[state.flashIndex];
    $("#dialogContent").innerHTML=`<div class="dialog-body">
      <div class="quiz-top"><span>Thẻ ${state.flashIndex+1}/${t.words.length}</span><span>${state.current.subject.title}</span></div>
      <div class="quiz-track"><span style="width:${(state.flashIndex+1)/t.words.length*100}%"></span></div>
      <div class="flashcard"><div class="word">${w[0]}</div><div class="meaning">${w[1]}</div><div class="example">${w[2]}</div></div>
      <div class="quiz-actions"><button class="btn btn-soft" id="speakWord">🔊 Nghe phát âm</button><button class="btn btn-primary" id="nextWord">${state.flashIndex===t.words.length-1?"Luyện tập →":"Từ tiếp theo →"}</button></div>
      <p class="muted" style="text-align:center;margin-top:18px">Đọc từ tiếng Anh, nghe phát âm và ghi nhớ nghĩa tiếng Việt.</p>
    </div>`;
    $("#speakWord").addEventListener("click",()=>speak(w[0]));
    $("#nextWord").addEventListener("click",()=>{
      if(state.flashIndex<t.words.length-1){state.flashIndex++;renderFlashcard();}
      else startEnglishQuiz();
    });
  }
  function startEnglishQuiz(){
    const t=state.current.topic;
    const questions=t.words.map((w,i)=>{
      const distract=t.words.filter((_,j)=>j!==i).slice(0,2).map(x=>x[1]);
      const opts=[w[1],...distract].sort(()=>Math.random()-.5);
      return [`What is "${w[0]}" in Vietnamese?`,opts,opts.indexOf(w[1]),`"${w[0]}" nghĩa là "${w[1]}".`];
    });
    state.current.topic={...t,questions};state.index=0;state.correct=0;renderQuestion();
  }
  function speak(word){
    if(!("speechSynthesis" in window)){toast("Thiết bị chưa hỗ trợ phát âm.");return;}
    speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(word);u.lang="en-US";u.rate=.82;speechSynthesis.speak(u);
  }
  function finish(topic,earned,detail){
    const fresh=!state.completed.includes(topic.id);
    if(fresh){state.completed.push(topic.id);state.stars+=earned;}else{state.stars+=Math.max(1,Math.floor(earned/2));}
    save();updateStats();
    $("#dialogContent").innerHTML=`<div class="dialog-body result"><div class="big">${earned>=8?"🏆":"🌟"}</div><h2>${earned>=8?"Tuyệt vời!":"Bạn đã hoàn thành!"}</h2><p>${detail}</p><h2 style="color:#e4a323">+${fresh?earned:Math.max(1,Math.floor(earned/2))} ⭐</h2><p>${fresh?"Đã ghi nhận chủ đề hoàn thành.":"Bạn đã luyện tập lại rất chăm chỉ!"}</p><button class="btn btn-primary" id="backHome">Về trang chủ</button> <button class="btn btn-soft" id="retryTopic">Làm lại</button></div>`;
    $("#backHome").addEventListener("click",()=>{$("#lessonDialog").close();renderHome();});
    $("#retryTopic").addEventListener("click",()=>startTopic(topic.id));
    toast(fresh?"Đã lưu tiến độ học tập!":"Bạn vừa tích lũy thêm sao!");
    renderHome();
  }
  $("#subjectGrid").addEventListener("click",e=>{const c=e.target.closest("[data-subject]");if(c)openSubject(c.dataset.subject);});
  $("#recommendedGrid").addEventListener("click",e=>{const c=e.target.closest("[data-topic]");if(c){const f=findTopic(c.dataset.topic);openSubject(f.key);}});
  $("#dialogContent").addEventListener("click",e=>{const c=e.target.closest("[data-topic]");if(c)startTopic(c.dataset.topic);});
  $("#closeDialog").addEventListener("click",()=>$("#lessonDialog").close());
  $("#continueBtn").addEventListener("click",()=>{const t=allTopics.find(x=>!state.completed.includes(x.id))||allTopics[0];const f=findTopic(t.id);openSubject(f.key);});
  $("#lessonDialog").addEventListener("click",e=>{if(e.target===$("#lessonDialog"))$("#lessonDialog").close();});
  renderHome();
})();