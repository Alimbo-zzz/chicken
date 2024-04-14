import { configureStore } from '@reduxjs/toolkit';

// slices
import * as admin from './adminSlice';


const reducers = {
	admin: admin.default,
};

const actions = {
	...admin,
	default: ''
};





export default configureStore({
	reducer: { ...reducers }
})

export {
	reducers,
	actions
};