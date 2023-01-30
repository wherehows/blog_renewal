import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

interface CategoryItem {
  folder: GrandParentData[keyof GrandParentData]
}

const CategoryItem = ({ folder }: CategoryItem) => {
  const { parent, children } = folder

  return (
    <ListWrapper>
      <FolderName>{parent}</FolderName>
      <ParentWrapper>
        {children.map((child, index) => (
          <ChildListWrapper key={index}>
            {'children' in child ? (
              <CategoryItem folder={child} />
            ) : (
              <LinkButton to={child.slug}>{child.subTitle}</LinkButton>
            )}
          </ChildListWrapper>
        ))}
      </ParentWrapper>
    </ListWrapper>
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
  margin: '0.14rem 0 0 0',
}))

const FolderName = styled('div')(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
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
    color: 'dark',
    fontWeight: 'bold',
  },

  '&:active': {
    textDecoration: 'none',
    color: 'dark',
  },
}))

const ChildListWrapper = styled('li')(() => ({
  listStyleType: 'none',
  padding: '0',
  margin: '0 0 0 1.8rem',
}))

