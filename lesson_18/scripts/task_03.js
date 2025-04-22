"use strict"

//Умова: Користувач задає рік народження. Визначити кількість років користувача.

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