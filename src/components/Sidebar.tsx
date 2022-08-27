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
  width: '14rem ',
  paddingLeft: '27vw',
  paddingRight: '1rem',
  height: '100vh',
  backgroundColor: '#f8f8f4',
  position: 'fixed',
}))
