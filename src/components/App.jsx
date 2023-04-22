import ProductList from './ProductList';
import products from './ProductList/products.json';
import Container from './Container';
import Section from './Section';
import Alert from './Alert';

function App() {
  return (
    <div>
      <Container>
        <Alert variation="info">Default alert</Alert>
        <Alert variation="success">Default alert</Alert>
        <Alert variation="error">Default alert</Alert>
        <Alert variation="warning" outlined elevated>
          Default alert
        </Alert>
        <Alert variation="warning" outlined>
          Default alert
        </Alert>
        <Alert variation="warning" elevated>
          Default alert
        </Alert>

        <Section title="Section 1 Title">Section 1 Content</Section>
        <Section title="Section 2 Title">Section 2 Content</Section>
        <Section title="Products">
          <ProductList productsData={products} />
        </Section>
      </Container>
    </div>
  );
}

export default App;
