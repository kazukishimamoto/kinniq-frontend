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
    const correctMessage = `すばらしい！
あなたは既にある程度の筋トレ知識があるようですね！
さあ、${quizState.menu}を５回やりましょう！！
  `
    const inCorrectMessage = `ざんねん！
腹筋をしたからといってお腹周りの脂肪が落とせるわけではありません
脂肪を落とすには大きな筋肉を使う運動、例えばスクワットなどが効果的です！
さあ、間違ってしまったので${quizState.menu}を10回やりましょう！！`
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
        <Box flex="1" mr={5}>
          <Button
            onClick={() => pushAnswer(true)}
            colorScheme="red"
            width="100%"
            height={150}
            fontSize='6xl'
          >
            ○
          </Button>
        </Box>
        <Box flex="1">
          <Button
            onClick={() => pushAnswer(false)}
            colorScheme="blue"
            width="100%"
            height={150}
            fontSize='6xl'
          >
            ✗
          </Button>
        </Box>
      </Flex>
      {
        answerState.answered && (
        <Box>
          <Center mt={10}>
            <Text fontSize="6xl" align="center" color={answerState.correction ? 'red' : 'blue'}>{`${
              answerState.correction ? '正解' : '不正解'
            }`}</Text>
          </Center>
          <Box borderRadius="lg" color='white' bg={ answerState.correction ? 'red.400' : 'cyan.400'} p={3} mt={6} mb={6} align="center">
            <Text fontSize='2xl'>
              {answerState.sentence}
            </Text>
          </Box>

          <Center mt={5}>
            <Button align="center" bg='gray.600' color='white' >
              <Link href="/">トップページへ</Link>
            </Button>
          </Center>
        </Box>
        )
      }
    </Container>
  )
}
