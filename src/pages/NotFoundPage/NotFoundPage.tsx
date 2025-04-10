import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Страница не найдена</h2>
        <p className="text-muted-foreground">
          Извините, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link to="/">
          <Button>
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
