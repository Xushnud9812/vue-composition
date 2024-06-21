<template>
  <div class="container">
    <h1 class="text-3xl font-semibold my-5">Create quizz</h1>


    <div>

      <input v-model="newQuizz.theme"
        class="border py-3 px-5 rounded w-full focus:outline-none text-2xl focus:border-primary" type="text"
        placeholder="theme...">


      <div class="mt-3 border border-primary p-5" v-for="question in newQuizz.questions">

        <input class="border py-3 px-5 rounded w-full focus:outline-none text-2xl focus:border-primary" type="text"
          placeholder="question...">

        <div class="mt-3" v-for="answer in question.options">
          <div class="inline-flex gap-4 items-center cursor-pointer text-xl flex-row-reverse">

            <button @click="removeOption(question.id, answer.id)" v-if="question.options.length > 2">remove</button>
            <input v-model="answer.text"
              class="border py-3 px-5 rounded w-full focus:outline-none text-2xl focus:border-primary" type="text"
              placeholder="option...">
            <input class="w-5 h-5" :id="`${question.id}` + answer.id" type="radio" :name="'q' + question.id">

          </div>



        </div>
        <button v-if="question.options.length < 4" @click="addOption(question.id)">add option</button>

      </div>

    </div>


    <div class="flex justify-end mt-5 gap-5">
      <button>Add Question</button>
      <button>Save</button>
    </div>



  </div>
</template>

<script setup>
import { ref } from 'vue'


const newQuizz = ref({
  id: new Date(),
  theme: '',
  questions: [
    {
      id: 1,
      question: '',
      options: [
        {
          id: 1,
          text: ''
        },
        {
          id: 2,
          text: ''
        },
      ],
      answer: '',
      selectAnswer: 0
    }
  ]
})


const addOption = (id) => {
  const question = newQuizz.value.questions.find((q) => q.id == id)
  question.options.push({
    id: question.options.length + 1,
    text: ''
  })
}

const removeOption = (questionId, answerId) => {
  const question = newQuizz.value.questions.find((q) => q.id == questionId)

  question.options.forEach((item, index) => {
    if (item.id == answerId) {
      console.log('index', item.id, answerId, index);
      question.options.splice(index, 1)
    }
  })

}



</script>

<style lang="scss" scoped></style>