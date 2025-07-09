import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular proceso de autenticación
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      // Redireccionar al dashboard después del login
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold">
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </DialogTitle>
          <DialogDescription>
            {isLogin
              ? "Accede a tu cuenta para continuar"
              : "Crea tu cuenta para comenzar a aprender"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="modal-name">Nombre completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="modal-name"
                  type="text"
                  placeholder="Tu nombre"
                  className="pl-10 rounded-xl"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="modal-email">Correo electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="modal-email"
                type="email"
                placeholder="tu@email.com"
                className="pl-10 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-password">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="modal-password"
                type="password"
                placeholder="••••••••"
                className="pl-10 rounded-xl"
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="modal-terms"
                className="rounded border-gray-300"
                required
              />
              <Label htmlFor="modal-terms" className="text-sm">
                Acepto los términos y condiciones
              </Label>
            </div>
          )}

          <Button
            type="submit"
            className="w-full rounded-xl"
            disabled={isLoading}
          >
            {isLoading
              ? isLogin
                ? "Iniciando sesión..."
                : "Creando cuenta..."
              : isLogin
                ? "Iniciar Sesión"
                : "Crear Cuenta"}
          </Button>
        </form>

        <div className="text-center mt-4 space-y-2">
          <Button
            variant="ghost"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm"
          >
            {isLogin
              ? "¿No tienes cuenta? Regístrate"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </Button>

          <div className="text-sm text-gray-500">
            o{" "}
            <Link
              to="/login"
              className="text-primary hover:underline"
              onClick={() => onOpenChange(false)}
            >
              usa la página completa de login
            </Link>
          </div>
        </div>

        {/* Demo credentials */}
        <div className="bg-gray-50 rounded-xl p-3 mt-4">
          <h4 className="font-semibold text-xs text-gray-700 mb-1">
            Demo - Credenciales de prueba:
          </h4>
          <div className="text-xs text-gray-600 space-y-1">
            <p>
              <strong>Email:</strong> demo@karai.com
            </p>
            <p>
              <strong>Contraseña:</strong> demo123
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
