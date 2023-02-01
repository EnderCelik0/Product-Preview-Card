import parfumeMobile from '../img/parfume-mobile.jpg';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export default function PreviewCard() {
  
  return (
    <main className='preview-card'>
      <div className='item-img'></div>

      <div className='item-descriptions'>
        <h5 className='item-title'>PERFUME</h5>
        <h1 className='item-header'>Gabrielle Essence Eau De Parfum</h1>
        <p className='item-description'>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className='prices'>
          <h1 className='new-price'>$149.99</h1>
          <h5 className='old-price'>$169.99</h5>
        </div>
        <button className='btn-add-cart'>
          <HiOutlineShoppingCart className='shopping-cart-icon' />
          Add to Cart
        </button>
      </div>
    </main>
  );
}
