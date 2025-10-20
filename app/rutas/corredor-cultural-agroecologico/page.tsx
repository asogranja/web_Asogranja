"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Phone, Instagram, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CorredorCulturalPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const sections = [
    {
      id: "kiosko-maiz",
      title: "Kiosko del Maíz",
      description:
        "Descubre la importancia del maíz en nuestra cultura campesina. Aprende sobre las diferentes variedades de maíz nativo, su cultivo tradicional y su papel fundamental en la gastronomía boyacense.",
      highlights: [
        "Variedades de maíz nativo colombiano",
        "Proceso de cultivo tradicional",
        "Productos derivados del maíz",
        "Degustación de arepas y chicha",
      ],
      image: "/kiosko-maiz-real.jpg",
    },
    {
      id: "rincon-huerta",
      title: "Rincón de la Huerta",
      description:
        "Sumérgete en el mundo de la agricultura orgánica y sostenible. Conoce las técnicas agroecológicas que utilizamos para cultivar alimentos saludables respetando la tierra.",
      highlights: [
        "Huerta orgánica diversificada",
        "Técnicas de compostaje y abonos naturales",
        "Control biológico de plagas",
        "Cosecha y preparación de productos frescos",
      ],
      image: "/rincon-huerta-real.jpg",
    },
    {
      id: "casona-delicias",
      title: "Casona las Delicias del Sabor",
      description:
        "Disfruta de la auténtica gastronomía boyacense en nuestra casona tradicional. Platos preparados con recetas ancestrales y productos locales que cuentan la historia de nuestra región.",
      highlights: [
        "Cocina tradicional boyacense",
        "Ingredientes 100% locales y orgánicos",
        "Recetas transmitidas por generaciones",
        "Experiencia gastronómica inmersiva",
      ],
      image: "/casona-delicias-real.jpg",
    },
    {
      id: "postres-mariposas",
      title: "Postres las Mariposas",
      description:
        "Endulza tu experiencia con postres artesanales elaborados con frutas de la región. Cada dulce es una obra de arte que combina tradición y creatividad.",
      highlights: [
        "Postres artesanales con frutas locales",
        "Dulces tradicionales boyacenses",
        "Técnicas de conservación ancestrales",
        "Degustación de arequipe y bocadillos",
      ],
      image: "/postres-mariposas-real.jpg",
    },
    {
      id: "labores-campesinas",
      title: "Rincón de las Labores Campesinas",
      description:
        "Vive la experiencia del trabajo campesino tradicional. Participa en actividades agrícolas, aprende sobre herramientas ancestrales y conecta con la tierra de manera auténtica.",
      highlights: [
        "Actividades agrícolas tradicionales",
        "Herramientas y técnicas ancestrales",
        "Ordeño y cuidado de animales",
        "Elaboración de productos artesanales",
      ],
      image: "/labores-campesinas-real.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/corredor-cultural-hero.jpeg"
          alt="Corredor Cultural y Agroecológico"
          fill
          className="object-cover brightness-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-stone-50/95"></div>

        <Link href="/" className="absolute top-6 left-6 z-20">
          <Button
            variant="outline"
            className="bg-white/95 hover:bg-white text-stone-800 border-2 border-stone-200 hover:border-lime-600 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="font-semibold">Volver al Inicio</span>
          </Button>
        </Link>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-balance drop-shadow-2xl leading-tight">
              Corredor Cultural y Agroecológico
            </h1>
            <p className="text-xl md:text-2xl text-balance leading-relaxed drop-shadow-lg font-medium">
              Una experiencia inmersiva en la cultura campesina y las prácticas agroecológicas de Sogamoso
            </p>
            <div className="pt-4">
              <div className="inline-block bg-lime-600/90 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-sm md:text-base font-semibold">Sogamoso - Boyacá | Turismo Rural Comunitario</p>
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
              <h2 className="text-3xl font-bold text-stone-800">Ruta Experiencial</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                El Corredor Cultural y Agroecológico es un recorrido único que te conecta con las tradiciones
                campesinas, la producción sostenible de alimentos y la riqueza gastronómica de nuestra región. A través
                de cinco paradas temáticas, vivirás experiencias auténticas que fortalecen los saberes tradicionales y
                promueven el turismo cultural comunitario.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Este proyecto forma parte del fortalecimiento de los saberes tradicionales en el turismo cultural y
                comunitario de Sogamoso, Boyacá.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Paradas del Corredor</h2>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card
                key={section.id}
                className="overflow-hidden border-2 border-stone-200 hover:border-lime-600 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-lime-600 text-white flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800">{section.title}</h3>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-6 h-6 text-stone-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-stone-600" />
                  )}
                </button>

                {expandedSection === section.id && (
                  <div className="border-t border-stone-200 animate-in fade-in slide-in-from-top-5">
                    <div className="grid md:grid-cols-2 gap-6 p-6">
                      <div className="space-y-4">
                        <p className="text-stone-600 leading-relaxed">{section.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-bold text-stone-800">Destacados:</h4>
                          <ul className="space-y-2">
                            {section.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-stone-600">
                                <span className="text-lime-600 mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-stone-200 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-center text-stone-800">Conoce Nuestra Experiencia</h2>
              <div className="relative aspect-video bg-stone-200 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-lime-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-stone-600 font-medium">Video próximamente</p>
                  <p className="text-sm text-stone-500">
                    Aquí podrás ver un recorrido completo por el Corredor Cultural y Agroecológico
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-stone-800">Reserva Tu Experiencia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-stone-200 hover:border-lime-600 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-lime-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">WhatsApp</h3>
                    <p className="text-sm text-stone-600">Contacto directo</p>
                  </div>
                </div>
                <a href="https://wa.me/573112345678" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">Escribir por WhatsApp</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-stone-200 hover:border-lime-600 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-lime-600 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">Instagram</h3>
                    <p className="text-sm text-stone-600">Síguenos</p>
                  </div>
                </div>
                <a
                  href="https://instagram.com/asogranja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">Visitar Instagram</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-xl font-bold">ASOGRANJA</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Promoviendo el turismo rural comunitario y el desarrollo sostenible en Sogamoso, Boyacá.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold">Otras Rutas</h4>
              <ul className="space-y-2 text-sm text-stone-300">
                <li>
                  <Link href="/rutas/turismo-cultural" className="hover:text-lime-400 transition-colors">
                    Turismo Cultural
                  </Link>
                </li>
                <li>
                  <Link href="/rutas/corredor-ancestral" className="hover:text-lime-400 transition-colors">
                    Corredor Ancestral
                  </Link>
                </li>
                <li>
                  <Link href="/rutas/cultura-y-memoria" className="hover:text-lime-400 transition-colors">
                    Ruta Cultura y Memoria
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold">Contacto</h4>
              <ul className="space-y-2 text-sm text-stone-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Sogamoso, Boyacá, Colombia</span>
                </li>
                <li>Disponible todo el año</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm text-stone-400">
            <p>© 2025 ASOGRANJA Sogamoso. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
