"use strict"

//Умова: Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб не можна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

if (confirm(`Shall we start the test?`)) {
   class Reminder {
      constructor(message, intervalSeconds) {
         if (Reminder.instance) {
            return Reminder.instance
         }

         this.message = message
         this.intervalSeconds = intervalSeconds
         this.count = 0

         this.timer = setInterval(() => {
            this.count++
            document.write(`<p>🔔 ${this.message} (reminded ${this.count} time(s))</p>`)
         }, this.intervalSeconds * 1000)

         Reminder.instance = this
      }

      stop() {
         clearInterval(this.timer)
         document.write(`<p>⏹️ Reminder stopped after ${this.count} time(s).</p>`)
      }

      updateMessage(newMessage) {
         this.message = newMessage
         document.write(`<p>✏️ Message updated to: "${this.message}"</p>`)
      }
   }

   const r1 = new Reminder(`Take a short break!`, 3)

   setTimeout(() => r1.updateMessage("Time to stretch!"), 10000)
   setTimeout(() => r1.stop(), 20000)

   const r2 = new Reminder(`Drink water!`, 2)
   console.log(r1 === r2)
}