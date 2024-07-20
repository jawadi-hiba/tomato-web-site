import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Oreder your favrourite food here</h2>
        <p>
          Elevate your dining experience with our food delivery app, offering
          exclusive deals and lightning-fast delivery right to your doorstep.
          Indulge in a world of culinary delights with just a few taps on your
          phone, and enjoy special promotions like discounts on your first order
          and loyalty rewards for repeat customers.
        </p>
        <button>
          <a href="#explore-menu">View menu</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
