function Heading(props) {

    const handleClick = () =>{
        console.log("Saya di klik!")
    }

    // Hanya bisa return 1 elemen
    return (
       <>
        <h1 onClick={handleClick} >{props.angka}</h1>
        <h3 onClick={handleClick} >{props.nama}</h3>
       </>
    )
}

export default Heading