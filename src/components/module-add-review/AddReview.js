import React , {useState} from "react"
import "./AddReview.css"

import StarRanking from "../module-star-ranking/StarRanking"

function AddReview({itemName}){
    return(
        <div className="addReviewContainer">
            <p className="addReviewContainer__headerLabel">You're reviewing:</p>
            <p className="addReviewContainer__header">{itemName}</p>
            <form className="addReviewContainer__form">
                <p className="addReviewContainer__form--label">Your Rating *</p>
                <p>Rating</p>
                <StarRanking itemRanking="0" />
           
                <label className="addReviewContainer__form--label" for="NickNameInput">Nickname *</label>
                <input className="addReviewContainer__form--input" id="itemRanking"></input>

                <label className="addReviewContainer__form--label" for="summaryInput"> Summary *</label>
                <input className="addReviewContainer__form--input" id="summaryInput"></input>

                <label className="addReviewContainer__form--label" for="reviewInput"> Review *</label>
                <textarea className="addReviewContainer__form--input" id="reviewInput"></textarea>

                <button className="addReviewContainer__form--button"> Submit Review</button>
            </form>
        </div>
    )
}

export default AddReview;