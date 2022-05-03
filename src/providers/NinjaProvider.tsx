import React, {Children, createContext, useCallback, useEffect, useMemo, useState} from "react";
import {NinjaContextProps, NinjaProviderProps} from "../types/Context";

const defaultState: NinjaContextProps = {
	currentNameStep: "",
	currentStep: 0,
	totalSteps: 0
}

export const NinjaConext = createContext<NinjaContextProps>(defaultState);


export const NinjaProvider: React.FC<NinjaProviderProps> = ({children}) => {
	const [currentNameStep, setCurrentNameStep] = useState<string>('');
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [totalSteps, setTotalSteps] = useState<number>(0);
	
	const getChildren = useMemo(() => Children.toArray(children), [children]);
	
	const value: NinjaContextProps = {
		currentNameStep,
		totalSteps,
		currentStep
	}
	
	return (
		<NinjaConext.Provider value={value}>
			{children}
		</NinjaConext.Provider>
	)
	
}