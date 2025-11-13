"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Leaf, MapPin, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NosotrosPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

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
      {/* Header with back button */}
      <div className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-10">
              <h1
                className="text-4xl md:text-5xl font-bold text-balance"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Quiénes Somos
              </h1>
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
                <Link href="/#contacto">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Contáctanos
                  </Button>
                </Link>
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
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Misión
              </h2>
              <p className="leading-relaxed opacity-90">
                Asogranja está comprometida con el desarrollo y promoción del sector campesino mediante experiencias
                turísticas, productivas, agro ecológicas y artesanales como parte de la identidad rural para hacerla más
                atractiva, eficiente y efectiva en la transmisión de saberes y valores sociales y culturales del
                territorio boyacense.
              </p>
            </div>
            <div className="space-y-4 animate-in fade-in slide-in-from-right-10">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Visión
              </h2>
              <p className="leading-relaxed opacity-90">
                Potenciar los saberes y experiencia campesinos de sus asociados para elevar el potencial socioeconómico
                de los mismos, potenciando la gran riqueza ambiental y ancestral de los territorios y los valores de las
                mujeres campesinas.
              </p>
            </div>
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
                  <Link href="/#productos" className="hover:opacity-100 transition-opacity">
                    Productos Artesanales
                  </Link>
                </li>
                <li>
                  <Link href="/#produccion-agroecologica" className="hover:opacity-100 transition-opacity">
                    Agroecológia
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
    </div>
  )
}
