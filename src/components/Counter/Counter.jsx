"use client";

import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            count : {count}
            <br />
            <button className="btn btn-sm" onClick={() => setCount(count + 1)}>increase</button>
            <button className="btn btn-sm" onClick={() => setCount(count - 1)}>decrease</button>
        </div>
    );
};

export default Counter;