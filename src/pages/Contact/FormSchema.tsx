import z from 'zod';

export const schema = z.object({
    name: z.string().min(1, 'El nombre es obligatorio'),
    email: z.string().email('Correo invalido').min(1, 'El correo es obligatorio'),
    serviceKind: z.string().optional(),
    organization: z.string().optional(),
    customerNeed: z.string().min(10, 'La descripcion debe tener minimo 10 caracteres').max(3000, 'La descripcion no puede tener mas de 3000 caracteres'),
});

export type FormValueContact = z.infer<typeof schema>;
