import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, preparation, tag, ingredients, title } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Recipe({ creator: userId, preparation, tag, ingredients, title });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
