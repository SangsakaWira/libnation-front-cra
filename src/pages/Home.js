import BookCard from "../components/BookCard"
import { SearchBar } from "../components/SearchBar"

const Home = () => {
    return (
        <>
            <SearchBar title="Search All Books" ></SearchBar>
            <div className="book">
                <BookCard data={{
                    img: require("../assets/images/image-2.png"),
                    title: "Harry Potter",
                    description: "JK Rowling Fifth Book",
                    price: "Rp 15.000"
                }}></BookCard>
            </div>
        </>
    )
}

export default Home