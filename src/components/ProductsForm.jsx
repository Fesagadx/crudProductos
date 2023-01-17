import { useForm } from "react-hook-form";
import { useEffect } from "react";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import CategoryIcon from '@mui/icons-material/Category';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ProductsForm = ({createProductData,productSelectedData,updateProduct}) => {
    const {register,handleSubmit,watch, formState: { errors },reset} = useForm();

    const getFormData = (data) => {
        console.log(data);
        if (productSelectedData) {
          updateProduct(data);
        } else {
          createProductData(data);
          resetForm();
        }
    };

    useEffect(() => {
        if (productSelectedData !== null) {
          reset(productSelectedData);
        } else {
          resetForm();
        }
      }, [productSelectedData]);

    const resetForm = () => {
        reset({
          name: "",
          category: "",
          price: "",
          isAvailable: true
        });
    };

    return(
        <div className="productForm">
            <form onSubmit={handleSubmit(getFormData)} className="productElement">
                <div className="input-wrapper">
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <AddHomeWorkIcon></AddHomeWorkIcon>
                    </div>
                    <input
                        className="input-form"
                        type="text"
                        id="name"
                        {...register("name", {
                          required: true
                        })}
                    >
                    </input>
                    {errors.name?.type === "required" && (
                        <span className="error" role="alert">El nombre es requerido</span>
                    )}
                </div>

                <div className="input-wrapper">
                    <div>
                        <label htmlFor="category">Categoria</label>
                        <CategoryIcon></CategoryIcon>
                    </div>
                    <input
                        className="input-form"
                        type="text"
                        id="category"
                        {...register("category", {
                          required: true
                        })}
                    >
                    </input>
                    {errors.name?.type === "required" && (
                        <span className="error" role="alert">La categoria es requerida</span>
                    )}
                </div>

                <div className="input-wrapper">
                    <div>
                        <label htmlFor="price">Precio</label>
                        <LocalOfferIcon></LocalOfferIcon>
                    </div>
                    <input
                        className="input-form"
                        type="number"
                        id="price"
                        {...register("price", {
                          required: true
                        })}
                    >
                    </input>
                    {errors.name?.type === "required" && (
                        <span className="error" role="alert">El precio es requerido</span>
                    )}
                </div>

                <div className="input-wrapper">
                    <label htmlFor="isAvailable">Disponible</label>

                    <label className="switch">
                        <input
                            type="checkbox"
                            id="isAvailable"
                            {...register("isAvailable")}
                        />
                        <span className="slider round"></span>
                    </label>

                </div>
                <button className="btn-edit" type="submit">Crear
                </button>
            </form>
        </div>
    );

};

export default ProductsForm
