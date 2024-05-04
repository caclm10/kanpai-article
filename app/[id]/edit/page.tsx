import DeleteButton from "@/components/DeleteButton";
import { Button } from "@/components/ui/Button";
import { Form, FormActions, FormStack } from "@/components/ui/Form";
import { Input, Textarea } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

interface Props {
    params: {
        id: string;
    };
}

const EditArticle = ({ params }: Props) => {
    return (
        <>
            <Form title={`Edit #${params.id}`}>
                <FormStack>
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input name="title" />
                    </div>

                    <div>
                        <Label htmlFor="content">Content</Label>
                        <Textarea name="content" rows={3} />
                    </div>
                </FormStack>

                <FormActions>
                    <Button>Save</Button>
                    <DeleteButton id={params.id} />
                </FormActions>
            </Form>
        </>
    );
};

export default EditArticle;
