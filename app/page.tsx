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
  Droplets,
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
      image: "/anexo20.jpg",
      color: "from-purple-500/20 to-indigo-600/20",
    },
  ]

  // INSTRUCCIONES PARA AJUSTAR POSICIONES DE LOS BOTONES:
  // =====================================================
  // Cada botón se posiciona usando coordenadas en porcentaje sobre el mapa
  //
  // - 'top': Posición vertical (0% = parte superior, 100% = parte inferior)
  // - 'left': Posición horizontal (0% = izquierda, 100% = derecha)
  //
  // CÓMO AJUSTAR:
  // 1. Identifica el botón que quieres mover (A, B, C, o D)
  // 2. Modifica los valores de 'top' y 'left' en incrementos de 1-5%
  // 3. Guarda y observa el cambio en la vista previa
  // 4. Repite hasta que el botón esté en la posición deseada
  //
  // EJEMPLO: Para mover el botón A más arriba, reduce el valor de 'top'
  //          Para mover el botón A más a la derecha, aumenta el valor de 'left'
  const mapLocations = [
    {
      id: "A",
      name: "Huerto Agroecológico Urbano",
      location: "Barrio el sol- vereda ramada",
      color: "bg-amber-500", // Color naranja/amarillo distintivo
      // ⬇️ AJUSTAR BOTÓN A AQUÍ ⬇️
      position: { top: "26.5%", left: "21.5%" },
    },
    {
      id: "B",
      name: "Vereda I y II Chorrera",
      location: " crucero, corralejas, azufre, milagro y playita",
      color: "bg-green-600",
      // AJUSTAR AQUÍ: Modifica estos valores para mover el botón B
      position: { top: "44%", left: "34.7%" }, // Ajustado para alinearse con el marcador
    },
    {
      id: "C",
      name: "Vereda Monquira",
      location: "sector la reforma",
      color: "bg-green-700",
      // AJUSTAR AQUÍ: Modifica estos valores para mover el botón C
      position: { top: "27.5%", left: "53.7%" }, // Ajustado para alinearse con el marcador
    },
    {
      id: "D",
      name: "Centro poblado de Morca",
      location: "Vereda Mortiñal",
      color: "bg-slate-800",
      // AJUSTAR AQUÍ: Modifica estos valores para mover el botón D
      position: { top: "33%", left: "72.5%" }, // Ajustado para alinearse con el marcador
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/design-mode/logo.jpg"
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
              <Link href="/nosotros" className="text-foreground hover:text-primary transition-colors">
                Nosotros
              </Link>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <a
                href="/pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                Portafolio
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

              <Link
                href="/nosotros"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <a
                href="#contacto"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="/pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                Portafolio
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
                className="text-lg px-8 py-3 bg-transparent border-2 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors sm:min-w-[240px]"
                onClick={() =>
                  document.getElementById("produccion-agroecologica")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Agroecológia
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent border-2 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors sm:min-w-[240px]"
                onClick={() => document.getElementById("rutas")?.scrollIntoView({ behavior: "smooth" })}
              >
                Turismo Rural
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent border-2 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors sm:min-w-[240px]"
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
      <section id="produccion-agroecologica" className="py-24 bg-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Agroecología
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Conoce nuestros procesos de investigación participativa y el ciclo completo de producción, cosecha y venta
              de productos agroecológicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Producción, Cosecha y Venta */}
            <Card className="group overflow-hidden border-2 hover:border-green-500 hover:border-4 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/produccion-cosecha-venta.jpg"
                  alt="Producción, Cosecha y Venta"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Sprout className="w-6 h-6 text-green-500" />
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
                      className="w-full border-2 bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
                    >
                      Conocer Más
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Investigaciones Participativas */}
            <Card
              className="group overflow-hidden border-2 hover:border-green-500 hover:border-4 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/anexo5.jpg"
                  alt="Investigaciones Participativas"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Microscope className="w-6 h-6 text-green-500" />
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
                      className="w-full border-2 bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
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
      <section id="rutas" className="py-24 bg-sky-50/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Turismo Rural Comunitario
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Descubre nuestras rutas turísticas que conectan tradición, cultura y naturaleza en el corazón de Boyacá
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Turismo Cultural (Casa Cultura) */}
            <Card className="group overflow-hidden border-2 hover:border-orange-500 hover:border-4 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/anexo7.jpg"
                  alt="Turismo Cultural"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Landmark className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Ruta experiencial cultural y agroecológica
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recorre espacios donde la cultura campesina se encuentra con prácticas agroecológicas. Gastronomía,
                  artesanías y productos orgánicos en un solo recorrido.
                </p>
                <div className="pt-2">
                  <Link href="/rutas/turismo-cultural">
                    <Button
                      variant="outline"
                      className="w-full border-2 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
                    >
                      Explorar Ruta
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Corredor Ancestral */}
            <Card
              className="group overflow-hidden border-2 hover:border-orange-500 hover:border-4 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/anexo15.jpg"
                  alt="Corredor Ancestral"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Mountain className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Corredor Ancestral Cascada La Pirámide
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sumérgete en las tradiciones ancestrales de nuestro territorio. Conoce prácticas agrícolas
                  tradicionales, medicina natural y la sabiduría de nuestros mayores.
                </p>
                <div className="pt-2">
                  <Link href="/rutas/corredor-ancestral">
                    <Button
                      variant="outline"
                      className="w-full border-2 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
                    >
                      Explorar Ruta
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Cultura y Memoria */}
            <Card
              className="group overflow-hidden border-2 hover:border-orange-500 hover:border-4 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
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
                  <BookOpen className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Ruta Pedagógica Cultura y Memoria
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un viaje por la historia y las tradiciones que han moldeado nuestra identidad campesina. Historias,
                  música y patrimonio cultural vivo.
                </p>
                <div className="pt-2">
                  <Link href="/rutas/cultura-y-memoria">
                    <Button
                      variant="outline"
                      className="w-full border-2 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
                    >
                      Explorar Ruta
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Ruta del Agua */}
            <Card
              className="group overflow-hidden border-2 hover:border-orange-500 hover:border-4 hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
              style={{ animationDelay: "300ms" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/design-mode/Anexo%2024.jpg"
                  alt="Ruta del Agua - Lago de Tota"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <Droplets className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                  Ruta del Agua
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recorre el Lago de Tota, el cuerpo de agua más grande de Colombia. Un viaje de seis paradas e
                  infinitas emociones alrededor del lago más alto de Latinoamérica.
                </p>
                <div className="pt-2">
                  <Link href="/rutas/ruta-del-agua">
                    <Button
                      variant="outline"
                      className="w-full border-2 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
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

      {/* Productos Artesanales Section */}
      <section id="productos" className="py-24 bg-amber-50/30">
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
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-base text-foreground leading-relaxed">
                En esta ruta encontrarán todos nuestros productos hechos por manos campesinas con técnicas
                tradicionales. Aquí podrás adquirir nuestros productos transformados como:{" "}
                <span className="font-semibold">Chicha, Masato y galletas de maíz</span>,
                <span className="font-semibold"> Hayacas, Envueltos y tamales</span>,
                <span className="font-semibold"> Arepas</span>,<span className="font-semibold"> Maíz Frito</span>,
                <span className="font-semibold"> Postres</span>,<span className="font-semibold"> Cuajada, Queso</span> y
                <span className="font-semibold"> Variedad de Artesanías</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {artisanProducts.map((product, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-2 hover:border-yellow-500 hover:border-4 transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-10 ${(index === artisanProducts.length - 2 && artisanProducts.length % 3 === 2)
                  ? "lg:col-start-2"
                  : ""

                  }`}
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
                    <product.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-2 bg-transparent hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95"
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
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Left Side - Interactive Map (takes 3 columns) */}
                  <div className="lg:col-span-3 p-4 md:p-8 bg-gradient-to-br from-green-50 to-green-100/50">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">Mapa Interactivo</h4>
                          <p className="text-sm text-muted-foreground">Haz clic en las ubicaciones</p>
                        </div>
                      </div>

                      <div className="relative aspect-[4/3] md:aspect-[16/10] bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary/20">
                        <Image
                          src="/mapa-rutas-3d.png"
                          alt="Mapa interactivo de productos"
                          fill
                          className="object-contain p-4"
                        />
                        {/* Interactive Buttons - Cada uno con su propio estilo y posicionamiento ajustable */}
                        {mapLocations.map((location) => (
                          // Agregado focus personalizado y eliminado outline amarillo en botones del mapa
                          <button
                            key={location.id}
                            className={`absolute w-10 h-10 md:w-14 md:h-14 rounded-full ${location.color} text-white font-bold text-sm md:text-lg shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer z-10 border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-95`}
                            style={{
                              top: location.position.top,
                              left: location.position.left,
                              transform: "translate(-20%, -50%)", // Centra el botón en las coordenadas exactas
                            }}
                            onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                            onMouseEnter={() => setSelectedLocation(location.id)}
                            onMouseLeave={() => setSelectedLocation(null)}
                            aria-label={`Ubicación ${location.id}: ${location.name}`}
                          >
                            {location.id}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Location Details (takes 2 columns) */}
                  <div className="lg:col-span-2 p-4 md:p-8 bg-background space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        Ubicaciones
                      </h4>
                      <div className="max-h-[600px] overflow-y-auto pr-2">
                        {mapLocations.map((location, index) => (
                          <div
                            key={location.id}
                            className={`w-full p-4 rounded-lg transition-all duration-300 cursor-pointer ${selectedLocation === location.id
                              ? "bg-primary/10 border-2 border-primary shadow-md"
                              : "bg-muted/50 hover:bg-muted"
                              } animate-in fade-in slide-in-from-right-5`}
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
                                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {location.location}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information - Full Width Below Map */}
                  <div className="lg:col-span-5 p-4 md:p-8 bg-background border-t-2 border-primary/10">
                    <div className="max-w-5xl mx-auto">
                      <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                          Información de Contacto
                        </h4>
                        <p className="text-muted-foreground">Estamos listos para ayudarte a planear tu visita</p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {/* Phone Card */}
                        <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6 text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                              <Phone className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h5 className="font-bold text-lg mb-1">Teléfono</h5>
                              <p className="text-sm text-muted-foreground mb-2">Llámanos directamente</p>
                              <p className="font-semibold text-primary">311 463 2044</p>
                              <p className="font-semibold text-primary">313 219 5939</p>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Location Card */}
                        <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6 text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                              <MapPin className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h5 className="font-bold text-lg mb-1">Ubicación</h5>
                              <p className="text-sm text-muted-foreground mb-2">Visítanos en</p>
                              <p className="font-semibold text-primary">Sogamoso</p>
                              <p className="text-sm text-muted-foreground">Boyacá, Colombia</p>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Availability Card */}
                        <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6 text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                              <Clock className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h5 className="font-bold text-lg mb-1">Disponibilidad</h5>
                              <p className="text-sm text-muted-foreground mb-2">Abierto</p>
                              <p className="font-semibold text-primary">Todo el año</p>
                              <p className="text-sm text-muted-foreground">Visitas programadas</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* WhatsApp Button */}
                      <Card className="border-2 border-green-500/20 bg-green-50/30">
                        <CardContent className="p-6">
                          <Button
                            className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                            onClick={() =>
                              window.open(
                                "https://wa.me/573132195939?text=Hola,%20quiero%20visitar%20las%20ubicaciones%20de%20productos",
                                "_blank",
                              )
                            }
                          >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Planear Visita por WhatsApp
                          </Button>
                          <p className="text-center text-sm text-muted-foreground mt-3">
                            Respuesta inmediata • Atención personalizada
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-32 overflow-hidden bg-muted/70">
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
                      className="w-full border-2 bg-transparent text-black hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
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
                  <div className="inline-flex items-center justisfy-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                    <p className="text-sm text-muted-foreground mb-3">Llámanos directamente</p>
                    <div className="space-y-2">
                      <a href="tel:+573114632044" className="block">
                        <Button size="sm" variant="outline" className="w-full border-2 bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95">
                          311 463 2044
                        </Button>
                      </a>
                      <a href="tel:+573132195939" className="block">
                        <Button size="sm" variant="outline" className="w-full border-2 bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95">
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
                      className="w-full border-2 bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
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
                      <Button size="sm" variant="outline" className="w-full border-2 bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95">
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
                        "https://wa.me/573132195939?text=Hola,%20quiero%20reservar%20una%20experiencia",
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
                  src="/images/design-mode/logo.jpg"
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
                  <Link href="/nosotros" className="hover:opacity-100 transition-opacity">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <a href="#produccion-agroecologica" className="hover:opacity-100 transition-opacity">
                    Agroecológia
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:opacity-100 transition-opacity">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#rutas" className="hover:opacity-100 transition-opacity">
                    Turismo Rural
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
            src="/images/design-mode/whatsapp.png"
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

