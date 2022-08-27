import React from 'react'
import styled from '@emotion/styled'

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
        <ListWrapper>
          <ListWrapper>
            <FolderName>{parent}</FolderName>
          </ListWrapper>
          <ParentWrapper>
            {children.map(({ subTitle, id }) => {
              return (
                <ListWrapper>
                  <Button onClick={() => onClickCategoryItem(id)}>
                    {subTitle}
                  </Button>
                </ListWrapper>
              )
            })}
          </ParentWrapper>
        </ListWrapper>
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
  padding: '0.1rem 0 0.1rem 1.2rem',
}))

const FolderName = styled('div')(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontWeight: 'bold',
}))

const Button = styled('button')(() => ({
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.8rem',
  padding: '0',
}))

// const StyledLink = styled(Link)(() => ({
//   color: 'black',
//   textDecoration: 'none',
//   outline: 'none',
//   '&:hover': {
//     textDecoration: 'none',
//     color: '#fff',
//     backgroundColor: '#f59000',
//   },
//   '&:active': {
//     textDecoration: 'none',
//     color: '#fff',
//     backgroundColor: '#f59000',
//   },
// }))
