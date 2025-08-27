// PhotoDetail.jsx
import React, { useMemo, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';

const PHOTOS = [
  { slug: 'the-painter-1', src: '/images/the-painter-1.jpg', alt: 'painter on church roof' },
  { slug: 'tv-truck', src: '/images/tv-truck.jpg', alt: 'truck with tv in windshield' },
  { slug: 'bikers', src: '/images/bikers.jpg', alt: 'bikers on a ferry with seattle in the background' },
  { slug: 'atv', src: '/images/atv.jpg', alt: 'atv on a moutain' },
  { slug: 'ferry-shadows', src: '/images/ferry-shadows.jpg', alt: 'shadows cast by benches on a ferry' },
  { slug: 'dolphins-unedited', src: '/images/dolphins-unedited.jpg', alt: 'blowup dolphins in a bin' },
  { slug: 'beach', src: '/images/beach.jpg', alt: 'lifeguard stand on a beach with a boat in the ocean in the background' },
  { slug: 'converse', src: '/images/converse.jpg', alt: 'chickens pecking around a pair on converse shoes' },
  { slug: 'gasworks', src: '/images/gasworks.jpg', alt: 'old machinery covered in natural growth' },
];

// Define print sizes & pricing (adjust to your real costs)
const SIZES = [
  { id: '8x10', label: '8" × 10"', price: 35 },
  { id: '12x18', label: '12" × 18"', price: 75 },
  { id: '16x24', label: '16" × 24"', price: 125 },
  { id: '24x36', label: '24" × 36"', price: 225 },
];

// Optional: finish choices (no price change in this example)
const FINISHES = [
  { id: 'matte', label: 'Matte' },
  { id: 'glossy', label: 'Glossy' },
  { id: 'lustre', label: 'Lustre' },
];

// Optional: framing (adds to price)
const FRAMES = [
  { id: 'unframed', label: 'Unframed', add: 0 },
  { id: 'black-wood', label: 'Black Wood Frame', add: 80 },
  { id: 'natural-wood', label: 'Natural Wood Frame', add: 90 },
];

function titleFromSlug(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function PhotoDetail() {
  const { slug } = useParams();
  const photo = PHOTOS.find((p) => p.slug === slug);

  const [sizeId, setSizeId] = useState(SIZES[0].id);
  const [finishId, setFinishId] = useState(FINISHES[0].id);
  const [frameId, setFrameId] = useState(FRAMES[0].id);
  const [qty, setQty] = useState(1);
  const productTitle = useMemo(() => titleFromSlug(slug ?? ''), [slug]);

  const fallbackSize   = { id: 'default', label: '8" × 10"', price: 0 };
  const fallbackFinish = { id: 'matte', label: 'Matte' };
  const fallbackFrame  = { id: 'unframed', label: 'Unframed', add: 0 };
  
  const selectedSize   = useMemo(() => SIZES.find(s => s.id === sizeId)     || SIZES[0]     || fallbackSize,   [sizeId]);
  const selectedFinish = useMemo(() => FINISHES.find(f => f.id === finishId) || FINISHES[0] || fallbackFinish, [finishId]);
  const selectedFrame  = useMemo(() => FRAMES.find(f => f.id === frameId)    || FRAMES[0]   || fallbackFrame,  [frameId]);
  

  const unitPrice = useMemo(() => selectedSize.price + selectedFrame.add, [selectedSize, selectedFrame]);
  const totalPrice = useMemo(() => unitPrice * qty, [unitPrice, qty]);

  // Snipcart requires a stable item URL; use current page URL
  const itemUrl = typeof window !== 'undefined' ? window.location.href : `/photography/${slug}`;

  // Create a variant id so each size/frame combo is unique for inventory & reporting
  const variantId = `${slug}-${sizeId}-${frameId}`;

  if (!photo) return <Navigate to="/photography" replace />;

  return (
    <div className="min-h-screen p-8 flex flex-col app-body all">
      <div className="overlay"></div>
      <div className="overlay glitch"></div>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/photography" className="inline-block underline">
            ← Back to gallery
          </Link>
          {/* Inline cart opener (optional if you have a global one) */}
          <button className="snipcart-checkout px-3 py-1 border rounded">
            Cart (<span className="snipcart-items-count"></span>) • $
            <span className="snipcart-total-price"></span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <figure>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto object-contain rounded"
              loading="eager"
            />
            <figcaption className="mt-3 text-sm opacity-75">{photo.alt}</figcaption>
          </figure>

          {/* Order panel */}
          <div className="border rounded p-4 md:p-6">
            <h1 className="text-2xl font-semibold mb-2">{productTitle}</h1>
            <p className="text-sm opacity-70 mb-6">Archival print on premium photo paper.</p>

            {/* Size */}
            <label className="block mb-4">
              <span className="block text-sm font-medium mb-1">Size</span>
              <select
                className="w-full border rounded px-3 py-2 bg-transparent"
                value={sizeId}
                onChange={(e) => setSizeId(e.target.value)}
              >
                {SIZES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label} — ${s.price}
                  </option>
                ))}
              </select>
            </label>

            {/* Finish */}
            <label className="block mb-4">
              <span className="block text-sm font-medium mb-1">Finish</span>
              <select
                className="w-full border rounded px-3 py-2 bg-transparent"
                value={finishId}
                onChange={(e) => setFinishId(e.target.value)}
              >
                {FINISHES.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>

            {/* Quantity */}
            <label className="block mb-6">
              <span className="block text-sm font-medium mb-1">Quantity</span>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="w-24 border rounded px-3 py-2 bg-transparent"
              />
            </label>

            {/* Price summary */}
            <div className="flex items-center justify-between mb-4">
              <div className="opacity-80 text-sm">
                Unit: ${unitPrice.toFixed(2)} • Total: <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>

            {/* Snipcart Add to Cart */}
            <button
              className="snipcart-add-item px-4 py-2 rounded bg-white/10 border hover:bg-white/20 transition"
              data-item-id={variantId}
              data-item-name={`${productTitle} — ${selectedSize.label}`}
              data-item-price={unitPrice.toFixed(2)}
              data-item-url={itemUrl}
              data-item-description={`${photo.alt} • ${selectedSize.label} • ${selectedFinish.label} • ${selectedFrame.label}`}
              data-item-image={photo.src}
              data-item-quantity={qty}
              data-item-stackable="true"
              data-item-shippable="true"
              /* Record selected options as custom fields for order details */
              data-item-custom1-name="Size"
              data-item-custom1-type="readonly"
              data-item-custom1-value={selectedSize.label}
              data-item-custom2-name="Finish"
              data-item-custom2-type="readonly"
              data-item-custom2-value={selectedFinish.label}
              data-item-custom3-name="Frame"
              data-item-custom3-type="readonly"
              data-item-custom3-value={selectedFrame.label}
            >
              Add to Cart
            </button>

            <p className="mt-3 text-xs opacity-70">
              Shipping & taxes calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
