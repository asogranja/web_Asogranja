"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Microscope, Users, Sprout, BookOpen, Lightbulb, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InvestigacionesParticipativasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const activities = [
    {
      icon: Microscope,
      title: "Análisis de Suelos",
      description:
        "Análisis de suelos para 7 de las 11 parcelas de la asociación, identificando características y necesidades específicas de cada terreno.",
    },
    {
      icon: Users,
      title: "Diálogo de Saberes",
      description:
        "Intercambio de conocimientos sobre elaboración de biopreparados, combinando sabiduría ancestral con técnicas modernas.",
    },
    {
      icon: Sprout,
      title: "Plantuladora Comunitaria",
      description:
        "Construcción de una plantuladora comunitaria para la producción de plántulas orgánicas de alta calidad.",
    },
    {
      icon: Lightbulb,
      title: "Compost Biodinámico",
      description:
        "Elaboración de compost biodinámico utilizando materiales locales y técnicas sostenibles de fertilización.",
    },
    {
      icon: Globe,
      title: "Intercambio de Experiencias",
      description:
        "Participación en centros de investigación nacionales e internacionales para compartir y aprender mejores prácticas.",
    },
    {
      icon: BookOpen,
      title: "Metodologías de Aprendizaje",
      description:
        "Aplicación de metodologías campesino a campesino: entrenador de entrenadores y capacitación práctica en campo.",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/investigaciones-hero.jpg"
          alt="Investigaciones Participativas - Visita AGROSAVIA"
          fill
          className="object-cover brightness-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-stone-50/95"></div>

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
              Investigaciones Participativas
            </h1>
          
            <div className="pt-4">
              <div className="inline-block bg-green-600/90 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-sm md:text-base font-semibold">ASOGRANJA Sogamoso | Investigación Aplicada</p>
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
              <h2 className="text-3xl font-bold text-stone-800">Proyecto PACA</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                El Proyecto Agroecológico Colombo Alemán (PACA) es una iniciativa de cooperación internacional que
                promueve la transición agroecológica en comunidades campesinas de Colombia. A través de la investigación
                participativa, buscamos fortalecer las capacidades locales, recuperar saberes ancestrales y desarrollar
                prácticas agrícolas sostenibles que beneficien tanto a las familias campesinas como al medio ambiente.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                En ASOGRANJA, este proyecto ha permitido implementar metodologías innovadoras de aprendizaje,
                construcción de infraestructura comunitaria y el fortalecimiento de redes de conocimiento entre
                productores locales y centros de investigación nacionales e internacionales.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Resultados Relevantes</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                    <activity.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800">{activity.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Galería de Actividades</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/535908028_1944200763099273_7703338316286415868_n.jpg"
                  alt="Visita a planta piloto AGROSAVIA"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Visita a planta piloto de fertilizante orgánico - AGROSAVIA</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/536121581_1944200319765984_7021265209008755111_n.jpg"
                  alt="Taller de compostaje"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Taller práctico de elaboración de compost biodinámico</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/511673123_1893128468206503_8750159797998138304_n.jpg"
                  alt="Diálogo de saberes"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Sesión de diálogo de saberes sobre biopreparados</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/538642813_1946351632884186_2107854921680908227_n.jpg"
                  alt="Visita a invernadero"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Capacitación en producción de hortalizas en invernadero</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/538299533_1944201226432560_4418728169287401765_n.jpg"
                  alt="Análisis de suelos"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Análisis de suelos en parcelas de la asociación</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-stone-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/design-mode/548205148_1966872207498795_8334847794301265330_n.jpg"
                  alt="Infografía proyecto PACA"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-stone-600">Resultados del proyecto de transición agroecológica</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold">Impacto del Proyecto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-5xl font-bold">11</p>
              <p className="text-lg opacity-90">Familias Beneficiadas</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">7</p>
              <p className="text-lg opacity-90">Parcelas Analizadas</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">100%</p>
              <p className="text-lg opacity-90">Participación Comunitaria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-stone-800">¿Quieres Conocer Más?</h2>
          <p className="text-lg text-stone-600">
            Contáctanos para conocer más sobre nuestras investigaciones participativas y cómo puedes ser parte de la
            transición agroecológica.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() =>
              window.open(
                "https://wa.me/573114632044?text=Hola,%20quiero%20información%20sobre%20investigaciones%20participativas",
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
              <h3 className="text-xl font-bold text-white">ASOGRANJA Sogamoso</h3>
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
