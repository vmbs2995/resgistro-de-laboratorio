import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm neon-border"> {/* Added neon-border class here */}
      <CardHeader>
        <CardTitle className="text-blue-500">Inicia sesión en tu cuenta</CardTitle> {/* Example of adding color to text */}
        <CardDescription className="text-blue-400">
          Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta
        </CardDescription>
        <CardAction>
          <Button variant="link" className="text-blue-500 hover:text-blue-100">Inscribirse</Button> {/* Example of adding color to link */}
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-blue-400">Correo Electronico</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="bg-gray-800 text-white border-blue-500 focus:border-blue-300" /* Example of styling input */
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-blue-400">Contraseña</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-300 hover:text-blue-100"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="bg-gray-800 text-white border-blue-500 focus:border-blue-300" /* Example of styling input */
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-blue-700 hover:bg-yellow-500 text-white neon-button-glow"> {/* Example of styling button */}
          Acceder
        </Button>
      </CardFooter>
    </Card>
  );
}