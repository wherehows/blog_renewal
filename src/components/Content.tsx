import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

interface ContentProps {
  content: string | null
  list: Edge[]
  refactoredDatas: any
}

const Content = ({ content, refactoredDatas }: ContentProps) => {
  const listData = getRefactoredData(refactoredDatas)
  const sorted = listData.sort((a: any, b: any) => {
    return +new Date(b.date) - +new Date(a.date)
  })

  return (
    <Wrapper>
      {content ? (
        <MarkdownRenderer dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <DummyWrapper>
          {sorted.map(({ html, title, date, slug }: any) => (
            <ItemWrapper>
              <Button to={slug}>
                <Title>{title}</Title>
                <PostDate>{changeDateForm(date)}</PostDate>
                <Description>{extractContent(html)}</Description>
              </Button>
            </ItemWrapper>
          ))}
        </DummyWrapper>
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

const ItemWrapper = styled('li')(() => ({
  listStyleType: 'none',
  marginBottom: '2rem',
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

const Button = styled(Link)(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',
  padding: 0,
  cursor: 'pointer',
  color: 'black',
  textDecoration: 'none',
  outline: 'none',
  '&:hover': {
    textDecoration: 'none',
    color: 'black',
  },
  '&:active': {
    textDecoration: 'none',
    color: 'black',
  },
}))

const Title = styled('div')(() => ({
  textAlign: 'left',
  width: '100%',
  fontSize: '1.4rem',
  color: '#946225',
}))

const PostDate = styled('div')(() => ({
  fontSize: '0.9rem',
  textAlign: 'left',
  width: '100%',
  marginBottom: '0.4rem',
}))

const Description = styled('div')(() => ({
  fontSize: '0.9rem',
  textAlign: 'left',
  width: '100%',
  height: '4rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}))

const DummyWrapper = styled('ul')(() => ({
  padding: 0,
  marginTop: '1rem',
}))

const getRefactoredData = (data: any) =>
  data.reduce((res: any, { children, parent }: any) => {
    children.forEach((item: any) => {
      item['parent'] = parent
      res.push(item)
    })

    return res
  }, [])

const extractContent = (s: any) => {
  var span = document.createElement('span')
  span.innerHTML = s
  return span.textContent || span.innerText
}

const changeDateForm = (s: any) => {
  const sArray = s.split('-')
  return `${sArray[0].slice(2, 4)}년 ${sArray[1]}월 ${sArray[2]}일`
}

