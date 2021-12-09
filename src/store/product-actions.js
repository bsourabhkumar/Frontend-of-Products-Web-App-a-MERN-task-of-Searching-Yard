import { productActions } from './product-slice'
import axios from 'axios'

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8800/api/v1/products')
      //   const response = await fetch('http://localhost:8800/api/v1/products')
      //   if (!response.ok) {
      //     throw new Error('Could not fetch product data!')
      //   }
      const data = await response.data
      return data
    }
    try {
      const productData = await fetchData()
      console.log(productData)
      dispatch(
        productActions.fetchProducts({
          items: productData.data.products || [],
          totalQuantity: productData.results,
        }),
      )
    } catch (error) {
      console.log('Error occured', error)
    }
  }
}
