import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, ThemeConfig } from 'antd';
import RootRouter from './routes';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#ff7200',
    fontFamily: 'SVN-Gilroy',
  },
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      console.log(`Something went wrong: ${error?.message}`);
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <RootRouter />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
