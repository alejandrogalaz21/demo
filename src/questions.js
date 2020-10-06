const questionsOne = [
  {
    questionText: 'PROGRES ID',
    type: 2,
    answerOptions: [{ answerText: '', isCorrect: true, nextQuestion: 1 }]
  },
  {
    questionText: 'Organizacion del entrevistador',
    type: 1,
    answerOptions: [
      { answerText: 'ACNUR', isCorrect: true, nextQuestion: 2 },
      { answerText: 'FM4', isCorrect: true, nextQuestion: 2 },
      { answerText: 'PCR', isCorrect: true, nextQuestion: 2 },
      { answerText: 'RET', isCorrect: true, nextQuestion: 2 }
    ]
  },
  {
    questionText: 'Oficina del entrevistador',
    type: 1,
    answerOptions: [
      { answerText: 'BOMEX', isCorrect: true, nextQuestion: 3 },
      { answerText: 'FO Mty', isCorrect: true, nextQuestion: 3 },
      { answerText: 'FO Ags', isCorrect: true, nextQuestion: 3 },
      { answerText: 'FO Palenque', isCorrect: true, nextQuestion: 3 },
      { answerText: 'Otra Organizacion', isCorrect: true, nextQuestion: 2 }
    ]
  },
  {
    questionText: 'Especifica',
    type: 2,
    answerOptions: [{ answerText: '', isCorrect: true, nextQuestion: 4 }]
  }
]

export const questionsTwo = [
  {
    questionText: 'PROGRES ID',
    type: 2,
    answerOptions: [{ answerText: '', isCorrect: true, nextQuestion: 1 }]
  },
  {
    questionText:
      'Indicar si el caso es participante en un programa para la integración local.',
    type: 1,
    answerOptions: [
      {
        answerText: 'El caso es/será participante en el PFFR de RET.',
        isCorrect: true,
        nextQuestion: 2
      },
      {
        answerText: 'El caso es participante en el programa de integración de FM4 o ACNUR.',
        isCorrect: true,
        nextQuestion: 2
      },
      {
        answerText: 'El caso recibe/recibirá apoyos de PCR en CDMX.',
        isCorrect: true,
        nextQuestion: 2
      },
      {
        answerText:
          'El caso recibe/recibirá apoyos de integración por parte de una oficina móvil o "roving team".',
        isCorrect: true,
        nextQuestion: 2
      }
    ]
  },
  {
    questionText:
      'Indicar si el caso fue reubicado a este lugar (por parte del ACNUR y/o socios) y por cuál motivo.',
    type: 1,
    answerOptions: [
      {
        answerText: 'Sí, el caso fue reubicado para participar en un programa de integración.',
        isCorrect: true,
        nextQuestion: 3
      },
      {
        answerText: 'Sí, el caso fue reubicado por temas de salud.',
        isCorrect: true,
        nextQuestion: 3
      },
      {
        answerText: 'Sí, el caso fue reubicado por temas de seguridad.',
        isCorrect: true,
        nextQuestion: 3
      },
      {
        answerText: 'Sí, el caso fue reubicado por otra razón.',
        isCorrect: true,
        nextQuestion: 3
      }
    ]
  },
  {
    questionText:
      'Indicar número de acompañamiento que esta entrevista representa para el caso.',
    type: 2,
    answerOptions: [{ answerText: '', isCorrect: true, nextQuestion: 4 }]
  }
]

export const questions = [questionsOne, questionsTwo]
