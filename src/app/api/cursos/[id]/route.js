import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
  try {
    const result = await conn.query("SELECT * FROM Curso WHERE id_curso = ?", [params.id]);

    console.log(params); 

    if (result.length === 0) {
      return NextResponse.json(
        { message: "No se encontró el grupo" },
        { status: 404 }
      );
    }

  return NextResponse.json(result[0]);

  } catch (error) {}
}

