function Card(props) {
    return(
        <div className="grid grid-cols-4 mx-5"> 
            {

        props.datav.map( (items, index) => {
            return (
                <div className="flex">
                <img className="w-[100px] h-[100px] p-4 rounded-full mt-5 grid-cols-4" src={items.image} alt="" />
                <div className="mt-10">
                <h1 className="font-bold">{items.firstName}</h1>
                <h1>{items.title}</h1>
                </div>
                </div>
            )
        })
            }
        </div>
    )
}
export default Card