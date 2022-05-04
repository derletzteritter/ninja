import React from 'react';
import {Ninja, useNinjaSteps} from "../src";

export const App = () => {
	const { nextStep, previousStep, toStepByName } = useNinjaSteps();
	
	return (
		<div>
			<Ninja>
				<div stepName="email">Orgnumber</div>
				<div stepName="lookup">Lookup</div>
				<div stepName="verification">Verfiy</div>
			</Ninja>
			<button onClick={previousStep}>
				Prev
			</button>
			<button onClick={nextStep}>
				Next
			</button>
			
			<button onClick={() => toStepByName('verification')}>
				To verify
			</button>
		</div>
	)
}