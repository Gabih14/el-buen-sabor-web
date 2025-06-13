import React, { useEffect, useState } from "react";
import { TableGeneric } from "../Generic/TableGeneric/TableGeneric";
import { Producto } from "../types/IProducto";
import { apiService } from "../services/api";
import { ModalProducto } from "../Modals/ModalProducto/ModalProducto";

const columns = [
  { label: "ID", key: "id" },
  { label: "Denominación", key: "denominacion" },
  { label: "Precio Venta", key: "precioVenta" },
  { label: "Descripción", key: "descripcion" },
  { label: "Acciones", key: "acciones" },
];

export const ABMProducto = () => {
  const [openModal, setOpenModal] = useState(false);
  const [productoEditar, setProductoEditar] = useState<Producto | null>(null);

  const getProductos = async () => {
    const data = await apiService.getProductos();
    // Aquí deberías despachar los datos al store si usas redux, o setear el estado local
    // setProductos(data);
  };

  const handleDelete = async (id: number) => {
    // await apiService.deleteProducto(id);
    await getProductos();
  };

  // Para editar un producto
  const handleEdit = (producto: Producto) => {
    setProductoEditar(producto);
    setOpenModal(true);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setProductoEditar(null);
          setOpenModal(true);
        }}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Nuevo Producto
      </button>
      <TableGeneric<Producto>
        columns={columns}
        handleDelete={handleDelete}
        setOpenModal={setOpenModal}
        // handleEdit={handleEdit}
      />
      <ModalProducto
        getProductos={getProductos}
        openModal={openModal}
        setOpenModal={setOpenModal}
        productoEditar={productoEditar}
      />
    </div>
  );
};