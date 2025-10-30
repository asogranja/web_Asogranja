"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  MapPin,
  Users,
  Heart,
  Leaf,
  Phone,
  Mail,
  Clock,
  ShoppingBag,
  Wheat,
  Salad,
  UtensilsCrossed,
  Cake,
  Scissors,
  Microscope,
  Sprout,
  Landmark,
  Mountain,
  BookOpen,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { EmailModal } from "@/components/email-modal"

export default function AsogranjaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const artisanProducts = [
    {
      title: "Productos del Maíz",
      description:
        "Arepas artesanales, chicha tradicional, mazamorra y derivados del maíz nativo cultivado con técnicas ancestrales.",
      icon: Wheat,
      image: "/kiosko-maiz-real.jpg",
      color: "from-amber-500/20 to-yellow-600/20",
    },
    {
      title: "Hortalizas Orgánicas",
      description:
        "Verduras frescas cultivadas sin químicos, directamente de nuestras huertas agroecológicas a tu mesa.",
      icon: Salad,
      image: "/rincon-huerta-real.jpg",
      color: "from-lime-500/20 to-green-600/20",
    },
    {
      title: "Gastronomía Tradicional",
      description: "Platos típicos boyacenses preparados con recetas ancestrales y productos 100% locales y orgánicos.",
      icon: UtensilsCrossed,
      image: "/casona-delicias-real.jpg",
      color: "from-orange-500/20 to-red-600/20",
    },
    {
      title: "Postres Artesanales",
      description: "Dulces tradicionales, arequipe casero, bocadillos y postres elaborados con frutas de la región.",
      icon: Cake,
      image: "/postres-mariposas-real.jpg",
      color: "from-pink-500/20 to-rose-600/20",
    },
    {
      title: "Artesanías Campesinas",
      description:
        "Productos elaborados a mano por nuestras familias campesinas: tejidos, cestería y artículos decorativos.",
      icon: Scissors,
      image: "/labores-campesinas-real.jpg",
      color: "from-purple-500/20 to-indigo-600/20",
    },
  ]

  const mapLocations = [
    {
      id: "A",
      name: "Postres Las Mariposas",
      location: "Villa del Gurubo",
      description: "Postres artesanales y dulces tradicionales",
      color: "bg-amber-500",
      position: { top: "15%", left: "20%" },
    },
    {
      id: "B",
      name: "Rincón de la Huerta",
      location: "Vereda Monquirá",
      description: "Hortalizas orgánicas y productos frescos",
      color: "bg-green-600",
      position: { top: "45%", left: "35%" },
    },
    {
      id: "C",
      name: "Casona las Delicias",
      location: "Centro Poblado de Marca",
      description: "Gastronomía tradicional boyacense",
      color: "bg-green-700",
      position: { top: "20%", left: "60%" },
    },
    {
      id: "D",
      name: "Rincón de las Labores",
      location: "Vereda Mortiñal",
      description: "Artesanías y labores campesinas",
      color: "bg-slate-800",
      position: { top: "30%", left: "80%" },
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Con nuestras familias campesinas y el territorio",
    },
    {
      icon: Users,
      title: "Diversidad",
      description: "Celebramos la riqueza cultural de Boyacá",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Cuidado del medio ambiente y recursos naturales",
    },
    {
      icon: MapPin,
      title: "Comunidad",
      description: "Fortalecimiento del desarrollo local y regional",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ASOGRANJA-GJSdUlIWrM5W0oXfpnQYcuma9JrJMZ.jpg"
                alt="ASOGRANJA Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-primary">ASOGRANJA</h1>
                <p className="text-xs text-muted-foreground">Sogamoso</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#productos" className="text-foreground hover:text-primary transition-colors">
                Productos
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#produccion-agroecologica" className="text-foreground hover:text-primary transition-colors">
                Producción Agroecológica
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <a href="#rutas" className="text-foreground hover:text-primary transition-colors">
                Rutas
              </a>
            </div>

            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-5">
              <a
                href="#inicio"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#productos"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>
              <a
                href="#nosotros"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#produccion-agroecologica"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Producción Agroecológica
              </a>
              <a
                href="#contacto"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="#rutas"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rutas
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/colombian-rural-landscape-mountains-farm-boyaca.jpg"
            alt="Paisaje rural colombiano"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Descubre el Corazón Rural de <span className="text-primary">Boyacá</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Experiencias auténticas de turismo rural comunitario que conectan tradición, naturaleza y cultura
              campesina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent sm:min-w-[240px]"
                onClick={() =>
                  document.getElementById("produccion-agroecologica")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Agroecológia
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent sm:min-w-[240px]"
                onClick={() => document.getElementById("rutas")?.scrollIntoView({ behavior: "smooth" })}
              >
                Turismo Rural
              </Button>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 sm:min-w-[240px]"
                onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Productos Artesanales
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Producción Agroecológica Section */}
      <section id="produccion-agroecologica" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Producción Agroecológica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Conoce nuestros procesos de investigación participativa y el ciclo completo de producción, cosecha y venta
              de productos agroecológicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Investigaciones Participativas */}
            <Card className="group overflow-hidden border-2 hover:border-green-500 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/investigaciones-participativas-card.jpg"
                  alt="Investigaciones Participativas"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Microscope className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Investigaciones Participativas
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proyecto Agroecológico Colombo Alemán PACA que promueve la transición agroecológica mediante análisis
                  de suelos, diálogo de saberes, construcción de plantuladora comunitaria, elaboración de compost
                  biodinámico, intercambio de experiencias y aplicación de metodologías de aprendizaje campesino a
                  campesino.
                </p>
                <div className="pt-2">
                  <Link href="/produccion-agroecologica/investigaciones-participativas">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Conocer Más
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Producción, Cosecha y Venta */}
            <Card
              className="group overflow-hidden border-2 hover:border-green-500 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/produccion-cosecha-venta.jpg"
                  alt="Producción, Cosecha y Venta"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Producción, Cosecha y Venta
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ciclo completo de producción agroecológica desde la siembra hasta la comercialización. Cultivamos
                  productos orgánicos en nuestras huertas comunitarias, realizamos cosechas sostenibles y llevamos
                  nuestros productos frescos directamente a mercados campesinos y consumidores locales.
                </p>
                <div className="pt-2">
                  <Link href="/produccion-agroecologica/produccion-cosecha-venta">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Conocer Más
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Turismo Rural Comunitario Section */}
      <section id="rutas" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Turismo Rural Comunitario
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Descubre nuestras rutas turísticas que conectan tradición, cultura y naturaleza en el corazón de Boyacá
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Turismo Cultural (Casa Cultura) */}
            <Card className="group overflow-hidden border-2 hover:border-orange-500 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/cultural-center-gathering.jpg"
                  alt="Turismo Cultural"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Landmark className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Turismo Cultural
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recorre espacios donde la cultura campesina se encuentra con prácticas agroecológicas. Gastronomía,
                  artesanías y productos orgánicos en un solo recorrido.
                </p>
                <div className="pt-2">
                  <Link href="/rutas/turismo-cultural">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Explorar Ruta
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Corredor Ancestral */}
            <Card
              className="group overflow-hidden border-2 hover:border-orange-500 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/corredor-ancestral-musicians-campfire.jpg"
                  alt="Corredor Ancestral"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Corredor Ancestral
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sumérgete en las tradiciones ancestrales de nuestro territorio. Conoce prácticas agrícolas
                  tradicionales, medicina natural y la sabiduría de nuestros mayores.
                </p>
                <div className="pt-2">
                  <Link href="/rutas/corredor-ancestral">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Explorar Ruta
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Cultura y Memoria */}
            <Card
              className="group overflow-hidden border-2 hover:border-orange-500 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/cultura-memoria-indigenous-symbols.jpg"
                  alt="Cultura y Memoria"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Cultura y Memoria
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un viaje por la historia y las tradiciones que han moldeado nuestra identidad campesina. Historias,
                  música y patrimonio cultural vivo.
                </p>
                <div className="pt-2">
                  <Link href="/rutas/cultura-y-memoria">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Explorar Ruta
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="productos" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <ShoppingBag className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Productos Artesanales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Descubre la autenticidad de nuestros productos elaborados con técnicas tradicionales y amor por la tierra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {artisanProducts.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} to-transparent opacity-60`}></div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://wa.me/573114632044?text=Hola,%20quiero%20información%20sobre%20" + product.title,
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar Disponibilidad
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h3
                className="text-3xl md:text-4xl font-bold text-balance"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Encuentra Nuestros Productos
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Explora el mapa interactivo para descubrir dónde puedes encontrar cada uno de nuestros productos
                artesanales
              </p>
            </div>

            <Card className="overflow-hidden border-2 shadow-2xl bg-gradient-to-br from-green-50/50 to-background">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left Side - Interactive Map (takes 3 columns) */}
                  <div className="lg:col-span-3 p-8 bg-gradient-to-br from-green-50 to-green-100/50">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">Mapa Interactivo</h4>
                          <p className="text-sm text-muted-foreground">Haz clic en los pines para más información</p>
                        </div>
                      </div>

                      {/* Interactive 3D Map */}
                      <div className="relative aspect-[16/10] bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary/20">
                        <Image
                          src="/mapa-rutas-3d.png"
                          alt="Mapa interactivo de productos"
                          fill
                          className="object-contain p-4"
                        />
                        {/* Interactive Pins */}
                        {mapLocations.map((location) => (
                          <button
                            key={location.id}
                            className={`absolute w-12 h-12 rounded-full ${location.color} text-white font-bold text-lg shadow-lg hover:scale-125 transition-all duration-300 flex items-center justify-center cursor-pointer z-10 ${
                              selectedLocation === location.id ? "scale-125 ring-4 ring-white" : ""
                            }`}
                            style={{ top: location.position.top, left: location.position.left }}
                            onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                            onMouseEnter={() => setSelectedLocation(location.id)}
                            onMouseLeave={() => setSelectedLocation(null)}
                          >
                            {location.id}
                          </button>
                        ))}
                      </div>

                      {/* Map Legend */}
                      <div className="bg-white rounded-lg p-4 shadow-md border border-primary/10">
                        <h5 className="font-bold text-sm mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Leyenda del Mapa
                        </h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {mapLocations.map((location) => (
                            <div key={location.id} className="flex items-center gap-2">
                              <div
                                className={`w-6 h-6 rounded-full ${location.color} text-white text-xs font-bold flex items-center justify-center`}
                              >
                                {location.id}
                              </div>
                              <span className="text-muted-foreground">{location.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Location Details (takes 2 columns) */}
                  <div className="lg:col-span-2 p-8 bg-background space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        Ubicaciones
                      </h4>
                      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                        {mapLocations.map((location, index) => (
                          <button
                            key={location.id}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 animate-in fade-in slide-in-from-right-5 ${
                              selectedLocation === location.id
                                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                : "bg-muted/50 hover:bg-muted"
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-8 h-8 rounded-full ${location.color} text-white font-bold flex items-center justify-center flex-shrink-0 shadow-md`}
                              >
                                {location.id}
                              </div>
                              <div className="flex-1">
                                <h5 className="font-bold text-base mb-1">{location.name}</h5>
                                <p className="text-xs opacity-80 mb-1 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {location.location}
                                </p>
                                <p className="text-sm opacity-90">{location.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information Card */}
                    <Card className="border-2 border-primary/20 bg-primary/5">
                      <CardContent className="p-6 space-y-4">
                        <h4 className="text-lg font-bold flex items-center gap-2">
                          <Phone className="w-5 h-5 text-primary" />
                          Información de Contacto
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Phone className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Teléfono</p>
                              <p className="font-semibold">310 583 1864</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Ubicación</p>
                              <p className="font-semibold">Sogamoso, Boyacá</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Clock className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Disponibilidad</p>
                              <p className="font-semibold">Todo el año</p>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 shadow-md"
                          onClick={() =>
                            window.open(
                              "https://wa.me/573114632044?text=Hola,%20quiero%20visitar%20las%20ubicaciones%20de%20productos",
                              "_blank",
                            )
                          }
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Planear Visita
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-10">
              <h2
                className="text-4xl md:text-5xl font-bold text-balance"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Quiénes Somos
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Somos una entidad sin ánimo de lucro fundada en el año{" "}
                <span className="font-bold text-primary">2010</span>, una organización de base campesina comunitaria que
                busca promover los derechos de lo individual y lo colectivo de sus asociados.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nos hemos convertido en un núcleo del sector social que brinda apoyo a las familias campesinas en temas
                de producción y comercialización de productos agrícolas y pecuarios, transformación de alimentos
                gastronómicos, artesanía, y el desarrollo de mercados campesinos.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Conocer Nuestra Historia
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-10">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/asogranja-community-team.jpg" alt="Comunidad ASOGRANJA" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-4xl font-bold text-primary">14+</p>
                <p className="text-sm text-muted-foreground">Años promoviendo el turismo rural comunitario</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4 animate-in fade-in slide-in-from-left-10">
              <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Misión
              </h3>
              <p className="leading-relaxed opacity-90">
                Asogranja está comprometida con el desarrollo y promoción del sector campesino mediante experiencias
                turísticas, productivas, agro ecológicas y artesanales como parte de la identidad rural para hacerla más
                atractiva, eficiente y efectiva en la transmisión de saberes y valores sociales y culturales del
                territorio boyacense.
              </p>
            </div>
            <div className="space-y-4 animate-in fade-in slide-in-from-right-10">
              <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Visión
              </h3>
              <p className="leading-relaxed opacity-90">
                Potenciar los saberes y experiencia campesinos de sus asociados para elevar el potencial socioeconómico
                de los mismos, potenciando la gran riqueza ambiental y ancestral de los territorios y los valores de las
                mujeres campesinas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/colombian-rural-landscape-mountains-farm-boyaca.jpg"
            alt="Paisaje rural"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-background/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-5">
              <h2
                className="text-4xl md:text-6xl font-bold text-balance"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Comienza Tu Aventura Rural
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
                Estamos listos para ayudarte a vivir una experiencia auténtica en el corazón de Boyacá
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* WhatsApp Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary animate-in fade-in zoom-in-95">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-3">Respuesta inmediata</p>
                    <Button
                      size="sm"
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/573114632044?text=Hola,%20quiero%20más%20información", "_blank")
                      }
                    >
                      Chatear Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary animate-in fade-in zoom-in-95"
                style={{ animationDelay: "100ms" }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                    <p className="text-sm text-muted-foreground mb-3">Llámanos directamente</p>
                    <div className="space-y-2">
                      <a href="tel:+573114632044" className="block">
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          311 463 2044
                        </Button>
                      </a>
                      <a href="tel:+573132195939" className="block">
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          313 219 5939
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary animate-in fade-in zoom-in-95"
                style={{ animationDelay: "200ms" }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2"></h3>
                    <p className="text-sm text-muted-foreground mb-3">Escríbenos un email</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setIsEmailModalOpen(true)}
                    >
                      Enviar Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary animate-in fade-in zoom-in-95"
                style={{ animationDelay: "300ms" }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                    <p className="text-sm text-muted-foreground mb-3">Sogamoso, Boyacá</p>
                    <a href="https://maps.app.goo.gl/zQQ37KowRohcKqc39" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        Ver Mapa
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card
              className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl animate-in fade-in zoom-in-95"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-12 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                  <Heart className="w-10 h-10" />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold text-balance"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  ¿Listo para tu experiencia rural?
                </h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance leading-relaxed">
                  Reserva tu visita y descubre la auténtica vida campesina de Boyacá. Nuestro equipo está disponible
                  para diseñar la experiencia perfecta para ti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 text-lg px-8 shadow-lg"
                    onClick={() =>
                      window.open(
                        "https://wa.me/573114632044?text=Hola,%20quiero%20reservar%20una%20experiencia",
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Reservar Ahora
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                    onClick={() => document.getElementById("rutas")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Ver Rutas
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span> Disponible todo el año</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Grupos y familias bienvenidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    <span>Experiencias sostenibles</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ASOGRANJA-GJSdUlIWrM5W0oXfpnQYcuma9JrJMZ.jpg"
                  alt="ASOGRANJA Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">ASOGRANJA</h3>
                  <p className="text-sm opacity-80">Sogamoso, Boyacá</p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Promoviendo el turismo rural comunitario y el desarrollo sostenible desde 2010
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <a href="#productos" className="hover:opacity-100 transition-opacity">
                    Productos Artesanales
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="hover:opacity-100 transition-opacity">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a href="#produccion-agroecologica" className="hover:opacity-100 transition-opacity">
                    Producción Agroecológica
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:opacity-100 transition-opacity">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#rutas" className="hover:opacity-100 transition-opacity">
                    Rutas
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Contacto</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Sogamoso, Boyacá, Colombia</li>
                <li>Disponible todo el año</li>
                <li>asogranjasogamoso@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2025 ASOGRANJA Sogamoso. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-transparent hover:bg-green-50 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-0 overflow-hidden border-0 animate-pulse hover:animate-bounce"
          onClick={() => window.open("https://wa.me/573114632044?text=Hola,%20quiero%20más%20información", "_blank")}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-4j7ioOZV5uXoNgkgbGgPPhkTeLSyBz.png"
            alt="WhatsApp"
            width={64}
            height={64}
            className="object-cover rounded-full"
          />
        </Button>
      </div>

      {/* Email Modal */}
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  )
}
