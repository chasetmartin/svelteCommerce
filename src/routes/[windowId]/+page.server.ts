import { prisma } from "$lib/server/prisma";
import { error } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const getWindow = async () => {
        const window = await prisma.window.findUnique({
            where: {
                id: Number(params.windowId)
            }
        });
        if (!window) {
            throw error(404, 'Window not found');
        }
        return window;
    }
    return {
        window: getWindow()
    }
};

export const actions: Actions = {
    updateWindowEstimate: async ({ request, params }) => {
        const { inserttype, window, width, height } = Object.fromEntries(await request.formData()) as {
            inserttype: string;
            window: string;
            width: string;
            height: string;
        }
        const parsedInsertType = parseFloat(inserttype);
        const parsedWidth = parseFloat(width);
        const parsedHeight = parseFloat(height);
        const parsedPrice = (parsedWidth/12) * (parsedHeight/12) * parsedInsertType;
    
        if (isNaN(parsedWidth) || isNaN(parsedHeight)) {
            return error(400, { message: 'Invalid width or height values.' });
        }
        
        try {
            await prisma.window.update({
                where: {
                    id: Number(params.windowId)
                },
                data: {
                    inserttype: parsedInsertType,
                    window,
                    width: parsedWidth,
                    height: parsedHeight,
                    price: parsedPrice
                }
            })
        } catch (err) {
            console.log(err)
            return error(500, { message: 'Could not update window estimate.'})
        }
        return {
            status: 200
        }
    }
};