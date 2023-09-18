const Utility = {

    getNumberFromAmount: (amount, currency) => {
        return parseInt(amount.replace(currency, '').replace(','));
    }
}

export default Utility;