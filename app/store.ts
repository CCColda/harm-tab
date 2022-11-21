import { configureStore } from '@reduxjs/toolkit'
import { IndicesSlice } from './slices/IndicesSlice';
import { InsertSlice } from './slices/InsertSlice';
import { LayoutsSlice } from './slices/LayoutsSlice';
import { SheetSlice } from './slices/SheetSlice';
import { StatusSlice } from './slices/StatusSlice';

const store = configureStore({
	reducer: {
		layouts: LayoutsSlice.reducer,
		indices: IndicesSlice.reducer,
		insert: InsertSlice.reducer,
		sheet: SheetSlice.reducer,
		status: StatusSlice.reducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export default store;