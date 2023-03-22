import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function Products({title, imageSource, price}) {
  return (
    <div className='product'>
        <div className='product__img'>
            <img src={imageSource} alt={title}></img>
        </div>
        <div className='product__description'>
            <p className='product__title'>{title}</p>
            <div className='product__infos'>
                <p className='product__price'>{price} €</p>
                <PrimaryButton className="product__btn" label={"Ajouter"} />
            </div>
        </div>
    </div>
  )
}
