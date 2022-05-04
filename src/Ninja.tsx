import React, { Children, useCallback, useEffect } from 'react';
import { NinjaProps } from './types/Ninja';
import { useNinjaContext } from './providers/NinjaProvider';

export const Ninja: React.FC<NinjaProps> = ({ children }) => {
  const { setSteps, currentStep, setNamedSteps, namedSteps } = useNinjaContext();

  const getChildren = useCallback(() => {
    return Children.toArray(children);
  }, [children]);

  useEffect(() => {
    const steps = getChildren();

    steps.forEach((step: any, i) => {
      setSteps((curVal) => [...curVal, { id: i }]);
      if (step.props && step.props.stepName) {
        setNamedSteps((currVal) => [...currVal, { id: i, name: step.props.stepName ?? '' }]);
      }
    });
  }, []);

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
