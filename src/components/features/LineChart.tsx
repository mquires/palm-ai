import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { Card, CardContent } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';

import { useTheme } from '@/hooks/useTheme';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LineChartProps {
  predictions: number[][];
}

const LineChart = ({ predictions }: LineChartProps) => {
  const [chartData, setChartData] = useState<{
    labels: number[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      tension: number;
      pointRadius: number;
    }[];
  } | null>(null);
  const { theme } = useTheme();

  const color = theme === 'dark' ? '#ffffff' : 'text-gray-500';
  const gridLineColor = theme === 'dark' ? '#4b5563' : '#d1d5db';
  const tickColor = theme === 'dark' ? '#f9fafb' : '#1f2937';

  useEffect(() => {
    if (predictions.length > 0) {
      const xValues = predictions.map(([x]) => x);
      const yValues = predictions.map(([, y]) => y);

      setChartData({
        labels: xValues,
        datasets: [
          {
            label: 'Линии на ладони',
            data: yValues,
            backgroundColor: color,
            borderColor: color,
            tension: 0.4,
            pointRadius: 6,
          },
        ],
      });
    }
  }, [predictions, color]);

  return (
    <Card className="w-full h-[400px] mt-8 p-4">
      <CardContent className="w-full h-full">
        {chartData ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                  labels: {
                    color,
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    color: gridLineColor,
                  },
                  ticks: {
                    color: tickColor,
                  },
                },
                y: {
                  grid: {
                    color: gridLineColor,
                  },
                  ticks: {
                    color: tickColor,
                  },
                },
              },
            }}
          />
        ) : (
          <Skeleton className="w-full h-[400px] mt-8 p-6" />
        )}
      </CardContent>
    </Card>
  );
};

export default LineChart;
