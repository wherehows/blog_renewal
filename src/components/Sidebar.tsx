import React from 'react'
import styled from '@emotion/styled'
import CategoryList from './CategoryList'

interface CategoryProps {
  refactoredDatas: RefactoredData[]
  onClickCategoryItem: (id: string) => void
}

const Sidebar = ({ refactoredDatas, onClickCategoryItem }: CategoryProps) => {
  return (
    <Wrapper>
      <CategoryList
        refactoredDatas={refactoredDatas}
        onClickCategoryItem={onClickCategoryItem}
      />
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled('div')(() => ({
  width: '17rem',
  padding: '0 1rem 0 25%',
  height: '100vh',
  backgroundColor: '#fff5e6',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 1,
  color: '#ba7f4a',

  '@media screen and (max-width: 1484px)': {
    padding: '0 1rem 0 7%',
  },
}))

