"use client" // This page needs to be a client component

import type React from "react"

import { CountdownTimer } from "@/components/countdown-timer"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalBlock } from "@/components/terminal-block"
import { TypewriterText } from "@/components/typewriter-text"
import { AlertTriangle } from "lucide-react"
import { useState, useEffect } from "react" // Import useState and useEffect
import Script from "next/script" // Import Script for external JS

export default function MentoriaDownPage() {
  // Set target date for 9 minutes and 49 seconds from now
  const targetDate = new Date(Date.now() + 9 * 60 * 1000 + 49 * 1000)

  // State to control typing
  const [startHeaderTyping, setStartHeaderTyping] = useState(true)

  useEffect(() => {
    console.log("app/mentoriadown/page.tsx: Component mounted.")

    // Debug: Check if Pepper script is loaded
    const checkPepperScript = () => {
      if (typeof window !== "undefined") {
        console.log("Pepper script loaded:", !!window.pepper)
        console.log("Window object keys:", Object.keys(window))
      }
    }

    // Check after a delay to ensure script has time to load
    setTimeout(checkPepperScript, 2000)
  }, [])

  // Add click handler for debugging
  const handlePepperClick = (e: React.MouseEvent) => {
    console.log("Pepper button clicked")
    console.log("Event:", e)
    console.log("Target:", e.target)

    // Check if Pepper is available
    if (typeof window !== "undefined") {
      console.log("Window.pepper:", (window as any).pepper)
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono">
      <MatrixBackground />
      <main className="relative z-10 w-full max-w-4xl mx-auto p-4 md:p-8 flex flex-col items-center space-y-8">
        {/* Countdown Timer */}
        <div className="w-full flex justify-center mb-2">
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* Header Terminal Block */}
        <TerminalBlock title="Terminal" label="DOWNSELL" headerColorClass="bg-red-700" labelColorClass="bg-yellow-500">
          <p className="text-white text-2xl md:text-4xl font-bold">
            <TypewriterText text="./mentoria-execucao-rapida" start={startHeaderTyping} delay={50} />
          </p>
          <br />
          <p className="text-green-400">{"> Detectando tentativa de fuga..."}</p>
          <p className="text-green-400">{"> Ativando protocolo de última chance..."}</p>
          <p className="flex items-center gap-2 text-yellow-400">
            Status: {"DOWNSELL ATIVADO"} <AlertTriangle className="text-yellow-400" size={20} />
          </p>
        </TerminalBlock>

        {/* Main Message Section */}
        <TerminalBlock
          title="Terminal"
          label="REALITY CHECK"
          headerColorClass="bg-amber-600"
          labelColorClass="bg-red-500"
        >
          <p className="text-green-400 font-bold text-xl">$. /reality-check</p>

          <div className="space-y-4 text-lg text-white">
            <p className="text-2xl md:text-3xl font-bold text-red-400 text-center">😒 Já ia sair, né campeão?</p>

            <p className="text-center">
              Faz sentido... continuar quebrado é confortável. Reclama, culpa o algoritmo e vai dormir frustrado.
              <span className="text-yellow-400 font-bold"> Já vi esse filme.</span>
            </p>

            <p className="text-center">Mas já que chegou até aqui, escuta esse papo:</p>

            <p className="text-center">
              Se <span className="text-red-400 font-bold line-through">R$247</span> te travou, beleza. Mas pra não dizer
              que não te avisei, vou liberar a versão modo guerra.
            </p>
          </div>
        </TerminalBlock>

        {/* What's NOT Included Section */}
        <TerminalBlock
          title="Terminal"
          label="STRIPPED MODE: ATIVADO"
          headerColorClass="bg-gray-700"
          labelColorClass="bg-red-500"
        >
          <p className="text-green-400 font-bold text-xl">$. /execucao-pura</p>

          <div className="space-y-4 text-lg">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-orange-400">
                <span className="text-orange-400 text-xl">🔥</span>
                <span className="font-bold">Só o núcleo bruto do plano.</span>
              </div>
              <div className="flex items-center gap-3 text-orange-400">
                <span className="text-orange-400 text-xl">🔥</span>
                <span className="font-bold">A rota direta pra tu sair da estatística e começar a vender.</span>
              </div>
              <div className="flex items-center gap-3 text-orange-400">
                <span className="text-orange-400 text-xl">🔥</span>
                <span className="font-bold">Nada de perfumaria — é faca, bala e execução.</span>
              </div>
            </div>
          </div>
        </TerminalBlock>

        {/* Final Offer Section */}
        <TerminalBlock
          title="Terminal"
          label="LAST CHANCE"
          headerColorClass="bg-red-700"
          labelColorClass="bg-yellow-500"
        >
          <p className="text-green-400 font-bold text-xl">$. /ultima-chance</p>

          <div className="space-y-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-yellow-400">
              💥 Última chance: R$197 à vista (PIX/Cartão)
            </p>

            <div className="mt-6 p-4 border border-yellow-500 bg-yellow-600/20 rounded-md">
              <p className="text-white text-lg">
                Esta é sua <span className="text-red-400 font-bold">ÚLTIMA OPORTUNIDADE</span> de sair da zona de
                conforto e parar de ser mais uma estatística.
              </p>
            </div>
          </div>
        </TerminalBlock>

        {/* Call to Action Buttons */}
        <div className="flex flex-col space-y-4 pt-8 w-full max-w-md mx-auto">
          <div style={{ width: "auto", maxWidth: "400px", margin: "0 auto" }}>
            {/* Pepper Button */}
            <a href="javascript:void(0)" data-pepper="vchax9nfds" className="pepper_btn" onClick={handlePepperClick}>
              👉 ENTRAR AGORA E VIRAR UMA MÁQUINA DE VENDAS
            </a>

            {/* Fallback Button - Direct link if Pepper fails */}
            <a
              href="https://go.pepperpay.com.br/eegbz?affh=bzrtmoyc5n"
              className="pepper_btn_fallback"
              style={{ display: "none" }}
            >
              👉 QUERO PARAR DE MIMIMI E EXECUTAR AGORA (FALLBACK)
            </a>

            {/* Downsell Button */}
            <a href="/obrigado" className="pepper_downsell">
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
            `}</style>
          </div>
        </div>
      </main>

      {/* Pepper One Click Upsell Script with error handling */}
      <Script
        src="https://app.pepperpay.com.br/js/oneclick.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Pepper script loaded successfully")
        }}
        onError={(e) => {
          console.error("Pepper script failed to load:", e)
          // Show fallback button if script fails
          const fallback = document.querySelector(".pepper_btn_fallback") as HTMLElement
          const original = document.querySelector(".pepper_btn") as HTMLElement
          if (fallback && original) {
            original.style.display = "none"
            fallback.style.display = "block"
          }
        }}
      />
    </div>
  )
}
