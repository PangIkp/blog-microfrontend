import React, { Suspense } from "react";
import { useForm } from "react-hook-form";
import useBlogStore from "../stores/useBlogStore"; // ดึง store ที่สร้างขึ้นมา

type BlogFormData = {
  title: string;
  content: string;
};

const BlogForm: React.FC = () => {
  const addBlog = useBlogStore(state => state.addBlog); // ดึง action เพิ่ม blog

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormData>();

  const onSubmit = (data: BlogFormData) => {
    addBlog({
      id: Date.now(), // สร้าง id แบบง่าย ๆ
      title: data.title,
      content: data.content,
    });
    console.log("บล็อกใหม่ถูกเพิ่ม:", data);
    reset();
  };

  const RemoteButton = React.lazy(() => import("remote_app/Button"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-base-200 p-8 rounded-lg shadow-lg mt-24"
    >
      <h2 className="text-3xl font-bold text-primary mb-6">สร้างบล็อกใหม่</h2>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">หัวข้อ</span>
        </label>
        <input
          {...register("title", { required: "กรุณาใส่หัวข้อ" })}
          className="input input-bordered w-full"
        />
        {errors.title && (
          <p className="text-error mt-1">{errors.title.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="label">
          <span className="label-text">เนื้อหา</span>
        </label>
        <textarea
          {...register("content", { required: "กรุณาใส่เนื้อหา" })}
          className="textarea textarea-bordered w-full min-h-[150px]"
        />
        {errors.content && (
          <p className="text-error mt-1">{errors.content.message}</p>
        )}
      </div>
      <Suspense fallback={<div className="skeleton w-24 h-10" />}>
        <RemoteButton
          text="เผยแพร่"
          onClick={handleSubmit(onSubmit)}
        />
      </Suspense>
    </form>
  );
};

export default BlogForm;
