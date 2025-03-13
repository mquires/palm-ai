import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Resolver, ResolverOptions, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { FormValues, formValuesToData } from '@/components/features/Reader/dto';
import { getSchema } from '@/components/features/Reader/validations';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';
import FileController from '@/components/ui/formControllers/FileController';

import useImageProcessing from '@/hooks/useImageProcessing';

import LineChart from '../LineChart';

const Reader = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(getSchema()) as unknown as Resolver<
      FormValues,
      ResolverOptions<FormValues>
    >,
    defaultValues: { image: undefined },
  });

  const [predictions, setPredictions] = useState<number[][]>([]);
  const [remainingCalls, setRemainingCalls] = useState<number | null>(null);

  const { mutateAsync: processImage, isPending } = useImageProcessing({
    onSuccess: response => {
      setPredictions(response.predictions);
      setRemainingCalls(response.remainingCalls);
    },
    onError: (error: Error) => {
      const errorMessage = error.message || t('common.error');
      toast.error(errorMessage);
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!values.image) return;

    const data = await formValuesToData(values);

    await processImage({ image: data.image });
  };

  return (
    <div className="container mx-auto rounded-lg">
      <Card>
        <CardHeader>
          <CardTitle>{t('palmReader.heading')}</CardTitle>
          <CardDescription>
            {remainingCalls !== null && (
              <Badge className="mt-4">
                {t('palmReader.remainingCalls', { count: remainingCalls })}
              </Badge>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-6"
          >
            <div className="flex flex-col items-center space-y-4">
              <FileController name="image" control={control} />
            </div>
            <Button type="submit" disabled={isSubmitting || !isValid}>
              {t('palmReader.analyze')}
            </Button>
          </form>
        </CardContent>
      </Card>
      {isPending ? (
        <Skeleton className="w-full h-[400px] mt-8 p-6" />
      ) : (
        <>{predictions.length > 0 && <LineChart predictions={predictions} />}</>
      )}
    </div>
  );
};

export default Reader;
