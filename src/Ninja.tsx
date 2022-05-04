import React, { Children, useCallback, useEffect } from 'react';
import { NinjaProps } from './types/Ninja';
import { useNinjaContext } from './providers/NinjaProvider';

export const Ninja: React.FC<NinjaProps> = ({ children }) => {
  const { setSteps, currentStep, setNamedSteps, namedSteps } = useNinjaContext();

  const getChildren = useCallback(() => {
    return Children.toArray(children);
  }, []);

  useEffect(() => {
    const steps: any = getChildren();
    console.log('rerender');
    setSteps(steps);

    steps.forEach((step: any, i: number) => {
      if (step.props && step.props.stepname) {
        setNamedSteps((currVal) => [...currVal, { id: i, name: step.props.stepname ?? '' }]);
      }
    });
  }, [getChildren, setNamedSteps, setSteps]);

  return (
    <>
      {Children.map(getChildren(), (c: any, id) => {
        if (!c) return null;

        const isActive = id === currentStep;

        if (isActive) {
          return <div>{c}</div>;
        }

        return null;
      })}
    </>
  );
};
