"use strict"

//Умова: Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

const general = document.getElementById('generalList')
const chosen = document.getElementById('chosenList')

general.addEventListener('click', e => {
   const btn = e.target.closest('.btn[data-action="select"]')
   if (!btn) return
   const li = btn.closest('li');
   li.querySelector('.btn').textContent = '←'
   li.querySelector('.btn').classList.replace('green', 'red')
   li.querySelector('.btn').dataset.action = 'deselect'
   chosen.appendChild(li)
})

chosen.addEventListener('click', e => {
   const btn = e.target.closest('.btn[data-action="deselect"]')
   if (!btn) return
   const li = btn.closest('li')

   li.querySelector('.btn').textContent = '→'
   li.querySelector('.btn').classList.replace('red', 'green')
   li.querySelector('.btn').dataset.action = 'select'
   general.appendChild(li)
})