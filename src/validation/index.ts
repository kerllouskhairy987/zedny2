import z from "zod";

export const validationCreateProject = z.object({
    imageUrl: z.string("Image is required, Please upload an image").min(1, { message: 'Image is required, Please upload an image' }),
    title: z.string().min(1, { message: 'title is required' }),
    desc: z.string().min(1, { message: 'Description is required' }),
})

export const validationCreateMember = z.object({
    src: z.string("Image is required, Please upload an image").min(1, { message: 'Image is required, Please upload an image' }),
    name: z.string().min(1, { message: 'Name is required' }),
    position: z.string().min(1, { message: 'Position is required' }),
})