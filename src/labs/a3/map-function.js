function MapFunction(){
    let numberArray1 = [1, 2, 3, 4, 5];
    numberArray1.push(6);
    numberArray1.splice(2, 1);
    const q = [1, 2, 3, 4, 5]
    const w = q.map(a=>a===3? 6:a)
    const q2 = {a:123, b:234}

    const obj = {
        prop1: 2,
        prop2: 3,
        prop3: 4
    }

    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    const w2 = {a:q2.a, c:456, b:345}



    return (
        <div>
            <h3>Map</h3>
            squares = {squares}<br />
            cubes = {cubes}<br />

        </div>
    )
}
export default MapFunction