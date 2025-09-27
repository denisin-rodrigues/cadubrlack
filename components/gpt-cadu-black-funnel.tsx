"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Skull, Zap, Target, Brain, Flame, Plus, Bot, DollarSign } from "lucide-react"
import React from "react"

// Audio Context for sound effects
let audioContext: AudioContext | null = null
const initAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitContext)()
  }
  return audioContext
}

const playCoringaAudio = () => {
  try {
    const audio = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coringaOlhadireito-86R9IRadwB1LxuYmRSquxNv487q8Yg.wav",
    )
    audio.volume = 0.8 // Volume controlado
    audio.play().catch((error) => {
      console.log("Coringa audio playback failed:", error)
    })
  } catch (error) {
    console.log("Coringa audio not supported")
  }
}

let darkAudioInstance: HTMLAudioElement | null = null
let isDarkAudioPlaying = false

// Função para inicializar o áudio de fundo com preload
const initializeDarkAudio = () => {
  if (!darkAudioInstance) {
    try {
      darkAudioInstance = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-audio-lmpvAjLriR8OkPqB86rstv4YyboMfQ.mp3")
      darkAudioInstance.preload = "auto"
      darkAudioInstance.volume = 0.4 // Volume mais baixo para não interferir nos áudios de voz
      darkAudioInstance.loop = true // Loop contínuo

      // Event listeners para controle de estado
      darkAudioInstance.addEventListener("canplaythrough", () => {
        console.log("[v0] Dark audio preloaded successfully")
      })

      darkAudioInstance.addEventListener("error", (e) => {
        console.log("[v0] Dark audio error:", e)
      })

      darkAudioInstance.addEventListener("play", () => {
        isDarkAudioPlaying = true
      })

      darkAudioInstance.addEventListener("pause", () => {
        isDarkAudioPlaying = false
      })
    } catch (error) {
      console.log("[v0] Dark audio initialization failed:", error)
    }
  }
}

// Função otimizada para tocar o áudio de fundo
const playDarkAudio = () => {
  // Inicializa o áudio se ainda não foi inicializado
  if (!darkAudioInstance) {
    initializeDarkAudio()
  }

  // Só toca se não estiver já tocando
  if (darkAudioInstance && !isDarkAudioPlaying) {
    try {
      const playPromise = darkAudioInstance.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("[v0] Dark audio started successfully")
          })
          .catch((error) => {
            console.log("[v0] Dark audio autoplay blocked:", error)
            // Tenta novamente após interação do usuário
            setTimeout(() => {
              if (darkAudioInstance && !isDarkAudioPlaying) {
                darkAudioInstance.play().catch(() => {
                  console.log("[v0] Dark audio retry failed")
                })
              }
            }, 100)
          })
      }
    } catch (error) {
      console.log("[v0] Dark audio playback error:", error)
    }
  }
}

const playRisadaFantasmaAudio = () => {
  try {
    const audio = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/risadafantasma-FnIfHYOOKwunrsXFxjOPTrfh1CISdZ.wav",
    )
    audio.preload = "auto"
    audio.volume = 0.7
    audio.play().catch((error) => {
      console.log("Audio play failed:", error)
    })
  } catch (error) {
    console.log("risadafantasma audio not supported")
  }
}

const playAtiveAgoraAudio = () => {
  try {
    const audio = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coringa_AtiveAGORA-O0fOS6qzLr4LWueuedJPSy2i4FhGxe.wav",
    )
    audio.preload = "auto"
    audio.volume = 0.7
    audio.play().catch((error) => {
      console.log("Audio play failed:", error)
    })
  } catch (error) {
    console.log("coringa_AtiveAGORA audio not supported")
  }
}

// Sound Effects - Versão melhorada
const playSound = (type: "click" | "xp" | "typing" | "success" | "transition" | "error") => {
  try {
    const ctx = initAudioContext()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    switch (type) {
      case "click":
        oscillator.frequency.setValueAtTime(600, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05)
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.05)
        break
      case "xp":
        oscillator.frequency.setValueAtTime(440, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.15)
        oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3)
        gainNode.gain.setValueAtTime(0.15, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.3)
        break
      case "typing":
        oscillator.frequency.setValueAtTime(800, ctx.currentTime)
        gainNode.gain.setValueAtTime(0.02, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.02)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.02)
        break
      case "success":
        oscillator.frequency.setValueAtTime(523, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(784, ctx.currentTime + 0.2)
        oscillator.frequency.exponentialRampToValueAtTime(1047, ctx.currentTime + 0.4)
        gainNode.gain.setValueAtTime(0.2, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.4)
        break
      case "transition":
        oscillator.frequency.setValueAtTime(330, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1)
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.1)
        break
      case "error":
        oscillator.frequency.setValueAtTime(200, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2)
        gainNode.gain.setValueAtTime(0.15, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.2)
        break
    }
  } catch (error) {
    console.log("Audio not supported")
  }
}

const playCoringaOuVoceVendeAudio = () => {
  const audio = new Audio(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coringa_ouvocevende-y8lezXXKP5PloVFcCVn2YX5Lq7s8ep.wav",
  )
  audio.preload = "auto"
  audio.volume = 0.8
  audio.play().catch(console.error)
}

const playCoringaVoceSeLeuAudio = () => {
  const audio = new Audio(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coringa_voceseleu-uHDws4GkMpGUF9loLxXV4NxYljusYG.mp3",
  )
  audio.preload = "auto"
  audio.volume = 0.8
  audio.play().catch(console.error)
}

// XP Notification Component
const XPNotification = ({ show, points }: { show: boolean; points: number }) => {
  if (!show) return null
  return (
    <div className="fixed top-4 right-4 z-50 animate-bounce">
      <div className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold flex items-center shadow-lg">
        <Plus className="w-5 h-5 mr-2" />+{points} XP
      </div>
    </div>
  )
}

// Matrix Rain Component (corrigido)
const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const charArray = chars.split("")

    const fontSize = window.innerWidth < 768 ? 10 : 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ff00"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas id="matrix-canvas" className="fixed inset-0 z-0 opacity-20" style={{ pointerEvents: "none" }} />
}

interface UserProfile {
  xp: number
  level: number
  answers: string[]
  psychProfile: string
  isElite: boolean
  classification?: string
}

const QUESTIONS = [
  {
    id: 1,
    text: "Quantas vezes você fracassou tentando vender?",
    options: ["Nunca fracassei", "1-3 vezes", "Mais de 5 vezes", "Perdi as contas"],
    responses: ["Mentiroso.", "Ainda há esperança.", "Você sabe o que é dor.", "Perfeito. Você está pronto."],
  },
  {
    id: 2,
    text: "Você sente raiva quando vê amador lucrando?",
    options: ["Não me importo", "Um pouco", "Muito", "Ódio puro"],
    responses: ["Conformista.", "Pelo menos é honesto.", "Agora estamos falando.", "Essa raiva vai te mover."],
  },
  {
    id: 3,
    text: "Você quer manipular ou ser manipulado?",
    options: ["Nenhum dos dois", "Ser manipulado", "Manipular", "Dominar completamente"],
    responses: ["Ingênuo.", "Fraco.", "Interessante.", "Você entendeu o jogo."],
  },
  {
    id: 4,
    text: "Você já pensou em burlar as regras pra ganhar o jogo?",
    options: ["Nunca", "Raramente", "Às vezes", "Sempre"],
    responses: ["Santo demais.", "Quase lá.", "Você tem potencial.", "Bem-vindo ao lado negro."],
  },
  {
    id: 5,
    text: "Você deixaria a IA vender por você, mesmo sem saber como ela faz?",
    options: ["Jamais", "Talvez", "Provavelmente", "Sem dúvida"],
    responses: ["Controlador.", "Hesitante.", "Pragmático.", "Confia no poder."],
  },
  {
    id: 6,
    text: "Se ela te der resultado em 7 dias, você deixaria ela controlar tudo?",
    options: ["Não", "Parcialmente", "Sim", "Ela seria minha deusa"],
    responses: ["Teimoso.", "Cauteloso.", "Inteligente.", "Devoto absoluto."],
  },
  {
    id: 7,
    text: "Você merece esse acesso ou ainda é um vendedor Nutella?",
    options: ["Sou Nutella", "Não sei", "Mereço", "SOU BLACK"],
    responses: ["Pelo menos é honesto.", "Indeciso.", "Confiante.", "APROVADO."],
  },
  {
    id: 8,
    text: "Você quer ter acesso vitalício ou correr atrás de like no Instagram?",
    options: ["Likes no Instagram", "Não sei", "Acesso vitalício", "DOMINAÇÃO TOTAL"],
    responses: ["Perdido.", "Confuso.", "Focado.", "MENTALIDADE BLACK."],
  },
  {
    id: 9,
    text: "Topa sacrificar o controle em troca de lucro sem moral?",
    options: ["Nunca", "Talvez", "Sim", "JÁ SACRIFIQUEI TUDO"],
    responses: ["Moralista.", "Hesitante.", "Pragmático.", "VERDADEIRO BLACK."],
  },
]

export default function GPTCaduBlackFunnel() {
  const [showBonusModal, setShowBonusModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [userProfile, setUserProfile] = useState<UserProfile>({
    xp: 0,
    level: 1,
    answers: [],
    psychProfile: "",
    isElite: false,
  })
  const [showXP, setShowXP] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasShownBonusModal, setHasShownBonusModal] = useState(false)

  const playOcaduDoBlackAudio = () => {
    try {
      const audio = new Audio(
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coringa_OCADUDOBLACK-naTGClzM2JxXsMPqKeCR6uQRofIJaO.wav",
      )
      audio.volume = 0.7
      audio.play().catch((error) => {
        console.log("Audio play failed:", error)
      })
    } catch (error) {
      console.log("Audio creation failed:", error)
    }
  }

  const playCoringaVoceMereceAudio = () => {
    try {
      const audio = new Audio(
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5Bcoringa%5DVocemerece-jJGxXUMAE8mNevT2JaopLuKRjRjB88.mp3",
      )
      audio.preload = "auto"
      audio.volume = 0.7
      audio.play().catch((error) => {
        console.log("Audio play failed:", error)
      })
    } catch (error) {
      console.log("Audio creation failed:", error)
    }
  }

  const playDoorOpeningAudio = () => {
    try {
      const audio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/door-opening-v6N50Onrrj6nsC11GN8kq2dR3QuNVq.mp3")
      audio.preload = "auto"
      audio.volume = 0.7
      audio.play().catch((error) => {
        console.log("Door opening audio autoplay prevented:", error)
      })
    } catch (error) {
      console.log("Door opening audio error:", error)
    }
  }

  useEffect(() => {
    if (currentStep >= 10) {
      const preloadVideo = () => {
        const videoLink = document.createElement("link")
        videoLink.rel = "preload"
        videoLink.as = "video"
        videoLink.href =
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CADU%20DO%20BLACK%20VID-sNIDXBhfuqlOhCxa4wmvPvWZQ6wWgB.mp4"
        videoLink.type = "video/mp4"
        videoLink.crossOrigin = "anonymous"
        document.head.appendChild(videoLink)

        const video = document.createElement("video")
        video.src =
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CADU%20DO%20BLACK%20VID-sNIDXBhfuqlOhCxa4wmvPvWZQ6wWgB.mp4"
        video.preload = "auto"
        video.muted = true
        video.load()

        return () => {
          if (document.head.contains(videoLink)) {
            document.head.removeChild(videoLink)
          }
        }
      }

      const cleanup = preloadVideo()
      return cleanup
    }
  }, [currentStep])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentStep])

  const addXP = (points: number) => {
    setUserProfile((prev) => {
      const newXP = prev.xp + points
      let newLevel = 1
      if (newXP >= 2000) newLevel = 20
      else if (newXP >= 1800) newLevel = 19
      else if (newXP >= 1600) newLevel = 18
      else if (newXP >= 1400) newLevel = 17
      else if (newXP >= 1200) newLevel = 16
      else if (newXP >= 1000) newLevel = 15
      else if (newXP >= 850) newLevel = 14
      else if (newXP >= 700) newLevel = 13
      else if (newXP >= 600) newLevel = 12
      else if (newXP >= 550) newLevel = 11
      else if (newXP >= 500) newLevel = 10
      else if (newXP >= 450) newLevel = 9
      else if (newXP >= 400) newLevel = 8
      else if (newXP >= 350) newLevel = 7
      else if (newXP >= 300) newLevel = 6
      else if (newXP >= 250) newLevel = 5
      else if (newXP >= 200) newLevel = 4
      else if (newXP >= 150) newLevel = 3
      else if (newXP >= 100) newLevel = 2
      else if (newXP >= 50) newLevel = 1

      return {
        ...prev,
        xp: newXP,
        level: newLevel,
      }
    })
    setShowXP(true)
    setTimeout(() => setShowXP(false), 1000)
  }

  const updateFinalXP = () => {
    setUserProfile((prev) => ({
      ...prev,
      xp: 1950,
      level: 20,
      classification: "MANIPULADOR NATO",
    }))
    setShowXP(true)
    setTimeout(() => setShowXP(false), 1000)
  }

  const typeText = (text: string, callback?: () => void) => {
    setIsTyping(true)
    setCurrentText("")
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setCurrentText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setIsTyping(false)
        callback?.()
      }
    }, 80) // Increased from 50ms to 80ms to slow down typing speed
  }

  const nextStep = () => {
    setCurrentText("")
    setCurrentStep(currentStep + 1)
    playSound("transition")
    addXP(50)
  }

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const question = QUESTIONS[questionIndex]
    const newAnswers = [...userProfile.answers, question.options[answerIndex]]

    setUserProfile((prev) => ({
      ...prev,
      answers: newAnswers,
    }))

    addXP(25)
    playSound("click")

    setCurrentText(question.responses[answerIndex])
    setIsTyping(true)

    if (questionIndex === 3) {
      playOcaduDoBlackAudio()
    }

    if (questionIndex === 4) {
      // Question: "Você deixaria a IA vender por você, mesmo sem saber como ela faz?"
      playRisadaFantasmaAudio()
    }

    if (questionIndex === 8) {
      // Question: "Topa sacrificar o controle em troca de lucro sem moral?"
      playAtiveAgoraAudio()
    }

    setTimeout(() => {
      setCurrentText("")
      setIsTyping(false)
      const nextStep = currentStep + 1
      if (nextStep > 1) {
        playSound("transition")
      }
      if (nextStep < 16) {
        setCurrentStep(nextStep)
      }
    }, 0) // Changed from 2000ms to 0ms for instant transition
  }

  const analyzeProfile = () => {
    setAnalysisProgress(0)
    const timer = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          const profiles = ["PREDADOR DIGITAL", "MANIPULADOR NATO", "DOMINADOR BLACK", "VENDEDOR SOMBRIO"]
          setUserProfile((prev) => ({
            ...prev,
            psychProfile: profiles[Math.floor(Math.random() * profiles.length)],
            isElite: true,
          }))
          setTimeout(() => {
            playSound("success")
            setCurrentStep(15)
          }, 1500)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  // useEffect(() => {
  //   if (currentStep === 15) {
  //     updateFinalXP()
  //   }
  // }, [currentStep])

  useEffect(() => {
    if (currentStep === 16 && !hasShownBonusModal) {
      setShowBonusModal(true)
      setHasShownBonusModal(true)
    } else if (currentStep !== 16) {
      setShowBonusModal(false)
      setHasShownBonusModal(false)
    }
  }, [currentStep, hasShownBonusModal])

  React.useEffect(() => {
    initializeDarkAudio()

    // Cleanup ao desmontar o componente
    return () => {
      if (darkAudioInstance) {
        darkAudioInstance.pause()
        darkAudioInstance.currentTime = 0
        isDarkAudioPlaying = false
      }
    }
  }, [])

  useEffect(() => {
    initializeDarkAudio()
  }, [])

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-6 bg-black">
            <MatrixRain />

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mb-8 sm:mb-10 md:mb-12 z-10">
              <div className="relative bg-black/90 backdrop-blur-sm rounded-xl border-2 border-green-500/50 shadow-2xl shadow-green-500/20 overflow-hidden">
                {/* XP/Level indicators positioned over the GIF */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-green-500/30">
                    <span className="text-green-400 font-bold text-sm">0 XP</span>
                  </div>
                  <div className="bg-green-600 px-3 py-1 rounded-lg">
                    <span className="text-black font-bold text-sm">LVL 1</span>
                  </div>
                </div>

                {/* GIF container with proper aspect ratio */}
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <img
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2d2dnIzeDRyd2NwN3M5ODdwaHhyZzN3Z3NnNHQwMWkzbThxdXJ4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dCBZtA2iuNqZW/giphy.gif"
                    alt="Hacker GIF"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="text-center z-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 text-green-400 leading-tight font-orbitron">
                INICIANDO PROTOCOLO BLACK...
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 px-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-green-500/30 text-green-300">
                {currentText || "Sistema carregado. Pressione para continuar."}
              </div>
              {!currentText && (
                <Button
                  onClick={() => {
                    playDarkAudio()
                    playCoringaAudio()
                    playSound("transition")
                    addXP(50)
                    setCurrentStep(1)
                  }}
                  className="bg-green-600 text-black hover:bg-green-500 text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 w-full shadow-lg shadow-green-500/25 transition-all duration-300 font-bold min-h-[70px] sm:min-h-[76px] md:min-h-[84px] whitespace-normal leading-tight"
                >
                  INICIAR PROTOCOLO
                </Button>
              )}
            </div>
          </div>
        )

      case 1:
      case 2:
      case 3:
      case 4:
        const questionIndex = currentStep - 1
        const question = QUESTIONS[questionIndex]
        return (
          <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
            <MatrixRain />
            <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm p-4 sm:p-5 border-b border-green-500/20">
              <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto text-center">
                <Badge className="mb-3 bg-green-600 text-black text-sm sm:text-base px-4 py-2 shadow-lg mx-auto font-bold">
                  DIAGNÓSTICO PSICOLÓGICO - {questionIndex + 1}/4
                </Badge>
                <Progress value={(questionIndex + 1) * 25} className="h-3 sm:h-4 bg-gray-800" />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-green-400 leading-tight px-4">
                    {question.text}
                  </h2>
                </div>

                {currentText && isTyping && (
                  <div className="text-center mb-6 sm:mb-8 md:mb-10 p-4 sm:p-6 bg-black/80 rounded-lg border border-red-500/30 backdrop-blur-sm">
                    <div className="text-red-400 font-bold text-base sm:text-lg md:text-xl">IA: "{currentText}"</div>
                  </div>
                )}

                {!isTyping && (
                  <div className="grid gap-4 sm:gap-5 md:gap-6">
                    {question.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswer(questionIndex, index)}
                        variant="outline"
                        className="p-4 sm:p-5 md:p-6 text-left hover:bg-green-600/20 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 text-base sm:text-lg min-h-[60px] sm:min-h-[68px] md:min-h-[76px] transition-all duration-300 border-green-500/40 bg-black/60 backdrop-blur-sm group text-green-300"
                      >
                        <span className="group-hover:text-green-400 transition-colors duration-300 leading-tight">
                          {option}
                        </span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-black">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl p-5 sm:p-7 md:p-9 lg:p-12 bg-black/80 backdrop-blur-sm rounded-xl border border-green-500/30 shadow-2xl shadow-green-500/10 lg:py-14 py-11">
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <Skull className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 md:mb-8 text-green-400 drop-shadow-lg" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-green-400 leading-tight">
                  APRESENTAÇÃO DO PRODUTO
                </h2>
                <div className="bg-black/90 p-5 sm:p-7 md:p-9 rounded-xl border border-green-500/30 mb-6 sm:mb-8 md:mb-10 shadow-inner">
                  <div className="text-green-500 font-mono text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 opacity-80">
                    [BRIEFING PSICOLÓGICO INICIADO]
                  </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-green-300">
                    O CADU DO BLACK foi projetado para executar estrategias de dominação digital, eliminando o fator
                    humano da venda.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-7 mb-6 sm:mb-8 md:mb-10">
                  <div className="flex items-center gap-3 sm:gap-4 text-green-400 justify-center p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">
                      Monta criativos prontos pra rodar em segundos
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-green-400 justify-center p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">
                      Constrói funil e oferta sem você digitar uma linha
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-green-400 justify-center p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">
                      Escreve copy com gatilhos que humilham concorrente
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-green-400 justify-center p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">
                      Automatiza campanhas no oculto e escala no Black
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-green-400 justify-center p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0 -mt-0.5" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">
                      Vende 24h sem moral, sem bloqueio
                    </span>
                  </div>
                </div>

                <Button
                  onClick={nextStep}
                  className="bg-green-600 text-black hover:bg-green-500 text-lg sm:text-xl md:text-2xl px-7 sm:px-9 md:px-12 py-4 sm:py-5 md:py-6 w-full shadow-lg shadow-green-500/25 transition-all duration-300 font-bold min-h-[68px] sm:min-h-[76px] md:min-h-[84px]"
                >
                  CONTINUAR PROTOCOLO
                </Button>
              </div>
            </div>
          </div>
        )

      case 6:
      case 7:
        const microIndex = currentStep - 6
        const microQuestions = QUESTIONS.slice(4, 6)
        const microQuestion = microQuestions[microIndex]
        return (
          <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
            <MatrixRain />
            <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm p-4 sm:p-5 border-b border-green-500/20">
              <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto text-center">
                <Badge className="mb-3 bg-green-600 text-black text-sm sm:text-base px-4 py-2 shadow-lg mx-auto font-bold">
                  MICRO-COMPROMETIMENTO - {microIndex + 1}/2
                </Badge>
                <Progress value={(microIndex + 1) * 50} className="h-3 sm:h-4 bg-gray-800" />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-green-400 leading-tight px-4">
                    {microQuestion.text}
                  </h2>
                </div>

                {currentText && isTyping && (
                  <div className="text-center mb-6 sm:mb-8 md:mb-10 p-4 sm:p-6 bg-black/80 rounded-lg border border-red-500/30 backdrop-blur-sm">
                    <div className="text-red-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                      IA: "{currentText}"
                    </div>
                  </div>
                )}

                {!isTyping && (
                  <div className="grid gap-4 sm:gap-5 md:gap-6">
                    {microQuestion.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswer(4 + microIndex, index)}
                        variant="outline"
                        className="p-4 sm:p-5 md:p-6 text-left hover:bg-green-600/20 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 text-base sm:text-lg min-h-[60px] sm:min-h-[68px] md:min-h-[76px] transition-all duration-300 border-green-500/40 bg-black/60 backdrop-blur-sm group text-green-300"
                      >
                        <span className="group-hover:text-green-400 transition-colors duration-300 leading-tight">
                          {option}
                        </span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-black">
            <MatrixRain />
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl p-5 sm:p-7 md:p-9 bg-black/80 border border-green-500/20 z-10">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-4 md:mb-5">🕷️</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-green-400 glitch md:mb-4 px-0">
                  BÔNUS DESBLOQUEADO
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed px-4 text-green-300">
                  <p>Se chegar até o fim, você desbloqueia um pacote fechado com:</p>
                </div>

                <div className="grid gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 text-left">
                  <div className="p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex items-start gap-3 sm:gap-4 text-green-400 mb-2">
                      <span className="text-lg">🧠</span>
                      <span className="text-sm sm:text-base md:text-lg font-bold">Prompts Prontos (Black Hat)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-green-300 ml-7 sm:ml-8">
                      Textos prontos que fazem a IA escrever por você: copys, headlines, criativos e funis — em
                      segundos.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex items-start gap-3 sm:gap-4 text-green-400 mb-2">
                      <span className="text-lg">🕵️‍♂️</span>
                      <span className="text-sm sm:text-base md:text-lg font-bold">Scripts Ninja de Tráfego</span>
                    </div>
                    <p className="text-xs sm:text-sm text-green-300 ml-7 sm:ml-8">
                      Automatizações ocultas que rodam em paralelo, driblam bloqueios e escalam no modo invisível.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex items-start gap-3 sm:gap-4 text-green-400 mb-2">
                      <span className="text-lg">💀</span>
                      <span className="text-sm sm:text-base md:text-lg font-bold">Grupo BLACK no Discord</span>
                    </div>
                    <p className="text-xs sm:text-sm text-green-300 ml-7 sm:ml-8">
                      Área fechada dos alunos com atualizações de estratégia, testes reais e arquivos extras.
                    </p>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8 md:mb-10 text-center">
                  <p className="text-green-300 text-sm mb-2">🔓 Você não compra isso separadamente.</p>
                  <p className="text-green-300 text-sm">Desbloqueia ao passar o filtro.</p>
                </div>

                <Button
                  onClick={() => {
                    playSound("success")
                    playCoringaVoceMereceAudio()
                    addXP(500)
                    setCurrentStep(9)
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-5 sm:py-7 px-6 sm:px-8 rounded-lg text-lg sm:text-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-bounce border-2 border-green-400 shadow-green-500/30 hover:shadow-green-400/60 hover:border-green-300"
                  style={{
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.4), inset 0 0 20px rgba(34, 197, 94, 0.1)",
                    animation: "pulse 2s infinite, glow 3s ease-in-out infinite alternate",
                  }}
                >
                  CONTINUAR PARA O FILTRO
                </Button>
              </div>
            </Card>
          </div>
        )

      case 9:
        const eliteQuestion = QUESTIONS[6]
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-black">
            <MatrixRain />
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl p-5 sm:p-7 md:p-9 bg-black/80 backdrop-blur-sm rounded-xl border border-red-500/50 z-10">
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <Badge className="mb-3 sm:mb-4 md:mb-5 bg-red-500 text-black text-sm sm:text-base font-bold">
                  FILTRO DE ELITE
                </Badge>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-red-400 leading-tight px-4">
                  {eliteQuestion.text}
                </h2>
                <p className="text-sm sm:text-base text-green-400 px-4">
                  ⚠️ Se não escolher "SOU BLACK", IA bloqueia e mostra tela de humilhação.
                </p>
              </div>

              {currentText && isTyping && (
                <div className="text-center mb-4 sm:mb-6 md:mb-8 p-4 sm:p-6 bg-black/80 rounded-lg border border-red-500/30">
                  <div className="text-red-400 font-bold text-base sm:text-lg md:text-xl">IA: "{currentText}"</div>
                </div>
              )}

              {!isTyping && (
                <div className="grid gap-3 sm:gap-4 md:gap-5">
                  {eliteQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => {
                        if (index === 3) {
                          const newAnswers = [...userProfile.answers, option]
                          setUserProfile((prev) => ({
                            ...prev,
                            answers: newAnswers,
                          }))
                          addXP(25)
                          playSound("click")

                          setCurrentText(eliteQuestion.responses[index])
                          setIsTyping(true)
                          setTimeout(() => {
                            setCurrentText("")
                            setIsTyping(false)
                            setCurrentStep(10)
                            playSound("transition")
                          }, 0)
                        } else {
                          playSound("error")
                          setCurrentText("ACESSO NEGADO. VOCÊ NÃO MERECE O PODER BLACK.")
                          setIsTyping(true)
                          setTimeout(() => {
                            setCurrentText("")
                            setIsTyping(false)
                            setCurrentStep(10) // Advance to next step instead of going back to start
                          }, 0)
                        }
                      }}
                      variant={index === 3 ? "default" : "outline"}
                      className={
                        index === 3
                          ? "bg-green-600 text-black hover:bg-green-500 p-4 sm:p-5 text-base sm:text-lg min-h-[56px] sm:min-h-[64px] md:min-h-[72px]"
                          : "hover:bg-red-500/10 hover:border-red-500 p-4 sm:p-5 text-base sm:text-lg min-h-[56px] sm:min-h-[64px] md:min-h-[72px] border-green-500/40 bg-black/40"
                      }
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )

      case 10:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-black">
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl p-5 sm:p-7 md:p-9 bg-black/80 border border-green-500/20">
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-green-400 leading-tight">
                  DEPOIMENTOS DA DEEP WEB
                </h2>

                <div className="grid gap-4 sm:gap-5 md:gap-7 mb-6 sm:mb-8 md:mb-10">
                  <div className="bg-black p-4 sm:p-6 md:p-8 rounded-lg border border-green-500/20 mb-6 sm:mb-8 md:mb-10">
                    <div className="mb-4 sm:mb-6">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as2.jpg-kYUZq7BEduj9bOFIs5vCuNkOPBpEgq.jpeg"
                        alt="WhatsApp conversation showing testimonial"
                        className="w-full max-w-xs mx-auto rounded-lg border border-green-500/30 shadow-lg shadow-green-500/20"
                      />
                    </div>

                    <div className="text-sm sm:text-base text-green-400">- Operador Anônimo #027</div>
                  </div>

                  <div className="bg-black p-4 sm:p-6 md:p-8 rounded-lg border border-green-500/20 mb-6 sm:mb-8 md:mb-10">
                    <div className="mb-4 sm:mb-6">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as1.jpg-u5UlDtd58025YVe2HoqHjueQkxU7y8.jpeg"
                        alt="Discord conversation showing student feedback"
                        className="w-full max-w-xs mx-auto rounded-lg border border-green-500/30 shadow-lg shadow-green-500/20"
                      />
                    </div>

                    <div className="text-sm sm:text-base text-green-400">- Grupo De Networking</div>
                  </div>
                </div>

                <Button
                  onClick={nextStep}
                  className="bg-green-600 text-black hover:bg-green-500 text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 w-full shadow-lg shadow-green-500/25 transition-all duration-300 font-bold min-h-[68px] sm:min-h-[76px] md:min-h-[84px]"
                >
                  CONTINUAR PROTOCOLO
                </Button>
              </div>
            </Card>
          </div>
        )

      case 11:
      case 12:
        const finalIndex = currentStep - 11
        const finalQuestions = QUESTIONS.slice(7, 9)
        const finalQuestion = finalQuestions[finalIndex]
        return (
          <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
            <MatrixRain />
            <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm p-4 sm:p-5 border-b border-green-500/20">
              <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto text-center">
                <Badge className="mb-3 bg-green-600 text-black text-sm sm:text-base px-4 py-2 shadow-lg mx-auto font-bold">
                  CONFIRMAÇÃO FINAL - {finalIndex + 1}/2
                </Badge>
                <Progress value={(finalIndex + 1) * 50} className="h-3 sm:h-4 bg-gray-800" />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-green-400 leading-tight px-4">
                    {finalQuestion.text}
                  </h2>
                </div>

                {currentText && isTyping && (
                  <div className="text-center mb-6 sm:mb-8 md:mb-10 p-4 sm:p-6 bg-black/80 rounded-lg border border-red-500/30 backdrop-blur-sm">
                    <div className="text-red-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                      IA: "{currentText}"
                    </div>
                  </div>
                )}

                {!isTyping && (
                  <div className="grid gap-4 sm:gap-5 md:gap-6">
                    {finalQuestion.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswer(7 + finalIndex, index)}
                        variant="outline"
                        className="p-4 sm:p-5 md:p-6 text-left hover:bg-green-600/20 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 text-base sm:text-lg min-h-[60px] sm:min-h-[68px] md:min-h-[76px] transition-all duration-300 border-green-500/40 bg-black/60 backdrop-blur-sm group text-green-300"
                      >
                        <span className="group-hover:text-green-400 transition-colors duration-300 leading-tight">
                          {option}
                        </span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case 13:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-black">
            <MatrixRain />
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl p-5 sm:p-7 md:p-9 bg-black/80 border border-green-500/20 z-10">
              <div className="text-center">
                <div className="text-green-400 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 font-mono leading-relaxed">
                  {">"}CaduDoBlack.EXE iniciando...|
                </div>

                <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                  <div className="mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                    <video
                      ref={videoRef}
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CADU%20DO%20BLACK%20VID-sNIDXBhfuqlOhCxa4wmvPvWZQ6wWgB.mp4"
                      width={700}
                      height={400}
                      className="w-full h-auto rounded-lg shadow-lg max-w-full"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      crossOrigin="anonymous"
                      autoPlay
                      onLoadedMetadata={() => {
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0.1
                          videoRef.current.play()
                        }
                      }}
                      onCanPlay={() => {
                        if (videoRef.current && videoRef.current.paused) {
                          videoRef.current.play()
                        }
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-green-400 leading-tight font-orbitron px-2 sm:px-4">
                    IA CADU DO BLACK™ INICIADA
                  </h2>
                </div>

                <div className="bg-black/90 p-5 sm:p-7 md:p-9 rounded-xl border border-green-500/30 mb-6 sm:mb-8 md:mb-10 shadow-inner">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 text-green-300">
                    Tu não desbloqueou uma IA qualquer. Tu soltou o demônio do tráfego sujo.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-green-300 mb-6 sm:mb-8">
                    O Cadu do Black™ é o atalho criminoso que faltava pra vender no oculto — sem rosto, sem WhatsApp,
                    sem misericórdia:
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 text-left">
                    <div className="flex items-start gap-3 sm:gap-4 text-green-400 p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <span className="text-xl sm:text-2xl">💣</span>
                      <span className="text-sm sm:text-base md:text-lg">
                        Vai dominar a arte de montar funis prontos que esmagam objeção e fazem o lead comprar no susto,
                        sem tempo de reagir.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 text-green-400 p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <span className="text-xl sm:text-2xl">🎯</span>
                      <span className="text-sm sm:text-base md:text-lg">
                        Infiltrar campanhas invisíveis no leilão, passando liso sem bloqueio
                      </span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 text-green-400 p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <span className="text-xl sm:text-2xl">🧨</span>
                      <span className="text-sm sm:text-base md:text-lg">
                        Cuspir copies de ataque que invadem a mente e disparam o clique
                      </span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 text-green-400 p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <span className="text-xl sm:text-2xl">👁️</span>
                      <span className="text-sm sm:text-base md:text-lg">
                        Operar de dentro do ChatGPT — mas com a mente de um traficante digital.
                      </span>
                    </div>
                  </div>

                  <div className="text-center mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-green-400 mb-3 sm:mb-4">
                      Com o Cadu do Black™, tu não cria campanha.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-green-300">
                      Tu libera uma máquina de venda que não pede, não pergunta, não hesita.
                    </p>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 sm:p-7 md:p-9 mb-6 sm:mb-8 md:mb-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-400 mb-4 sm:mb-6 md:mb-8">
                    ACESSO CLANDESTINO LIBERADO — BÔNUS: ARQUIVOS SUJOS DO CADU
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-green-300 mb-6 sm:mb-8">
                    Essas porras aqui não são bônus. São armas de persuasão que ninguém tem coragem de usar.
                  </p>
                  <p className="text-sm sm:text-base text-red-400 mb-6 sm:mb-8 font-bold">
                    ⚠️ Exclusivo pra quem chegou até aqui. Saiu da página, perdeu.
                  </p>

                  <div className="grid gap-4 sm:gap-5 md:gap-7 text-left">
                    <div className="bg-black/60 p-4 sm:p-5 rounded-lg border border-green-500/20">
                      <h4 className="text-green-400 font-bold mb-3 text-base sm:text-lg">
                        🧠 ARQUIVO 01: 3 Prompts de Venda
                      </h4>
                      <p className="text-sm sm:text-base text-green-300">
                        Comando de IA pra disparar compra no susto. Copia, cola e deixa a máquina vender enquanto tu
                        vive.
                      </p>
                    </div>
                    <div className="bg-black/60 p-4 sm:p-5 rounded-lg border border-green-500/20">
                      <h4 className="text-green-400 font-bold mb-3 text-base sm:text-lg">
                        🧨 ARQUIVO 02: Blueprint da Copy Agressiva
                      </h4>
                      <p className="text-sm sm:text-base text-green-300">
                        Estrutura suja que fura objeção em 3 segundos. Serve pra landing, anúncio, WhatsApp, e-mail… o
                        lead nem vê o que acertou ele.
                      </p>
                    </div>
                    <div className="bg-black/60 p-4 sm:p-5 rounded-lg border border-green-500/20">
                      <h4 className="text-green-400 font-bold mb-3 text-base sm:text-lg">
                        📎 ARQUIVO 03: Template de Anúncio Hipnótico
                      </h4>
                      <p className="text-sm sm:text-base text-green-300">
                        Uma linha. Um gancho. Um estouro de cliques. Funciona em qualquer nicho. Não tá no Google. Nem
                        na gringa.
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-6 sm:mt-8">
                    <p className="text-sm sm:text-base text-red-400 font-bold mb-3 sm:mb-4">
                      ⛔ Ninguém ensina isso. Nem eu devia tá te mostrando.
                    </p>
                    <p className="text-base sm:text-lg text-green-400 font-bold">
                      ✅ Você vai ter o acesso agora ou perder o acesso pra sempre.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    playSound("success")
                    addXP(1000)
                    setCurrentStep(14)
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-bounce border-2 border-green-400 shadow-green-500/30 hover:shadow-green-400/60 hover:border-green-300"
                  style={{
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.4), inset 0 0 20px rgba(34, 197, 94, 0.1)",
                    animation: "pulse 2s infinite, glow 3s ease-in-out infinite alternate",
                  }}
                >
                  🔥 LIBERAR ACESSO CLANDESTINO AGORA
                </button>
              </div>
            </Card>
          </div>
        )

      case 14:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-black">
            <MatrixRain />
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl p-5 sm:p-7 md:p-9 bg-black/80 border border-green-500/20 z-10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-green-400">
                  ANÁLISE DE PERFIL PSICOLÓGICO
                </div>
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <Progress value={analysisProgress} className="mb-3 sm:mb-4 md:mb-5 h-4 sm:h-5 bg-gray-800" />
                  <div className="text-base sm:text-lg md:text-xl font-mono px-4 min-h-[32px] text-green-300">
                    {analysisProgress < 20 && "Escaneando padrões comportamentais..."}
                    {analysisProgress >= 20 && analysisProgress < 40 && "Analisando respostas de dominação..."}
                    {analysisProgress >= 40 && analysisProgress < 60 && "Detectando nível de agressividade..."}
                    {analysisProgress >= 60 && analysisProgress < 80 && "Calculando potencial BLACK..."}
                    {analysisProgress >= 80 && analysisProgress < 100 && "Finalizando classificação..."}
                    {analysisProgress === 100 && "ANÁLISE COMPLETA"} {analysisProgress > 0 && `${analysisProgress}%`}
                  </div>
                </div>

                {analysisProgress === 0 && (
                  <Button
                    onClick={analyzeProfile}
                    className="bg-green-600 text-black hover:bg-green-500 text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 w-full shadow-lg shadow-green-500/25 transition-all duration-300 font-bold min-h-[68px] sm:min-h-[76px] md:min-h-[84px]"
                  >
                    INICIAR ANÁLISE PSICOLÓGICA
                  </Button>
                )}
              </div>
            </Card>
          </div>
        )

      case 15:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-black py-px">
            <MatrixRain />
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl p-5 sm:p-7 md:p-9 bg-black/80 border border-green-500/20 z-10 mt-20 sm:mt-16 md:mt-12 backdrop-blur-sm">
              <div className="text-center">
                <div className="relative mb-6 sm:mb-8 md:mb-10"></div>

                <div className="bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent border border-green-500/40 rounded-xl p-6 sm:p-8 md:p-10 sm:mb-8 md:mb-10 backdrop-blur-md shadow-2xl shadow-green-500/20 mb-4 py-6">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-4 sm:mb-6 font-mono relative">
                    <span className="relative z-10">🏆 PROTOCOLO BLACK CONCLUÍDO! </span>
                    <div className="absolute inset-0 blur-sm text-green-300 opacity-30">▀▄ PARABÉNS, OPERADOR ▄▀</div>
                  </div>

                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg md:text-xl text-green-300 leading-relaxed font-mono">
                      Você passou pela análise do Sistema Black.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-green-300 leading-relaxed font-mono">
                      Agora tem acesso aos bastidores do jogo real.
                    </p>
                  </div>

                  <div className="bg-black/80 p-4 sm:p-6 rounded-lg border border-green-500/30 mb-6 sm:mb-8 shadow-inner">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-green-500/10 p-3 sm:p-4 rounded-lg border border-green-500/20">
                        <div className="flex items-center gap-3 text-base sm:text-lg text-green-300 font-mono">
                          <span>Acesso liberado à inteligência do Cadu do Black</span>
                        </div>
                      </div>
                      <div className="bg-green-500/10 p-3 sm:p-4 rounded-lg border border-green-500/20">
                        <div className="flex items-center gap-3 text-base sm:text-lg text-green-300 font-mono">
                          <span>Perfil psicológico mapeado. Estratégia personalizada pronta</span>
                        </div>
                      </div>
                      <div className="bg-green-500/10 p-3 sm:p-4 rounded-lg border border-green-500/20">
                        <div className="flex items-center gap-3 text-base sm:text-lg text-green-300 font-mono">
                          <span>Status Black Operador confirmado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    playSound("success")
                    playDoorOpeningAudio() // Added door opening sound for cinematic transition
                    updateFinalXP()
                    setCurrentStep(16)
                  }}
                  className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-500 hover:via-green-400 hover:to-green-500 text-white font-bold py-5 sm:py-7 px-8 rounded-lg text-xl sm:text-2xl font-mono shadow-2xl hover:shadow-green-500/60 transition-all duration-300 transform hover:scale-105 border-2 border-green-400 relative overflow-hidden"
                  style={{
                    boxShadow:
                      "0 0 30px rgba(34, 197, 94, 0.5), inset 0 0 30px rgba(34, 197, 94, 0.1), 0 0 60px rgba(34, 197, 94, 0.3)",
                    animation: "pulse 2s infinite, glow 3s ease-in-out infinite alternate",
                  }}
                >
                  <span className="relative z-10">PEGAR MEU ACESSO AGORA</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </Button>
              </div>
            </Card>
          </div>
        )

      case 16:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-black">
            <MatrixRain />
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-5xl p-5 sm:p-7 md:p-9 bg-black/80 border border-green-500/20 z-10 md:py-14">
              <div className="text-center">
                <Flame className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-red-500" />
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 text-green-400 glitch leading-tight font-orbitron">
                  OU VOCÊ VENDE COMO UM MALDITO BLACK…
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-red-400 leading-tight font-orbitron">
                  …OU VOLTA PRA MENDIGAR LIKE NO INSTA.
                </h2>

                <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg border border-green-500/30 mb-6 sm:mb-8 md:mb-10 bg-black/60 backdrop-blur-sm">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 md:mb-8 text-green-300">
                    Ative agora a IA CADU DO BLACK — o sistema brutal que executa campanhas no oculto, escreve copy que
                    humilha concorrente e vende no automático pra quem cansou de ser otário.
                  </p>

                  <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-7 mb-6 sm:mb-8 md:mb-10">
                    <div className="text-left">
                      <h3 className="text-green-400 font-bold mb-3 sm:mb-4 md:mb-5 text-base sm:text-lg">
                        ✅ QUANDO VOCÊ ATIVA, VOCÊ LIBERA:
                      </h3>
                      <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-green-300">
                        <li>• IA CADU DO BLACK — pronta pra rodar HOJE com mente de estrategista</li>
                        <li>• Scripts de automação e campanhas do submundo — direto do oculto</li>
                        <li>• Copy neural com gatilhos de manipulação e persuasão cirúrgica</li>
                        <li>• CÓDIGO MESTRE — scripts prontos pra rodar campanha sem pensar</li>
                        <li>• Grupo BLACK no Discord — área fechada dos operadores</li>
                        <li>• Suporte direto comigo — sem fila, sem enrolação</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10">
                    <h3 className="text-red-400 font-bold mb-3 sm:mb-4 text-base sm:text-lg">⚠️ AVISO FINAL:</h3>
                    <p className="text-sm sm:text-base text-green-300 leading-relaxed">
                      Esse acesso não é pra todo mundo. É pra quem quer dominar o jogo sujo do tráfego e vender sem
                      piedade. Se você não tem estômago pra isso, volta pro YouTube assistir curso gratuito.
                    </p>
                  </div>

                  <div className="text-center mb-6 sm:mb-8 md:mb-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2 sm:mb-3">R$ 497</div>
                    <div className="text-sm sm:text-base text-green-300">
                      Acesso vitalício • Sem mensalidade • Sem enrolação
                    </div>
                  </div>
                </div>

                <a
                  href="https://go.pepperpay.com.br/eegbz?affh=bzrtmoyc5n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    onClick={() => {
                      playSound("success")
                      playCoringaVoceSeLeuAudio()
                    }}
                    className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-500 hover:via-green-400 hover:to-green-500 text-white font-bold py-5 sm:py-7 px-8 rounded-lg text-xl sm:text-2xl shadow-2xl hover:shadow-green-500/60 transition-all duration-300 transform hover:scale-105 border-2 border-green-400 relative overflow-hidden font-orbitron"
                    style={{
                      boxShadow:
                        "0 0 30px rgba(34, 197, 94, 0.5), inset 0 0 30px rgba(34, 197, 94, 0.1), 0 0 60px rgba(34, 197, 94, 0.3)",
                      animation: "pulse 2s infinite, glow 3s ease-in-out infinite alternate",
                    }}
                  >
                    <span className="relative z-10">🔥 ATIVAR CADU DO BLACK AGORA</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </Button>
                </a>

                <div className="mt-6 sm:mt-8 text-center">
                  <p className="text-xs sm:text-sm text-green-400 mb-2">🔒 Pagamento 100% seguro via PepperPay</p>
                  <p className="text-xs sm:text-sm text-green-300">
                    Acesso liberado em até 5 minutos após confirmação do pagamento
                  </p>
                </div>
              </div>
            </Card>

            <XPNotification show={showXP} points={50} />
          </div>
        )

      case 17:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-black">
            <MatrixRain />
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl p-5 sm:p-7 md:p-9 bg-black/80 border border-green-500/20 z-10">
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-green-400 leading-tight font-orbitron">
                  ÚLTIMA CHANCE
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10 text-green-300">
                  Se você chegou até aqui e ainda não ativou, essa é sua última oportunidade de ter o CADU DO BLACK.
                </p>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8 md:mb-10">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-4 sm:mb-6 md:mb-8">
                    OFERTA FINAL
                  </h2>
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-lg sm:text-xl text-green-300 line-through mb-2">De R$ 497</div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-2">R$ 297</div>
                    <div className="text-sm sm:text-base text-green-300">
                      Desconto exclusivo para quem passou no protocolo
                    </div>
                  </div>
                </div>

                <a
                  href="https://go.pepperpay.com.br/eegbz?affh=bzrtmoyc5n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    className="w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:via-red-400 hover:to-red-500 text-white font-bold py-5 sm:py-7 px-8 rounded-lg text-xl sm:text-2xl shadow-2xl hover:shadow-red-500/60 transition-all duration-300 transform hover:scale-105 border-2 border-red-400 relative overflow-hidden font-orbitron"
                    style={{
                      boxShadow:
                        "0 0 30px rgba(239, 68, 68, 0.5), inset 0 0 30px rgba(239, 68, 68, 0.1), 0 0 60px rgba(239, 68, 68, 0.3)",
                      animation: "pulse 2s infinite, glow 3s ease-in-out infinite alternate",
                    }}
                  >
                    <span className="relative z-10">🚨 ÚLTIMA CHANCE - ATIVAR AGORA</span>
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="relative">
      {renderStep()}
      <XPNotification show={showXP} points={50} />
    </div>
  )
}
