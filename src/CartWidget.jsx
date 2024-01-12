import Cart from './assets/cart.svg'

const CartWidget = () => {
    return (
            <button type="button" className="btn btn-light float-right">
                <img src={Cart} alt="Cart" width={50} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>   
    )
}

export default CartWidget;