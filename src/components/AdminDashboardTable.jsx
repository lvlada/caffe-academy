import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';



export function AdminDashboardTable() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="admin-item">
        <div className="admin-item-header">
            <p onClick={() => setOpen(!open)}>
        {
            open ? <i className="fa-solid fa-chevron-down"></i> :  <i className="fa-solid fa-chevron-up"></i>
        }
        </p>
        <p>Porudžbenica 1</p>
        <input type="checkbox" />
        <input type="checkbox" />
        </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </div>
    </>
  );
}

