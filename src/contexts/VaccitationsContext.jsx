import React, { createContext, useReducer } from 'react';
import VaccinationReducer, { VaccinationDataInitialState } from '../reducers/VaccinationReducer.resucer';

export const VaccinationContext = createContext();

const VaccinationContextProvider = (props) => {
    const [contextData, dispatchContextData] = useReducer(VaccinationReducer, VaccinationDataInitialState);

    return (
        <VaccinationContext.Provider value={ { contextData, dispatchContextData } }>
            {props.children }
        </VaccinationContext.Provider>
    );
}; 

export default VaccinationContextProvider;