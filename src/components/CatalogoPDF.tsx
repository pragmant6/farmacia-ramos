import {
	Document,
	Page,
	Image,
	Text,
	View,
	StyleSheet,
} from '@react-pdf/renderer';
import { Producto } from '../helpers/pdf';
import logo from '../assets/imgs/imglogo.jpeg';

const styles = StyleSheet.create({
	page: {
		position: 'relative',
		width: '100%',
		height: '100%',
	},
	background: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	productoContainer: {
		position: 'absolute',
		width: 250,
		height: 150,
	},
	nombre: { fontSize: 12, fontWeight: 'bold' },
	codigo: { fontSize: 10 },
	precio: { fontSize: 14, fontWeight: 'bold', color: '#2E86DE' },
});

// Posiciones de cada producto sobre el fondo
const posiciones = [
	{ top: 70, left: 40 },
	{ top: 70, left: 300 },
	{ top: 330, left: 40 },
	{ top: 330, left: 300 },
];

const CatalogoPDF = ({ productos }: { productos: Producto[] }) => {
	const grupos = [];
	for (let i = 0; i < productos.length; i += 4) {
		grupos.push(productos.slice(i, i + 4));
	}

	return (
		<Document>
			{grupos.map((grupo, idx) => (
				<Page key={idx} size='A4' style={styles.page}>
					<Image
						src={logo} // Asegúrate de que esté en /public/
						style={styles.background}
					/>
					{grupo.map((producto, i) => (
						<View
							key={i}
							style={{
								...styles.productoContainer,
								top: posiciones[i].top,
								left: posiciones[i].left,
							}}>
							<Text style={styles.nombre}>{producto.nombre}</Text>
							<Text style={styles.codigo}>{producto.codigo}</Text>
							<Text style={styles.precio}>${producto.precio.toFixed(2)}</Text>
						</View>
					))}
				</Page>
			))}
		</Document>
	);
};

export default CatalogoPDF;
