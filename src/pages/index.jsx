import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ProductsList } from './products-list'
import { ProductCard } from './product-card'
import { Basket } from './basket'

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<ProductsList />} />
			<Route path='/:productId' element={<ProductCard />} />
			<Route path='/basket' element={<Basket />} />
		</Routes>
	)
}