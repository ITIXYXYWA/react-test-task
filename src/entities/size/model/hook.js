import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllSizes,
  fetchSizeById,
  selectAllSizes,
  selectSizeById,
} from "./size";
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

export const useGetSizeById = (sizeId) => {
  const dispatch = useDispatch();

  const sizeById = useSelector((state) => selectSizeById(state, sizeId));

  useEffect(() => {
    if (sizeId) {
      dispatch(fetchSizeById(sizeId));
    }
  }, [dispatch, sizeId]);

  return {
    sizeById,
  };
};
