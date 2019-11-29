import React from "react"
import "./RelatedProducts.css"

import RelatedProductPreview from "../module-related-products-preview/RelatedProductPreview"

function RelatedProducts() {
    return(
        <div className="relatedProducts">
            <p className="relatedProducts_heading">Related Products</p>
            <div className="relatedProductPreviewContainer">
                <RelatedProductPreview />
                <RelatedProductPreview />
                <RelatedProductPreview />
                <RelatedProductPreview />
            </div>

        </div>
    )
}

export default RelatedProducts