import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Zap,
  Users,
  Star,
  ArrowRight,
  Upload,
  FileText,
  CreditCard,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              KarAI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#caracteristicas"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Características
            </a>
            <a
              href="#testimonios"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Testimonios
            </a>
            <Link to="/login">
              <Button variant="outline" className="rounded-xl">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-8 rounded-full px-6 py-2 bg-gray-100 text-gray-900 border-gray-200">
          ✨ Inteligencia Artificial para Educación
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Aprende más inteligente
          <br />
          <span className="bg-gradient-to-r from-primary via-gray-700 to-secondary bg-clip-text text-transparent">
            con KarAI
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          La plataforma educativa con IA que transforma tus materiales en
          flashcards, quizzes y resúmenes personalizados. Perfecta para
          estudiantes, profesores y autodidactas.
        </p>
        <div className="flex justify-center">
          <Link to="/dashboard">
            <Button
              size="lg"
              className="rounded-xl px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Zap className="w-5 h-5 mr-2" />
              Comenzar Gratis
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-gray-600">Estudiantes activos</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
            <div className="text-gray-600">Flashcards creadas</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-gray-600">Mejora en retención</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Todo lo que necesitas para
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              estudiar mejor
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            KarAI utiliza inteligencia artificial para crear experiencias de
            aprendizaje personalizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Subir Material</h3>
              <p className="text-gray-600">
                Arrastra PDFs, documentos y audios. La IA los procesa
                automáticamente.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Notas Inteligentes</h3>
              <p className="text-gray-600">
                Resúmenes automáticos con etiquetas, emojis y soporte para
                LaTeX.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flashcards</h3>
              <p className="text-gray-600">
                Tarjetas interactivas con autoevaluación y repetición espaciada.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progreso</h3>
              <p className="text-gray-600">
                Seguimiento detallado de tu rendimiento y objetivos de estudio.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Lo que dicen nuestros
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                estudiantes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Miles de estudiantes ya han mejorado sus resultados con KarAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "KarAI me ayudó a aprobar medicina. Las flashcards generadas
                  automáticamente son increíbles."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold">María González</div>
                    <div className="text-sm text-gray-500">
                      Estudiante de Medicina
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Como profesor, KarAI me ahorra horas creando material de
                  estudio para mis alumnos."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">C</span>
                  </div>
                  <div>
                    <div className="font-semibold">Carlos Rodríguez</div>
                    <div className="text-sm text-gray-500">
                      Profesor de Historia
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Perfecta para autodidactas. Los quizzes adaptativos son
                  exactamente lo que necesitaba."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold">Ana Martín</div>
                    <div className="text-sm text-gray-500">Desarrolladora</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para transformar tu forma de estudiar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de estudiantes que ya están aprendiendo más
            inteligente con KarAI
          </p>
          <Link to="/dashboard">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl px-8 py-4 text-lg font-semibold"
            >
              Comenzar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KarAI
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Términos
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Soporte
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 KarAI. Todos los derechos reservados. Hecho con ❤️ para
            estudiantes.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
