import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';



export function AdminDashboardTable({item}) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="admin-item">
        <div className="admin-item-header">
            <p onClick={() => setOpen(!open)}>
        {
            open ? <i className="fa-solid fa-chevron-up"></i> :  <i className="fa-solid fa-chevron-down"></i>
        }
        </p>
        <p className="admin-item-header-title">{item.id}</p>
        <input type="checkbox" />
        <input type="checkbox" />
        </div>
      <Collapse in={open}>
        <div className="admin-item-header-colapse-text">
          {
            item.orders.map((order) =>(
              <p key={order.id}>{order.quantity} X {order.name}({order.size})</p>
            ))
          }
  
        </div>
      </Collapse>
    </div>
    </>
  );
}

