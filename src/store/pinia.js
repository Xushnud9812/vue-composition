import { defineStore } from 'pinia'

export const usePiniaStore = defineStore('pinia', {
  state() {
    return {
      count: 10,
      name: 'Vuejs',
      quizzes: [
        {
          id: 1,
          theme: 'Tengsizliklar',
          questions: [
            {
              id: 1,
              question: '2+2=?',
              options: [
                {
                  id: 1,
                  text: '3'
                },
                {
                  id: 2,
                  text: '3'
                },
                {
                  id: 3,
                  text: '3'
                },
                {
                  id: 4,
                  text: '3'
                },
              ],
              answer: 4,
              selectAnswer: 0
            },
            {
              id: 2,
              question: '2+2=?',
              options: [
                {
                  id: 1,
                  text: '3'
                },
                {
                  id: 2,
                  text: '3'
                },
                {
                  id: 3,
                  text: '3'
                },
                {
                  id: 4,
                  text: '3'
                },
              ],
              answer: 4,
              selectAnswer: 0
            }
          ]
        }
      ]

    }
  },

  actions: {
    increment() {
      this.count++
    },

    saveQuizz(quizz) {
      this.quizzes.push(quizz)
    }

  }




})