import { Container, Flex, Box, Button, Text, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Quiz {
  id: number
  sentence: string
  menu: string
  answer: boolean
}

interface Answer {
  answered: boolean
  correction: boolean | null
  sentence: string
}

export default function QuizPage() {
  const [quizState, setQuiz] = useState<Quiz[]>([])
  const [answerState, setAnswer] = useState<Answer[]>([])

  useEffect(() => {
    // ここでquizを取得するが今は固定値を返す
    setQuiz([
      {
        id: 1,
        sentence: 'お腹周りの脂肪を落とすのに最適な運動は腹筋である',
        menu: '腹筋',
        answer: false,
      },
      {
        id: 2,
        sentence: 'お腹周りの脂肪を落とすのに最適な運動は腹筋である',
        menu: '腹筋',
        answer: false,
      },
      {
        id: 3,
        sentence: 'お腹周りの脂肪を落とすのに最適な運動は腹筋である',
        menu: '腹筋',
        answer: false,
      },
    ])
  }, [])

  const pushAnswer = (answer, quiz) => {
    if (answerState[quiz.id]?.answered) return

    const correction = quiz.answer === answer
    const correctMessage = `すばらしい！
あなたは既にある程度の筋トレ知識があるようですね！
さあ、${quiz.menu}を５回やりましょう！！
  `
    const inCorrectMessage = `ざんねん！
腹筋をしたからといってお腹周りの脂肪が落とせるわけではありません
脂肪を落とすには大きな筋肉を使う運動、例えばスクワットなどが効果的です！
さあ、間違ってしまったので${quiz.menu}を10回やりましょう！！`

    let tmp1 = answerState[0]
    let tmp2 = answerState[1]
    let tmp3 = answerState[2]
    switch (quiz.id) {
      case 1:
        tmp1 = {
          answered: true,
          correction: correction,
          sentence: correction ? correctMessage : inCorrectMessage,
        }
        break
      case 2:
        tmp2 = {
          answered: true,
          correction: correction,
          sentence: correction ? correctMessage : inCorrectMessage,
        }
        break
      case 3:
        tmp3 = {
          answered: true,
          correction: correction,
          sentence: correction ? correctMessage : inCorrectMessage,
        }
        break
    }

    setAnswer([tmp1, tmp2, tmp3])
  }

  return (
    <Container>
      {quizState.map((quiz, index) => {
        return (
          <Box key={index} pb={20}>
            <Text align="center" fontSize="6xl" mt={5} key={quiz.sentence}>
              Q{index + 1}. {quiz.sentence}
            </Text>
            <Flex mt={10}>
              <Box flex="1" mr={5}>
                <Button
                  onClick={() => pushAnswer(true, quiz)}
                  colorScheme="red"
                  width="100%"
                  height={150}
                  fontSize="6xl"
                >
                  ○
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  onClick={() => pushAnswer(false, quiz)}
                  colorScheme="blue"
                  width="100%"
                  height={150}
                  fontSize="6xl"
                >
                  ✗
                </Button>
              </Box>
            </Flex>
            {answerState[index]?.answered && (
              <Box>
                <Center mt={10}>
                  <Text
                    fontSize="6xl"
                    align="center"
                    color={answerState[index].correction ? 'red' : 'blue'}
                  >{`${
                    answerState[index].correction ? '正解' : '不正解'
                  }`}</Text>
                </Center>
                <Box
                  borderRadius="lg"
                  color="white"
                  bg={answerState[index].correction ? 'red.400' : 'cyan.400'}
                  p={3}
                  mt={6}
                  mb={6}
                  align="center"
                >
                  <Text fontSize="2xl">{answerState[index].sentence}</Text>
                </Box>
              </Box>
            )}
          </Box>
        )
      })}
      {answerState.every((state) => {
        return state?.answered
      }) && (
        <Center mt={5}>
          <Button align="center" bg="gray.600" color="white">
            <Link href="/">トップページへ</Link>
          </Button>
        </Center>
      )}
    </Container>
  )
}
