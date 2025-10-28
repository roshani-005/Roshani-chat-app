import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ChatProvider from './Context/ChatProvider';
import App from './App';

test('renders homepage title', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <ChatProvider>
          <App />
        </ChatProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
  const title = screen.getByText(/talk-a-tive/i);
  expect(title).toBeInTheDocument();
});
