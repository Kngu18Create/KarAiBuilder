import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, FileText, Search, Plus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Notes = () => {
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
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Mis Notas</h1>
              <p className="text-gray-600">
                Todas tus notas organizadas con etiquetas y categorías
              </p>
            </div>
            <Button className="rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Nota
            </Button>
          </div>

          {/* Search Bar */}
          <Card className="rounded-2xl border-0 shadow-lg bg-white mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar notas..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </CardContent>
          </Card>

          {/* Sample Notes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <FileText className="w-6 h-6 text-primary" />
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
                  Conceptos fundamentales del cálculo diferencial e integral...
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>15 flashcards generadas</span>
                  <span>hace 2 días</span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <FileText className="w-6 h-6 text-secondary" />
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Biología
                  </Badge>
                </div>
                <CardTitle className="text-lg">Estructura Celular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Organelos, funciones y procesos celulares básicos...
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>28 flashcards generadas</span>
                  <span>hace 1 semana</span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <FileText className="w-6 h-6 text-accent" />
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                    Historia
                  </Badge>
                </div>
                <CardTitle className="text-lg">Revolución Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Causas, desarrollo y consecuencias de la revolución...
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>22 flashcards generadas</span>
                  <span>hace 3 días</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center text-gray-500">
            <p>🚧 Funcionalidad completa próximamente</p>
            <p className="text-sm mt-2">
              Pronto podrás crear, editar y organizar todas tus notas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
