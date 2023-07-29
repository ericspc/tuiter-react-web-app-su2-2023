import React from "react";
import { useParams } from "react-router-dom";
function Asd() {
    const {zxc, xcv} = useParams()
    const qwe = parseInt(zxc)
    const wer = parseInt(xcv)
    return(<h1>{zxc - xcv}</h1>)
}
export default Asd