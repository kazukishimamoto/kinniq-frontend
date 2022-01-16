import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover svg {
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <FontAwesomeIcon icon={faDumbbell} />
          <Text fontWeight="bold" ml={3}>
            KinniQ
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
