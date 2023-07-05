const EditBook = (props) => {

    const onSubmit = (events)=>{
        const {title,description,price} = events.target
        console.log({title:title.value,description:description.value,price:price.value})
        events.preventDefault()
    }

    return (
        <>
            <h1 class="heading-2">Add New Book</h1>
            <div class="add-book">
                <form onSubmit={onSubmit} class="add-book-form">
                    <div class="input-field">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title"></input>
                    </div>
                    <div class="input-field">
                        <label for="description">Description</label>
                        <input type="text" name="description" id="description" autocomplete="off"></input>
                    </div>
                    <div class="input-field">
                        <label for="price">Price</label>
                        <input type="number" name="price" id="price"></input>
                    </div>
                    <div class="button-wrap">
                        <button class="btn btn-tertiary">UPLOAD FILE</button>
                        <button class="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
                <div class="add-book-preview"></div>
            </div>
        </>
    )
}

export default EditBook