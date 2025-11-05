"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Phone, Instagram, ChevronDown, ChevronUp, Users, Clock } from "lucide-react"
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
        "Amasijos, productos tradicionales y vivencias en torno al maíz. Descubre la importancia del maíz en nuestra cultura campesina y disfruta de productos tradicionales como la chicha.",
      highlights: [
        "Amasijos tradicionales",
        "Productos derivados del maíz",
        "Chicha artesanal",
        "Vivencias culturales campesinas",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%208-riK8GH5gVXAfWpGTuPZuceTXTYFhgi.jpg",
    },
    {
      id: "rincon-huerta",
      title: "Rincón de la Huerta",
      description:
        "Talleres prácticos, biopreparados y saberes agroecológicos. Sumérgete en el mundo de la agricultura orgánica y aprende técnicas sostenibles para cultivar alimentos saludables.",
      highlights: [
        "Talleres prácticos de agricultura",
        "Elaboración de biopreparados",
        "Técnicas agroecológicas",
        "Saberes tradicionales campesinos",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%209-npAmSqakH65g9tEGjb6a9FdUQoVwPa.jpg",
    },
    {
      id: "casa-cultura",
      title: "Casa Cultura",
      description:
        "Arte, historia, tertulias y siembras compartidas. Un espacio para conectar con la cultura local, el arte y las tradiciones a través de actividades comunitarias.",
      highlights: [
        "Actividades artísticas y culturales",
        "Tertulias comunitarias",
        "Historia local",
        "Siembras compartidas",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2010-yO7kXgDAM87BMbHXNo7x4rLKfJWvCr.jpg",
    },
    {
      id: "casona-delicias",
      title: "Casona Las Delicias del Sabor",
      description:
        "Papas nativas, hallacas, tamales y más delicias locales. Disfruta de la auténtica gastronomía boyacense preparada con recetas ancestrales y productos locales.",
      highlights: [
        "Papas nativas de la región",
        "Hallacas tradicionales",
        "Tamales artesanales",
        "Gastronomía boyacense auténtica",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2011-sivILQGaL3p5kqTDJcieVU9GSgKohs.jpg",
    },
    {
      id: "postres-mariposas",
      title: "Postres las Mariposas",
      description:
        "Endulza tu paladar con productos propios de nuestra tierrita. Postres artesanales elaborados con frutas de la región que combinan tradición y sabor.",
      highlights: ["Postres artesanales", "Frutas locales", "Dulces tradicionales", "Productos de la región"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2012-BPpLX7RPRFW6FWicIiQNZSbBn4mtQt.jpg",
    },
    {
      id: "rincon-labores",
      title: "Rincón de las Labores y las Tradiciones",
      description:
        "Taller de Ordeño, Elaboración de Queso y Cuajada. Vive la experiencia del trabajo campesino tradicional y aprende sobre la producción artesanal de lácteos.",
      highlights: [
        "Taller de ordeño tradicional",
        "Elaboración de queso artesanal",
        "Preparación de cuajada",
        "Técnicas campesinas ancestrales",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2013-PoxjwkCufNpXvRFHP1uO0gF0FNX1h4.jpg",
    },
    {
      id: "juega-crece",
      title: "Juega y Crece con Nidia",
      description:
        "Finaliza tu experiencia con alegría en un espacio recreativo con juegos, actividades al aire libre y creatividad para grandes y chicos.",
      highlights: [
        "Juegos recreativos",
        "Actividades al aire libre",
        "Espacios creativos",
        "Diversión para toda la familia",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2014-OVdkb7YUtys3cW0Ix8zmhHjBOQj9Zz.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%207-7WAw6wrwKbqZn74O06kaonreVekv91.jpg"
          alt="Ruta Experiencial Cultural y Agroecológica"
          fill
          className="object-cover brightness-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-stone-50/95"></div>

        <Link href="/#rutas" className="absolute top-6 left-6 z-20">
          <Button
            variant="outline"
            className="bg-white/95 hover:bg-white text-stone-800 border-2 border-stone-200 hover:border-lime-600 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="font-semibold">Volver a Rutas</span>
          </Button>
        </Link>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-balance drop-shadow-2xl leading-tight">
              Ruta Experiencial Cultural y Agroecológica
            </h1>
            <p className="text-xl md:text-2xl text-balance leading-relaxed drop-shadow-lg font-medium">
              ¡Vive una aventura única que conecta la cultura, la tierra y el emprendimiento local!
            </p>
            <div className="pt-4">
              <div className="inline-block bg-lime-600/90 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-sm md:text-base font-semibold">
                  Proyecto: Fortalecimiento de los Saberes Tradicionales en el Turismo Cultural y Comunitario de
                  Sogamoso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-stone-200 shadow-lg animate-in fade-in slide-in-from-bottom-5">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-stone-800">Un viaje, seis paradas, infinitas emociones</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Inicia tu recorrido en el encantador Parque de la Villa, continúa por La Pilita de la Unión y descubre
                el fascinante mundo de los abonos orgánicos.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Aquí comenzará el viaje en el Corredor Experiencial Milagro y Playita, donde lo urbano se transforma en
                rural. Una experiencia de sabores, saberes y tradiciones.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-stone-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-lime-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">Duración</h3>
                    <p className="text-sm text-stone-600">Jornada 6 horas de actividades</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-lime-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">Grupo</h3>
                    <p className="text-sm text-stone-600">Mínimo 5, máximo 20 personas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-lime-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">Ubicación</h3>
                    <p className="text-sm text-stone-600">Vereda Segunda chorrera sector Playita y sector Azufre</p>
                  </div>
                </div>
              </div>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-stone-200 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-center text-stone-800">La Experiencia Incluye</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-lime-600 text-xl">✓</span>
                  <p className="text-stone-600">Recorrido guiado</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lime-600 text-xl">✓</span>
                  <p className="text-stone-600">Charla sobre abonos orgánicos y taller de germinación</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lime-600 text-xl">✓</span>
                  <p className="text-stone-600">Juegos, actividades al aire libre y creatividad</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lime-600 text-xl">✓</span>
                  <p className="text-stone-600">
                    Descubre una experiencia de sabores, saberes y tradiciones campesinas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lime-600 text-xl">✓</span>
                  <p className="text-stone-600">Refrigerio y bebida tradicional</p>
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
                <a href="https://wa.me/573114632044" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">Escribir por WhatsApp</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-stone-200 hover:border-[#E4405F] transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45] rounded-full flex items-center justify-center">
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
                  <Button className="w-full bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] hover:opacity-90 text-white transition-opacity">
                    Visitar Instagram
                  </Button>
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
                  <Link href="/rutas/ruta-del-agua" className="hover:text-lime-400 transition-colors">
                    Ruta del Agua
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
    </div>
  )
}
