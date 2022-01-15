import { Box, Link, Center, Container, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      <Box bg="orange" w="100%" p={4} color="white">
        <Text>This is KinniQ!!</Text>
      </Box>
      <Container>
        <Text pt={5} fontSize="5xl" align="center">
          KinniQ
        </Text>
        <Box pt={10} align="center">
          このアプリケーションは筋肉に関する知識を問うクイズアプリです。
        </Box>

        <Center pt={7}>
          <Link href='/quiz'>
            クイズに挑戦する
          </Link>
        </Center>
      </Container>
    </Box>
  )
}
