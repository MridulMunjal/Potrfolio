import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <About />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/skills',
//         element: <Skills />,
//       },
//       {
//         path: '/experience',
//         element: <Experience />,
//       },
//       {
//         path: '/head',
//         element: <Header />, 
//       },
//     ],
//   },
// ]);

//  root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
