import React from 'react'
import styled from '@emotion/styled'

interface ContentProps {
  content: string | null
}

const Content = ({ content }: ContentProps) => {
  return (
    <Wrapper>
      {content ? (
        <MarkdownRenderer dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <></>
      )}
    </Wrapper>
  )
}

export default Content

const Wrapper = styled('div')(() => ({
  width: '40rem',
  height: '100%',
  margin: '0 0 0 calc(14rem + 27vw + 2rem)',
}))

const MarkdownRenderer = styled.div`
`
