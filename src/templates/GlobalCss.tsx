import styled from '@emotion/styled'
import React from 'react'

interface ExampleProps {
  children: React.ReactNode
}

const GlobalCss = ({ children }: ExampleProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default GlobalCss

const Wrapper = styled('div')(() => ({}))

