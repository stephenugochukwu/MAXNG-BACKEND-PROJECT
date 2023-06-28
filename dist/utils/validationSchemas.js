import z from "zod";
export const commentsSchema = z.object({
    body: z.object({
        filmId: z.number().int().positive(),
        text: z.string().trim().max(500),
    }),
});
export const characterSchema = z.object({
    query: z.object({
        sort_by: z.enum(["name", "height"]).optional(),
        order_by: z.enum(["asc", "desc"]).optional(),
        gender: z.string().optional(),
    }),
});
export const filmIdschema = z.object({
    params: z.object({
        id: z.string().transform((val, ctx) => {
            const parsed = Number(val);
            if (isNaN(parsed)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Not a number",
                });
                return z.NEVER;
            }
            if (parsed > 6) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "filmID should not be greater than 6",
                });
                return z.NEVER;
            }
            return parsed;
        }),
    }),
});
