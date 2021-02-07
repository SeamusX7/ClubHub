import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; 
import reducer from './reducer';

export default function (){
    return configureStore({ reducer,
    middleware : [
        ...getDefaultMiddleware(),
        
                    ] });
     
}