import ProductList from './ProductList';
import products from './ProductList/products.json';
import Container from './Container';
import Section from './Section';
import Alert from './Alert';
import Profile from './Profile/Profile';

// import user json

function App() {
  return (
    <div>
      {/* HW */}
      {/* <Profile avatar={} location={} stats={} tag={} username={} /> add data from json */}

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
