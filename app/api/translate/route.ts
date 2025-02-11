import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const text = searchParams.get("text")
  const lang = searchParams.get("lang")

  if (!text || !lang) {
    return NextResponse.json({ error: "Missing text or lang parameter" }, { status: 400 })
  }

  const apiUrl = `https://aimodelapi-6o6ipie30-santoshallu1234s-projects.vercel.app/convert?text=${encodeURIComponent(text)}&lang=${lang}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching translation:", error)
    return NextResponse.json({ error: "Failed to fetch translation" }, { status: 500 })
  }
}

