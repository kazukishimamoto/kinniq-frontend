import { Container, Flex, Box, Button, Text, Center } from '@chakra-ui/react'
import Link from 'next/link'

export default function QuizPage() {
  const state = {
    sentence: 'お腹周りの脂肪を落とすのに最も効果的なのは腹筋である',
    answer: false
  }

  const menu = 'スクワット'
  const answered = false

  return (
    <Container>
      <Text align="center" fontSize="6xl" mt={5}>
        Q {state.sentence}
      </Text>
      <Flex mt={10}>
        <Box flex="1">
          <Button colorScheme="red" width="100%" height={100}>
            ○
          </Button>
        </Box>
        <Box flex="1">
          <Button colorScheme="blue" width="100%" height={100}>
            ☓
          </Button>
        </Box>
      </Flex>
      {
        answered ? (
          <Box>
            <Center mt={10}>
              <Text fontSize="4xl" align='center'>
                正解
              </Text>
            </Center>

            <Center mt={5}>
              <Text fontSize="2xl" align='center'>
                あなたは腹筋に関する知識がありますね
                では他の筋肉を鍛えるために{menu}を10回やりましょう！！
              </Text>
            </Center>

            <Center mt={5}>
              <Link href='/'>
                トップページへ
              </Link>
            </Center>
          </Box>
        ) : (
          <p></p>
        )
      }
          </Container>
  )
}
