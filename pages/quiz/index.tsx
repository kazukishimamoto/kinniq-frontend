import { Container, Flex, Box, Button, Text, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

interface Quiz {
  id: number
  sentence: string
  menu: string
  answer: boolean
  explanation: string
}

interface Answer {
  answered: boolean
  correction: boolean | null
  sentence: string
}

const DEFAULT_API_LOCALHOST = process.env.NEXT_PUBLIC_DEFAULT_API_LOCALHOST || 'http://localhost:3000/api/v1'
const fetchQuiz = () => {
  console.log(DEFAULT_API_LOCALHOST)
  return axios
    .get(`${DEFAULT_API_LOCALHOST}/quiz?level=easy`)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.error(e)
    })
}

export default function QuizPage() {
  const [quizState, setQuiz] = useState<Quiz[]>([])
  const [answerState, setAnswer] = useState<Answer[]>([])

  useEffect(() => {
    // ここでquizを取得するが今は固定値を返す
    fetchQuiz().then(data => {
      setQuiz(data)
    }).catch(() => {
      console.log('error')
    })

  }, [])

  const pushAnswer = (answer, quiz) => {
    if (answerState[quiz.id]?.answered) return

    const correction = quiz.answer === answer
    const correctMessage = `すばらしい！
あなたは既にある程度の筋トレ知識があるようですね！
さあ、${quiz.menu}を５回やりましょう！！
  `
    const inCorrectMessage = `ざんねん！${quiz.explanation}
さあ、${quiz.menu}を10回やりましょう！！`

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
      {quizState?.map((quiz, index) => {
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
