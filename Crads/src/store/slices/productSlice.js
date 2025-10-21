import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../../Custom/Api/fetchApi";

export const getAllProductAction = createAsyncThunk(
  "product/getAllProductAction",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await getAllProducts();
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getProductByIdAction = createAsyncThunk(
  "product/getProductByIdAction",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await getProductById(args);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addProductAction = createAsyncThunk(
  "product/addProductAction",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await addProduct(args);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  "product/deleteProductAction",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await deleteProduct(args);
      //   console.log(res.data);
      return args;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateProductAction = createAsyncThunk(
  "products/updateProductAction",
  async (args, thunkAPI) => {
     const { id, product } = args;
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await updateProduct(id,product);
      //   console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: "1",
        name: "Watch",
        price: "750",
      },
    ],
    errors: null,
    isLoading: false,
    product: {},
  },
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(getAllProductAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProductAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProductAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    });
    builder.addCase(getProductByIdAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductByIdAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(getProductByIdAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    });
    builder.addCase(addProductAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addProductAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = [...state.products, action.payload];
    });
    builder.addCase(addProductAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    });
    builder.addCase(deleteProductAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProductAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter((p) => p.id !== action.payload);
    });
    builder.addCase(deleteProductAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    });
    builder.addCase(updateProductAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateProductAction.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.products[index] = action.payload;
    });
    builder.addCase(updateProductAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    });
  },
});
export const productReducer = productSlice.reducer;
