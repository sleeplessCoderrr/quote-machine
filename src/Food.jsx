function Food(){

    const fruit = ['Banana', 'Apple', 'Orange', 'Avocado', 'Pineapple']
    return (
        <ul>
            {fruit.map((e, index) => (
                <li key={index}>{e}</li>
            ))}
        </ul>
    );
}

export default Food;