import { Upload, X } from 'lucide-react';
import { useRef } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface FileControllerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
}

const FileController = <T extends FieldValues>({
  name,
  control,
}: FileControllerProps<T>) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        const preview = value ? URL.createObjectURL(value) : null;

        return (
          <>
            {preview ? (
              <div className="relative w-40 h-40 border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 cursor-pointer"
                  onClick={() => {
                    onChange(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400"
              >
                <Upload size={32} />
                <span className="text-sm mt-3">
                  {t('components.fileController.upload')}
                </span>
              </label>
            )}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={e => {
                const file = e.target.files?.[0] || null;
                onChange(file);
              }}
            />
          </>
        );
      }}
    />
  );
};

export default FileController;
