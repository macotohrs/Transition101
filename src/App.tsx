import './App.css'
import {Sleep1s} from "./components/Sleep1s"
import {ShowData} from "./components/ShowData"

import { useTransition, startTransition, Suspense, useState } from 'react';

// function App() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <Sleep1s />
//     </Suspense>
//   )
// }
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ShowData dataKey={counter} />
      </Suspense>
      <p>
        <button
          className="border p-1"
          onClick={() => {
            startTransition(() => {
              setCounter(counter + 1);
            });
          }}
        >
          startTransition is あり{counter}
        </button>
      </p>
    </div>
  );
}
// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div className="text-center">
//       <h1 className="text-2xl">React App!</h1>
//       <Suspense fallback={<p>Loading...</p>}>
//         <ShowData dataKey={counter} />
//       </Suspense>
//       <p>
//         <button
//           className="border p-1"
//           onClick={() => {
//               setCounter(counter + 1);
//           }}
//         >
//           startTransition is なし {counter}
//         </button>
//       </p>
//     </div>
//   );
}

export default App