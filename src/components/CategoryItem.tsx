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
        <>
          <ListWrapper>
            <FolderName>{parent}</FolderName>
          </ListWrapper>
          <ParentWrapper>
            {children.map(({ subTitle, id }) => {
              return (
                <ChildListWrapper key={id}>
                  <Button onClick={() => onClickCategoryItem(id)}>
                    {subTitle}
                  </Button>
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

const ChildListWrapper = styled('li')(() => ({
  listStyleType: 'none',
  padding: '0',
  margin: '0 0 0 1.8rem',
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

