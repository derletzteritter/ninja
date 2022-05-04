import React, {createContext, useContext, useState} from "react";
import {NamedNinjaStep, NinjaContextProps, NinjaProviderProps, NinjaStep, NinjaStepContext} from "../types/Context";
export const NinjaContext = createContext<NinjaContextProps>(null);


export const NinjaProvider: React.FC<NinjaProviderProps> = ({children}) => {
	const [steps, setSteps] = useState<NinjaStep[]>([]);
	const [namedSteps, setNamedSteps] = useState<NamedNinjaStep[]>([]);
	const [currentStep, setCurrentStep] = useState<number>(0);
	
	
	const nextStep = () => {
		if (currentStep + 1 === steps.length) return;
		setCurrentStep((currStep) => currStep + 1);
	}
	
	const previousStep = () => {
		if (currentStep === 0) return;
		setCurrentStep((currStep) => currStep - 1);
	}
	
	const toStepByName = (name: string) => {
		const targetStep = namedSteps.find((step) => step.name === name)
		setCurrentStep(targetStep.id);
	}
	
	const toStep = (id: number) => {
		setCurrentStep(id);
	}
	
	const value: NinjaContextProps = {
		steps,
		setSteps,
		namedSteps,
		setNamedSteps,
		currentStep,
		setCurrentStep,
		nextStep,
		previousStep,
		toStep,
		toStepByName,
	}
	
	return (
		<NinjaContext.Provider value={value}>
			{children}
		</NinjaContext.Provider>
	)
}

export const useNinjaContext = () => useContext<NinjaContextProps>(NinjaContext);
export const useNinjaSteps = (): NinjaStepContext => {
	const { nextStep, previousStep, toStep, toStepByName } = useNinjaContext();
	return { nextStep, previousStep, toStep, toStepByName }
}