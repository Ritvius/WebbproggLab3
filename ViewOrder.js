import {useOutletContext} from 'react-router-dom'

function ViewOrder() {
    const [myOrderHandler, , , removeSaladButton] = useOutletContext();


    const onClickRemove = function (salad) {
        removeSaladButton(salad);
    }

    const onClickCopy = function (salad) {
        return;
    }

    const onClickChange = function (salad) {
        return;
    }

    const salads = myOrderHandler['basket'].map((salad) =>
        <div>
            <br />
            <div className='bg-white border border-black' key={salad.uuid}>
                {salad.displayIngredients()}, pris: {salad.getPrice()} kr
            </div>
            <button style={{ width: 'auto', margin: 5 }} type="button" className="btn btn-outline-primary" onClick={() => onClickRemove(salad.uuid)}>
                Ta bort sallad
            </button>
            <button style={{ width: 'auto', margin: 5 }} type="button" className="btn btn-outline-danger">
                Ändra sallad
            </button>
            <button style={{ width: 'auto', margin: 5 }} type="button" className="btn btn-outline-success" onClick={() => onClickCopy(salad.uuid)}>
                Kopiera sallad
            </button>
        </div>
    );

    return (
        <div className="container col-12">
            <div className="row h-200 p-5 bg-light border rounded-3">
                <h3>Din beställning</h3>
                <div className='bg-white border' style={{ width: 'auto' }}>
                    <b>Totalt pris: {myOrderHandler.calculatePrice()} kr</b>
                </div>
                {salads}
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default ViewOrder;