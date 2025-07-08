"use client";
import { useState, useEffect } from "react";
import { CardDemo } from "@/components/login";

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState(0); // 0: carga, 1: mensaje de bienvenida, 2: finalizado
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fase 0: Carga con imagen y barra de progreso (15 segundos)
    if (currentPhase === 0) {
      const loadingDuration = 10 * 500; // 15 segundos en milisegundos
      const intervalTime = loadingDuration / 100; // Actualizar el progreso 100 veces

      const loadingTimer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          }
          clearInterval(loadingTimer);
          setCurrentPhase(1); // Pasar a la siguiente fase
          return 100;
        });
      }, intervalTime);

      // Limpiar el intervalo si el componente se desmonta
      return () => clearInterval(loadingTimer);
    }
    // Fase 1: Mensaje de bienvenida (15 segundos)
    else if (currentPhase === 1) {
      const welcomeDuration = 10 * 500; // 15 segundos en milisegundos
      const welcomeTimer = setTimeout(() => {
        setCurrentPhase(2); // Pasar a la fase finalizada
      }, welcomeDuration);

      // Limpiar el timeout si el componente se desmonta
      return () => clearTimeout(welcomeTimer);
    }
  }, [currentPhase]); // Volver a ejecutar el efecto cuando currentPhase cambie

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {currentPhase === 0 && (
        // Pantalla de bienvenida - Fase 0: Carga con imagen
        <div className="flex flex-col items-center justify-center h-full w-full p-4">
          <img
            src="/logo-emi-Photoroom.png" // Tu logo EMI
            alt="EMI Logo"
            width={300}
            height={300}
            className="mb-8 animate-pulse rounded-full max-w-full h-auto shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_30px_#ffffff]" // Animación de pulso simple para el logo, esquinas redondeadas y responsivo
          />
          <div className="w-64 sm:w-80 md:w-96 h-2 bg-gray-700 rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-400">Cargando...</p>
        </div>
      )}

      {currentPhase === 1 && (
        // Pantalla de bienvenida - Fase 1: Mensaje de bienvenida
        <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            ¡Bienvenidos al Sistema de Registro del Laboratorio!
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">Preparando su experiencia...</p>
        </div>
      )}

      {currentPhase === 2 && (
        // Contenido final o redirección
        
          <CardDemo/>
        
      )}
    </div>
  );
}
