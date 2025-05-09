import { createContext, useContext } from 'react';

type LayoutContextType = {
	goTo: (path: string) => void;
	goBack: () => void;
	replaceTo: (path: string) => void;
};

export const LayoutContext = createContext<LayoutContextType | undefined>(
	undefined
);

export const useLayout = (): LayoutContextType => {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error('useLayout must be used within a LayoutProvider');
	}
	return context;
};
