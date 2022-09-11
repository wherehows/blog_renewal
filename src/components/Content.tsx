import React from 'react'
import styled from '@emotion/styled'

interface ContentProps {
  content: string | null
  list: Edge[]
}

const Content = ({ content, list }: ContentProps) => {
  return (
    <Wrapper>
      {
        content ? (
          <MarkdownRenderer dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <></>
        )
        // <UList>
        // {list.map(({ node }: Edge) => {
        //   const { title, date } = node.frontmatter

        //   return (
        //     <ItemWrapper key={node.id}>
        //       <Title>{title}</Title>
        //       <PostDate>{date.toString()}</PostDate>
        //       <Description>12345</Description>
        //       <Label>12345</Label>
        //     </ItemWrapper>
        //     )
        //     })
        //     }
        // </UList>
      }
    </Wrapper>
  )
}

export default Content

const Wrapper = styled('div')(() => ({
  width: '43rem',
  height: '100%',
  margin: '0 0 0 calc(18% + 17rem + 2rem)',
}))

const MarkdownRenderer = styled('div')(() => ({
  a: {
    color: '#3347ff',
    textDecoration: 'none',
  },

  'a:visited': {
    color: '#3347ff',
  },
}))

const UList = styled.ul``

const ItemWrapper = styled.li``

const Title = styled.div``

const PostDate = styled.div``

const Description = styled.div``

const Label = styled.div``

