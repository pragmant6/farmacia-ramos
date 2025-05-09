import { ReactNode, ComponentType } from 'react';

type ProviderProps = {
	children: ReactNode;
};

export const composeProviders =
	(...providers: ComponentType<ProviderProps>[]) =>
	({ children }: ProviderProps) =>
		providers.reduceRight(
			(acc, Provider) => <Provider>{acc}</Provider>,
			children
		);
