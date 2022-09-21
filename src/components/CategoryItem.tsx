import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

interface CategoryItem {
  refactoredData: RefactoredData
  onClickCategoryItem: (id: string) => void
}

const CategoryItem = ({
  refactoredData,
  onClickCategoryItem,
}: CategoryItem) => {
  const { parent, children } = refactoredData
  return (
    <>
      {!parent ? (
        children.map(({ subTitle }: ChildDocument) => {
          return <ListWrapper>{subTitle}</ListWrapper>
        })
      ) : (
        <>
          <ListWrapper>
            <FolderName>{parent}</FolderName>
          </ListWrapper>
          <ParentWrapper>
            {children.map(({ subTitle, id, slug }) => {
              return (
                <ChildListWrapper key={id}>
                  <LinkButton onClick={() => onClickCategoryItem(id)} to={slug}>
                    {subTitle}
                  </LinkButton>
                </ChildListWrapper>
              )
            })}
          </ParentWrapper>
        </>
      )}
    </>
  )
}

export default CategoryItem

const ListWrapper = styled('li')(() => ({
  listStyleType: 'none',
  padding: '0',
  margin: '0',
}))

const ParentWrapper = styled('ul')(() => ({
  padding: 0,
  margin: '0.14rem 0 1.1rem 0',
}))

const FolderName = styled('div')(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
}))

const Button = styled('button')(() => ({
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  padding: '0',
}))

const LinkButton = styled(Link)(() => ({
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  padding: '0',
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

const ChildListWrapper = styled('li')(() => ({
  listStyleType: 'none',
  padding: '0',
  margin: '0 0 0 1.8rem',
}))

