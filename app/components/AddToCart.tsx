"use client";

function AddToCart() {
  return (
    <>
      <button
        className="btn btn-secondary my-1"
        onClick={() => console.log("Hello World")}
      >
        Add To Cart
      </button>
      <br />
      <button
        className="btn btn-primary my-1"
        onClick={() => console.log("Hello World")}
      >
        Add To Cart
      </button>
      <br />
      <button
        className="btn btn-error my-1"
        onClick={() => console.log("Hello World")}
      >
        Add To Cart
      </button>
    </>
  );
}

export default AddToCart;
