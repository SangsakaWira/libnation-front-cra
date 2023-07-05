const Checkout = (props) => {
    return (
        <>
            <h1 class="heading-1">Checkout</h1>

            <div class="checkout">
                <div class="checkout-detail">
                    <div class="checkout-list">
                        <div class="checkout-card">
                            <div class="checkout-card-thumbnail"></div>
                            <div class="checkout-card-description">
                                <h3 class="heading-2">Book Title</h3>
                                <p>Book Small Description</p>
                                <p class="heading-2">$ 15.00</p>
                            </div>
                        </div>
                        <div class="checkout-card">
                            <div class="checkout-card-thumbnail"></div>
                            <div class="checkout-card-description">
                                <h3 class="heading-2">Book Title</h3>
                                <p>Book Small Description</p>
                                <p class="heading-2">$ 15.00</p>
                            </div>
                        </div>
                        <div class="checkout-card">
                            <div class="checkout-card-thumbnail"></div>
                            <div class="checkout-card-description">
                                <h3 class="heading-2">Book Title</h3>
                                <p>Book Small Description</p>
                                <p class="heading-2">$ 15.00</p>
                            </div>
                        </div>
                    </div>

                    <p class="heading-2">Total: <span>$ 45.00</span></p>

                    <button class="btn btn-primary">Proceed</button>
                </div>
                <div class="checkout-wallet">
                    <div class="checkout-wallet-card">
                        <h3 class="heading-2">Your Wallet</h3>
                        <h2 class="wallet-price">$ 150.00</h2>
                    </div>

                    <button class="btn btn-primary btn-rounded">Top Up Wallet</button>
                </div>
            </div>
        </>
    )
}

export default Checkout