// Mock API service to simulate fetching data
import { Producto, Categoria, Subcategoria } from '../types/index';


export const apiService = {
  // Fetch all products
  async getProductos(): Promise<Producto[]> {
    const response = await fetch('http://localhost:8080/articuloManufacturadoDetalle/todos', {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_BEARER}`
      }
    });
    if (!response.ok) throw new Error('Error al obtener productos');
    const data = await response.json();
    return data;
  },

  // Fetch product by ID
  async getProductoById(id: number): Promise<Producto | null> {
    // Puedes implementar un endpoint real aquí si existe
    // Por ahora, puedes buscar en los productos traídos por getProductos
    const productos = await this.getProductos();
    return productos.find((producto: Producto) => producto.id === id) || null;
  },

  // Fetch all categories with subcategories
  async getCategorias(): Promise<Categoria[]> {
     const response = await fetch('http://localhost:8080/categoria/listar', {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_BEARER}`
      }
    });
    if (!response.ok) throw new Error('Error al obtener productos');
    const data = await response.json();
    return data;
  },

  // Fetch products by category (including subcategories)
  async getProductosByCategoria(categoriaId: number): Promise<Producto[]> {
    const productos = await this.getProductos();
    console.log('Productos:', productos);
    console.log('Categoria ID:', categoriaId);
    return productos.filter(producto => producto.categoriaId === categoriaId);
  },

  // Get all subcategories flattened for easy filtering
  async getAllSubcategorias(): Promise<Subcategoria[]> {
    const categorias = await this.getCategorias();
    const allSubcategorias: Subcategoria[] = [];
    categorias.forEach(categoria => {
      allSubcategorias.push(...categoria.subcategorias);
    });
    return allSubcategorias;
  }
};