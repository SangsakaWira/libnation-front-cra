function Container({ children }) {
    return (
        <section>
            <div className="container">
                <main>{children}</main>
            </div>
        </section>
    )
}

export default Container