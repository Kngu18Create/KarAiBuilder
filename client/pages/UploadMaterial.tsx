import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Upload,
  FileText,
  Headphones,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const UploadMaterial = () => {
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
          <h1 className="text-3xl font-bold mb-2">Subir Material</h1>
          <p className="text-gray-600 mb-8">
            Arrastra tus archivos o haz clic para seleccionarlos. KarAI
            procesará automáticamente tu contenido.
          </p>

          <Card className="rounded-2xl border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-primary" />
                <span>Subir Archivos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-primary transition-colors">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Arrastra tus archivos aquí
                </h3>
                <p className="text-gray-600 mb-4">
                  o haz clic para seleccionarlos desde tu dispositivo
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FileText className="w-4 h-4" />
                    <span>PDF, DOC, TXT</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Headphones className="w-4 h-4" />
                    <span>MP3, WAV</span>
                  </div>
                </div>
                <Button className="rounded-xl">Seleccionar Archivos</Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-gray-500">
            <p>🚧 Esta funcionalidad estará disponible pronto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMaterial;
