import React from 'react'
import { getProducts } from '../../../../shared/api/product/api'
import { useDispatch } from 'react-redux'
import { productModel } from '../..'

const ProductList = () => {
	console.log(getProducts().then(value => console.log(value)))

	useDispatch()(productModel.fetchProductList())

	
	return (
		<div>ProductList</div>
	)
}

export default ProductList