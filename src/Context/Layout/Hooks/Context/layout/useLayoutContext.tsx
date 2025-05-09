import { useNavigate } from 'react-router-dom';

export const useLayoutContext = () => {
	const navigate = useNavigate();

	const goTo = (path: string) => navigate(path);
	const goBack = () => navigate(-1);
	const replaceTo = (path: string) => navigate(path, { replace: true });
	return { goTo, goBack, replaceTo };
};
