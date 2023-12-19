import { configureStore } from "@reduxjs/toolkit";
import transferReducer from "/Users/razumova/aviasales/src/store/transferSlice.js";
import ticketsSlice from "/Users/razumova/aviasales/src/store/ticketsSlice.js";

export default configureStore({
  reducer: {
    transfers: transferReducer,
    tickets: ticketsSlice,
  },
});
