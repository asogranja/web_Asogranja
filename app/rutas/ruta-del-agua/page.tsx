"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Phone, Instagram, Clock, Users, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RutaDelAguaPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/design-mode/Anexo%2024.jpg"
          alt="Lago de Tota - Vista aérea"
          fill
          className="object-cover brightness-95"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-stone-50/90"></div>

        <Link href="/#rutas" className="absolute top-6 left-6 z-20">
          <Button
            variant="outline"
            className="bg-white/95 hover:bg-white text-stone-800 border-2 border-stone-200 hover:border-cyan-600 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="font-semibold">Volver al Inicio</span>
          </Button>
        </Link>

        <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-xs text-white">Foto por: RCN Radio</p>
        </div>
        {/* </CHANGE> */}

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-balance drop-shadow-2xl leading-tight">Ruta del Agua</h1>
            <p className="text-xl md:text-2xl text-balance leading-relaxed drop-shadow-lg font-medium">
              Recorre con nosotros el cuerpo de agua más grande de Colombia sobre los 3.015 m.s.n.m
            </p>
            <div className="pt-4">
              <div className="inline-block bg-cyan-600/90 backdrop-blur-sm px-8 py-4 rounded-full">
                <p className="text-lg md:text-xl font-bold italic">
                  "Un viaje, seis paradas, infinitas emociones: dale la vuelta al Lago de Tota."
                </p>
              </div>
            </div>
            {/* </CHANGE> */}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-stone-200 shadow-lg animate-in fade-in slide-in-from-bottom-5">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-stone-800">Experiencia en el Lago de Tota</h2>
              </div>
              <p className="text-lg text-stone-600 leading-relaxed">
                Descubre el Lago de Tota, el cuerpo de agua más grande de Colombia y uno de los lagos de alta montaña
                más impresionantes de Latinoamérica. Ubicado a 3.015 metros sobre el nivel del mar en la Provincia de
                Sugamuxí, este majestuoso lago te invita a recorrer sus orillas, conocer sus pueblos pintorescos y
                conectar con la naturaleza en su máxima expresión.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Un viaje completo alrededor del lago que combina paisajes espectaculares, cultura local, gastronomía
                tradicional y la oportunidad de vivir experiencias únicas en cada una de las seis paradas que componen
                esta ruta inolvidable.
              </p>
              {/* </CHANGE> */}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Detalles de la Ruta</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 border-stone-200 hover:border-cyan-600 transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-600/10 rounded-full">
                  <Clock className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Duración</h3>
                  <p className="text-stone-600">Jornada completa</p>
                  <p className="text-sm text-stone-500">8 horas de actividades</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-stone-200 hover:border-cyan-600 transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-600/10 rounded-full">
                  <Users className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Grupo</h3>
                  <p className="text-stone-600">Mínimo 5 personas</p>
                  <p className="text-sm text-stone-500">Máximo 20 personas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-stone-200 hover:border-cyan-600 transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-600/10 rounded-full">
                  <MapPin className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                  <p className="text-stone-600">Provincia Sugamuxí</p>
                  <p className="text-sm text-stone-500">Lago de Tota</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-stone-200 hover:border-cyan-600 transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-600/10 rounded-full">
                  <Droplets className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Experiencia</h3>
                  <p className="text-stone-600">Lago más alto</p>
                  <p className="text-sm text-stone-500">de Latinoamérica</p>
                </div>
              </CardContent>
            </Card>
            {/* </CHANGE> */}
          </div>

          {/* What's Included */}
          <Card className="border-2 border-stone-200 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-stone-800 text-center">La Ruta Incluye</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <span className="text-cyan-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-stone-800">Recorrido guiado</h4>
                    <p className="text-sm text-stone-600">Guía experto durante toda la jornada</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <span className="text-cyan-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-stone-800">Experiencia natural por todo lo alto</h4>
                    <p className="text-sm text-stone-600">Descubre paisajes únicos a 3.015 m.s.n.m</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <span className="text-cyan-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-stone-800">Pueblitos más lindos</h4>
                    <p className="text-sm text-stone-600">Conoce los encantadores pueblos de Sugamuxi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <span className="text-cyan-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-stone-800">Transporte</h4>
                    <p className="text-sm text-stone-600">Ida y vuelta desde punto de encuentro</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <span className="text-cyan-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-stone-800">Refrigerio</h4>
                    <p className="text-sm text-stone-600">Snacks y bebidas durante el recorrido</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <span className="text-cyan-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-stone-800">Almuerzo</h4>
                    <p className="text-sm text-stone-600">Comida típica con productos locales</p>
                  </div>
                </div>
              </div>
              {/* </CHANGE> */}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-cyan-600/20 bg-gradient-to-br from-cyan-50 to-blue-50">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-stone-800 mb-4">Seis Paradas, Infinitas Emociones</h3>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Cada parada en el recorrido del Lago de Tota ofrece una experiencia única: desde miradores con vistas
                  panorámicas hasta pueblos con encanto colonial, pasando por playas de arena blanca y espacios para
                  conectar con la naturaleza. Descubre la riqueza cultural, gastronómica y natural que rodea al cuerpo
                  de agua más grande de Colombia.
                </p>
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
            <Card className="border-2 border-stone-200 hover:border-cyan-600 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">WhatsApp</h3>
                    <p className="text-sm text-stone-600">Contacto directo</p>
                  </div>
                </div>
                <a href="https://wa.me/573114632044" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Escribir por WhatsApp</Button>
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
                  <Link href="/rutas/corredor-cultural-agroecologico" className="hover:text-cyan-400 transition-colors">
                    Corredor Cultural y Agroecológico
                  </Link>
                </li>
                <li>
                  <Link href="/rutas/corredor-ancestral" className="hover:text-cyan-400 transition-colors">
                    Corredor Ancestral
                  </Link>
                </li>
                <li>
                  <Link href="/rutas/cultura-y-memoria" className="hover:text-cyan-400 transition-colors">
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
