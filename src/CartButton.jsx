export default function CartButton() {
  return (
    <button className="snipcart-checkout px-4 py-2 border rounded">
      Cart (<span className="snipcart-items-count"></span>) • $
      <span className="snipcart-total-price"></span>
    </button>
  );
}