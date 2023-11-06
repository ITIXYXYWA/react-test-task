import { useDispatch, useSelector } from "react-redux";
import { fetchAllSizes, selectAllSizes } from "./size";
import { useEffect } from "react";

export const useGetSizes = () => {
  const dispatch = useDispatch();

  const sizesList = useSelector(selectAllSizes);

  useEffect(() => {
    dispatch(fetchAllSizes());
  }, [dispatch]);

  return {
    sizesList,
  };
};
