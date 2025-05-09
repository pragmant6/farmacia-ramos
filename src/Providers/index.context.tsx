import { CartProvider } from './Cart/CartProvider';
import { composeProviders } from './ComposeProvider';
import { LayoutProvider } from './layout/LayoutProvider';

const Providers = composeProviders(LayoutProvider, CartProvider);

export default Providers;
