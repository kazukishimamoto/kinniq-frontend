import {
  Box,
  Link,
  Center,
  Container,
  Heading,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" color='white' bg="gray.900" p={3} mt={6} mb={6} align="center">
        Welcome! Let&apos;s open the door of the muscle!!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title">
            <FontAwesomeIcon icon={faDumbbell} size="xs" />
            &nbsp;KinniQ
          </Heading>
        </Box>
      </Box>
      <Container>
        <Box background="url(header.jpeg) center" w="100%" h={400} />
        <Box pt={10} fontWeight="bold" align="center">
          このアプリケーションは筋肉に関する知識を問うクイズアプリです。
        </Box>

        <Center mt={5}>
          <Box
            as="button"
            borderRadius="md"
            bg="gray.900"
            color="white"
            px={4}
            h={12}
          >
            <Link href="/quiz">クイズに挑戦する</Link>
          </Box>
        </Center>
      </Container>

      <Box></Box>
    </Container>
  )
}
