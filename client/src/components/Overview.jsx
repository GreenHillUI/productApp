import React from "react";
import axios from 'axios';
import StyleSelector from "./StyleSelector.jsx"
import {FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa' ;
import {BsStar, BsStarHalf, BsStarFill, BsTelephoneInbound} from 'react-icons/bs' ;


class Overview extends React.Component {
    constructor(props){
        super(props);
        
    

        //Using preset state info until controller interaction is set up. 
        /*this.state = {
            //Simulated GET from /reviews/meta/?product_id=:product_id. Ratings obecject necessary for star rating, leaving it all in because I don't know what I'll need later. Since star ratings are shared it may be good to modularize handling their calculation and even rendering.
            reviewMetaData: {
                "product_id": "40345",
                "ratings": {
                    "1": "2",
                    "2": "2",
                    "3": "6",
                    "4": "2",
                    "5": "21"
                },
                "recommended": {
                    "false": "5",
                    "true": "28"
                },
                "characteristics": {
                    "Quality": {
                        "id": 135223,
                        "value": "3.8636363636363636"
                    }
                }
            },
        } */
    }

    //Finds and returns average of reviews
    //TODO: Handle edge case for no reviews in accordance with business docs
    //Terminate repeating decimal
    reviewAverage() {
        var total = 0;
        var weightedSum = 0;
        let ratings = this.state.reviewMetaData.ratings;
        for (var i = 1; i < 6; i++ ) {
            total += parseInt(ratings[i]);
            weightedSum += i * ratings[i]
        }
        return (weightedSum / total)
    }

    

    generateStars(reviewAverage) {
        let filledStars = Math.trunc(reviewAverage);
        let filledRemainder = reviewAverage % 1;
        let emptyStars = 5 - filledStars;
        let starBar = [];
        for (var i = 0; i < filledStars; i++) {
            starBar.push(<BsStarFill/>)
        } 
        
        if (filledRemainder >= 0.5) {
            starBar.push(<BsStarHalf/>)
        }
        
        for (var i = 0; i < emptyStars; i++) {
            starBar.push(<BsStar/>)
        } 

        return starBar;
    }

    componentDidMount() {
        axios.get('/products/40348')
        .then(response => {
            this.setState({productInfo: response.data})
        })
        .catch((err) => {console.log(`Error loading product info`)})
        
        axios.get('/products/40348/styles')
        .then(response => {
            this.setState({styles: response.data.results})
        })

    }
    

//Add section for product features if they exist
    render () {
        let productInfo = this.state.productInfo;
        let styles = this.state.styles;
       
        return (
            //Coming back to image gallery after writing a carousel
            <div>
                
            <h2>{productInfo ? productInfo.category : `Loading`}</h2>
            <h1>{productInfo ? productInfo.name : `Loading`} </h1>
            <div>***IMAGE GALLERY PLACEHOLDER*** </div> 
            <div>{productInfo ? productInfo.slogan : `Loading`}</div>
            <div><p>{productInfo ? productInfo.description : `Loading`} </p></div>
       
            <div>Styles:<br/>
            
            <StyleSelector styles={styles ? styles : undefined}/>
                 <div>Review Score: {this.generateStars(this.reviewAverage())}</div>
            </div>
            <div>Price:HARDCODE </div>

            <div><FaFacebookSquare/> <FaInstagram/> <FaTwitter/> <FaPinterest/></div>
            </div>
        )
    }

}

export default Overview;