import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout, Button } from 'antd'

import { ProductsList } from './products-list'
import { ProductCard } from './product-card'
import { Basket } from './basket'

const { Content, Header, Footer } = Layout

const headerStyle = {
  textAlign: 'right',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
}

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
}; 

export const Routing = () => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			{/* в идеале нужно вынести header, content, footer в src/shared, но в тестовом можно оставить тут :)) */}
			<Header style={headerStyle} >
				<Button>корзина</Button>
			</Header>
			<Content style={contentStyle} >
				<Routes>
					<Route path='/' element={<ProductsList />} />
					<Route path='/:productId' element={<ProductCard />} />
					<Route path='/basket' element={<Basket />} />
				</Routes>
			</Content>
			<Footer style={footerStyle} >
				интернет магазин
			</Footer>
		</Layout>
	)
}