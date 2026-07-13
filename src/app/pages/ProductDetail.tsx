import { useParams, useNavigate } from "react-router";
import { products } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { MessageCircle, ArrowLeft, Tag } from "lucide-react";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Producto no encontrado.</p>
        <Button variant="outline" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al catálogo
        </Button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto: *${product.name}* — S/ ${product.price}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

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
