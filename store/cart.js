import _ from 'lodash';

const state = () => ({
    cart: []
});

const getters = {
    totalPrice: state => {
        return _.sumBy(state.cart, product => {
            return product.qty * product.price
        });
    },
    cart: state => {
        return state.cart;
    },
    cartQty: state => state.cart.length
};

const actions = {};

const mutations = {
    ADD_PRODUCT(state, payload) {
        const record = state.cart.find(p => p.id === payload.id)
        if (!record) {
            let product = {
                qty: 1,
                id: payload.id,
                name: payload.title,
                price: Number(payload.price),
                image: payload.featured_image.large,
            };
            state.cart = [...state.cart, product];
        } else {
            record.qty++;
        }
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    SET_CART(state) {
        if (process.client) {
            state.cart = JSON.parse(localStorage.getItem('cart')) || []
        } else {
            state.cart = [];
        }
    },
    REMOVE_PRODUCT(state, id) {
        state.cart = state.cart.filter(product => product.id !== id);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    REDUCE_PRODUCT(state, id) {
        const record = state.cart.find(p => p.id === id)
        record.qty--;
        if (record.qty === 0) {
            state.cart = state.cart.filter(product => product.id !== id);
        }
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }
};

export default {
    mutations,
    getters,
    actions,
    state
}