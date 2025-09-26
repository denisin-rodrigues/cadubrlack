"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skull, Flame } from "lucide-react"

export default function EsculachoPage() {
  return (
    <div className="min-h-screen bg-black text-green-300 font-mono flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 py-4 sm:py-6 pt-8 sm:pt-12 md:pt-16 lg:pt-20 relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <canvas id="matrix-canvas" className="w-full h-full" style={{ pointerEvents: "none" }} />
      </div>

      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl p-4 sm:p-6 md:p-8 lg:p-10 bg-black/80 border border-red-500/50 z-10 backdrop-blur-sm">
        <div className="text-center">
          {/* Header com Skull */}
          <Skull className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 sm:mb-8 text-red-500 drop-shadow-lg" />

          {/* Headline Principal */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-red-400 leading-tight font-orbitron">
            VOCÊ ESCOLHEU SER UM VENDEDOR FRACO.
          </h1>

          {/* Subheadline */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 sm:p-5 md:p-7 mb-6 sm:mb-8 md:mb-10">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-red-300 mb-4 sm:mb-6">
              Ao invés de ativar uma IA que vende por você, você preferiu continuar jogando moeda no tráfego, escrevendo
              copy genérica e assistindo concorrente te humilhar em silêncio.
            </p>
          </div>

          {/* Bloco Central - Lista de Fracassos */}
          <div className="bg-black/60 p-4 sm:p-6 md:p-8 rounded-xl border border-red-500/30 mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-red-400 leading-tight">
              🗑️ Parabéns, você faz parte do seleto grupo dos que:
            </h2>

            <div className="grid gap-4 sm:gap-5 md:gap-6 text-left mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4 text-red-300 p-3 sm:p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-xl sm:text-2xl">❌</span>
                <span className="text-sm sm:text-base md:text-lg">Usam Canva pra tentar converter lead frio</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 text-red-300 p-3 sm:p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-xl sm:text-2xl">❌</span>
                <span className="text-sm sm:text-base md:text-lg">Perdem hora do dia criando post que ninguém lê</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 text-red-300 p-3 sm:p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-xl sm:text-2xl">❌</span>
                <span className="text-sm sm:text-base md:text-lg">
                  Confiam mais em "dica de Reels" do que numa IA que já converte
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-bold text-red-400 mb-4 sm:mb-6">
              E o pior... ainda acha que tá no controle.
            </p>
          </div>

          {/* Texto de Virada */}
          <div className="bg-black/80 p-4 sm:p-6 rounded-xl border border-green-500/30 mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl">👀</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">TEXTO DE VIRADA</h3>
            </div>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-green-300 mb-4 sm:mb-6">
              Mas relaxa... Mesmo os fracos merecem uma segunda chance.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-bold text-green-400">
              O sistema ainda tá aberto... por pouco tempo.
            </p>
          </div>

          {/* CTA Final */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-400">O RITUAL DE RENDIÇÃO</h3>
              <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            </div>

            <Button
              onClick={() => {
                window.open("https://go.pepperpay.com.br/eegbz?affh=bzrtmoyc5n", "_blank")
              }}
              className="w-full bg-green-600 text-black hover:bg-green-500 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-7 lg:py-8 font-bold min-h-[70px] sm:min-h-[76px] md:min-h-[84px] lg:min-h-[92px] shadow-lg shadow-green-500/25 transition-all duration-300 leading-tight whitespace-normal"
            >
              🔥 RECONHEÇO MEU ERRO. ATIVAR A IA BLACK AGORA.
            </Button>

            <div className="text-center p-3 sm:p-5 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-sm sm:text-base md:text-lg text-red-300 font-bold">
                Essa é sua última chance de sair do limbo digital.
              </p>
              <p className="text-sm sm:text-base text-red-400 mt-2">Clica ou se conforma com a miséria.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
