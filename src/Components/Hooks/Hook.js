import {useState} from "react";
function Hook() {
    const [text, setText] = useState("Hello");

    const handleChange = (e) => {
        setText(e.target.value);
    }
    return <div className="bg-[#f8f8f8]">
        <input type="text" onChange={handleChange} className="b-black"></input>
        <p className="my-[10px]">You typed: {text}</p>
        <button onClick={() => setText("Hello")} className="bg-green-400 p-2">Reset</button>
    </div>
}

export default Hook;