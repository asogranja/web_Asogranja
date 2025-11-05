"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  Phone,
  Mail,
  BookOpen,
  Sparkles,
  Mountain,
  Heart,
  Camera,
  Video,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function CulturaYMemoriaPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100 dark:from-background dark:via-background dark:to-stone-950">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/cultura-memoria-indigenous-symbols.jpg"
          alt="Grupo con símbolos indígenas en actividad cultural"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Back Button */}
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

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <h1
                  className="text-4xl md:text-6xl font-bold text-white text-balance"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Ruta Pedagógica Cultura y Memoria
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/95 text-pretty mb-2">
                Aprende, explora y conecta con nuestras raíces
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="border border-stone-200 dark:border-stone-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Mountain className="w-8 h-8 text-stone-600 dark:text-stone-400" />
                  <h2
                    className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Una Experiencia Educativa y Turística
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-stone-700 dark:text-stone-300">
                  Esta experiencia te invita a descubrir la historia viva de nuestras comunidades rurales a través de un
                  recorrido lleno de naturaleza, aprendizaje y tradición. Ideal para niños, jóvenes y grupos escolares,
                  combina caminatas interpretativas, actividades culturales y contacto directo con el territorio.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
                <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                  Una experiencia educativa y turística que promueve el respeto por el patrimonio y despierta la
                  curiosidad de niños y jóvenes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Video Section */}
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
                    controls
                    className="w-full h-full object-cover"
                    poster="/cultura-memoria-indigenous-symbols.jpg"
                  >
                    <source src="/Cultura y memoria.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery */}
          <div className="fade-in-section opacity-0 transition-all duration-700">
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-8 h-8 text-stone-600 dark:text-stone-400" />
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Recorrido de la Ruta
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2020-mxHaI9qdkFM6JMlK7zlvReXVjxNIv6.jpg"
                    alt="Ciudad de la Memoria - Logo con símbolos indígenas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Ciudad de la Memoria</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Un espacio que funciona como alojamiento rural. Aquí conocerás la vida campesina y la sabiduría
                    transmitida por abuelos y ancestros.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2021-ztgQmyv6UjFPX4nHBYepnhepsRnhvC.jpg"
                    alt="Paso Río Monquirá - Sendero natural con arroyo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Paso Río Monquirá</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Un sendero que conecta pasado y presente. A través de relatos descubrirás por qué este lugar fue tan
                    importante para los Muiscas.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2022-vxKU77iVPuMxRCKhWqjKpHUf6UoRRg.jpg"
                    alt="Loma El Cerro y Pasillo de Adobe - Grupo con símbolos indígenas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">
                    Loma El Cerro y Pasillo de Adobe
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Dos paradas llenas de historia: aprenderás sobre las labores campesinas, el cuidado del agua y los
                    caminos tradicionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anexo%2023-l2rOpjIxsjDo3PKuWWQACLqx01xOxE.jpg"
                    alt="Casa Cultura - Logo con guitarra y bailarina"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Casa Cultura</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    El recorrido termina con actividades artísticas y pedagógicas, diseñadas para que los participantes
                    aprendan de forma vivencial y divertida.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Details Section */}
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
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Jornada 5 horas de actividades</p>
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
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Mínimo 5 máximo 20 personas</p>
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
                      <p className="text-stone-700 dark:text-stone-300 font-medium">
                        Vereda Monquira - Milagro y Playita
                      </p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Sogamoso, Boyacá</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <BookOpen className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">
                        Aprendizaje Cultural
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Talleres interactivos</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Símbolos y tradiciones</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What's Included */}
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
                    "Actividades pedagógicas y símbolos indígenas",
                    "Caminata por senderos naturales",
                    "Charla sobre memoria histórica y cultural",
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

          {/* CTA Section */}
          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 text-white border-0 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/traditional-patterns.jpg')] opacity-5"></div>
              <CardContent className="p-10 md:p-16 text-center space-y-8 relative z-10">
                <Sparkles className="w-16 h-16 mx-auto" />
                <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Vive la Cultura y la Memoria
                </h2>
                <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto text-pretty">
                  Reserva tu lugar y sé parte de esta experiencia única de aprendizaje cultural
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-stone-800 hover:bg-stone-50"
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    Contactar por WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-stone-800 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="mr-2 h-6 w-6" />
                    Enviar Correo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Cards */}
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
                          <p className="font-bold text-lg text-stone-800 dark:text-stone-200">Contactar</p>
                        </div>
                      </a>

                      <a
                        href="mailto:asogranjasogamoso@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-stone-200 dark:border-stone-800 hover:border-pink-500 dark:hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all duration-300 group"
                      >
                        <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full group-hover:bg-pink-500 transition-colors duration-300">
                          <Mail className="w-6 h-6 text-pink-600 dark:text-pink-400 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Correo</p>
                          <p className="font-bold text-lg text-stone-800 dark:text-stone-200">
                            asogranjasogamoso@gmail.com
                          </p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 rounded-lg border-2 border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
                        <div className="bg-stone-200 dark:bg-stone-800 p-3 rounded-full">
                          <MapPin className="w-6 h-6 text-stone-600 dark:text-stone-400" />
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Ubicación</p>
                          <p className="font-bold text-stone-800 dark:text-stone-200">Sogamoso</p>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Boyacá, Colombia</p>
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
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Patrimonio Vivo</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Conecta con tradiciones ancestrales que se mantienen vivas en nuestra comunidad
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Aprendizaje Significativo</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Talleres prácticos que te permiten experimentar y comprender nuestra cultura
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Comunidad Auténtica</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Interactúa directamente con miembros de la comunidad campesina
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Experiencia Completa</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Combina cultura, naturaleza y gastronomía en un solo recorrido
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

      <footer className="bg-stone-800 dark:bg-stone-950 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Asogranja Sogamoso
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Promoviendo el turismo rural comunitario y preservando las tradiciones ancestrales de Sogamoso, Boyacá.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Contacto
              </h3>
              <div className="space-y-2 text-stone-300 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  322 881 4258
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  @CiudadDeLaMemoria
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Sogamoso, Boyacá
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Nuestras Rutas
              </h3>
              <div className="space-y-2 text-stone-300 text-sm">
                <Link href="/rutas/corredor-ancestral" className="block hover:text-white transition-colors">
                  Corredor Ancestral
                </Link>
                <Link href="/rutas/turismo-cultural" className="block hover:text-white transition-colors">
                  Turismo Cultural
                </Link>
                <Link href="/rutas/cultura-y-memoria" className="block hover:text-white transition-colors">
                  Ruta Cultura y Memoria
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8 text-center text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Asogranja Sogamoso. Todos los derechos reservados.</p>
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

      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
