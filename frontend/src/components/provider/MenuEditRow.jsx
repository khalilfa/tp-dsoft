import React from 'react';
import '../../css/provider.css';
import '../../css/main.css';
import editButton from '../../resources/edit-button.jpg';
import deleteButton from '../../resources/delete-button.png';
import history from '../../utils/history';

const MenuEditRow = ({ keyId, nickname, idProvider, individualMenu, deleteMenu }) => {
  const par = (keyId % 2) === 0 ? 'menu-column-pair row' : 'menu-column row';

  const openEditMenu = () => {
    history.push(`/client/${nickname}/provider/${idProvider}/modifyMenu`, { menuId: individualMenu.id });
  };

  return (
    <div className={`main-row ${par}`}>
      <div className="menu-column-value col-3">{ individualMenu.name }</div>
      <div className="menu-column-value col-3">{ individualMenu.price }</div>
      <div className="menu-column-value col-3">{ individualMenu.maxSales }</div>
      <div className="menu-column-value col-3">
        <div className="row">
          <div className="col-1">
            <input
              type="image"
              className="button"
              src={deleteButton}
              alt="delete button"
              onClick={() => deleteMenu(individualMenu.id)}
            />
          </div>
          <div className="col-1 offset-1">
            <input type="image" className="button" src={editButton} alt="edit button" onClick={openEditMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* USAR ESTO PARA EDITAR MENU

<CreateMenu
  t={t}
  close={close}
  idMenu={individualMenu.id}
  updateMenu={updateMenu}
  {...individualMenu}
/>

*/

export default MenuEditRow;
