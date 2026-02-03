import fs from 'fs';

export type Product = {
  id:number, name:string, description:string
}

let products:Product[] = JSON.parse(fs.readFileSync('./app/storage/products.json', {encoding:'utf-8'}));

export async function listProducts(){
  return new Promise((resolve)=>{
    setTimeout( ()=> resolve(products), 1000);
  });
}

export async function getProduct(id?:number,name?:string): Promise<Product>{
  return new Promise((resolve)=>{
    console.log('id',id)
    const product = products.filter(p => (p.id == id) || (p.name == name) )[0]
    setTimeout( ()=> resolve(product), 1000);
  });
}

export async function updateProduct(product:Product){
  console.log('updateProduct',product)
  const i = products.findIndex(p => p.id == product.id);
  if(i>=0){
     products[i] = product
     fs.writeFileSync(`./app/storage/products.json`, JSON.stringify(products, null, 2), 'utf8');
     console.log("produto atualizado")
  }
}