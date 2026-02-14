document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
  body = document.body
  let attr = document.getElementById('attr')
  let button = document.querySelector('.btn')
  let text = document.querySelector('output')
  let input = document.querySelector('.input')
  let addInput = document.getElementById('addInput')
  let buttonAdd = document.getElementById('buttonAdd')
  let btnMinus = document.getElementById('btnMinus')
  let btnPlus = document.getElementById('btnPlus')
  let btnDel = document.getElementById('btnDel')
  let modalAttr = document.getElementById('modalAttr')
  let closeBtn = document.getElementById('closeBtn')
  let btnA = document.getElementById('btnA')
  let btnB = document.getElementById('btnB')
  let btnC = document.getElementById('btnC')
  let modal = document.getElementsByClassName('modal__dialog')
  const tabs = document.querySelectorAll('[data-js="t6-tabs"] .tab');
  const panes = document.querySelectorAll('[data-js="t6-tabs"] .pane');
  const t7Input = document.querySelector('[data-js="t7-input"]');
  const t7Run = document.querySelector('[data-js="t7-run"]');
  const t7Out = document.querySelector('[data-js="t7-out"]');
  const t8A = document.querySelector('[data-js="t8-a"]');
  const t8B = document.querySelector('[data-js="t8-b"]');
  const t8Add = document.querySelector('[data-js="t8-add"]');
  const t8Mul = document.querySelector('[data-js="t8-mul"]');
  const t8Out = document.querySelector('[data-js="t8-out"]');
  const t9Toggle = document.querySelector('[data-js="t9-toggle"]');
  const t9Text = document.querySelector('[data-js="t9-text"]');
  const t10Range = document.querySelector('[data-js="t10-range"]');
  const t10Out = document.querySelector('[data-js="t10-out"]');
  const t10Box = document.querySelector('[data-js="t10-box"]');
  const t11Seconds = document.querySelector('[data-js="t11-seconds"]');
  const t11Start = document.querySelector('[data-js="t11-start"]');
  const t11Stop = document.querySelector('[data-js="t11-stop"]');
  const t11Out = document.querySelector('[data-js="t11-out"]');
  const t12Plus = document.querySelector('[data-js="t12-plus"]');
  const t12Label = document.querySelector('[data-js="t12-label"]');
  const t12Bar = document.querySelector('[data-js="t12-bar"]');
  const t13Input = document.querySelector('[data-js="t13-input"]');
  const t13Out = document.querySelector('[data-js="t13-out"]');
  const t14Next = document.querySelector('[data-js="t14-next"]');
  const t14Out = document.querySelector('[data-js="t14-out"]');
  const t15Item = document.querySelector('[data-js="t15-item"]');
  const t15Area = document.querySelector('[data-js="t15-area"]');
  const t15Coords = document.querySelector('[data-js="t15-coords"]');
  const t16Animate = document.querySelector('[data-js="t16-animate"]');
  const t16Box = document.querySelector('[data-js="t16-box"]');

  button.addEventListener("click", () => {
    const randomInt1 = Math.floor(Math.random() * 256);
    const randomInt2 = Math.floor(Math.random() * 256);
    const randomInt3 = Math.floor(Math.random() * 256);

    function componentToHex(c) {
      const hex = Number(c).toString(16);
      return hex.padStart(2, '0');
    }
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    button.style.backgroundColor = `${rgbToHex(randomInt1, randomInt2, randomInt3)}`
    text.textContent = `${rgbToHex(randomInt1, randomInt2, randomInt3)}`
  })

  input.addEventListener("input", () => {
    let counter = document.getElementById("counter")
    let len = document.getElementById('myInput').value.length;
    counter.textContent = `${len}`
  })

  buttonAdd.addEventListener("click", () => {
    let ulEl = document.getElementById('ul-element')
    if (addInput.value.length !== 0){
      const newEl = document.createElement("li")
      const liText = document.createTextNode(`${addInput.value}`);
      newEl.appendChild(liText);
      ulEl.appendChild(newEl);
    }
    else {
      alert("Ошибка бездарь, введи хоть что-нибудь")
    }
  })

  let newCnt = document.getElementById('newCnt')
  cnt = 0;
  btnMinus.addEventListener("click", () => {
    cnt -= 1
    if (cnt < 0){
      cnt = 0
      alert('Действие запрещено')
    }
    else{
      newCnt.textContent = `${cnt}`
    }
  })

  btnPlus.addEventListener("click", () => {
    cnt += 1
    newCnt.textContent = `${cnt}`
  })

  btnDel.addEventListener("click", () => {
    cnt = 0
    newCnt.textContent = `${cnt}`
  })

  function deleteAttr(){
    let attr = document.getElementById('attr')
    attr.removeAttribute("hidden")
  }

  function addAttr(){
    const attribute = document.createAttribute("hidden")
    attr.setAttributeNode(attribute);
  }
  modalAttr.addEventListener("click", deleteAttr)
  closeBtn.addEventListener("click", addAttr)
  attr.addEventListener("click", addAttr)
  document.addEventListener("keydown", (event) => {
    if (event.key == "Escape"){
      addAttr()
    }
  })

  function handleTabClick(event) {
    const clickedTab = event.currentTarget;
    const tabId = clickedTab.dataset.tab;
    tabs.forEach(tab => {
      tab.classList.remove('is-active');
    });
    clickedTab.classList.add('is-active');
    panes.forEach(pane => {
      pane.classList.remove('is-active');
    });
    const activePane = document.querySelector(`[data-pane="${tabId}"]`);
    if (activePane) {
      activePane.classList.add('is-active');
    }
  }

  btnA.addEventListener("click", handleTabClick);
  btnB.addEventListener("click", handleTabClick);
  btnC.addEventListener("click", handleTabClick);

  t7Run.addEventListener("click", () => {
    const str = t7Input.value;
    const reversed = str.split('').reverse().join('');
    t7Out.textContent = reversed || "—";
  });

  function calculate(operation) {
    const a = parseFloat(t8A.value);
    const b = parseFloat(t8B.value);
    if (isNaN(a) || isNaN(b)) {
      t8Out.textContent = "NaN";
      return;
    }
    let result;
    if (operation === 'add') {
      result = a + b;
    } else {
      result = a * b;
    }
    t8Out.textContent = result;
  }

  t8Add.addEventListener("click", () => calculate('add'));
  t8Mul.addEventListener("click", () => calculate('mul'));

  t9Toggle.addEventListener("click", () => {
    if (t9Text.hidden) {
      t9Text.hidden = false;
      t9Toggle.textContent = "Скрыть";
    } else {
      t9Text.hidden = true;
      t9Toggle.textContent = "Показать";
    }
  });

  t10Range.addEventListener("input", () => {
    const size = t10Range.value;
    t10Box.style.width = size + "px";
    t10Box.style.height = size + "px";
    t10Out.textContent = size + "px";
  });

  let timerInterval = null;

  t11Start.addEventListener("click", () => {
    if (timerInterval) return;
    let seconds = parseInt(t11Seconds.value);
    if (isNaN(seconds) || seconds <= 0) {
      alert("Введите положительное число");
      return;
    }
    t11Out.textContent = seconds;
    timerInterval = setInterval(() => {
      seconds--;
      t11Out.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        t11Out.textContent = "0";
      }
    }, 1000);
  });

  t11Stop.addEventListener("click", () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  });

  let progress = 0;

  t12Plus.addEventListener("click", () => {
    if (progress < 100) {
      progress += 10;
      if (progress > 100) progress = 100;
      t12Bar.style.width = progress + "%";
      t12Label.textContent = progress + "%";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      t13Input.value = "";
      t13Out.textContent = "Поле очищено (Ctrl+K)";
    } else if (event.key === "Escape") {
      t13Input.blur();
      t13Out.textContent = "Фокус снят (Escape)";
    }
  });

  const quotes = [
    "Даниил Колбасенко",
    "Я умею общаться не только с женщинами, но и с людьми",
    "MAKE AMERICA GREAT AGAIN",
    "Я молодой парень, шнейне пеппа ватафа",
    "Sent him 2-3 years in Dagestan and forget",
    "Взял нож - режь, взял дошик - ешь",
    "ВСЕГО ХОРОШЕГО"
  ];

  t14Next.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    t14Out.textContent = quotes[randomIndex];
  });

  let isDragging = false;
  let startX, startY, startLeft, startTop;

  t15Item.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = t15Item.getBoundingClientRect();
    const areaRect = t15Area.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    startLeft = rect.left - areaRect.left;
    startTop = rect.top - areaRect.top;
    t15Item.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    let newLeft = startLeft + dx;
    let newTop = startTop + dy;
    const areaRect = t15Area.getBoundingClientRect();
    const itemRect = t15Item.getBoundingClientRect();
    newLeft = Math.max(0, Math.min(newLeft, areaRect.width - itemRect.width));
    newTop = Math.max(0, Math.min(newTop, areaRect.height - itemRect.height));
    t15Item.style.left = newLeft + "px";
    t15Item.style.top = newTop + "px";
    t15Coords.textContent = `x: ${Math.round(newLeft)}px, y: ${Math.round(newTop)}px`;
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      t15Item.style.cursor = "move";
    }
  });

  const style = document.createElement('style');

  style.textContent = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-30px); }
    }

    .box.is-bouncing {
      animation: bounce 0.8s ease infinite;
    }
  `;
  document.head.appendChild(style);

  t16Animate.addEventListener("click", () => {
    t16Box.classList.toggle('is-bouncing');
    t16Animate.textContent = t16Box.classList.contains('is-bouncing') ? "Остановить" : "Анимировать";
  });
});
