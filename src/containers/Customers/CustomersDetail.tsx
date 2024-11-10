import { Container } from 'components';
import Block from 'components/shared/Block';
import { useParams } from 'react-router-dom';

const CustomersDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <Block
        header='Customer Details'
        obj={{
          id: id,
          firstName: 'ipeim',
          lastName: 'ipeim',
          phone: 'phone',
          email: 'ipeim@ipeim.com',
          apiKey: null,
          balance: 0,
          twilloRoute: null,
          outingType: null,
        }}
      />
      <Block
        isFullWidth
        header='Assign Number'
        obj={{
          number: ['19898008085', '2000', '3000'],
        }}
      />
      <Block
        isFullWidth
        header='Numbers'
        obj={{
          38: '19898008085',
          42: '19898008085',
        }}
      />
    </Container>
  );
};

export default CustomersDetail;
