import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, CreditCard, RotateCcw, ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Flashcards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
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
          <h1 className="text-3xl font-bold mb-2">Flashcards</h1>
          <p className="text-gray-600 mb-8">
            Estudia con tarjetas interactivas generadas automáticamente por IA
          </p>

          {/* Flashcard Sets */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                    Matemáticas
                  </Badge>
                </div>
                <CardTitle className="text-lg">
                  Derivadas e Integrales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  15 flashcards • Generadas desde tus notas
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Progreso: 8/15</span>
                  <Badge
                    variant="outline"
                    className="text-accent border-accent"
                  >
                    Revisión necesaria
                  </Badge>
                </div>
                <Button className="w-full rounded-xl">
                  <Play className="w-4 h-4 mr-2" />
                  Estudiar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CreditCard className="w-6 h-6 text-secondary" />
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Biología
                  </Badge>
                </div>
                <CardTitle className="text-lg">Estructura Celular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  28 flashcards • Generadas desde PDF
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Progreso: 28/28</span>
                  <Badge
                    variant="outline"
                    className="text-secondary border-secondary"
                  >
                    Completado
                  </Badge>
                </div>
                <Button variant="outline" className="w-full rounded-xl">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Repasar
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CreditCard className="w-6 h-6 text-accent" />
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                    Historia
                  </Badge>
                </div>
                <CardTitle className="text-lg">Revolución Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  22 flashcards • Generadas desde notas
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Progreso: 12/22</span>
                  <Badge
                    variant="outline"
                    className="text-primary border-primary"
                  >
                    En progreso
                  </Badge>
                </div>
                <Button className="w-full rounded-xl">
                  <Play className="w-4 h-4 mr-2" />
                  Continuar
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CreditCard className="w-6 h-6 text-orange-500" />
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                    Física
                  </Badge>
                </div>
                <CardTitle className="text-lg">Mecánica Cuántica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  35 flashcards • Generadas desde PDF
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Progreso: 0/35</span>
                  <Badge
                    variant="outline"
                    className="text-gray-500 border-gray-300"
                  >
                    Nuevo
                  </Badge>
                </div>
                <Button className="w-full rounded-xl">
                  <Play className="w-4 h-4 mr-2" />
                  Comenzar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Study Mode Preview */}
          <Card className="rounded-2xl border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-center">
                Vista Previa del Modo Estudio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center mb-4">
                  <h3 className="text-lg font-semibold mb-4">
                    ¿Qué es una derivada?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Haz clic para ver la respuesta
                  </p>
                  <Button variant="outline" className="mt-4 rounded-xl">
                    Mostrar Respuesta
                  </Button>
                </div>
                <div className="flex space-x-2 justify-center">
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Difícil
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Bien
                  </Button>
                  <Button size="sm" className="rounded-lg">
                    Fácil
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-gray-500">
            <p>🚧 Sistema de flashcards interactivas próximamente</p>
            <p className="text-sm mt-2">
              Incluirá repetición espaciada y autoevaluación inteligente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
