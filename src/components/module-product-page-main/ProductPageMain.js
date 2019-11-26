import React , {useState} from "react"
import "./ProductPageMain.css"

import ProductMedia from "../module-product-media/ProductMedia"
import ProductInfoMain from "../module-product-info-main/ProductInfoMain";

// TODO TRY TO DO IT NOT HARDCODED !!!!!

function ProductPageMain({imgsPath}){
    //  I was trying to make changing images dynamic but webpack can't handle dynamic require mechanism
    //
    //  https://stackoverflow.com/questions/38374344/require-file-with-a-variable-in-react-js
    //
    // const [currentImgNumber , setCurrentImgNumber ] =useState(1);
    // const  [imgDisplayed, setImgDisplated] = useState(`../web/images/${currentImgNumber}-bg-img-id-1.jpg`)
    // const previousImg = event => setCurrentImgNumber (currentImgNumber += 1);
    // const nextImg = event => setCurrentImgNumber (currentImgNumber -= 1);
    // imgDisplayed={ images.firstImg } previousImg={previousImg} nextImg={nextImg}

    let imgsPaths ={
        0 : require ("../web/images/1-bg-img-id-1.jpg"),
        1   : require ("../web/images/2-bg-img-id-1.jpg")
    }

    let navImgsPaths ={
        0 : require ("../web/images/1-sm-img-id-1.jpg"),
        1   : require ("../web/images/2-sm-img-id-1.jpg")
    }

    return(
        <div className="productPageMain">
            <ProductMedia imgsPaths={imgsPaths} navImgsPaths={navImgsPaths} />
            <ProductInfoMain />
        </div>
    )
}

export default ProductPageMain