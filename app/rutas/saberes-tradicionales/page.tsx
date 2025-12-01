"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users, Phone, Mail, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SaberesTradicionalesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <Link href="/#rutas">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Rutas
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Ruta de los Saberes Tradicionales
          </h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/traditional-colombian-farming-crafts-rural.jpg"
          alt="Saberes Tradicionales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Description */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Descripción de la Ruta
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Aprende técnicas agrícolas ancestrales, gastronomía típica y artesanía campesina directamente de
                nuestros maestros rurales. Una inmersión completa en el conocimiento campesino transmitido de generación
                en generación.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Esta experiencia educativa te permite participar activamente en talleres prácticos de agricultura
                orgánica, preparación de alimentos tradicionales boyacenses, elaboración de artesanías y técnicas de
                conservación de semillas nativas. Aprenderás de la sabiduría de quienes han trabajado la tierra durante
                décadas.
              </p>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Duración</h3>
                    <p className="text-muted-foreground">Jornada completa (7-9 horas)</p>
                    <p className="text-sm text-muted-foreground mt-1">Incluye almuerzo preparado por ustedes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Grupo</h3>
                    <p className="text-muted-foreground">Mínimo 6 personas</p>
                    <p className="text-sm text-muted-foreground mt-1">Máximo 12 personas por taller</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                    <p className="text-muted-foreground">Fincas asociadas</p>
                    <p className="text-sm text-muted-foreground mt-1">Zona rural de Sogamoso</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Nivel</h3>
                    <p className="text-muted-foreground">Todos los niveles</p>
                    <p className="text-sm text-muted-foreground mt-1">No requiere experiencia previa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Workshops */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Talleres Disponibles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Agricultura Orgánica</h3>
                  <p className="text-sm text-muted-foreground">
                    Técnicas de siembra, compostaje, control natural de plagas y manejo de cultivos sin químicos
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Gastronomía Boyacense</h3>
                  <p className="text-sm text-muted-foreground">
                    Preparación de platos típicos con ingredientes locales y recetas ancestrales
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Artesanía Campesina</h3>
                  <p className="text-sm text-muted-foreground">
                    Elaboración de productos artesanales con materiales naturales de la región
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Conservación de Semillas</h3>
                  <p className="text-sm text-muted-foreground">
                    Técnicas tradicionales de selección, secado y almacenamiento de semillas nativas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Qué Incluye
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Maestros campesinos expertos en cada área</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Todos los materiales para los talleres prácticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ingredientes para taller de gastronomía</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Almuerzo preparado por los participantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Refrigerios y bebidas tradicionales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Productos elaborados para llevar a casa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Manual de técnicas aprendidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Certificado de participación</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Aprende de los Maestros Campesinos
              </h2>
              <p className="text-lg opacity-90">Reserva tu taller y vive una experiencia educativa única</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </div>
            </CardContent>
          </Card>
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
