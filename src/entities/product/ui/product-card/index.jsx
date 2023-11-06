import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Radio } from 'antd'
import Sizes from '../../../size/ui/size'
import { productModel } from '../..'

const ProductCard = ({ product }) => {
	const navigate = useNavigate()

	const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.id)

	const optionsColor = product?.colors?.map(color => ({label: color.name, value: color.id}))

	// console.log(optionsColor)
	
	const onChangeColorHandler = ({target: { value } }) => {
		setSelectedColor(value)
	}
	

	const { colorById } = productModel.useGetProductColorById({productId: product.id, colorId: selectedColor})

	console.log(colorById)
	
	return (
		<div>

			<Sizes activeSizes={colorById?.sizes} />

			<Radio.Group options={optionsColor} value={selectedColor} onChange={onChangeColorHandler} />

			<Button
				onClick={() => navigate('/')}
			>
				Назад
			</Button>
		</div>
	)
}

export default ProductCard