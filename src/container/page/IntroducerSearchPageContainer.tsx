import * as React from 'react'
import { useParams } from 'react-router'
import { IntroducerSearchPage } from '../../component/page/IntroducerSearchPage'

export const IntroducerSearchPageContainer = () => {
  const { category } = useParams<{ category: string }>()

  return <IntroducerSearchPage
    category={category}
  />
}
