import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-router-dom";
import {logOutAction}  from "../../features/auth/auth.action";
import { setLogOut } from "../../features/auth/auth.slice";
import { useNavigate } from "react-router-dom";

export default function useLogOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchLogOut = () => {
            dispatch(logOutAction())
                .then(unwrapResult)
                .then((res) => {
                    dispatch(setLogOut());
                    navigate("/login");
                })
    }

    return { fetchLogOut };
}
