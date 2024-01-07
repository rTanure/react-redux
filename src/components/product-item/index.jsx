import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux"

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { addProduct } from "../../redux/Cart/slice";
// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const handleProductClick = () =>{
    dispatch(addProduct(product))
  }

  return (
    <Styles.ProductContainer onClick={handleProductClick}>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
