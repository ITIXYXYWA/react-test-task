import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductById,
  fetchProductColorByColorId,
  selectProductById,
  selectProductColorById,
  selectProductStatusById,
  selectStatusProductColorById,
} from "./product";
import { useEffect } from "react";
import { requestStatuses } from "../../../shared/config";

export const useGetProductById = (id) => {
  const dispatch = useDispatch();

  const productById = useSelector((state) => selectProductById(state, id));
  const status = useSelector((state) => selectProductStatusById(state, id));

  useEffect(() => {
    if (id && status !== requestStatuses.success) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, status, id]);

  return {
    productById,
  };
};

export const useGetProductColorById = ({ productId, colorId }) => {
  const dispatch = useDispatch();

  const colorById = useSelector((state) =>
    selectProductColorById(state, productId, colorId),
  );
  const status = useSelector((state) =>
    selectStatusProductColorById(state, productId, colorId),
  );

  useEffect(() => {
    if (productId && colorId && status !== requestStatuses.success) {
      dispatch(
        fetchProductColorByColorId({
          productId,
          colorId,
        }),
      );
    }
  }, [dispatch, status, productId, colorId]);

  const isSuccess = status === requestStatuses.success;

  return {
    colorById,
    isSuccess,
  };
};
