import { fail, type Actions } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        windows: await prisma.window.findMany()
    }
};

export const actions: Actions = {
    createWindowEstimate : async ({ request }) => {
        const { inserttype, window, width, height } = Object.fromEntries(await request.formData()) as {
            inserttype: string;
            window: string;
            width: string;
            height: string;
        }
         // Convert form strings to Float
        const parsedInsertType = parseFloat(inserttype);
        const parsedWidth = parseFloat(width);
        const parsedHeight = parseFloat(height);
        const parsedPrice = (parsedWidth/12) * (parsedHeight/12) * parsedInsertType;

        if (isNaN(parsedWidth) || isNaN(parsedHeight)) {
            return fail(400, { message: 'Invalid width or height values.' });
        }

        try {
            await prisma.window.create({
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
            return fail(500, { message: 'Could not creeate window estimate.'})
        }
        return {
            status: 201
        }
    },
    deleteWindowEstimate: async ({ url }) => {
        const id = url.searchParams.get('id');
        if (!id) {
            return fail(400, { message: 'Missing id parameter.' });
        }

        try {
            await prisma.window.delete({
                where: {
                    id: Number(id)
                }
            })
        } catch (error) {
            console.log(error);
            return fail (500, { message: 'Something went wrong deleting this window estimate!' });
        }

        return {
            status: 200
        }
    },
    updateWindowEstimate: async ({ request, url }) => {
        const id = url.searchParams.get('id');
        const { inserttype, window, width, height } = Object.fromEntries(await request.formData()) as {
            inserttype: string;
            window: string;
            width: string;
            height: string;
        };
        const parsedInsertType = parseFloat(inserttype);
        const parsedWidth = parseFloat(width);
        const parsedHeight = parseFloat(height);
        const parsedPrice = (parsedWidth/12) * (parsedHeight/12) * parsedInsertType;

        if (!id) {
            return fail(400, { message: 'Missing id parameter.' });
        }
    
        if (isNaN(parsedWidth) || isNaN(parsedHeight)) {
            return fail(400, { message: 'Invalid width or height values.' });
        }
        
        try {
            await prisma.window.update({
                where: {
                    id: Number(id)
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
            return fail(500, { message: 'Could not update window estimate.'})
        }
        return {
            status: 200
        }
    }
};