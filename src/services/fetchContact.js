import axios from "axios";
import { useEffect, useReducer } from "react";

const INITIAL_STATE = { isLoading: true, data: [], isError: false };

function fetchReducer(state, { type, payload }) {
  switch (type) {
    case "LOADING":
      return { isLoading: true, data: [], isError: false };
    case "SUCCESS":
      return { isLoading: false, data: payload, isError: false };
    case "REJECT":
      return { isLoading: false, data: [], isError: payload };
    default:
      throw Error("Not action");
  }
}

export function fetchContact() {
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);
  const { isLoading, data, isError } = state;

  useEffect(() => {
    dispatch({ type: "LOADING" });
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:3000/contacts");
        dispatch({ type: "SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "REJECT", payload: "something went wrong" });
      }
    }
    fetchData();
  }, []);

  return { isLoading, data, isError };
}
