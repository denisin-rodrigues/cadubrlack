"use client"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"

interface BonusModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

export function BonusModal({ isOpen, onClose, onAccept }: BonusModalProps) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  if (!showModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-black border-2 border-green-500 rounded-lg p-6 shadow-2xl animate-pulse">
        <div
          className="absolute inset-0 rounded-lg opacity-20"
          style={{
            background: "linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(0, 0, 0, 0.8))",
            boxShadow: "0 0 30px rgba(34, 197, 94, 0.3), inset 0 0 30px rgba(34, 197, 94, 0.1)",
          }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-green-400 hover:text-green-300 transition-colors z-10"
        >
          
        </button>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Header */}
          <div className="mb-6">
            <Gift className="w-12 h-12 mx-auto mb-4 text-green-400 animate-bounce" />
            <h2 className="text-2xl font-bold text-green-400 mb-2 font-mono">BÔNUS DESBLOQUEADO</h2>
          </div>

          {/* Bonus Description */}
          <div className="text-left mb-6 space-y-4">
            <p className="text-green-300 text-sm leading-relaxed">
              Ao se tornar aluno, você também garante{" "}
              <span className="text-green-400 font-bold">1 Produto Validado BLACK</span> pra rodar no tráfego.
            </p>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-400 font-bold text-sm mb-2">
                Produto Low Ticket, com criativo e copy prontos.
              </p>
              <p className="text-green-300 text-sm">Pra quem quer sair vendendo sem precisar criar do zero.</p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-green-400">✅ Ideal pra acelerar teu processo.</p>
              <p className="text-green-400">✅ Só colar, subir e escalar.</p>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
              <p className="text-red-300 text-xs">
                Esse bônus é exclusivo pra alunos ativos e será liberado dentro da Área de Membros.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onAccept}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border-2 border-green-400"
            style={{
              boxShadow: "0 0 20px rgba(34, 197, 94, 0.4), inset 0 0 20px rgba(34, 197, 94, 0.1)",
            }}
          >
            QUERO ACESSO COM O BÔNUS
          </button>
        </div>
      </div>
    </div>
  )
}
