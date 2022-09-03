import { useDispatch } from "react-redux";
import { quoteAPI } from "../../provider/api";

export const getData = () => async() => {
    quoteAPI.then(
        res => res.json()
    ).then(
        data => useDispatch({
            type : "GET_DATA",
            payload : data
        })
    );
};