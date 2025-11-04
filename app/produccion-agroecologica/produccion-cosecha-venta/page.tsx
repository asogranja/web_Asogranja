"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Sprout, Sun, ShoppingBasket, Leaf, Users, TrendingUp, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function ProduccionCosechaVentaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const stages = [
    {
      icon: Sprout,
      title: "Siembra y Producción",
      description:
        "Cultivamos productos orgánicos utilizando técnicas agroecológicas sostenibles, semillas nativas y abonos naturales en nuestras parcelas comunitarias.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/520397064_1918616435657706_2558274020503601248_n-eIFkZ2biYh2yptguM8BzqnbFuewR5x.jpg",
    },
    {
      icon: Sun,
      title: "Crecimiento y Cuidado",
      description:
        "Mantenimiento constante de cultivos con prácticas orgánicas, control biológico de plagas y riego eficiente para garantizar productos de alta calidad.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/536276652_1953625472156802_7921575578293907231_n-wizByHbxovcni15nUGOvsXsZIqcqbI.jpg",
    },
    {
      icon: ShoppingBasket,
      title: "Cosecha y Comercialización",
      description:
        "Cosecha en el momento óptimo de maduración y venta directa en mercados campesinos, garantizando frescura y precios justos para productores y consumidores.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490833031_1839574900228527_8748825509214713402_n-wIx7ftsMjh9N7pTA7G93Z1fGieTckA.jpg",
    },
  ]

  const products = [
    "Papa Nativa",
    "Maíz",
    "Variedades de lechuga",
    "Hortalizas de clima frío",
    "Arveja",
    "Frijol",
    "Calabacín y zucchini",
    "Rubas y Nabos",
    "Remolacha",
    "Frutas de temporada (Curuba, Tomate de árbol, Mora, Fresa)",
    "Hierbas aromáticas",
    "Productos procesados artesanales",
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/produccion-cosecha-venta.jpg"
          alt="Producción, Cosecha y Venta"
          fill
          className="object-cover brightness-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-stone-50/90"></div>

        <Link href="/#produccion-agroecologica" className="absolute top-6 left-6 z-20">
          <Button
            variant="outline"
            className="bg-white/95 hover:bg-white text-stone-800 border-2 border-stone-200 hover:border-green-600 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="font-semibold">Volver </span>
          </Button>
        </Link>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-balance drop-shadow-2xl leading-tight">
              Producción, Cosecha y Venta
            </h1>
            <p className="text-xl md:text-2xl text-balance leading-relaxed drop-shadow-lg font-medium">
              Del campo a tu mesa: productos agroecológicos frescos y sostenibles
            </p>
            <div className="pt-4">
              <div className="inline-block bg-green-600/90 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-sm md:text-base font-semibold">ASOGRANJA Sogamoso | Agricultura Orgánica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-stone-200 shadow-lg animate-in fade-in slide-in-from-bottom-5">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-stone-800">¡Desde la Semilla Hasta Tu Mesa!</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                En ASOGRANJA desarrollamos un ciclo completo de producción agroecológica, Cultivamos nuestros propios
                plantulajes y acompañamos cada etapa del proceso hasta que el alimento llega a tus manos. Nuestras
                familias campesinas cultivan productos orgánicos de alta calidad utilizando técnicas sostenibles que
                respetan el medio ambiente y promueven la biodiversidad. Participamos activamente en mercados campesinos
                locales donde ofrecemos productos frescos, garantizando así la mejor calidad a nuestros consumidores y
                precios justos a nuestros productores.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Participamos activamente en mercados campesinos locales donde ofrecemos productos frescos, cosechados en
                el momento óptimo de maduración, garantizando así la mejor calidad para nuestros consumidores y precios
                justos para nuestros productores.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Production Stages */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Etapas del Proceso</h2>

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <div className={`relative h-80 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <Image src={stage.image || "/placeholder.svg"} alt={stage.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-stone-800">{stage.title}</h3>
                    </div>
                    <p className="text-lg text-stone-600 leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Nuestros Productos</h2>

          <Card className="border-2 border-stone-200 shadow-lg">
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    <Leaf className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-stone-700">{product}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Galería de Producción</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/Anexo%201.jpg"
                  alt="Huerta orgánica con cultivos diversificados"
                  fill
                  className="object-cover"  
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Huerta orgánica con cultivos diversificados</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/Anexo%202.jpg"
                  alt="Preparación de semilleros"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Preparación de semilleros para siembra</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/Anexo%203.jpg"
                  alt="Venta directa en mercado campesino"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Venta directa en mercado campesino </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/Anexo%204.jpg"
                  alt="Proceso de siembra en bandejas germinadoras"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Proceso de siembra en bandejas germinadoras</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/506720322_1888680858651264_1802579618529416358_n.jpg"
                  alt="Capacitación en compostaje"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Capacitación en técnicas de compostaje</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/520397064_1918616435657706_2558274020503601248_n.jpg"
                  alt="Siembra de semillas"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Proceso de siembra en bandejas germinadoras</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Beneficios de Nuestros Productos</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white">
              <CardContent className="p-6 space-y-4 text-center">
                <Users className="w-12 h-12 mx-auto" />
                <h3 className="text-xl font-bold">Comercio Justo</h3>
                <p className="opacity-90">Precios justos para productores y consumidores, sin intermediarios</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white">
              <CardContent className="p-6 space-y-4 text-center">
                <Leaf className="w-12 h-12 mx-auto" />
                <h3 className="text-xl font-bold">100% Orgánico</h3>
                <p className="opacity-90">Sin químicos sintéticos, pesticidas ni fertilizantes artificiales</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white">
              <CardContent className="p-6 space-y-4 text-center">
                <TrendingUp className="w-12 h-12 mx-auto" />
                <h3 className="text-xl font-bold">Frescura Garantizada</h3>
                <p className="opacity-90">Del campo a tu mesa en menos de 24 horas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-stone-800">Compra Nuestros Productos</h2>
          <p className="text-lg text-stone-600">
            Visítanos en los mercados campesinos o contáctanos para conocer nuestros puntos de venta y productos
            disponibles.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() =>
              window.open(
                "https://wa.me/573114632044?text=Hola,%20quiero%20información%20sobre%20productos%20agroecológicos",
                "_blank",
              )
            }
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/design-mode/logo.jpg"
                  alt="ASOGRANJA Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">ASOGRANJA</h3>
                  <p className="text-sm text-stone-300">Sogamoso, Boyacá</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Asociación de productores agroecológicos comprometidos con la sostenibilidad, la investigación
                participativa y el turismo rural comunitario en Sogamoso, Boyacá.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#produccion-agroecologica" className="hover:text-green-400 transition-colors">
                    Producción Agroecológica
                  </Link>
                </li>
                <li>
                  <Link href="/#rutas" className="hover:text-green-400 transition-colors">
                    Turismo Rural
                  </Link>
                </li>
                <li>
                  <Link href="/#productos" className="hover:text-green-400 transition-colors">
                    Productos Artesanales
                  </Link>
                </li>
                <li>
                  <Link href="/#nosotros" className="hover:text-green-400 transition-colors">
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li>📞 311 463 2044 / 313 219 5939</li>
                <li>📧 asogranjasogamoso@gmail.com</li>
                <li>📍 Sogamoso, Boyacá, Colombia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8 text-center text-sm">
            <p>© 2025 ASOGRANJA Sogamoso. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
