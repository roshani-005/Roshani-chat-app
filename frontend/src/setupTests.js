// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock components that rely on Canvas/Web animations which jsdom doesn't implement
jest.mock('react-lottie', () => {
  return function MockLottie() {
    return null;
  };
});
