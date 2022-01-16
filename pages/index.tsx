import { Box, Link, Center, Container, Heading, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title">
            <br />
            Let&apos;s open the door of muscle!!
          </Heading>
        </Box>
      </Box>
      <Image src="/header.jpeg" alt="header image" />

      <Box mt={5} fontWeight="bold" align="center">
        <br />
        このアプリケーションは筋肉に関する知識を問うクイズアプリです。
      </Box>

      <Center mt={5}>
        <Link href="/quiz">
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
