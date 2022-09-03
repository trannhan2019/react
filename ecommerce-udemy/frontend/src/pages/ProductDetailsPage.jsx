import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();
  return (
    <div>
      <p>id of page is {id}</p>
    </div>
  );
}

export default ProductDetailsPage;
