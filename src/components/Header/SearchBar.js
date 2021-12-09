import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const SearchBar = () => {
  const searchTerms = [
    'Shirt',
    'Shoes',
    'Jacket',
    'Saree',
    'Ethnic dress',
    'Nike',
    'Khadims',
    'Adidas',
    'Shoppers Stop',
  ]
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={searchTerms}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search Products" />
        )}
      />
    </div>
  )
}

export default SearchBar
