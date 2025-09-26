"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MatrixBackground } from "./matrix-background"

interface IntroModalProps {
  onClose: () => void
}

export function IntroModal({ onClose }: IntroModalProps) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(true)

    const timer = setTimeout(() => {
      handleClose()
    }, 12000) // 12 segundos

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-95 z-[9999] flex items-center justify-center backdrop-blur-sm p-4 min-h-screen"
        aria-hidden="true"
        style={{ height: "100vh", minHeight: "100vh" }}
      >
        <div className="absolute inset-0 z-[9998]" style={{ height: "100vh", minHeight: "100vh" }}>
          <MatrixBackground />
        </div>

        <div
          className={cn(
            "relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto",
            "bg-[#0a1a0a] text-green-400",
            "border border-green-600 shadow-green-glow",
            "font-mono p-6 md:p-8 rounded-lg",
            "z-[10000]",
          )}
          role="dialog"
          aria-modal="true"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute top-4 right-4 text-green-400 hover:text-green-300 z-10"
            aria-label="Fechar"
          >
            <span className="text-2xl">×</span>
          </Button>

          <div className="text-center mb-6">
            <div
              className="text-6xl mx-auto mb-4"
              style={{ textShadow: "0 0 10px rgba(0,255,0,0.5), 0 0 20px rgba(0,255,0,0.3)" }}
            >
              {""}
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-green-400 flex items-center justify-center gap-3 mb-2"
              style={{ textShadow: "0 0 6px rgba(0,255,0,0.5), 0 0 12px rgba(0,255,0,0.2)" }}
            >
              PARABÉNS!
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              <span className="text-green-400 font-semibold">Compra confirmada com sucesso!</span>
            </p>
          </div>

          <div className="mt-6 p-4 border border-green-500 bg-green-900/20 rounded-md space-y-3">
            <p className="flex items-start gap-3 text-gray-200">
              <span className="text-green-400 flex-shrink-0 mt-1 text-xl">✅</span>
              <span>
                Você acabou de garantir sua vaga no <span className="text-yellow-300 font-bold">CADU DO BLACK</span>.
              </span>
            </p>
            <p className="text-gray-200 ml-9">Seu acesso chegará no seu email de compra.</p>
            <p className="flex items-start gap-3 text-yellow-300 font-bold">
              <span className="text-yellow-300 flex-shrink-0 mt-1 text-xl">🚀</span>
              <span>
                Mas espera... tem mais uma oportunidade <span className="text-red-400">EXCLUSIVA</span> pra você!
              </span>
            </p>
          </div>

          <p className="text-gray-200 mt-5 text-lg md:text-xl">
            Como você demonstrou que está SÉRIO sobre faturar alto, liberamos uma oferta especial só pra quem age
            rápido...
          </p>

          <Button
            onClick={handleClose}
            className="w-full py-4 text-xl md:text-2xl font-bold bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-green-glow transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            VER OFERTA ESPECIAL →
          </Button>
        </div>
      </div>
    </>
  )
}
