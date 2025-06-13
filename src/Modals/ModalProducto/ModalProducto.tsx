import React, { useState, useEffect } from "react";
import { Producto } from "../../types/IProducto";

interface ModalProductoProps {
  getProductos: () => Promise<void>;
  openModal: boolean;
  setOpenModal: (state: boolean) => void;
  productoEditar?: Producto | null;
}

const initialValues: Producto = {
  id: 0,
  denominacion: "",
  categoriaId: 0,
  categoria: { id: 0, denominacion: "" },
  imagenes: [],
  precioVenta: 0,
  descripcion: "",
  tiempoEstimadoMinutos: 0,
  preparacion: "",
  detalles: [],
};

export const ModalProducto: React.FC<ModalProductoProps> = ({
  getProductos,
  openModal,
  setOpenModal,
  productoEditar,
}) => {
  const [form, setForm] = useState<Producto>(initialValues);

  useEffect(() => {
    if (productoEditar) {
      setForm(productoEditar);
    } else {
      setForm(initialValues);
    }
  }, [productoEditar, openModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí deberías llamar a tu apiService para crear o editar el producto
    // await apiService.saveProducto(form);
    await getProductos();
    setOpenModal(false);
  };

  if (!openModal) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{form.id ? "Editar Producto" : "Nuevo Producto"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="denominacion"
            value={form.denominacion}
            onChange={handleChange}
            placeholder="Denominación"
            required
          />
          <input
            name="precioVenta"
            type="number"
            value={form.precioVenta}
            onChange={handleChange}
            placeholder="Precio Venta"
            required
          />
          <input
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
          />
          {/* Agrega más campos según tu modelo */}
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};