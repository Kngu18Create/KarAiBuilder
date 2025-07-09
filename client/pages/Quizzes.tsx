import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Zap, Clock, Award, ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

const Quizzes = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthRequired = () => {
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                KarAI
              </span>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="rounded-lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Dashboard
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
          <p className="text-gray-600 mb-8">
            Pon a prueba tus conocimientos con exámenes generados
            automáticamente
          </p>

          {/* Available Quizzes */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Zap className="w-6 h-6 text-primary" />
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                    Matemáticas
                  </Badge>
                </div>
                <CardTitle className="text-lg">Quiz: Derivadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>15 min</span>
                  </div>
                  <div className="text-sm text-gray-600">10 preguntas</div>
                  <Badge
                    variant="outline"
                    className="text-primary border-primary"
                  >
                    Nuevo
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Preguntas de opción múltiple sobre reglas de derivación
                </p>
                <Button
                  className="w-full rounded-xl"
                  onClick={handleAuthRequired}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Comenzar Quiz
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Zap className="w-6 h-6 text-secondary" />
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Biología
                  </Badge>
                </div>
                <CardTitle className="text-lg">Quiz: Célula</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>20 min</span>
                  </div>
                  <div className="text-sm text-gray-600">15 preguntas</div>
                  <Badge
                    variant="outline"
                    className="text-secondary border-secondary"
                  >
                    Completado
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Última puntuación: 85% • hace 2 días
                </p>
                <Button variant="outline" className="w-full rounded-xl">
                  Ver Resultados
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Zap className="w-6 h-6 text-accent" />
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                    Historia
                  </Badge>
                </div>
                <CardTitle className="text-lg">Quiz: Revolución</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>25 min</span>
                  </div>
                  <div className="text-sm text-gray-600">12 preguntas</div>
                  <Badge
                    variant="outline"
                    className="text-accent border-accent"
                  >
                    En progreso
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Pregunta 8 de 12 • Progreso guardado
                </p>
                <Button
                  className="w-full rounded-xl"
                  onClick={handleAuthRequired}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Continuar Quiz
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                    Física
                  </Badge>
                </div>
                <CardTitle className="text-lg">Quiz: Cuántica</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>30 min</span>
                  </div>
                  <div className="text-sm text-gray-600">20 preguntas</div>
                  <Badge
                    variant="outline"
                    className="text-gray-500 border-gray-300"
                  >
                    Generando...
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Quiz avanzado sobre mecánica cuántica
                </p>
                <Button disabled className="w-full rounded-xl">
                  Preparando Quiz...
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quiz Preview */}
          <Card className="rounded-2xl border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-center">
                Vista Previa del Quiz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Pregunta 3 de 10
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>12:30</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-4">
                    ¿Cuál es la derivada de f(x) = x²?
                  </h3>
                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      A) 2x
                    </div>
                    <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      B) x²
                    </div>
                    <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      C) 2x²
                    </div>
                    <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      D) x
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 justify-center">
                  <Button variant="outline" className="rounded-xl">
                    Anterior
                  </Button>
                  <Button className="rounded-xl">Siguiente</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Results */}
          <Card className="rounded-2xl border-0 shadow-lg bg-white mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Resultados Recientes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold">
                      Quiz: Estructura Celular
                    </div>
                    <div className="text-sm text-gray-600">
                      Biología • hace 2 días
                    </div>
                  </div>
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                    85%
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold">Quiz: Funciones</div>
                    <div className="text-sm text-gray-600">
                      Matemáticas • hace 1 semana
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    92%
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-gray-500">
            <p>🚧 Sistema de quizzes adaptativos próximamente</p>
            <p className="text-sm mt-2">
              Incluirá retroalimentación instantánea y análisis de errores
            </p>
          </div>
        </div>
      </div>

      {/* Modal de autenticación */}
      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </div>
  );
};

export default Quizzes;
