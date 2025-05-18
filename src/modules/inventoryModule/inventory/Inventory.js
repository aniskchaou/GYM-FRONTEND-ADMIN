import React from 'react';

const Inventory = ({ product, stockLevel, reorderPoint, supplier, lastRestockedDate }) => {
  return (
    <div className="inventory">
      <h2>Inventory Details</h2>
      <div className="inventory-item">
        <strong>Product:</strong> {product}
      </div>
      <div className="inventory-item">
        <strong>Stock Level:</strong> {stockLevel}
      </div>
      <div className="inventory-item">
        <strong>Reorder Point:</strong> {reorderPoint}
      </div>
      <div className="inventory-item">
        <strong>Supplier:</strong> {supplier}
      </div>
      <div className="inventory-item">
        <strong>Last Restocked Date:</strong> {lastRestockedDate}
      </div>
    </div>
  );
};

export default Inventory;
