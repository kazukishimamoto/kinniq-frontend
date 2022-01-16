import Logo from './logo'
import { Box, Container, Link, Flex, Heading, Stack } from '@chakra-ui/react'

const LinkItem = ({ href, path, children }) => {
  const active = path === href

  return (
    <a href={href}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : 'gray.900'}
      >
        {children}
      </Link>
    </a>
  )
}

const Navbar = (props) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#20202380"
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="spece-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem
            href="https://github.com/kazukishimamoto/kinniq-frontend"
            path={path}
          >
            Source
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
