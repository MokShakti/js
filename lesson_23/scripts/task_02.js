'use strict'

// Задача 18. Користувач може змінювати колір фону, що вибирає користувач з використанням:
//             < input type = "color" >.
// Зберігати цей колір і відновлювати при наступному відкритті.Також зберігати і відображати кількість змін протягом одного сеансу.

window.addEventListener(`DOMContentLoaded`, () => {
   const picker = document.getElementById(`colorPicker`)
   const counter = document.getElementById(`changeCount`)

   const saved = localStorage.getItem(`bgColor`)
   if (saved) {
      document.body.style.backgroundColor = saved
      picker.value = saved
   }

   let cnt = Number(sessionStorage.getItem('changeCount')) || 0
   counter.textContent = `Changes in session: ${cnt}`

   picker.addEventListener(`change`, e => {
      const color = e.target.value

      document.body.style.backgroundColor = color
      localStorage.setItem(`bgColor`, color)

      cnt += 1
      sessionStorage.setItem(`changeCount`, cnt)
      counter.textContent = `Changes in session: ${cnt}`
   })
})

// --------------------------------------------------------
//    Задача 19. Зберігати у пам’яті список справ, які користувачу треба виконати(зберігати у localStorage).Періодично випадковим чином вибирати якусь з справ і виводити користувачу(з використанням confirm).Якщо користувач натискає на «Ок», то видаляти цю задачу.

window.addEventListener(`DOMContentLoaded`, () => {
   const form = document.getElementById(`todoForm`)
   const input = document.getElementById(`newTask`)
   const listEl = document.getElementById(`taskList`)

   let tasks = JSON.parse(localStorage.getItem(`tasks`) || `[]`)

   const save = () => {
      localStorage.setItem(`tasks`, JSON.stringify(tasks))
   };

   const render = () => {
      listEl.innerHTML = ``
      if (!tasks.length) {
         listEl.innerHTML = `<li style="text-align:center;color:#666;">No tasks yet</li>`
         return
      }
      const fragment = document.createDocumentFragment()
      tasks.forEach((text, idx) => {
         const li = document.createElement(`li`)
         li.textContent = text
         li.dataset.index = idx

         const btn = document.createElement(`button`)
         btn.textContent = `X`;
         btn.className = `remove-btn`
         li.appendChild(btn)
         fragment.appendChild(li)
      })
      listEl.appendChild(fragment)
   }

   form.addEventListener(`submit`, e => {
      e.preventDefault()
      const text = input.value.trim()
      if (text) {
         tasks.push(text)
         save()
         render()
      }
      input.value = ``
      input.focus()
   })

   listEl.addEventListener(`click`, e => {
      if (!e.target.matches(`.remove-btn`)) return
      const idx = Number(e.target.parentElement.dataset.index)
      tasks.splice(idx, 1)
      save()
      render()
   })

   setInterval(() => {
      if (!tasks.length) return
      const idx = Math.floor(Math.random() * tasks.length)
      const task = tasks[idx]
      if (confirm(`Have you completed this task? — ${task}`)) {
         tasks.splice(idx, 1)
         save()
         render()
      }
   }, 6000)

   render()
})
