import { Container, Flex, Box, Button, Text, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const initialQuizState = {
  sentence: '',
  menu: '',
  answer: null,
}

const initialAnswerState = {
  answered: false,
  correction: null,
  sentence: '',
}

const getQuiz = (path) => {
  return {
    sentence: 'お腹周りの脂肪を落とすのに最適な運動は腹筋である',
    menu: '腹筋',
    answer: false,
    answered: false,
  }
}

export default function QuizPage() {
  const [quizState, setQuiz] = useState(initialQuizState)
  const [answerState, setAnswer] = useState(initialAnswerState)

  useEffect(() => {
    // ここでquizを取得するが今は固定値を返す
    setQuiz(getQuiz('/quiz'))
  }, [])

  const pushAnswer = (answer) => {
    if (answerState.answered) return

    const correction = quizState.answer === answer
    const correctMessage = `すばらしい！${quizState.menu}を５回やりましょう！！`
    const inCorrectMessage = `ざんねん！${quizState.menu}を10回やりましょう！！`
    setAnswer({
      answered: true,
      correction: correction,
      sentence: correction ? correctMessage : inCorrectMessage,
    })
  }

  return (
    <Container>
      <Text align="center" fontSize="6xl" mt={5}>
        Q. {quizState.sentence}
      </Text>
      <Flex mt={10}>
        <Box flex="1">
          <Button
            onClick={() => pushAnswer(true)}
            colorScheme="red"
            width="100%"
            height={100}
          >
            ○
          </Button>
        </Box>
        <Box flex="1">
          <Button
            onClick={() => pushAnswer(false)}
            colorScheme="blue"
            width="100%"
            height={100}
          >
            ☓
          </Button>
        </Box>
      </Flex>
      {
        answerState.answered && (
        <Box>
          <Center mt={10}>
            <Text fontSize="4xl" align="center">{`${
              answerState.correction ? '正解' : '不正解'
            }`}</Text>
          </Center>
          <Center mt={5}>
            <Text fontSize="2xl" align="center">
              {answerState.sentence}
            </Text>
          </Center>

          <Center mt={5}>
            <Link href="/">トップページへ</Link>
          </Center>
        </Box>
        )
      }
    </Container>
  )
}
