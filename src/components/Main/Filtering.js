import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { productActions } from '../../store/product-slice'
import { useDispatch } from 'react-redux'
import classes from './Filtering.module.css'

const Filtering = () => {
  // const [filter, setFilter] = useState('category')
  const [filterValue, setFilterValue] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    const getFilteredData = async () => {
      if (filterValue) {
        const filteredProducts = await axios.get(
          'http://localhost:8800/api/v1/products/?category=' + filterValue,
        )
        const currentItems = await filteredProducts.data
        dispatch(
          productActions.filterProducts({
            items: currentItems.data.products,
            totalQuantity: currentItems.results,
          }),
        )
      } else {
        const filteredProducts = await axios.get(
          'http://localhost:8800/api/v1/products/',
        )
        const currentItems = await filteredProducts.data
        dispatch(
          productActions.filterProducts({
            items: currentItems.data.products,
            totalQuantity: currentItems.results,
          }),
        )
      }
    }
    getFilteredData()
  }, [filterValue, dispatch])

  const updateFilter = (e) => {
    setFilterValue(e.target.value)
  }
  const updateClearFilters = () => {
    setFilterValue('')
  }
  return (
    <div className={classes.filter}>
      <label>Category</label>
      <div>
        <input
          type="checkbox"
          name="Men"
          value="Men"
          id="Men"
          checked={filterValue === 'Men'}
          onChange={updateFilter}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Women"
          value="Women"
          id="Women"
          checked={filterValue === 'Women'}
          onChange={updateFilter}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Kids"
          value="Kids"
          id="Kids"
          checked={filterValue === 'Kids'}
          onChange={updateFilter}
        />
        <label>Kids</label>
      </div>
      <button onClick={updateClearFilters}>Clear Filters</button>
    </div>
  )
}

export default Filtering
