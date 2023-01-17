import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProductsList = ({products,deleteProduct,selectProduct}) => {

    return(

        <div className="productList">
            {
                products?.map( (productElement, index) => (
                    <div key={`product-${index}`} className="productUnit">
                        <h4 className="textProdUnit"><span className="titProdUnit">Nombre:</span> {productElement.name}</h4>
                        <h4 className="textProdUnit"><span className="titProdUnit">Categoria:</span> {productElement.category}</h4>
                        <h4 className="textProdUnit"><span className="titProdUnit">Precio:</span> $ {productElement.price}</h4>
                        <h4>
                            <span ></span>
                            {productElement.isAvailable
                                ? <span className="available">DISPONIBLE</span>
                                : <span className="notAvailable">NO DISPONIBLE</span>
                            }
                        </h4>
                        <div className="btn-action">
                            <button className="btn-delete" onClick={ () => deleteProduct(productElement.id)  }>
                                <DeleteForeverIcon></DeleteForeverIcon>Eliminar</button>
                            <button className="btn-edit" onClick={ () => selectProduct(productElement) } >
                                <EditIcon></EditIcon>Editar</button>
                        </div>
                       
                    </div>
                ) )
            }
        </div>
        
    );

};

export default ProductsList