"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const trumpQuotes = [
    "Despite the constant negative press covfefe",
    "I have never seen a thin person drinking Diet Coke",
    "I think I am actually humble. I think I'm much more humble than you would understand",
    // ... (include all the quotes from the previous example)
]

export default function Home() {
    const [sentences, setSentences] = useState(5)
    const [output, setOutput] = useState('')

    function generateTrumpIpsum(numSentences: number) {
        let result = ''
        for (let i = 0; i < numSentences; i++) {
            const randomIndex = Math.floor(Math.random() * trumpQuotes.length)
            result += trumpQuotes[randomIndex] + '. '
        }
        return result.trim()
    }

    function handleGenerate() {
        setOutput(generateTrumpIpsum(sentences))
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-blue-900">
            <Card className="w-full max-w-3xl shadow-lg bg-white">
                <CardHeader className="text-center bg-red-600 text-white rounded-t-lg">
                    <CardTitle className="text-4xl font-bold">Trump Lorem Ipsum Generator</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="sentences" className="block text-sm font-medium text-gray-700 mb-2">
                                Number of sentences: <Badge variant="secondary" className="bg-blue-500 text-white">{sentences}</Badge>
                            </label>
                            <Slider
                                id="sentences"
                                min={1}
                                max={20}
                                step={1}
                                value={[sentences]}
                                onValueChange={(value) => setSentences(value[0])}
                                className="mb-4"
                            />
                        </div>
                        <Button onClick={handleGenerate} className="w-full bg-red-600 hover:bg-red-700 text-white">
                            Generate Trump Ipsum
                        </Button>
                        <Card className="mt-6 bg-gray-100 border-2 border-blue-500">
                            <CardContent className="p-4">
                                <p className="whitespace-pre-wrap text-gray-800">{output || "Your Trump Ipsum will appear here..."}</p>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}