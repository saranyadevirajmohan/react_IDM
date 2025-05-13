const ItemList = ({ items, onDeleteItem }) => {
    return (
        <div className="item-list">
            <h1>Item List</h1>
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <div>{item.item}</div>
                    <div>Quantity: {item.Quantity}</div>
                    <div>Price: ${item.price}</div>
                    <button onClick={() => onDeleteItem(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};
// export default IteamList