import { useForm } from "react-hook-form";
import type { AddFormItemProps } from "../types/addFormItem.types";
import type { ItemFormData } from "../types/item.types";
import { useEffect } from "react";
import Window from "./Modal";
import { addItem, updateItem } from "../store/itemSlice";
import { useAppDispatch } from "../store/hooks";
import Form from "./Form";

function AddFormItem({ onClose, initialData }: AddFormItemProps) {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm<ItemFormData>({
    defaultValues: initialData
      ? { title: initialData.title, subtitle: initialData.subtitle }
      : { title: "", subtitle: "" },
  });

  useEffect(() => {
    setTimeout(() => setFocus("title"), 0);
  }, [setFocus]);

  useEffect(() => {
    reset(
      initialData
        ? { title: initialData.title, subtitle: initialData.subtitle }
        : { title: "", subtitle: "" }
    );
  }, [initialData, reset]);

  const onSubmit = async (data: ItemFormData) => {
    if (initialData) {
      dispatch(
        updateItem({
          id: initialData.id,
          changes: { title: data.title, subtitle: data.subtitle },
        })
      );
    } else {
      dispatch(addItem({ title: data.title, subtitle: data.subtitle }));
    }
    onClose();
  };

  return (
    <Window onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {initialData ? "Edit Item" : "Create Item"}
          </h2>
        </div>

        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 100, message: "Max 100 chars" },
            })}
            placeholder="Add a title"
            className="mt-1 block w-full h-12 border rounded px-3 py-2"
            autoComplete="off"
          />
          {errors.title && (
            <p id="title-error" className="text-sm text-red-600 mt-1">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Subtitle</label>
          <textarea
            {...register("subtitle", {
              required: "Subtitle is required",
              maxLength: { value: 200, message: "Max 300 chars" },
            })}
            placeholder="Add a subtitle"
            className="mt-1 block w-full border rounded px-3 py-2 resize-none"
            autoComplete="off"
          />
          {errors.subtitle && (
            <p id="subtitle-error" className="text-sm text-red-600 mt-1">
              {errors.subtitle.message}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-sky-600 text-white rounded"
          >
            {initialData ? "Save" : "Create"}
          </button>
        </div>
      </Form>
    </Window>
  );
}

export default AddFormItem;
