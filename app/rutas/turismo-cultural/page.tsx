"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users, Phone, Mail, Music, Sparkles, Heart, Camera, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function TurismoCulturalPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play()
            } else {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    if (videoRef.current) {
      videoObserver.observe(videoRef.current)
    }

    return () => videoObserver.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100 dark:from-background dark:via-background dark:to-stone-950">
      <div ref={heroRef} className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/anexo7.jpg"
          alt="Centro Cultural Comunitario - Bienvenida al Turismo Cultural"
          fill
          className="object-cover object-center hero-image brightness-110 contrast-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-6 left-4 md:left-8 z-10">
          <Link href="/#rutas">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Rutas
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <h1
                  className="text-4xl md:text-6xl font-bold text-white text-balance"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Ruta experiencial cultural y agroecológica
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/95 text-pretty mb-2">
                ¡Vive una aventura única que conecta la cultura, la tierra y el emprendimiento local!

              </p>

            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="border border-stone-200 dark:border-stone-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Music className="w-8 h-8 text-stone-600 dark:text-stone-400" />
                  <h2
                    className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Una Experiencia Cultural Única
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-stone-700 dark:text-stone-300">
                  Inicia tu recorrido en el encantador Parque de la Villa, continúa por La Pilita de la Unión y {" "}
                  <strong className="text-stone-900 dark:text-stone-100"></strong>descubre
                  el fascinante mundo de los abonos orgánicos.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
                <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                  Aquí comenzará el viaje en el Corredor Experiencial Milagro y Playita, donde lo urbano se
                  transforma en rural. Una experiencia de sabores, saberes y tradiciones.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <div className="flex items-center gap-3 mb-8">
              <Video className="w-8 h-8 text-stone-600 dark:text-stone-400" />
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Video de la Experiencia
              </h2>
            </div>
            <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 shadow-lg">
              <CardContent className="p-0">
                <div className="relative w-full aspect-video bg-stone-100 dark:bg-stone-900">
                  <video
                    ref={videoRef}
                    controls
                    className="w-full h-full object-cover"
                    poster="/cultural-center-gathering.jpg"
                    muted
                    loop
                  >
                    <source src="/112.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-8 h-8 text-stone-600 dark:text-stone-400" />
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Galería de Experiencias
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden bg-white dark:bg-stone-900 flex items-center justify-center p-8">
                  <Image
                    src="/tamales-tradicionales.jpg"
                    alt="Casona Las Delicias del Sabor"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Casona Las Delicias del Sabor</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Descubre el arte ancestral de preparar tamales envueltos en hojas de plátano (hallacas, tamales, Papas nativas y más delicias
                    locales).
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden bg-white dark:bg-stone-900 flex items-center justify-center p-8">
                  <Image
                    src="/postres-artesanales.jpg"
                    alt="Postres artesanales"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Postres las Mariposas</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Degusta deliciosos postres tradicionales preparados con recetas de generación en generación.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden bg-white dark:bg-stone-900 flex items-center justify-center p-8">
                  <Image
                    src="/chicha-tradicional.jpg"
                    alt="Chicha tradicional"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Kiosco del Maíz</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Prueba la bebida ancestral preparada artesanalmente según tradiciones milenarias (Amasijos, productos tradicionales y vivencias en torno al maíz).
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden bg-white dark:bg-stone-900 flex items-center justify-center p-8">
                  <Image
                    src="/productos-lacteos.jpg"
                    alt="Productos lácteos artesanales"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Rincón de las Labores y las Tradiciones</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Disfruta de quesos y productos lácteos frescos elaborados de forma artesanal (Taller de Ordeño, Elaboración de Queso
                    y Cuajada) .
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden bg-white dark:bg-stone-900 flex items-center justify-center p-8">
                  <Image
                    src="/Anexo 9.jpg"
                    alt="Música y cultura"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Rincón de la Huerta</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    (Talleres prácticos, biopreparados y saberes agroecológicos)
                  </p>
                </CardContent>

              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden bg-white dark:bg-stone-900 flex items-center justify-center p-8">
                  <Image
                    src="/musica-cultura.jpg"
                    alt="Música y cultura"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Casa Cultura</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Vive la experiencia de la música tradicional y las expresiones culturales campesinas (Arte, historia, tertulias y siembras compartidas).
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden bg-white dark:bg-stone-900 flex items-center justify-center p-8">
                  <Image
                    src="/actividades-recreativas.jpg"
                    alt="Actividades recreativas"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Juega y Crece con Nidia</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Participa en juegos tradicionales y actividades culturales llenas de alegría.
                  </p>
                </CardContent>
              </Card>


            </div>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950 border border-stone-200 dark:border-stone-800 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-80 md:h-auto min-h-[400px] bg-black flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image src="/Anexo 7.jpg" alt="Casa Cultura" fill className="object-contain" />
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8 md:p-10 space-y-6 flex flex-col justify-center">
                    <div>
                      <h3
                        className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200 mb-3"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Corredor experiencial milagro y playita
                      </h3>
                      <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400 mb-4">
                        <MapPin className="w-5 h-5" />
                        <p className="text-lg">Sogamoso, Boyacá</p>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                      Nuestro centro de experiencias turísticas en Sogamoso. Aquí se realizan
                      presentaciones de música tradicional y eventos gastronómicos que
                      celebran nuestra identidad campesina. Un espacio de encuentro donde visitantes y comunidad local
                      comparten saberes y tradiciones.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        size="lg"
                        className="bg-stone-700 hover:bg-stone-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        3114632044
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-stone-700 text-stone-700 hover:bg-stone-700 hover:text-white dark:text-stone-300 dark:border-stone-500 dark:hover:bg-stone-700 transition-all duration-300 bg-transparent"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        asogranjasogamoso@gmail.com
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-10 text-stone-800 dark:text-stone-200"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Detalles de la Experiencia
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <Clock className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Duración</h3>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">4 a 6 horas</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Jornada cultural completa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <Users className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Grupo</h3>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Mínimo 5 personas</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Máximo 20 personas por grupo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <MapPin className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Ubicación</h3>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Sogamoso, Boyacá</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                        Vereda Segunda chorrera sector Playita y sector Azufre
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <Music className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">
                        Experiencia agroecológica
                      </h3>

                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">gastronomía típica en vivo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="border-2 border-stone-200 dark:border-stone-800 shadow-lg bg-white dark:bg-stone-950">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-stone-600 dark:text-stone-400" />
                  <h2
                    className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Qué Incluye
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Recorrido guiado",
                    "Charla sobre abonos orgánicos y taller de germinación",
                    "juegos, actividades al aire libre y creatividad",
                    "Descubre una experiencia de sabores, saberes y tradiciones campesinas",
                    "Refrigerio y bebida tradicional",

                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors duration-200"
                    >
                      <span className="text-stone-600 dark:text-stone-400 mt-1 text-xl font-bold">✓</span>
                      <span className="text-stone-700 dark:text-stone-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 text-white border-0 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/traditional-patterns.jpg')] opacity-5"></div>
              <CardContent className="p-10 md:p-16 text-center space-y-8 relative z-10">
                <Sparkles className="w-16 h-16 mx-auto" />
                <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Vive la Cultura Campesina
                </h2>
                <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto text-pretty">
                  Contáctanos y reserva tu lugar en esta experiencia cultural única
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-stone-800 hover:bg-stone-50"
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    WhatsApp: 3114632044
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-stone-800 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="mr-2 h-6 w-6" />
                    asogranjasogamoso@gmail.com
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-stone-200 dark:border-stone-800 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 p-8 md:p-10 text-white">
                    <Sparkles className="w-12 h-12 mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                      Reserva tu Experiencia
                    </h2>
                    <p className="text-lg opacity-90 text-pretty">
                      Contáctanos y vive una experiencia cultural inolvidable
                    </p>
                  </div>
                  <div className="p-8 space-y-6 bg-white dark:bg-stone-950">
                    <div className="space-y-4">
                      <h3 className="font-bold text-xl text-stone-800 dark:text-stone-200 mb-4">
                        Información de Contacto
                      </h3>

                      <a
                        href="https://wa.me/573114632044"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-stone-200 dark:border-stone-800 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all duration-300 group"
                      >
                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full group-hover:bg-green-500 transition-colors duration-300">
                          <Phone className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 dark:text-stone-400">WhatsApp</p>
                          <p className="font-bold text-lg text-stone-800 dark:text-stone-200">3114632044</p>
                        </div>
                      </a>

                      <a
                        href="https://instagram.com/Asogranja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-stone-200 dark:border-stone-800 hover:border-pink-500 dark:hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all duration-300 group"
                      >
                        <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full group-hover:bg-pink-500 transition-colors duration-300">
                          <Mail className="w-6 h-6 text-pink-600 dark:text-pink-400 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Instagram</p>
                          <p className="font-bold text-lg text-stone-800 dark:text-stone-200">@Asogranja</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 rounded-lg border-2 border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
                        <div className="bg-stone-200 dark:bg-stone-800 p-3 rounded-full">
                          <MapPin className="w-6 h-6 text-stone-600 dark:text-stone-400" />
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Ubicación</p>
                          <p className="font-bold text-stone-800 dark:text-stone-200">Milagro y playita</p>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Sogamoso, Boyacá</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-10 space-y-6 bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-stone-600 dark:text-stone-400" />
                    <h3
                      className="text-2xl font-bold text-stone-800 dark:text-stone-200"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      ¿Por qué elegirnos?
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Experiencia Auténtica</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Conecta con las verdaderas tradiciones culturales de la región
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Artistas Locales</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Aprende de músicos, bailarines y artesanos que viven estas tradiciones
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Turismo Sostenible</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Apoyamos a la comunidad local y el desarrollo cultural sostenible
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Disponible Todo el Año</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Oferta permanente para que disfrutes cuando prefieras
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-stone-200 dark:border-stone-800">
                    <p className="text-center text-stone-700 dark:text-stone-300 font-medium">
                      ¡Reserva ahora y vive una experiencia única!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-stone-800 text-white py-12 mt-16">
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
                  <Link href="/#produccion-agroecologica" className="hover:opacity-100 transition-opacity">
                    Producción Agroecológica
                  </Link>
                </li>
                <li>
                  <Link href="/#rutas" className="hover:opacity-100 transition-opacity">
                    Rutas Turísticas
                  </Link>
                </li>
                <li>
                  <Link href="/#productos" className="hover:opacity-100 transition-opacity">
                    Productos Artesanales
                  </Link>
                </li>
                <li>
                  <Link href="/#nosotros" className="hover:opacity-100 transition-opacity">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="/#contacto" className="hover:opacity-100 transition-opacity">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Contacto</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Sogamoso, Boyacá, Colombia</li>
                <li>Teléfono: 311 463 2044</li>
                <li>Disponible todo el año</li>
                <li>asogranjasogamoso@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2025 ASOGRANJA Sogamoso. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-transparent hover:bg-green-50 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-0 overflow-hidden border-0 animate-pulse hover:animate-bounce"
          onClick={() => window.open("https://wa.me/573222374379?text=Hola,%20quiero%20más%20información", "_blank")}
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

      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-image {
          filter: brightness(1.1) contrast(1.05) saturate(1.1);
        }
      `}</style>
    </div>
  )
}
