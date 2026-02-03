import { useState } from "react";
import type { Route } from "../+types/contact";
import { getProduct, updateProduct } from "../../api/products.server";
import { Form } from "react-router";
import './product-details.css';

export async function loader({ params }: Route.LoaderArgs) {
  const product = await getProduct(params.productId);
  return { product };
}

export const handle = {

};

export async function action({params,request,}: Route.ActionArgs) {
  console.log('action',params);
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateProduct({id:params.productId,name:updates.name,description:updates.description});
}

export default function ProductDetails({loaderData}: Route.ComponentProps) {

  const {product} = loaderData;

  const [edition, setEdition] = useState(false); 
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);

  const editProduct = () => {
    setEdition(!edition);
  }
  const handleDescriptionChange = (event:any) => {
    setDescription(event.target.value);
  }
  const handleNameChange = (event:any) => {
    setName(event.target.value);
  }
  const handleSubmit = (event:any) => {
    setEdition(false);
  }

  return (
    <div id="product">
        {
          (!edition)?
            <div onClick={editProduct} id="product-detail">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          :
            <Form key={product.id} id="product-form" method="post" onSubmit={handleSubmit}>
              <input name="name" type="text" value={name} onChange={handleNameChange}/>
              <input name="description" type="text" value={description} onChange={handleDescriptionChange}/>
              <button type="button" onClick={()=>setEdition(false)}>Cancel</button>
              <button type="submit">Ok</button>
            </Form>
        }
    </div>
  )
}