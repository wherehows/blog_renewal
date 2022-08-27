import React from 'react'
import styled from '@emotion/styled'
import CategoryItem from './CategoryItem'

interface CategoryProps {
  refactoredDatas: RefactoredData[]
  onClickCategoryItem: (id: string) => void
}

const CategoryList = ({
  refactoredDatas,
  onClickCategoryItem,
}: CategoryProps) => {
  return (
    <Wrapper>
      {refactoredDatas.map(refactoredData => {
        return (
          <CategoryItem
            refactoredData={refactoredData}
            onClickCategoryItem={onClickCategoryItem}
          />
        )
      })}
    </Wrapper>
  )
}

export default CategoryList

const Wrapper = styled('ul')(() => ({
  width: '100%',
  height: '100vh',
  backgroundColor: 'transparent',
  position: 'relative',
  padding: 0,
}))
