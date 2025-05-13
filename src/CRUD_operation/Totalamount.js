import react from'react'
const totalAmount=({total})=>{
    return(
        <div className="total">
            <h3>Total Amount:$(total.tofixed(2)}</h3>
            </div>

    )
}
// export default totalAmount;