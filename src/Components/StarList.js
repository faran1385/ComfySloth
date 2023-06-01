//getting fill star icon
import {BsStarFill} from "react-icons/bs"
//getting half fill star icon
import {BsStarHalf} from "react-icons/bs"
//getting empty star icon
import {BsStar} from "react-icons/bs"

export function StarList(props) {
    //getting the product rate from 10
    const {starScore} = props
    //this is an object for that we can map on the star
    let starStaticObject = [{}, {}, {}, {}, {}]
    return (
        <>
            {starStaticObject.map((star, index) => {
                if (starScore - (index + 1) * 2 >= 0 && starScore - (index + 1) * 2 !== 1) {
                    return <BsStarFill style={{color: "rgb(255, 185, 0)"}}/>
                } else if (starScore - (index + 1) * 2 === 1) {
                    return <BsStarHalf style={{color: "rgb(255, 185, 0)"}}/>
                } else {
                    return <BsStar style={{color: "rgb(255, 185, 0)"}}/>
                }
            })}
        </>
    )
}