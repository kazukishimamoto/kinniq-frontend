import { Box, Link, Center, Container, Text, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Text fontSize='4xl' fontWeight='bold' align='center' pb={5}>
            <br />
            Let&apos;s open the door of muscle!!
          </Text>
        </Box>
      </Box>
      <Image src="/header.jpeg" alt="header image" />

      <Box mt={5} fontWeight="bold" align="center">
        <br />
        このアプリケーションは筋肉に関する知識を問うクイズアプリです。
      </Box>

      <Center mt={5}>
        <Link href="/quiz?level=easy">
          <Box
            as="button"
            borderRadius="md"
            bg="gray.700"
            color="white"
            px={4}
            h={12}
            fontWeight="bold"
          >
            クイズに挑戦する
          </Box>
        </Link>
      </Center>
    </Container>
  )
}
