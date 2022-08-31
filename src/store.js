import { configureStore } from '@reduxjs/toolkit';
import { logger } from './features/middleware';
import dataReducer from './features/data/dataSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        scores: dataReducer,
        odds: dataReducer,
        sport: dataReducer
    }
    , middleware: [logger]
});