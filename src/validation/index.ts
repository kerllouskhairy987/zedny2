import z from "zod";

// create project schema
export const validationCreateProject = z.object({
    imageUrl: z.string("Image is required, Please upload an image").min(1, { message: 'Image is required, Please upload an image' }),
    title: z.string().min(1, { message: 'title is required' }),
    desc: z.string().min(1, { message: 'Description is required' }),
})

// create member schema
export const validationCreateMember = z.object({
    src: z.string("Image is required, Please upload an image").min(1, { message: 'Image is required, Please upload an image' }),
    name: z.string().min(1, { message: 'Name is required' }),
    position: z.string().min(1, { message: 'Position is required' }),
})

// register schema
export const createUserValidationError = z.object({
    username: z.string().min(1, { message: 'Username is required' }),
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(1, { message: 'Password is required' }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: 'Password must be at least 8 characters long and contain at least one letter and one number' }),
});

// login schema
export const loginUserValidation = z.object({
    email: z.string().email({ message: 'Invalid email' }), 
    password: z.string().min(1, { message: 'Password is required' }),
});

// Update user schema
export const updateUserValidation = z.object({
    username: z.string().min(1, { message: 'Username is required' }), 
    email: z.string().email({ message: 'Invalid email' }), 
});

// validation contact us 
export const validationContactUs = z.object({
    email: z.string().email({ message: 'Invalid email' }), 
    username: z.string().min(1, { message: 'Username is required' }), 
    message: z.string().min(1, { message: 'Message is required' }), 
});