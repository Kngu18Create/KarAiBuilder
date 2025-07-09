import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Upload,
  FileText,
  CreditCard,
  BarChart3,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Zap,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = {
    name: "María",
    level: 7,
    xp: 2340,
    nextLevelXp: 3000,
    streak: 12,
  };

  const weeklyProgress = {
    notesCreated: 23,
    flashcardsStudied: 156,
    studyTime: 840, // minutes
    quizzesTaken: 8,
  };

  const recentActivities = [
    { type: "flashcard", subject: "Biología", count: 15, time: "2h ago" },
    { type: "quiz", subject: "Historia", score: 85, time: "4h ago" },
    {
      type: "note",
      subject: "Matemáticas",
      title: "Derivadas",
      time: "1d ago",
    },
    {
      type: "upload",
      subject: "Física",
      title: "Mecánica Cuántica.pdf",
      time: "2d ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KarAI
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20"
              >
                Nivel {user.level}
              </Badge>
              <Button variant="ghost" size="sm" className="rounded-lg">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            ¡Hola de nuevo, {user.name}! 👋
          </h1>
          <p className="text-gray-600">
            Llevas {user.streak} días consecutivos estudiando. ¡Sigue así!
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white border border-gray-200">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  +12%
                </Badge>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">
                {user.xp} XP
              </div>
              <div className="text-sm text-gray-600 mb-3">
                Nivel {user.level}
              </div>
              <Progress
                value={(user.xp / user.nextLevelXp) * 100}
                className="h-2"
              />
              <div className="text-xs text-gray-500 mt-2">
                {user.nextLevelXp - user.xp} XP para siguiente nivel
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white border border-gray-200">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                  🔥 {user.streak}
                </Badge>
              </div>
              <div className="text-2xl font-bold text-secondary mb-1">
                {user.streak}
              </div>
              <div className="text-sm text-gray-600">Días consecutivos</div>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white border border-gray-200">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-accent/10 text-accent border-accent/20">
                  Esta semana
                </Badge>
              </div>
              <div className="text-2xl font-bold text-accent mb-1">
                {Math.floor(weeklyProgress.studyTime / 60)}h{" "}
                {weeklyProgress.studyTime % 60}m
              </div>
              <div className="text-sm text-gray-600">Tiempo de estudio</div>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white border border-gray-200">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  87%
                </Badge>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">87%</div>
              <div className="text-sm text-gray-600">Objetivos completados</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Acciones rápidas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link to="/upload">
                <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Upload className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Subir Material</h3>
                        <p className="text-sm text-gray-600">
                          PDF, documentos, audios
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/flashcards">
                <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Flashcards</h3>
                        <p className="text-sm text-gray-600">
                          Estudiar tarjetas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/notes">
                <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Mis Notas</h3>
                        <p className="text-sm text-gray-600">
                          Ver y editar notas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/quizzes">
                <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Quizzes</h3>
                        <p className="text-sm text-gray-600">
                          Practica con exámenes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Weekly Stats */}
            <Card className="rounded-2xl border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Estadísticas de la semana</span>
                </CardTitle>
                <CardDescription>
                  Tu progreso en los últimos 7 días
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {weeklyProgress.notesCreated}
                    </div>
                    <div className="text-sm text-gray-600">Notas creadas</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {weeklyProgress.flashcardsStudied}
                    </div>
                    <div className="text-sm text-gray-600">
                      Flashcards estudiadas
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {Math.floor(weeklyProgress.studyTime / 60)}h
                    </div>
                    <div className="text-sm text-gray-600">
                      Tiempo de estudio
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {weeklyProgress.quizzesTaken}
                    </div>
                    <div className="text-sm text-gray-600">
                      Quizzes realizados
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Actividad reciente</h2>
            <Card className="rounded-2xl border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Últimas actividades</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          activity.type === "flashcard"
                            ? "bg-accent"
                            : activity.type === "quiz"
                              ? "bg-primary"
                              : activity.type === "note"
                                ? "bg-secondary"
                                : "bg-purple-500"
                        }`}
                      >
                        {activity.type === "flashcard" && (
                          <CreditCard className="w-4 h-4 text-white" />
                        )}
                        {activity.type === "quiz" && (
                          <Zap className="w-4 h-4 text-white" />
                        )}
                        {activity.type === "note" && (
                          <FileText className="w-4 h-4 text-white" />
                        )}
                        {activity.type === "upload" && (
                          <Upload className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {activity.subject}
                        </div>
                        <div className="text-xs text-gray-500">
                          {activity.type === "flashcard" &&
                            `${activity.count} tarjetas estudiadas`}
                          {activity.type === "quiz" &&
                            `Quiz completado (${activity.score}%)`}
                          {activity.type === "note" && activity.title}
                          {activity.type === "upload" && activity.title}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/progress">
                  <Button variant="outline" className="w-full mt-4 rounded-xl">
                    Ver todo el progreso
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
