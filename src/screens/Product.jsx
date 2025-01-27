
import React from "react"
import { useSelector } from "react-redux"
import FilterableProductTable from "../components/Product/FilterableProductTable"

const Product = () => {
    const PRODUCTS = useSelector(state => state.productr.products)

    return (
        <>
            <FilterableProductTable products={PRODUCTS} />
        </>
    )
}

export default Product

