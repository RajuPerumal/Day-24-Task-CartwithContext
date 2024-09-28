import React, { useState, useContext } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { CartContext } from "./CartContext"; // Import CartContext

const ProductRow = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext); // Get the addItemToCart function from context

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(10, e.target.value));
    setQuantity(value);
    addItemToCart(product, value); // Add the item to the cart
  };

  return (
    <Row className="align-items-center mb-4">
      <Col xs={4} md={3}>
        <img src={product.image} alt={product.title} className="img-fluid rounded-md" />
      </Col>
      <Col xs={8} md={6}>
        <h2 className="h4 font-weight-bold">{product.title}</h2>
        <details className="mt-2">
          <summary className="text-muted">{product.category}</summary>
          <p className="pl-4 text-muted">{product.description}</p>
        </details>
        <details className="mt-2">
          <summary className="text-muted">Sustainability</summary>
        </details>
      </Col>
      <Col xs={12} md={3} className="text-end">
        <div className="d-flex align-items-center justify-content-end">
          <Form.Control
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={handleQuantityChange}
            className="me-2"
          />
          <span className="fw-bold fs-5">${(product.price * quantity).toFixed(2)}</span>
        </div>
        <Button variant="link" className="text-danger mt-2 p-0">REMOVE</Button>
      </Col>
    </Row>
  );
};
