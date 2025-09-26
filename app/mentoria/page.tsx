"use client" // This page needs to be a client component to use the IntroModal

import { CountdownTimer } from "@/components/countdown-timer"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalBlock } from "@/components/terminal-block"
import { TypewriterText } from "@/components/typewriter-text"
import { IntroModal } from "@/components/intro-modal" // Import the new modal
import { useState, useEffect } from "react" // Import useState and useEffect
import Script from "next/script" // Import Script for external JS

export default function MentoriaUpsellPage() {
  // Set target date for 9 minutes and 49 seconds from now
  const targetDate = new Date(Date.now() + 9 * 60 * 1000 + 49 * 1000)

  // State to control modal visibility and trigger typing
  const [showIntroModal, setShowIntroModal] = useState(true) // Keep this state for future control
  const [startHeaderTyping, setStartHeaderTyping] = useState(false)

  useEffect(() => {
    console.log("app/mentoria/page.tsx: Component mounted.")
    console.log("app/mentoria/page.tsx: Initial showIntroModal state:", showIntroModal)
    console.log("app/mentoria/page.tsx: Initial startHeaderTyping state:", startHeaderTyping)
  }, []) // Run only once on mount

  useEffect(() => {
    console.log("app/mentoria/page.tsx: showIntroModal state changed to:", showIntroModal)
  }, [showIntroModal])

  useEffect(() => {
    console.log("app/mentoria/page.tsx: startHeaderTyping state changed to:", startHeaderTyping)
  }, [startHeaderTyping])

  const handleModalClose = () => {
    setShowIntroModal(false)
    setStartHeaderTyping(true) // Start typing when modal closes
    console.log("app/mentoria/page.tsx: handleModalClose called. Modal closed, initiating header typing.")
  }

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono">
      <MatrixBackground />
      <main className="relative z-10 w-full max-w-4xl mx-auto p-4 md:p-8 flex flex-col items-center space-y-8">
        {/* Intro Modal - Conditionally rendered based on showIntroModal state */}
        {showIntroModal && <IntroModal onClose={handleModalClose} />}

        {/* Countdown Timer */}
        <div className="w-full flex justify-center mb-2">
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* First Terminal Block - Now includes main header content */}
        <TerminalBlock title="Terminal" label="LIVE" headerColorClass="bg-gray-700" labelColorClass="bg-green-500">
          {/* These lines now use TypewriterText and start after modal closes */}
          <p className="text-white text-2xl md:text-4xl font-bold">
            <TypewriterText text="./mentoria-execucao-rapida" start={startHeaderTyping} delay={50} />
          </p>
          {/* This line will now appear instantly without typing effect */}
          <p className="text-yellow-400 text-lg md:text-2xl">
            <TypewriterText
              text="Mentoria de Execução Rápida — R$5K em 7 dias ou continua sendo estatística"
              start={false} // Alterado para false para desativar o efeito de digitação e som
              delay={60}
            />
          </p>
          <p className="text-white text-base md:text-xl">
            <TypewriterText text="com Cadu Bezerra" start={startHeaderTyping} delay={70} />
          </p>
          <br /> {/* Add a line break for spacing */}
          {/* These lines are now static text */}
          <p className="text-green-400">{"> Inicializando protocolo de multiplicação de grana..."}</p>
          <p className="text-green-400">{"> Transação confirmada — Soldado recrutado"}</p>
          <p className="flex items-center gap-2 text-green-400">
            Status: {"UPGRADE AUTORIZADO"} <span className="text-green-400">✅</span>
          </p>
        </TerminalBlock>

        {/* Urgent Upgrade Section - Reverted to old design */}
        <TerminalBlock title="Terminal" label="URGENT" headerColorClass="bg-amber-600" labelColorClass="bg-red-500">
          <p className="text-green-400 font-bold text-xl">$. /upgrade-exclusivo</p>
          <p className="text-green-400 text-lg">🔥 VOCÊ FOI ESCOLHIDO PRA ENTRAR NA SALA ESCURA DA EXECUÇÃO BRUTA.</p>
          <p className="text-green-400 text-lg">
            Sem cursozinho, sem PDF, sem teoria. É faca nos dentes e dedo no gatilho.
          </p>
        </TerminalBlock>

        {/* Benefits Section */}
        <TerminalBlock title="Terminal" label="INFO" headerColorClass="bg-gray-700" labelColorClass="bg-blue-500">
          <p className="text-green-400 font-bold text-xl">$. /listar-beneficios</p>
          <h2 className="text-xl md:text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-green-400 text-2xl">🎁</span> O PACOTE É O SEGUINTE:
          </h2>
          <ul className="space-y-2 text-lg text-white">
            <li>
              <span className="font-bold">🧠 Mentoria de 3 meses — lado a lado comigo.</span>
            </li>
            <li className="ml-6 text-gray-300">{"> Eu mando, tu executa. Sem mimimi."}</li>
            <li>
              <span className="font-bold">🔐 Grupo fechado de psicopatas da conversão</span>
            </li>
            <li className="ml-6 text-gray-300">
              {
                "> Quem chora fica de fora. Aqui é só executor. Onde só entra quem tá na linha de frente. Networking com quem respira conversão."
              }
            </li>
            <li>
              <span className="font-bold">📞 1 call por semana: tua operação é minha responsabilidade.</span>
            </li>
            <li className="ml-6 text-gray-300">{"> Aparece com desculpa e eu te desmonto ao vivo."}</li>
            <li>
              <span className="font-bold">🧬 A oferta que a galera vai comprar sem respirar.</span>
            </li>
            <li className="ml-6 text-gray-300">
              {"> Nada de ideia bosta. A gente constrói algo que o mercado engole sem vaselina."}
            </li>
            <li>
              <span className="font-bold">🚀 Produto vendendo em dias, não meses.</span>
            </li>
            <li className="ml-6 text-gray-300">{"> Em poucos dias tu já tá vendendo, sem desculpa, sem travar."}</li>
            <li>
              <span className="font-bold">🧨 FUNIL TESTADO + CAMPANHA LIBERADA. Sem travar. Sem pensar.</span>
            </li>
            <li className="ml-6 text-gray-300">
              {"> Receita que já faturou + de 5 Digitos sendo entregue no teu colo. É só plugar e executar."}
            </li>
            <li>
              <span className="font-bold">💬 Suporte direto no WhatsApp — travou, grita.</span>
            </li>
            <li className="ml-6 text-gray-300">
              {"> Travou? Mandou mensagem. A gente resolve. Nada de ficar no vácuo com robô."}
            </li>
          </ul>
          <p className="text-lg md:text-2xl font-bold text-yellow-400 text-center pt-4">
            💣 O RESULTADO:
            <br />
            {"> Em 7 dias tu é outro."}
            <br />
            {"> Em 30 dias tá rindo dos caras que ainda tão pedindo dica no grupo do Telegram."}
          </p>
        </TerminalBlock>

        {/* Bonus Section */}
        <TerminalBlock title="Terminal" label="BONUS" headerColorClass="bg-purple-700" labelColorClass="bg-purple-500">
          <p className="text-green-400 font-bold text-xl">$. /bonus-secretos</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-yellow-400 text-2xl">🚀</span> ROUBO INSTITUCIONAL DESBLOQUEADO:
          </h2>
          <div className="space-y-3 text-lg text-white">
            <p className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">🎁</span>
              <span className="font-bold">BÔNUS #1:</span> Máquina de Clonagem de Funis
            </p>
            <ul className="list-disc list-inside ml-6 text-gray-300">
              <li>{"🧬 Copia, cola, fatura. Sem pensar."}</li>
              <li>
                <span className="font-bold">VALOR: R$997</span> |{" "}
                <span className="text-green-400 font-bold">AGORA: 0</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-lg text-white">
            <p className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">🎁</span>
              <span className="font-bold">BÔNUS #2:</span> Prompts de Execução Rápida
            </p>
            <ul className="list-disc list-inside ml-6 text-gray-300">
              <li>
                {
                  "🔫 Pack de prompts pesados pro ChatGPT — sem pensar, só executar. Até um macaco fatura com isso aqui."
                }
              </li>
              <li>
                <span className="font-bold">VALOR: R$497</span> |{" "}
                <span className="text-green-400 font-bold">AGORA: 0</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-lg text-white">
            <p className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">🎁</span>
              <span className="font-bold">BÔNUS #3:</span> Arsenal Hacker da Rotina de Lucro
            </p>
            <ul className="list-disc list-inside ml-6 text-gray-300">
              <li>{"🛠️ Ferramentas que fariam até um estagiário virar lenda."}</li>
              <li>{"Arsenal digital pra tu dominar rotina, tráfego e conversão"}</li>
              <li>
                <span className="font-bold">VALOR: R$797</span> |{" "}
                <span className="text-green-400 font-bold">AGORA: 0</span>
              </li>
            </ul>
          </div>
          <p className="text-xl md:text-2xl font-bold text-red-400 text-center pt-4">
            TOTAL DOS BÔNUS: R$2.291 — VOCÊ PAGA: *NADINHA*
            <br />É CRIME DIGITAL COM PERMISSÃO.
          </p>
        </TerminalBlock>

        {/* Last Chance Section */}
        <TerminalBlock title="Terminal" label="WARNING" headerColorClass="bg-red-700" labelColorClass="bg-red-500">
          <p className="text-green-400 font-bold text-xl">$. /condicoes especiais</p>
          <h2 className="text-2xl md:text-3xl font-bold text-red-400 flex items-center gap-2">
            <span className="text-yellow-400">⚠️ OFERTA DISPONÍVEL SÓ NESSE MOMENTO</span>
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-center">
            <span className="line-through text-gray-400">Valor real: R$1997</span>
            <br />
            <span className="text-green-400">HOJE: R$247</span>
            <br />
            <span className="text-gray-400 text-base md:text-xl">
              (Custa menos que a pizza que tu pede pra afogar a frustração)
            </span>
          </p>
          <div className="space-y-3 text-base md:text-xl pt-4">
            <p className="flex items-center gap-2 text-red-400">
              <span className="text-red-400 text-xl">⚡</span>
              {"Isso aqui custa menos que um lanche por mês."}
            </p>
            <p className="flex items-center gap-2 text-red-400">
              <span className="text-red-400 text-xl">⚡</span>
              {"É 90% de desconto num plano de execução de elite."}
            </p>
          </div>
          <ul className="space-y-2 text-lg text-white pt-4">
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✅</span>
              {"🧠 IA no comando + Trafego Rodando = ROI"}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✅</span>
              {"📦 Liberação instantânea"}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✅</span>
              {"🔫 Pronto pra faturar em menos de 7 dias"}
            </li>
          </ul>
        </TerminalBlock>

        {/* Call to Action Buttons - Pepper One Click Upsell */}
        <div className="flex flex-col space-y-4 pt-8 w-full max-w-md mx-auto">
          <div style={{ width: "auto", maxWidth: "400px", margin: "0 auto" }}>
            <a href="javascript:void(0)" data-pepper="jzj0bjmyrx" className="pepper_btn">
              👉 ENTRAR AGORA E VIRAR UMA MÁQUINA DE VENDAS
            </a>
            <a href="/mentoriadown" className="pepper_downsell">
              🙃 Continuar quebrado e assistindo os outros subirem
            </a>
            <style jsx>{`
              .pepper_btn {
                background: #22c55e;
                background-image: -webkit-linear-gradient(top, #22c55e, #16a34a);
                background-image: -moz-linear-gradient(top, #22c55e, #16a34a);
                background-image: -ms-linear-gradient(top, #22c55e, #16a34a);
                background-image: -o-linear-gradient(top, #22c55e, #16a34a);
                background-image: -webkit-gradient(to bottom, #22c55e, #16a34a);
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                color: #fff;
                font-family: Arial;
                font-size: 18px;
                font-weight: 100;
                padding: 10px 20px;
                border: 1px solid #16a34a;
                text-decoration: none;
                display: block;
                cursor: pointer;
                text-align: center;
              }
              .pepper_btn:hover {
                background: #16a34a;
                box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
              }
              .pepper_downsell {
                color: #22c55e;
                font-family: Arial;
                margin-top: 10px;
                font-size: 16px !important;
                font-weight: 100;
                text-decoration: none;
                display: block;
                cursor: pointer;
                text-align: center;
              }
              .pepper_downsell:hover {
                color: #ff6666;
              }
              /* Added global CSS override to prevent third-party script elements from overlapping modals */
              :global(.pepper-overlay),
              :global(.pepper-footer),
              :global([class*="pepper"]) {
                z-index: 1000 !important;
                max-z-index: 8999 !important;
              }
              /* Ensure all modals stay above third-party scripts */
              :global([role="dialog"]),
              :global(.modal),
              :global([class*="modal"]) {
                z-index: 9999 !important;
              }
            `}</style>
          </div>
        </div>
      </main>
      {!showIntroModal && <Script src="https://app.pepperpay.com.br/js/oneclick.js" strategy="afterInteractive" />}
    </div>
  )
}
