import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            Count: {count}
            <button onClick={increaseCount}>increase</button>
        </div>
    );
}

export default Counter;