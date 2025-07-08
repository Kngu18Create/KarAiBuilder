import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  BarChart3,
  TrendingUp,
  Target,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const Progress = () => {
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
          <h1 className="text-3xl font-bold mb-2">Mi Progreso</h1>
          <p className="text-gray-600 mb-8">
            Seguimiento detallado de tu rendimiento y evolución académica
          </p>

          {/* Goals Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="rounded-2xl border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Target className="w-6 h-6 text-primary" />
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Semanal
                  </Badge>
                </div>
                <CardTitle className="text-lg">Objetivo de Estudio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">
                  14h / 20h
                </div>
                <ProgressBar value={70} className="mb-2" />
                <p className="text-sm text-gray-600">
                  70% completado esta semana
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                    Mensual
                  </Badge>
                </div>
                <CardTitle className="text-lg">Racha de Estudio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary mb-2">
                  12 días
                </div>
                <p className="text-sm text-gray-600 mb-2">¡Tu mejor racha!</p>
                <p className="text-xs text-gray-500">Objetivo: 30 días</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <BarChart3 className="w-6 h-6 text-accent" />
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    General
                  </Badge>
                </div>
                <CardTitle className="text-lg">Puntuación Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent mb-2">87%</div>
                <p className="text-sm text-gray-600 mb-2">En quizzes</p>
                <p className="text-xs text-green-600">+5% vs mes pasado</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Weekly Activity */}
            <Card className="rounded-2xl border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Actividad Semanal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Lunes</span>
                    <div className="flex items-center space-x-2">
                      <ProgressBar value={80} className="w-20 h-2" />
                      <span className="text-sm text-gray-600">2.4h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Martes</span>
                    <div className="flex items-center space-x-2">
                      <ProgressBar value={60} className="w-20 h-2" />
                      <span className="text-sm text-gray-600">1.8h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Miércoles</span>
                    <div className="flex items-center space-x-2">
                      <ProgressBar value={90} className="w-20 h-2" />
                      <span className="text-sm text-gray-600">2.7h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Jueves</span>
                    <div className="flex items-center space-x-2">
                      <ProgressBar value={70} className="w-20 h-2" />
                      <span className="text-sm text-gray-600">2.1h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Viernes</span>
                    <div className="flex items-center space-x-2">
                      <ProgressBar value={85} className="w-20 h-2" />
                      <span className="text-sm text-gray-600">2.5h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sábado</span>
                    <div className="flex items-center space-x-2">
                      <ProgressBar value={95} className="w-20 h-2" />
                      <span className="text-sm text-gray-600">2.9h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Domingo</span>
                    <div className="flex items-center space-x-2">
                      <ProgressBar value={40} className="w-20 h-2" />
                      <span className="text-sm text-gray-600">1.2h</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subject Performance */}
            <Card className="rounded-2xl border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Rendimiento por Materia</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-blue-900">
                        Matemáticas
                      </div>
                      <div className="text-sm text-blue-600">
                        15 sesiones esta semana
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                      92%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-green-900">
                        Biología
                      </div>
                      <div className="text-sm text-green-600">
                        12 sesiones esta semana
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      89%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-purple-900">
                        Historia
                      </div>
                      <div className="text-sm text-purple-600">
                        8 sesiones esta semana
                      </div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                      85%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-orange-900">
                        Física
                      </div>
                      <div className="text-sm text-orange-600">
                        6 sesiones esta semana
                      </div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                      78%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Common Errors Analysis */}
          <Card className="rounded-2xl border-0 shadow-lg bg-white mt-8">
            <CardHeader>
              <CardTitle>Análisis de Errores Comunes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">
                    Áreas de Mejora
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                      <span className="text-red-900">Derivadas compuestas</span>
                      <Badge
                        variant="destructive"
                        className="bg-red-100 text-red-700"
                      >
                        3 errores
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl">
                      <span className="text-yellow-900">
                        Organelos celulares
                      </span>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                        2 errores
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">
                    Fortalezas
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                      <span className="text-green-900">Funciones básicas</span>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        100% acierto
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                      <span className="text-green-900">Fechas históricas</span>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        95% acierto
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-gray-500">
            <p>🚧 Sistema de análisis avanzado próximamente</p>
            <p className="text-sm mt-2">
              Incluirá predicciones de rendimiento y recomendaciones
              personalizadas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
