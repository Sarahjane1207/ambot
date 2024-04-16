function Card2(props) {

    return(
        <div className="grid grid-cols-2"> 
            {

        props.datav.map( (items, index) => {
            return (
                <div>
                <img className="w-[800px] h-[300px] border-solid border-2 mx-5" src={items.image} alt="" />
                </div>
            )
        })
            }
        </div>
    )
}

export default Card2