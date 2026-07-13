import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { MessageCircle, ArrowLeft, Tag } from "lucide-react";
import { Product } from "../types/product";
import Airtable from "airtable";

// 🔌 Conexión directa a Airtable
const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_TOKEN })
  .base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarProductoEnAirtable = async () => {
      if (!id) return;
      try {
        // Buscamos el registro específico directamente por su ID de Airtable
        const registro = await base('Productos').find(id);
        
        const imagenes = registro.fields['Imagen'] as any[];
        const mapeado: Product = {
          id: registro.id,
          name: (registro.fields['Nombre'] as string) || 'Producto sin nombre',
          price: (registro.fields['Precio'] as number) || 0,
          category: (registro.fields['Categoría'] as string) || 'Sin categoría',
          image: imagenes?.[0]?.url || 'https://via.placeholder.com/400',
          description: (registro.fields['Descripción'] as string) || 'Sin descripción disponible.',
          stock: (registro.fields['Unidades disponibles'] as number) || 0,
        };
        
        setProduct(mapeado);
      } catch (e) {
        console.error("Error buscando el producto:", e);
      } finally {
        setLoading(false);
      }
    };

    buscarProductoEnAirtable();
  }, [id]);

  const handleWhatsApp = () => {
    if (!product) return;
    const message = encodeURIComponent(
      `¡Hola Masha Importaciones! Me interesa el producto: *${product.name}* — S/ ${product.price}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  // PANTALLA DE CARGA
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-muted-foreground animate-pulse">Cargando detalles del producto...</p>
      </div>
    );
  }

  // PANTALLA DE ERROR SI NO EXISTE
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Producto no encontrado en Airtable.</p>
        <Button variant="outline" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al catálogo
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b px-6 py-3 flex items-center justify-between">
        <h1 className="text-sm font-medium">Masha Importaciones</h1>
        <Button onClick={handleWhatsApp} size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
      </header>

      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al catálogo
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-square bg-muted">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Category badge */}
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
              <Tag className="h-3.5 w-3.5" />
              {product.category}
            </span>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold leading-tight">
                {product.name}
              </h2>
              <p className="text-3xl font-bold">S/ {product.price}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="gap-2 w-full mt-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Pedir por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}