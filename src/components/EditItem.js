import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import { context } from '../context/context';
import "./EditItem.css";
function EditItem(props) {
    const { id } = props.location;

    let history = useHistory();

    const ctx = useContext(context);

    const [isInpFocus, setIsInpFocus] = useState(false);
    const [isTxtFocus, setIsTxtFocus] = useState(false);

    const [expectedId, setExpectedId] = useState(id);

    const [inp, setInp] = useState("");
    const [txt, setTxt] = useState("");

    useEffect(() => {
        if (inp === "") {
            setIsInpFocus(true);
            setInp(ctx.data[id - 1].title);
        }
        if (txt === "") {
            setIsTxtFocus(true);
            setTxt(ctx.data[id - 1].body);
        }
    }, []);

    const handleInpFocus = () => {
        setIsInpFocus(true);
    }

    const handleInpBlur = (e) => {
        if (e.target.value === "") {
            setIsInpFocus(false);
        }
    }

    const handleTxtFocus = () => {
        setIsTxtFocus(true);
    }

    const handleTxtBlur = (e) => {
        if (e.target.value === "") {
            setIsTxtFocus(false);
        }
    }

    const handleInpChange = (e) => {
        setInp(e.target.value);
    }

    const handleTxtChange = (e) => {
        setTxt(e.target.value);
    }

    const handleSave = () => {
        const tempData = ctx.data;
        tempData[id - 1].title = inp;
        tempData[id - 1].body = txt;
        ctx.updateData(tempData);
        history.push('/');
    }

    return (
        <div className="edit-item">
            <div className="edit-inp-1">
                <label className={isInpFocus ? "change" : ""}>Title</label>
                <input type="text" onFocus={handleInpFocus} onBlur={handleInpBlur} value={inp} onChange={handleInpChange} />
            </div>
            <div className="edit-inp-2">
                <label className={isTxtFocus ? "change" : ""}>Description</label>
                <textarea name="" id="" cols="30" rows="10"
                    onFocus={handleTxtFocus} onBlur={handleTxtBlur} value={txt} onChange={handleTxtChange}></textarea>
            </div>
            <div className="edit-item-btns">
                <Link to="/">Cancel</Link>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default EditItem
