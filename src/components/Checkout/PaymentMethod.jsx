export default function PaymentMethod() {
  return (
    <section className="rounded-xl bg-white px-4 py-4 shadow-sm sm:px-5">
      <h2 className="mb-4 text-base font-semibold">Select Your Payment Card</h2>

      <div className="space-y-4">
        <label className="flex cursor-pointer items-center gap-3 text-xs">
          <input
            type="radio"
            name="payment"
            value="card"
            defaultChecked
            className="accent-black"
          />
          <span className="rounded border border-[#D7DDEB] px-1.5 py-0.5 font-bold text-[#1B4C9C]">
            VISA
          </span>
          <span className="font-bold text-[#E33A63]">kbank</span>
          <span className="font-bold text-[#F36B21]">Mastercard</span>
          <span className="font-bold text-[#F36B21]">Nagad</span>
        </label>

        <div className="space-y-3">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-[10px] font-medium">
              Your Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your name"
              className="h-9 w-full rounded-md border border-[#C8D1E4] bg-transparent px-3 text-[10px] outline-none focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="mb-2 block text-[10px] font-medium"
            >
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              inputMode="numeric"
              autoComplete="cc-number"
              placeholder="Enter your card number"
              className="h-9 w-full rounded-md border border-[#C8D1E4] bg-transparent px-3 text-[10px] outline-none focus:border-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiry"
                className="mb-2 block text-[10px] font-medium"
              >
                Expire Date
              </label>
              <input
                id="expiry"
                type="text"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                className="h-9 w-full rounded-md border border-[#C8D1E4] bg-transparent px-3 text-[10px] outline-none focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="mb-2 block text-[10px] font-medium">
                CVV <span className="text-gray-400">ⓘ</span>
              </label>
              <input
                id="cvv"
                type="password"
                inputMode="numeric"
                autoComplete="cc-csc"
                placeholder="CVV"
                className="h-9 w-full rounded-md border border-[#C8D1E4] bg-transparent px-3 text-[10px] outline-none focus:border-black"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-[9px] text-gray-600">
            <input type="checkbox" defaultChecked className="accent-black" />
            Save this card for a faster checkout experience
          </label>
        </div>

        <label className="flex cursor-pointer items-center gap-3 text-xs">
          <input
            type="radio"
            name="payment"
            value="cash"
            className="accent-black"
          />
          <span className="font-medium text-gray-600">Cash on Delivery</span>
        </label>
      </div>
    </section>
  );
}
