import { unwrapResult } from "@reduxjs/toolkit";
import {logOutAction}  from "../../features/auth/auth.action";
import { setLogOut } from "../../features/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function useLogOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchLogOut = () => {
        dispatch(setLogOut())
                // .then(unwrapResult)
                .then((res) => {
                    // dispatch(setLogOut());
                    navigate("/login");
                })
    }

    return { fetchLogOut };
}
