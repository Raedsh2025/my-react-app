function ContactPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-20">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-[#C900C1]">
          Contact us
        </p>
        <h1 className="mt-3 text-4xl font-bold">Let&apos;s talk about your space</h1>
        <p className="mt-4 text-gray-600">
          Have a question about an item, delivery, or styling your home? Send us a
          message and our team will get back to you.
        </p>
      </div>
      <form className="mt-10 grid max-w-3xl gap-5" onSubmit={(event) => event.preventDefault()}>
        <label className="grid gap-2 font-medium" htmlFor="name">
          Name
          <input id="name" name="name" required className="rounded-xl border border-gray-300 bg-white px-4 py-3" />
        </label>
        <label className="grid gap-2 font-medium" htmlFor="email">
          Email
          <input id="email" name="email" type="email" required className="rounded-xl border border-gray-300 bg-white px-4 py-3" />
        </label>
        <label className="grid gap-2 font-medium" htmlFor="message">
          Message
          <textarea id="message" name="message" required rows="5" className="rounded-xl border border-gray-300 bg-white px-4 py-3" />
        </label>
        <button type="submit" className="w-fit rounded-full bg-black px-6 py-3 text-white transition hover:bg-[#C900C1]">
          Send message
        </button>
      </form>
    </main>
  );
}

export default ContactPage;
