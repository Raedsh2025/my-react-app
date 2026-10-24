import { Link } from "react-router-dom";

function BreadcrumbBasic({ productName }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-3 text-sm text-[#8192B0]"
    >
      <Link to="/" className="transition-colors hover:text-[#101D3B]">
        Home
      </Link>

      <span aria-hidden="true">/</span>

      <Link to="/shop" className="transition-colors hover:text-[#101D3B]">
        List of Products
      </Link>

      <span aria-hidden="true">/</span>

      <span className="font-semibold text-[#101D3B]">
        {productName}
      </span>
    </nav>
  );
}

export default BreadcrumbBasic;
