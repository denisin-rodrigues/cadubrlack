"use client"

import { MatrixBackground } from "@/components/matrix-background"
import { CheckCircle, Eye, Bomb, Skull, Swords, MapPin, AlertTriangle, Phone } from "lucide-react"

export default function ObrigadoPage() {
  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono">
      <MatrixBackground />
      <main className="relative z-10 w-full max-w-4xl mx-auto p-4 md:p-8 flex flex-col items-center space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mt-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Eye className="text-green-400" size={48} />
            <h1 className="text-3xl md:text-5xl font-bold text-green-400">PARABÉNS, SOLDADO.</h1>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">AGORA TU FAZ PARTE DA ALIANÇA.</h2>
        </div>

        {/* Status Section */}
        <div className="w-full max-w-2xl bg-gray-900/80 border border-green-500/30 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3 text-green-400">
            <CheckCircle size={24} />
            <span className="text-lg">A transação foi confirmada.</span>
          </div>
          <div className="flex items-center gap-3 text-green-400">
            <CheckCircle size={24} />
            <span className="text-lg">O sistema te reconheceu.</span>
          </div>
          <div className="flex items-center gap-3 text-yellow-400">
            <CheckCircle size={24} />
            <span className="text-lg">E a partir de agora… tu não é mais espectador.</span>
          </div>
        </div>

        {/* Executor Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Bomb className="text-red-500" size={32} />
            <h3 className="text-2xl md:text-4xl font-bold text-red-500">TU É EXECUTOR.</h3>
          </div>

          <div className="max-w-3xl text-lg md:text-xl text-white space-y-4">
            <p>
              Tu acabou de entrar no <span className="text-yellow-400 font-bold">CADU DO BLACK</span> — o protocolo sujo de
              multiplicação de grana que separa os operadores da elite dos sonhadores que só colecionam curso.
            </p>

            <p>
              Não interessa se tu entrou com tudo ou se pechinchou na última curva. Agora tu tá dentro, e só tem dois
              caminhos:
            </p>
          </div>
        </div>

        {/* Two Paths Section */}
        <div className="w-full max-w-3xl grid md:grid-cols-2 gap-6">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-center">
            <Skull className="text-red-500 mx-auto mb-4" size={48} />
            <p className="text-red-400 font-bold text-lg">Vacilar e continuar sendo estatística.</p>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
            <Swords className="text-green-400 mx-auto mb-4" size={48} />
            <p className="text-green-400 font-bold text-lg">Ou EXECUTAR e virar máquina de lucro.</p>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="w-full max-w-3xl bg-gray-900/80 border border-yellow-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-yellow-400" size={28} />
            <h3 className="text-2xl font-bold text-yellow-400">TEU PRÓXIMO PASSO:</h3>
          </div>

          <div className="space-y-4 text-white">
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">1.</span>
              <div>
                <p className="font-bold">Confere o e-mail com teu acesso.</p>
                <p className="text-gray-300 text-sm mt-1">
                  (Se não tiver na caixa principal, vasculha spam/lixeira/comercial. Tu sabe como o sistema tenta barrar
                  quem tem sede.)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">2.</span>
              <p>Acessa a plataforma e ativa teu perfil de guerra.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">3.</span>
              <div>
                <p className="font-bold">Prepara o ambiente: silêncio, foco e fúria.</p>
                <p className="text-gray-300 text-sm mt-1">
                  A partir do primeiro módulo, tu já vai estar com a faca nos dentes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Section */}
        <div className="w-full max-w-3xl bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-red-500" size={28} />
            <h3 className="text-2xl font-bold text-red-500">AVISO FINAL:</h3>
          </div>

          <div className="space-y-3 text-white">
            <p>
              Agora tu responde pro <span className="text-red-400 font-bold">CAOS</span>.
            </p>
            <p>Se tu travar, tu fala. Se tu sumir, tu é esquecido.</p>
            <p>
              Aqui não tem babá — tem <span className="text-green-400 font-bold">resultado</span> ou{" "}
              <span className="text-red-400 font-bold">expurgo</span>.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="w-full max-w-3xl bg-gray-900/80 border border-blue-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="text-blue-400" size={28} />
            <h3 className="text-xl font-bold text-blue-400">Se der algum erro na liberação:</h3>
          </div>

          <p className="text-white">
            Manda mensagem direto no WhatsApp do suporte:{" "}
            <a
              href="https://wa.me/5588999244516"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 font-bold hover:text-green-300 underline transition-colors"
            >
              (88) 99924-4516
            </a>
          </p>
        </div>

        {/* Footer Spacing */}
        <div className="h-16"></div>
      </main>
    </div>
  )
}
