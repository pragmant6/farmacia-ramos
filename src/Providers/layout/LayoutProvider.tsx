import { ReactNode } from 'react';
import { LayoutContext } from '../../Context/Layout/LayoutContext';
import { useLayoutContext } from '../../Context/Layout/Hooks/Context/layout/useLayoutContext';

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
	const layoutProps = useLayoutContext();
	return (
		<LayoutContext.Provider value={layoutProps}>
			{children}
		</LayoutContext.Provider>
	);
};
