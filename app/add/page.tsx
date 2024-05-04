import { Button } from "@/components/ui/Button";
import { Form, FormActions, FormStack } from "@/components/ui/Form";
import { Input, Textarea } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

const AddArticle = () => {
    return (
        <Form title="Add">
            <FormStack>
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input className="max-w-[493px]" />
                </div>
                <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea rows={3} />
                </div>
            </FormStack>

            <FormActions>
                <Button>Save</Button>
            </FormActions>
        </Form>
    );
};

export default AddArticle;
