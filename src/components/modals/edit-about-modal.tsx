import { useModal } from "@/hooks/use-modal-store";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const fileSchema = z.custom<File>().superRefine((val, ctx) => {
    if (typeof window === 'undefined') return true;
    if (!(val instanceof File)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please upload a file" });
        return false;
    }
    if (val.size > MAX_FILE_SIZE) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "File size must be less than 5MB" });
        return false;
    }
    return true;
});

const formSchema = z.object({
    photo: fileSchema
});

export const EditAboutModal = () => {
    const { isOpen, type, onClose } = useModal();
    const router = useRouter();
    const isModalOpen = isOpen && type === 'editAbout';

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            photo: undefined as unknown as File
        }
    });

    const isSubmitting = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            formData.append('photo', values.photo);

            const response = await axios.patch('/api/admin/about', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (response.status === 200) {
                onClose();
                form.reset();
                router.refresh();
            }
        } catch (error) {
            console.log('ERROR UPLOADING ABOUT PHOTO', error);
        }
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader className="mb-4">
                    <DialogTitle>Edit About Photo</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField
                                name="photo"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Photo</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) field.onChange(file);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="mt-4">
                            <Button disabled={isSubmitting} type="submit">Submit</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};