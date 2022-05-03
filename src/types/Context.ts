import React from "react";

export type NinjaProviderProps = {
	children: React.ReactNode;
}

export type NinjaContextProps = {
	totalSteps: number;
	currentStep: number;
	currentNameStep: string;
}

export type Steps = Record<number, number>;
export type KeySteps = Record<string, number>;
export type NamedSteps = Record<number, string>;