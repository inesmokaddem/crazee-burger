
export default function AddProductForm() {
  return (
    <div>
        <div className="product-image">Coming Soon</div>
        <div className="product-form">
            <input type="text" placeholder="nom du produit (ex: Super Burger)" />
            <input type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
            <input type="text" placeholder="Prix" />
        </div>
        <button className="submit-button">Ajouter un nouveau produit au menu</button>
    </div>
  )
}
