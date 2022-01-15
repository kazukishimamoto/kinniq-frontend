import { Container, Flex, Box, Button, Text, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const initialState = {
  sentence: '',
  menu: '',
  answer: null,
  answered: null,
}

const getQuiz = (path) => {
  return {
    sentence: 'お腹周りの脂肪を落とすのに最適な運動は腹筋である',
    menu: '腹筋',
    answer: false,
    answered: false,
  }
}

const judge = () => {
  // ここで正誤判定をする
}

export default function QuizPage() {
  const [quizState, setQuiz] = useState(initialState)

  useEffect(() => {
    // ここでquizを取得するが今は固定値を返す
    setQuiz(getQuiz('/quiz'))
  }, [])

  const pushMaru = () => {
    setQuiz({
      ...quizState,
      answered: true,
    })
  }

  const pushBatu = () => {
    setQuiz({
      ...quizState,
      answered: true,
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
            onClick={pushMaru}
            colorScheme="red"
            width="100%"
            height={100}
          >
            ○
          </Button>
        </Box>
        <Box flex="1">
          <Button
            onClick={pushBatu}
            colorScheme="blue"
            width="100%"
            height={100}
          >
            ☓
          </Button>
        </Box>
      </Flex>
      {quizState.answered ? (
        <Box>
          <Center mt={10}>
            <Text fontSize="4xl" align="center">
              正解
            </Text>
          </Center>

          <Center mt={5}>
            <Text fontSize="2xl" align="center">
              あなたは腹筋に関する知識がありますね では他の筋肉を鍛えるために
              {quizState.menu}を10回やりましょう！！
            </Text>
          </Center>

          <Center mt={5}>
            <Link href="/">トップページへ</Link>
          </Center>
        </Box>
      ) : (
        <p></p>
      )}
    </Container>
  )
}
