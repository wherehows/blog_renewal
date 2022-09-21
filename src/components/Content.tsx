import React from 'react'
import styled from '@emotion/styled'

interface ContentProps {
  content: string | null
  list: Edge[]
}

const Content = ({ content, list }: ContentProps) => {
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
  width: '46rem',
  height: '100%',
  margin: '0 0 0 calc(25% + 17rem + 4rem)',
  '@media screen and (max-width: 1484px)': {
    margin: '0 0 0 calc(7% + 17rem + 4rem)',
  },
}))

const MarkdownRenderer = styled('div')(() => ({
  width: '100%',
  a: {
    color: '#3347ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  'a:visited': {
    color: '#3347ff',
    fontWieght: 'bold',
  },
}))

