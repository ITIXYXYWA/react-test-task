import React from 'react'
import { sizeModel } from '..'

import { Radio } from 'antd'

const Sizes = ({ activeSizes, selectedSize, onSelectSize}) => {
	const { sizesList } = sizeModel.useGetSizes()

	const sizesOptions = sizesList.map(size => ({
		value: size.id,
		label: size.label,
		// неоптимизированное решение. Стоит переписать на более лаконичное.
		disabled: !activeSizes?.find(el => el === size.id) ? true : false }
	))
	
	return (
		<Radio.Group options={sizesOptions} value={selectedSize} onChange={onSelectSize} optionType='button' />
	)
}

export default Sizes