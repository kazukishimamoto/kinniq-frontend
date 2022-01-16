import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src='/logo.png' width={30} height={30} alt='logo' />
          <Text
            fontWeight='bold'
            ml={3}
          >KinniQ</Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
