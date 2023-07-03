const BookCard = (props) => {
    return (
        <>
            <div className="book-card">
                <div className="book-card-image">
                    <img src={props.data.img} alt={props.data.description} />
                </div>
                <div className="book-card-detail">
                    <h2 className="heading-2">{props.data.title}</h2>
                    <p>{props.data.description}</p>
                    <p className="heading-2">{props.data.price}</p>
                </div>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </>
    )
}

export default BookCard