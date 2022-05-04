import React from "react";

export type NinjaProviderProps = {
	children: React.ReactNode;
}

export type NinjaStep = Record<number, string>
export type NamedNinjaStep = {
	id: number;
	name: string;
}

export interface NinjaContextProps {
	steps: NinjaStep[];
	setSteps: React.Dispatch<React.SetStateAction<NinjaStep[]>>;
	namedSteps: NamedNinjaStep[];
	setNamedSteps: React.Dispatch<React.SetStateAction<NamedNinjaStep[]>>;
	currentStep: number;
	setCurrentStep: any;
	nextStep: () => void;
	previousStep: () => void;
	toStep: (id: number) => void;
	toStepByName: (step: string) => void;
}

export type NinjaStepContext = Pick<NinjaContextProps, 'nextStep' | 'previousStep' | 'toStep' | 'toStepByName'>;